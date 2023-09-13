import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

const HERO = [
  {
    image: "/images/about/aboutfeature-two.jpg",
    image_alt: "People working on laptops",
    placement: "front_bottom",
  },
  {
    image: "/images/about/aboutfeature-three.jpg",
    image_alt: "Group working on a laptop",
    placement: "back_top_right",
  },
  {
    image: "/images/about/aboutfeature-four.jpg",
    image_alt: "Staff group photo",
    placement: "back_top_left",
  },
];

export default function AboutHero() {
  const renderPlacer = (param) => {
    switch (param) {
      case "front_bottom":
        return "image-one";
      case "back_top_right":
        return "image-two";
      case "back_top_left":
        return "image-three";
      default:
        return "";
    }
  };

  return (
    <section className="about-hero-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-10 mx-auto">
            <div className="about-hero-two-content position-relative">
              <h2>On a mission to 10x sales for Shopify stores</h2>
              <p>
                We're here to help Shopify merchant get more orders, and more
                AOV.
              </p>
              <div className="scroll-down d-flex justify-content-center justify-content-xl-start">
                <a href="/" className="btn btn-primary btn-lg">
                  View our apps
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            <div className="about-hero-two-banner">
              {HERO.map((image, i) => (
                <div className={`${renderPlacer(image.placement)}`} key={i}>
                  <img
                    src={image.image}
                    alt={image.image_alt}
                    loading="eager"
                  />
                </div>
              ))}
              <div className="pattern"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
