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
        "bio": "Sunyoung is a creative technologist with a multidisciplinary background across immersive media, UI/UX, and brand-driven digital experience design. Holding a TS/SCI Full Scope Polygraph, she spent seven years at the Central Intelligence Agency leading interactive product development and crafting high-impact visual and experiential storytelling systems. Before her work in the intelligence community, she shaped e-commerce and brand design at National Geographic, redesigned digital ecosystems for airports at MWAA, and led interactive initiatives for global brands including TaylorMade Golf, Fox Sports, and Fox Broadcasting. She holds an MFA in Computer Art from the School of Visual Arts and has exhibited internationally in new media and immersive art contexts. Her technical fluency spans Adobe Creative Suite, front-end development, UX systems, and emerging XR pipelines using Unity, Unreal Engine, and Blender. Her work reflects a rare blend of strategic design thinking, hands-on creative execution, and production leadership across government, commercial, and cultural sectors."
      },
      {
        "image": "img/team/2.png",
        "name": "Sun Park",
        "role": "Co-Founder & Creative Director",
        "bio": "Sun Park is a creative technologist and XR producer whose expertise spans AR, VR, 3D design, and video production. As an XR Producer since 2025, Sun has been developing an interactive 3D storytelling project that merges cutting-edge XR technology with immersive installation experiences. Previously, as an Interactive Producer and Motion Graphic Designer for the U.S. Federal Government, Sun created high-security visual content for senior policymakers — including data visualizations, motion graphics, and 3D assets — and presented multiple VR and AI-powered projects to Intelligence Community stakeholders. Her creative leadership reflects a commitment to innovation, precision, and meaningful storytelling through emerging technology."
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
