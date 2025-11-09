import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import CallToActionSection from "@components/sections/CallToAction";

const Team = () => {

  const Content = {
    "subtitle": "Our Team",
    "title": "Visionaries Behind <br />Studio S",
    "description": "At Studio S, creativity meets innovation. Our co-founders bring together design mastery, technical expertise, and forward-thinking vision — bridging traditional storytelling with the power of XR, AR, and AI.",
    "items": [
      {
        "image": "img/team/1.png",
        "name": "Sunyoung Noh",
        "role": "Co-Founder & Creative Director",
        "bio": "Sunyoung Noh is an award-winning creative director with a Master's degree in Interactive Media from the School of Visual Arts in New York City. With deep experience across AR, VR, 3D design, and UX/UI strategy, she has led projects for major organizations including FOX, Fox Sports, TaylorMade Golf, Dulles International Airport, National Geographic, and the Central Intelligence Agency (CIA). Sunyoung's work bridges technology and human experience — transforming complex ideas into immersive stories that resonate across digital and physical spaces."
      },
      {
        "image": "img/team/2.png",
        "name": "Sun Park",
        "role": "Co-Founder & Creative Director",
        "bio": "Sun Park is a creative technologist and XR producer whose expertise spans AR, VR, 3D design, and video production. As an XR Producer since 2025, Sun has been developing an interactive 3D storytelling project that merges cutting-edge XR technology with immersive installation experiences. Previously, as an Interactive Producer and Motion Graphic Designer for the U.S. Federal Government, Sun created high-security visual content for senior policymakers — including data visualizations, motion graphics, and 3D assets — and presented multiple VR and AI-powered projects to Intelligence Community stakeholders. His creative leadership reflects a commitment to innovation, precision, and meaningful storytelling through emerging technology."
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/3.jpg"} pageTitle={"Team"} />

      {/* team */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

          <div className="row justify-content-between mil-mb-120">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.subtitle}</span>
                  <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : Content.title}} />
              </div>
              <div className="col-lg-6">
                  <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Content.description}</p>

                  <div className="mil-deco mil-appearance"></div>
              </div>
          </div>

          <div className="row">
              {Content.items.map((item, key) => (
              <div className="col-xl-6 col-lg-6" key={`team-item-${key}`}>

                  {/* team card */}
                  <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-60">
                      <div className="mil-cover mil-long">
                          <div className="mil-image-frame">
                              {/* portrait */}
                              <img src={item.image} alt={item.name} style={{'objectPosition': 'top' }} />
                          </div>
                      </div>
                      <div className="mil-overlay mil-with-bg">
                          <div className="mil-description mil-p-30">
                              {/* name */}
                              <h4 className="mil-mb-15">{item.name}</h4>
                              {/* post */}
                              <h6 className="mil-link mil-softened-50 mil-mb-20">{item.role}</h6>
                              {/* bio */}
                              <p className="mil-text-sm mil-softened-40">{item.bio}</p>
                          </div>
                      </div>
                  </div>
                  {/* team card end */}

              </div>
              ))}
          </div>
      </div>
      {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;
