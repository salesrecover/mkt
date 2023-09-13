import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero() {
  return (
    <section className="hero-two">
      <div className="hero-two-shape"></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-two-content">
              <h1 className="mb-4">Supercharge your Shopify sales</h1>
              <div className="mb-7 w-xxl-80">
                <p>
                  Boost revenue and reduce abandoned orders with our Shopify
                  applications
                </p>
              </div>
              <div className="">
                <a href="/" className="btn btn-primary btn-lg">
                  View our apps
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-two-banner">
              <img src="/images/hero/hero-image-2.png" alt="Report dashboard" />
              <div className="hero-two-banner-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
