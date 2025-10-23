import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData, getAllPosts } from "@library/posts";

export const PER_PAGE = 9

import { Content } from "../../blog"

export async function getStaticPaths() {
  const posts = getAllPosts();
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  
  // Pre-render the first 5 pages at build time
  const paths = Array.from({ length: Math.min(5, totalPages) }, (_, i) => ({
    params: { page: String(i + 1) }
  }));

  return {
    paths,
    fallback: 'blocking' // Show a loading state for non-generated pages
  };
}

const Blog = ( { posts, currentPage, totalPosts } ) => {

  return (
    <Layouts>
      <PageBanner pageImage={"/img/content/11.jpg"} pageTitle={"Blog"} />

      <div className="mil-spacer" />

      {/* blog */}
      <div className="mil-blog-section">
          <div className="container mil-content-frame mil-appearance mil-p-120-90">
              <div className="row justify-content-between mil-mb-120">
                  <div className="col-xl-5">

                      <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{Content.subtitle}</h3>
                      <h3 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : Content.title}} />

                  </div>
                  <div className="col-xl-6">

                      <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Content.description}</p>

                      <div className="mil-deco mil-appearance"></div>

                  </div>
              </div>
              <div className="row">
                  <PaginatedBlog
                    items={posts}
                  />
              </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalItems={totalPosts}
            perPage={PER_PAGE}
            renderPageLink={(page) => `/blog/page/${page}`}
          />
      </div>
      {/* blog end */}

      
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps( { params } ) {
    const page = Number(params?.page) || 1
    const { posts, total } = getPaginatedPostsData( PER_PAGE, page );
  
    if (!posts.length) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        posts,
        totalPosts: total,
        currentPage: page,
      },
      revalidate: 3600 // Revalidate every hour
    }
}