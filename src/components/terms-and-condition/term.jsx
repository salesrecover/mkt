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
    heading: "Communications",
    description:
      "<div><p>By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at.</p></div>",
  },
  {
    heading: "Purchases",
    description:
      "<div><p>If you wish to purchase any product or service made available through Service (“<strong>Purchase</strong>”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p><p>&nbsp;You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p><p>We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.</p><p>We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p><p>We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p></div>",
  },
  {
    heading: "Contests, Sweepstakes and Promotions",
    description:
      "<div><p>Any contests, sweepstakes or other promotions (collectively, “<strong>Promotions</strong>”) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p></div>",
  },
  {
    heading: "Subscriptions",
    description:
      "<div><p>Some parts of Service are billed on a subscription basis (“<strong>Subscription(s)</strong>”). You will be billed in advance on a recurring and periodic basis (“<strong>Billing Cycle</strong>”). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.</p><p>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Sales Recover LLC cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Sales Recover LLC customer support team.</p><p>A valid payment method, including credit card, is required to process the payment for your subscription. You shall provide Sales Recover LLC with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Sales Recover LLC to charge all Subscription fees incurred through your account to any such payment instruments.</p><p>Should automatic billing fail to occur for any reason, Sales Recover LLC will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.</p></div>",
  },
  {
    heading: "Free Trial",
    description:
      "<div><p>Sales Recover LLC may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (“<strong>Free Trial</strong>”).</p><p>You may be required to enter your billing information in order to sign up for Free Trial.</p><p>If you do enter your billing information when signing up for Free Trial, you will not be charged by Sales Recover LLC until Free Trial has expired. On the last day of Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.</p><p>At any time and without notice, Sales Recover LLC reserves the right to (i) modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial offer.</p><p><strong>Fee Changes</strong>&nbsp;</p><p>Sales Recover LLC, in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p><p>Sales Recover LLC will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</p><p>Your continued use of Service after Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p></div>",
  },
  {
    heading: "Refunds",
    description:
      "<div><p>We issue refunds for Contracts within zero (30 days) days of the original purchase of the Contract.</p></div>",
  },
  {
    heading: "No Use By Minors",
    description:
      "<div><p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.</p></div>",
  },
  {
    heading: "Accounts",
    description:
      "<div><p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.</p><p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p><p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p><p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p></div>",
  },
  {
    heading: "Termination",
    description:
      "<div><p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.</p><p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p><p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p><p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p></div>",
  },
  {
    heading: "Governing Law",
    description:
      "<div><p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p><p>If you wish to terminate your account, you may simply discontinue using Service.</p><p>All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p></div>",
  },
  {
    heading: "Changes To Service",
    description:
      "<div><p>These Terms shall be governed and construed in accordance with the laws of State of Delaware without regard to its conflict of law provisions.</p><p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.</p></div>",
  },
  {
    heading: "Amendments To Terms",
    description:
      "<div><p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p><p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p><p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.</p></div>",
  },
  {
    heading: "Waiver And Severability",
    description:
      "<div><p>No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.</p><p>If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.</p></div>",
  },
  {
    heading: "Acknowledgement",
    description:
      "<div><p>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p></div>",
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
