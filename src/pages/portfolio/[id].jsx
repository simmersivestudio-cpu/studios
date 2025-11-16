import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import PDFViewer from "@components/PDFViewer";
import { useState } from 'react';

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import { getAllProjectsIds, getProjectData, getRelatedProjects } from "@library/projects";

import RelatedProjectsSection from "@components/sections/RelatedProjects";

const ProjectDetail = ( props ) => {
  
  const postData = props.data;
  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <Layouts>
    
      <PageBanner pageImage={postData.image} pageTitle={postData.title} />

      <div className="container mil-mb-120">
          <Gallery>

          <div className="row justify-content-center">
              <div className="col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0">

                  <h3 className="mil-link mil-text-center mil-appearance mil-softened-60 mil-mb-30" style={{ width: '100%' }}>{postData.category}</h3>
                  <h3 className="mil-text-center mil-appearance mil-mb-60">{postData.title}</h3>

                  <div className="mil-divider mil-appearance mil-mb-30"></div>

                  {/* project info */}
                  <ul className="mil-project-info mil-appearance mil-mb-30">
                      {postData.details.map((item, key) => (
                      <li key={`project-list-${key}`}>
                        <span className="mil-link mil-mr-15">{item.label}:</span>
                        <span className="mil-link mil-softened-60">{item.value}</span>
                      </li>
                      ))}
                  </ul>
                  {/* project info end */}
                  
                  {postData.type != "video" &&
                  <Item
                      original={postData.image}
                      thumbnail={postData.image}
                      width={postData.imageWidth}
                      height={postData.imageHeight}
                  >
                  {({ ref, open }) => (
                  <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-120" style={{ 'cursor' : 'pointer' }}>
                      
                      <img 
                        src={postData.image} 
                        alt={postData.title} 
                        className="mil-scale-img" 
                        data-value-1="1" 
                        data-value-2="1.1" 
                        style={{'objectPosition': 'top'}} 
                      />
      
                  </a>
                  )}
                  </Item>
                  }

                  {postData.type == "video" &&
                  <a data-fancybox="gallery" data-no-swup className="mil-appearance mil-just-image mil-image-hori mil-accent-trigger mil-mb-120">
                      <div className="mil-image-frame">
                        <video className="mil-video-background" data-value="1.2" autoPlay="autoplay" loop="loop" muted="true" playsInline="true" controls onContextMenu={(e)=> e.preventDefault()} preload="auto">
                            <source src={postData.image} />
                        </video>
                      </div>
                  </a>
                  }
                  
              </div>
              
              {typeof postData.description0 != "undefined" &&
                <>
                  {postData.description0.enabled == 1 &&
                  <div className="col-lg-10 col-xl-6">
                      <p className="mil-first-letter mil-appearance" style={{whiteSpace: 'pre-line'}}>
                        {postData.description0.content}
                      </p>
                  </div>
                  }
                </>
              }
          </div>
          
          {typeof postData.description1 != "undefined" &&
            <>
              {postData.description1.enabled == 1 &&
              <div className="row justify-content-center mil-p-60-60">
                  <div className="col-lg-10 col-xl-6 mil-text-center">
                      <h5 className="mil-appearance mil-mb-30">{postData.description1.heading}</h5>

                      <p className="mil-appearance" style={{whiteSpace: 'pre-line'}}>{postData.description1.content}</p>
                  </div>
              </div>
              }
            </>
          }

          {typeof postData.gallery != "undefined" &&
            <>
              {postData.gallery.enabled == 1 &&
              <div className="row justify-content-center mil-p-120-0">
                  <div className="col-lg-12 col-xl-9">
                      <div className="row">
                          {postData.gallery.items.map((item, key) => {
                            // Debug logging
                            if (item.image.endsWith('.pdf')) {
                              console.log('PDF Item:', {
                                image: item.image,
                                thumbnail: item.thumbnail,
                                hasThumbnail: !!item.thumbnail
                              });
                            }
                            
                            return (
                          <div className={ postData.gallery.cols == 3 ? "col-lg-4" : "col-lg-6"} key={`gallery-item-${key}`}>
                              {item.image.endsWith('.pdf') ? (
                                // PDF Thumbnail
                                <div 
                                  onClick={() => setPdfUrl(item.image)}
                                  className={ postData.gallery.style == "vertical" ? "mil-appearance mil-just-image mil-image-vert mil-icon-3-trigger mil-accent-trigger mil-mb-30" : "mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30" }
                                  style={{ 
                                    cursor: "pointer",
                                    position: 'relative',
                                    overflow: 'hidden'
                                  }}
                                >
                                  {item.thumbnail ? (
                                    // Custom thumbnail image
                                    <>
                                      <img 
                                        src={item.thumbnail} 
                                        alt={item.alt} 
                                        className="mil-scale-img" 
                                        data-value-1="1" 
                                        data-value-2="1.1"
                                        onError={(e) => {
                                          console.error('Failed to load thumbnail:', item.thumbnail);
                                        }}
                                      />
                                      {/* PDF Badge Overlay */}
                                      <div style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'rgba(0, 0, 0, 0.8)',
                                        color: 'white',
                                        padding: '5px 12px',
                                        borderRadius: '5px',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        zIndex: 10
                                      }}>
                                        📄 PDF
                                      </div>
                                    </>
                                  ) : (
                                    // Default PDF icon
                                    <div style={{
                                      background: '#f5f5f5',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      minHeight: '300px'
                                    }}>
                                      <div style={{ textAlign: 'center', padding: '20px' }}>
                                        <div style={{ fontSize: '48px', marginBottom: '10px' }}>📄</div>
                                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                                          {item.alt || 'View PDF'}
                                        </div>
                                        <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                                          Click to view
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                // Image/Video Item
                              <Item
                                original={item.image}
                                thumbnail={item.image}
                                width={item.width}
                                height={item.height}
                              >
                                {({ ref, open }) => (
                                <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className={ postData.gallery.style == "vertical" ? "mil-appearance mil-just-image mil-image-vert mil-icon-3-trigger mil-accent-trigger mil-mb-30" : "mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30" } style={{ "cursor": "pointer" }}>
                                  {item.image.endsWith('.mp4') ? (
                                    <video 
                                      className="mil-scale-img" 
                                      data-value-1="1" 
                                      data-value-2="1.1" 
                                      autoPlay="autoplay" 
                                      loop="loop" 
                                      muted="true" 
                                      playsInline="true" 
                                      controls 
                                      onContextMenu={(e)=> e.preventDefault()} 
                                      preload="auto"
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                      }}
                                    >
                                      <source src={item.image} />
                                    </video>
                                  ) : (
                                    <img src={item.image} alt={item.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.1" />
                                  )}
                                </a>
                              )}
                              </Item>
                              )}
                          </div>
                          );
                          })}
                      </div>
                  </div>
              </div>
              }
            </>
          }
          
          {typeof postData.description2 != "undefined" &&
            <>
              {postData.description2.enabled == 1 &&
              <div className="row justify-content-center mil-p-60-60">
                  <div className="col-lg-10 col-xl-6 mil-text-center">
                      <h5 className="mil-appearance mil-mb-30">{postData.description2.heading}</h5>

                      <p className="mil-appearance" style={{whiteSpace: 'pre-line'}}>{postData.description2.content}</p>
                  </div>
              </div>
              }
            </>
          }
          
          {typeof postData.finalImage != "undefined" &&
            <>
              {postData.finalImage.enabled == 1 &&
              <div className="row justify-content-center mil-p-0-90">
                  <div className="col-lg-12 col-xl-9">
                      {postData.finalImage.image.endsWith('.pdf') ? (
                        // PDF Final Image
                        <div 
                          onClick={() => setPdfUrl(postData.finalImage.image)}
                          className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30"
                          style={{ 
                            cursor: "pointer",
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          {postData.finalImage.thumbnail ? (
                            <>
                              <img 
                                src={postData.finalImage.thumbnail} 
                                alt={postData.finalImage.alt} 
                                className="mil-scale-img" 
                                data-value-1="1" 
                                data-value-2="1.1"
                              />
                              <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'rgba(0, 0, 0, 0.8)',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '5px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                zIndex: 10
                              }}>
                                📄 PDF
                              </div>
                            </>
                          ) : (
                            <div style={{
                              background: '#f5f5f5',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minHeight: '400px'
                            }}>
                              <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '64px', marginBottom: '10px' }}>📄</div>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                                  {postData.finalImage.alt || 'View PDF'}
                                </div>
                                <div style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                                  Click to view
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        // Regular Image/Video
                      <Item
                        original={postData.finalImage.image}
                        thumbnail={postData.finalImage.image}
                        width={postData.finalImage.width}
                        height={postData.finalImage.height}
                      >
                      {({ ref, open }) => (
                      <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30" style={{ "cursor": "pointer" }}>
                          {postData.finalImage.image.endsWith('.mp4') ? (
                            <video className="mil-scale-img" data-value-1="1" data-value-2="1.1" autoPlay="autoplay" loop="loop" muted="true" playsInline="true" controls onContextMenu={(e)=> e.preventDefault()} preload="auto">
                              <source src={postData.finalImage.image} />
                            </video>
                          ) : (
                            <img src={postData.finalImage.image} alt={postData.finalImage.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.1" />
                          )}
                      </a>
                      )}
                      </Item>
                      )}
                  </div>
              </div>
              }
            </>
          }
          
          {typeof postData.description3 != "undefined" &&
            <>
              {postData.description3.enabled == 1 &&
              <div className="row justify-content-center">
                  <div className="col-lg-10 col-xl-6">
                      <h5 className="mil-appearance mil-mb-30">{postData.description3.heading}</h5>

                      <p className="mil-appearance" style={{whiteSpace: 'pre-line'}}>{postData.description3.content}</p>
                  </div>
              </div>
              }
            </>
          }

          </Gallery>
      </div>

      {/* PDF Viewer Modal */}
      {pdfUrl && <PDFViewer pdfUrl={pdfUrl} onClose={() => setPdfUrl(null)} />}

      <RelatedProjectsSection items={props.related} />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
    const paths = getAllProjectsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getProjectData(params.id)
    const relatedPosts = await getRelatedProjects(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}