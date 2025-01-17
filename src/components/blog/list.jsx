import PostSummary from "../../components/posts/summary";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function BlogList({ posts }) {
  return (
    <>
      <section className="blog-hero pt-xl-22 pt-sm-20 pt-18 pb-xxl-25 pb-xl-23 pb-22 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 mx-auto">
              <div className="blog-hero-content">
                <h1 className="blog-hero-title">Shopify best practices</h1>
                <p>
                  Guides, product updates, and research from SalesRecover to
                  help merchant improve the checkout experience and increase
                  conversions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog @@padding @@blog-two">
        <div className="container">
          <div className="row">
            {posts.map((post, i) => (
              <PostSummary post={post} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
