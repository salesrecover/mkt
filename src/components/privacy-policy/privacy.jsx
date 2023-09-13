import MarkdownIt from "markdown-it";
import { useRef } from "preact/hooks";
const md = new MarkdownIt({ html: true });

const POLICIES = [
  {
    heading: "Welcome",
    description:
      "<div><p>Sales Recover LLC (“us”, “we”, or “our”) operates <b>ClickOrder</b> and <b>OfferEverywhere</b> (hereinafter referred to as “<strong>Service</strong>”).</p><p>Our Privacy Policy explains how we collect, safeguard and disclose information that results from your use of our Service.</p><p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p></div>",
  },
  {
    heading: "How we collect your data",
    description:
      "<div><p>When you visit our websites or use our services, we collect personal data. The ways we collect it can be broadly categorized into the following:</p><p><strong>Information you provide to us directly:</strong>&nbsp;When you visit or use some parts of our websites and/or services we might ask you to provide personal data to us. For example, we ask for your contact information when you sign up for our solutions, respond to a job application or an email offer, participate in community forums, join us on social media, take part in training and events, contact us with questions or request support. If you don’t want to provide us with personal data, you don’t have to, but it might mean you can’t use some parts of our websites or services.</p><p><strong>Information we collect automatically:</strong>&nbsp;We collect some information about you automatically when you visit our websites or use our services, like your IP address and device type. We also collect information when you navigate through our websites and services, including what pages you looked at and what links you clicked on. This information is useful for us as it helps us get a better understanding of how you’re using our websites and services so that we can continue to provide the best experience possible (e.g., by personalizing the content you see).</p><p>Some of this information is collected using cookies and similar tracking technologies.</p><p><strong>Information we get from third parties:</strong>&nbsp;The majority of information we collect, we collect directly from you. Sometimes we might collect personal data about you from other sources, such as publicly available materials or trusted third parties like our marketing and research partners.</p></div>",
  },
  {
    heading: "The permissions we request",
    description:
      "<div><p>When you install our Apps through the Shopify App Store, we will request the following permissions:</p><ul><li><strong>&nbsp;write_products, read_products:</strong>&nbsp;This includes products and collections, we need these permissions to allow you can create offers for your products<strong>.</strong></li><li><strong>read_orders:&nbsp;</strong>We need these permissions to make create an order with a discount by using a draft order for your customers.</li><li><strong>write_discounts, read_discounts:&nbsp;</strong>We need these permissions to create a discount code based on the order for your customers.&nbsp;</li></ul></div>",
  },
  {
    heading: "The information we collect",
    description:
      "<div><p>After installing the Apps and giving us permission, we will collect the following information:</p><p><strong>Store information: </strong><span>Store domain, Store ID, Shopify plan.</span></p><p><strong>Store owner information: </strong><span>Name, Email address, phone number, physical address.</span></p><p><strong>Content provider information:&nbsp;</strong><span>Email address, ip address, browser and operating system.</span></p></div>",
  },
  {
    heading: "How we use your data",
    description:
      "<div><p>First and foremost, we use your personal data to operate our websites and provide you with any services you’ve requested, and to manage our relationship with you. We also use your personal data for other purposes, which may include the following:</p><p><strong>To communicate with you.</strong></p><p><strong>To support you:</strong>&nbsp;This may include assisting with the resolution of technical support issues or other issues relating to the websites or services, whether by email, in-app support or otherwise.</p><p><strong>To enhance our websites and services and develop new ones:</strong>&nbsp;For example, by tracking and monitoring your use of websites and services so we can keep improving, or by carrying out technical analysis of our websites and services so that we can optimize your user experience and provide you with more efficient tools.</p><p><strong>To protect:</strong>&nbsp;So that we can detect and prevent any fraudulent or malicious activity, and make sure that everyone is using our websites and services fairly and in accordance with our Terms of Service.</p><p><strong>To market to you:</strong>&nbsp;In addition to sending you marketing communications, we may also use your personal data to display targeted advertising to you online – through our own websites and services or through third-party websites and their platforms.</p><p><strong>To analyze, aggregate and report:</strong>&nbsp;We may use the personal data we collect about you and other users of our websites and services (whether obtained directly or from third parties) to produce aggregated and anonymized analytics and reports, which we may share publicly or with third parties.</p></div>",
  },
  {
    heading: "Your Rights",
    description:
      "<div><p>If you are a European resident, you have the right to access the personal information we hold about you and to ask that your personal information is corrected, updated, or deleted. If you would like to exercise this right,please contact us at&nbsp;help@salesrecover.com.</p><p>Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p><p>We receive the store data information from Shopify platform through Shopify API and Shopify Hooks.</p></div>",
  },
  {
    heading: "Accuracy",
    description:
      "<div><p>We take all reasonable steps within our control to ensure that the personal information we hold about you is accurate, complete and up-to-date. However, we also rely on you to advise us of any changes to your personal information. You can change your personal data related to your account in the platform under Settings.</p></div>",
  },
  {
    heading: "Security",
    description:
      "<div><p>We are committed to protecting your personal data and have taken steps to ensure that your personal information is treated securely and to prevent unauthorized access, collection, use, disclosure, copying, modification, disposal or similar risks.</p><p>Although we aim to create a safe, secure environment by trying to limit access to the site to legitimate users, we cannot guarantee that unauthorized parties will not gain access. To the extent permitted by applicable law, we expressly exclude any liability arising from any unauthorized access to your personal information.</p><p>We will inform you without undue delay unless the risk to your individual rights and freedoms is low—such as if the compromised data was well-encrypted.</p><p>Please contact us at&nbsp;help@salesrecover.com&nbsp;immediately if you become aware of any unauthorized use of your account by anyone else or any other breach of security.&nbsp;</p></div>",
  },
  {
    heading: "Retention",
    description:
      "<div><p>The length of time we keep your personal data depends on what it is and whether we have an ongoing business need to retain it (for example, to provide you with a service you’ve requested or to comply with applicable legal, tax or accounting requirements).</p><p>We’ll retain your personal data for as long as we have a relationship with you and for a period of time afterwards where we have an ongoing business need to retain it, in accordance with our data retention policies and practices.</p><p>Please note that if you ask SalesRecover to stop processing your personal data in a certain way or erase your personal data, and this type of processing or data is needed to facilitate your use of the services, you may not be able to use the services as you did before, or at all.</p></div>",
  },
];

