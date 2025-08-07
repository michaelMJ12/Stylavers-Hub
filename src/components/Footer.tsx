import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          {/* <img
            src="/assets/images/logo-springbyamaze.svg"
            alt="Spring Logo"
            className="footer-logo"
          /> */}
          <div className="newsletter">
            <p>Subscribe to our newsletter</p>
            <form
              action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/23573381/cafdf30f-b75e-4222-afff-e22bd8cfe447"
              method="POST"
              target="_blank"
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Get Started</h4>
            <ul>
              <li><a href="https://teespring.com/login">Login</a></li>
              <li><a href="https://teespring.com/signup?cta=start_designing">Start creating</a></li>
              <li><a href="/#howitworks">How it works</a></li>
              <li><a href="/spring-faqs">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4>Community</h4>
            <ul>
              <li><a href="https://spring4creators.zendesk.com/hc/en-us">Creator Resources</a></li>
              <li><a href="https://blog.spri.ng">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about-spring">About us</a></li>
              <li><a href="https://spring4creators.zendesk.com/hc/en-us/requests/new">Contact us</a></li>
              <li><a href="https://jobs.lever.co/amaze">Jobs</a></li>
            </ul>
          </div>
        </div>

        <div className="social-media">
          <a href="https://bit.ly/2YnkWWm" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://bit.ly/3opxCXq" target="_blank" rel="noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://bit.ly/3rg3pfa" target="_blank" rel="noreferrer">
            <i className="fab fa-twitch"></i>
          </a>
          <a href="https://bit.ly/39pow8x" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Amaze Holding Company LLC</p>
          <a href="/policies/spring-terms-of-service?section=terms-of-service">Terms of service</a>
          <a href="/policies/spring-terms-of-service?section=privacy">Privacy policy</a>
          <a href="/policies/spring-terms-of-service?section=privacy#ccpa">CA privacy</a>
          <a href="/about/impressum-german">Impressum</a>
          <a href="/about/security">Security</a>
          <a href="/about/notice-of-accessibility">Notice of Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
