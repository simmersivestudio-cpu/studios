import { useState, useRef } from 'react';
import Data from "@data/sections/hero-video.json";

const HeroVideo = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <header>
            <div className="mil-hero-video">
                {/* Full-screen video background */}
                <div className="mil-video-frame">
                    <video 
                        ref={videoRef}
                        className="mil-video-background" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        poster={Data.poster || undefined}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0
                        }}
                    >
                        <source src={Data.video_file} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay for text readability */}
                    <div className="mil-overlay" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1
                    }} />
                </div>

                {/* Mute/Unmute button */}
                <button 
                    onClick={toggleMute}
                    className="mil-sound-toggle"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    style={{
                        position: 'absolute',
                        top: '100px',
                        right: '30px',
                        zIndex: 10,
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`} 
                       style={{ color: 'white', fontSize: '20px' }} 
                    />
                </button>

                {/* Hero content */}
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row mil-p-120-120 justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                        <div className="col-lg-10 text-center">
                            {Data.subtitle && (
                                <div className="mil-link mil-appearance mil-softened-60 mil-mb-30 mil-light">
                                    {Data.subtitle}
                                </div>
                            )}
                            
                            <h1 className="mil-light mil-appearance mil-mb-60" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                                {Data.title.before && <>{Data.title.before} </>}
                                {Data.title.accent && <span className="mil-accent">{Data.title.accent}</span>}
                                {Data.title.after && <> {Data.title.after}</>}
                            </h1>

                            {Data.description && (
                                <p className="mil-text-lg mil-light mil-appearance mil-mb-60" 
                                   dangerouslySetInnerHTML={{ __html: Data.description }} 
                                   style={{ maxWidth: '700px', margin: '0 auto 60px' }} 
                                />
                            )}

                            {Data.button && (
                                <div className="mil-appearance">
                                    <a href={Data.button.link} className="mil-button mil-button-lg mil-button-rounded mil-button-linear mil-button-light">
                                        <span>{Data.button.label}</span>
                                    </a>
                                </div>
                            )}

                            {/* Scroll indicator */}
                            <div className="mil-scroll-animation-1 mil-appearance mil-mt-60">
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mil-hero-video {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    overflow: hidden;
                }
                .mil-video-frame {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .mil-sound-toggle:hover {
                    background: rgba(255, 255, 255, 0.3) !important;
                    transform: scale(1.1);
                }
                @media (prefers-reduced-motion: reduce) {
                    .mil-video-background {
                        animation: none !important;
                    }
                }
                @media (max-width: 768px) {
                    .mil-sound-toggle {
                        top: 80px !important;
                        right: 20px !important;
                        width: 40px !important;
                        height: 40px !important;
                    }
                }
            `}</style>
        </header>
    );
};

export default HeroVideo;
