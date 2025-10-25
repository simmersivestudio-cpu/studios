import Layouts from "@/src/layouts/Layouts";

import { getSortedPostsData } from "../lib/posts";

import PageBanner from "@/src/components/PageBanner";
import SubscribeSection from "../components/sections/Subscribe";
import LatestPostsSection from "../components/sections/LatestPosts";
import CallToActionSection from "../components/sections/CallToAction";
import AwardsSection from "../components/sections/Awards";
import CountersSection from "../components/sections/Counters";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const About = ( props ) => {
  const Content = {
    "about": {
      "subtitle": "Our story",
      "title": "Where Imagination Meets Intelligent Design",
      "text_1": "Studio S is a multidisciplinary creative agency that blends design, technology, and storytelling to shape the next generation of brand experiences. We specialize in crafting social media and ad creatives, branding, web and email design, print and packaging, motion and video production, illustration, AR/3D content, and AI-enhanced creative strategy — all built to move audiences and inspire action.",
       "text_2": " We believe creativity should evolve with technology. That’s why Studio S stands at the intersection of AI, AR, and VR, helping organizations and brands embrace emerging tools to tell stories in ways never before possible. To reimagine what’s possible in design and communication — by combining artistry, strategy, and the newest technology to shape the creative landscape of tomorrow.",
       },
    "gallery": [
      {
        "url": "img/content/12.jpg",
        "width": 1000,
        "height": 1573
      },
      {
        "url": "img/content/13.jpg",
        "width": 1000,
        "height": 1065
      },
      {
        "url": "img/content/14.jpg",
        "width": 1000,
        "height": 1499
      },
      {
        "url": "img/content/15.jpg",
        "width": 1000,
        "height": 792
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/4.jpg"} pageTitle={"About"} />
      
      {/* about */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
          <div className="row justify-content-between">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.about.subtitle}</span>
                  <h3 className="mil-appearance mil-mb-30">{Content.about.title}</h3>
              </div>
              <div className="col-lg-6">
                  <div className="row">
                      <div className="col-lg-6">

                          <p className="mil-first-letter mil-appearance mil-mb-30">
                            {Content.about.text_1}
                          </p>

                      </div>
                      <div className="col-lg-6">

                          <p className="mil-appearance mil-mb-30">
                            {Content.about.text_2}
                          </p>

                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* about end */}

      {/* gallery */}
      <div className="container mil-content-frame mil-gallery-1 mil-p-0-90">
          <div className="row justify-content-between align-items-center mil-appearance">
            <Gallery>
              {Content.gallery.map((item, key) => (
              <div className="col-md-6 col-xl-3 mil-mb-30" key={`gallery-iten-${key}`}>
                  <Item
                      original={item.url}
                      thumbnail={item.url}
                      width={item.width}
                      height={item.height}
                  >
                  {({ ref, open }) => (
                  <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className={`mil-just-image${key % 2 == 0 ? " mil-image-vert" : " mil-image-square" } mil-icon-3-trigger`} style={{ "cursor" : "pointer" }}>
                      <img src={item.url} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                  </a>
                  )}
                  </Item>
              </div>
              ))}
            </Gallery>
          </div>
      </div>
      {/* gallery end */}
      
      <CountersSection />
      <AwardsSection />
      <CallToActionSection />
      <LatestPostsSection posts={props.posts} />
      <SubscribeSection />
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}