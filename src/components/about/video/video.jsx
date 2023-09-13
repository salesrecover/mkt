import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function AboutVideo() {
  return (
    <section className="works">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="works-content">
              <h2>We love what we do</h2>
              <p>
                Our team has decades of experience working with email marketing
                campaigns and we're passionate about helping you connect with
                your customers.
              </p>
              <a
                href="https://www.linkedin.com/in/salesrecover"
                className="btn btn-lg btn-white"
              >
                Follow us on LinkedIn
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="works-banner">
              <img
                src="/images/works/banner.jpg"
                className="w-100"
                alt="Work"
                loading="lazy"
                style={{ borderRadius: "20px" }}
              />
              <div className="effect"></div>
              <div className="video-iframe d-flex align-items-center justify-content-center">
                <div className="video-icon me-sm-9 me-8">
                  <a className="popup-vimeo" href="https://vimeo.com/45830194">
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.5359C28.6667 14.0755 28.6667 17.9245 26 19.4641L6.5 30.7224C3.83333 32.262 0.499998 30.3375 0.499999 27.2583L0.5 4.74167C0.5 1.66247 3.83333 -0.262033 6.5 1.27757L26 12.5359Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