export default function PrivacyPrivacy() {
  const sectionRefs = [];

  POLICIES.map((privacy, i) => sectionRefs.push(useRef(null)));
  const handleClick = (event) => {
    Array.from(document.querySelectorAll(".privacy-nav .nav-link")).forEach(
      (element) => {
        element.classList.remove("active");
      }
    );
    event.currentTarget.classList.add("active");
  };
  return (
    <section className="privacy">
      <div className="container">
        <div className="row">
          <div className="privacy-wrapper">
            <div className="col-lg-7 mx-auto">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="scrollspy-example"
                tabIndex="0"
              >
                {POLICIES.map((privacy, i) => (
                  <div
                    className="privacy-items"
                    id={`item${i + 1}`}
                    key={i}
                    ref={sectionRefs[i]}
                  >
                    <div className="card">
                      <h3 className="sub-title">{privacy.heading}</h3>
                      <div className="card-body">
                        <div
                          className="card-text"
                          dangerouslySetInnerHTML={{
                            __html: md.render(privacy.description),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <nav id="scrol-nav" className="navbar navbar-light privacy-nav">
                <ul className="nav nav-pills">
                  {POLICIES.map((privacy, i) => (
                    <li className="nav-item" key={i}>
                      <a href={`#item${i + 1}`} onClick={handleClick}>
                        {privacy.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
