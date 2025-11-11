import { useState } from "react";
import Data from "@data/sections/subscribe.json";

const SubscribeSection = ( { bgColorClass } ) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={ bgColorClass ? `mil-subscribe-1 ${bgColorClass}` : "mil-subscribe-1"}>
        <div className="container mil-p-0-90">
            <form onSubmit={handleSubmit}>
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2">

                        <h4 className="mil-appearance mil-mb-30">{Data.title}</h4>

                    </div>
                    <div className="col-lg-6">

                        {/* email field */}
                        <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                            <input 
                              className="mil-link" 
                              type="email" 
                              name="EMAIL" 
                              required 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              disabled={loading}
                            />
                            <label className="mil-link">Your Email</label>
                            <span />
                        </div>
                        
                        {status === 'success' && (
                          <p style={{ color: 'green', marginTop: '-20px', marginBottom: '20px' }}>
                            Thanks for subscribing! Check your email for confirmation.
                          </p>
                        )}
                        {status === 'error' && (
                          <p style={{ color: 'red', marginTop: '-20px', marginBottom: '20px' }}>
                            Something went wrong. Please try again.
                          </p>
                        )}

                    </div>
                    <div className="col-lg-2">

                        {/* button */}
                        <div className="mil-appearance">
                          <button 
                            type="submit" 
                            className="mil-button mil-button-md mil-scale-down-trigger mil-mb-30"
                            disabled={loading}
                          >
                            {loading ? 'Subscribing...' : 'Subscribe'}
                          </button>
                        </div>

                    </div>
                </div>
                
            </form>
        </div>
    </div>
  );
};

export default SubscribeSection;