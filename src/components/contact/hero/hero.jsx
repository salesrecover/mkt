import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-hero-content">
              <h1>Let's talk.</h1>
              <p>
                Have a question or suggestion? Feel free to drop us a message!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
