export default function ContactForm() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 me-auto order-2 order-lg-1">
            <div className="contact-form-Information">
              <div className="address">
                <div className="item">
                  <h3>Or email us at</h3>
                  <a href="mailto:team@salesrecover.com">
                    <span>team@salesrecover.com</span>
                    <span>
                      <img
                        src="/images/contact/directbox-send.svg"
                        alt="send-box"
                        loading="lazy"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="contact-form">
              <form method="post" name="contact" netlify>
                <h3>Say Hello</h3>
                <div className="col-md-12">
                  <label htmlFor="Name" className="label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="email" className="label">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form-control mb-6"
                    id="email"
                    name="_replyto"
                    placeholder="Enter your email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message" className="label">
                    Your message
                  </label>
                  <textarea
                    className="form-control mb-4"
                    id="floatingTextarea2"
                    name="message"
                    placeholder="Enter your message"
                    rows="8"
                    spellCheck="false"
                  />
                </div>
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg mt-7">
                    <span className="position-relative">Send message</span>
                  </button>
                </div>
              </form>
              <div className="effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
