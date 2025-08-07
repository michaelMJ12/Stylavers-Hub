import React from "react";
import "../styles/ResourcesSection.css";

const ResourcesSection: React.FC = () => {
  return (
    <section className="resources-section">
      <div className="resources-container">
        <div className="resources-inner">
          <h2 className="subtitle">Need some help?</h2>
          <h4 className="description">
            Visit the following resources to help you get started.
          </h4>

          <div className="resources-columns">
            {/* Creator Resources */}
            <div className="resources-column">
              <a
                href="https://spring4creators.zendesk.com/hc/en-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img
                    src="https://spring-site.in.amaze.co/wp-content/uploads/2020/12/jonathan-kemper-zSCHyhiRSeQ-unsplash.jpg"
                    alt="Creator resources"
                  />
                </div>
                <h3 className="link-title">Creator resources</h3>
              </a>
            </div>

            {/* Blog Link */}
            <div className="resources-column">
              <a
                href="https://blog.spri.ng/?_gl=1*196qhjj*_gcl_au*MTI0MjE4NDM2My4xNzUwNTIzNTY0*_ga*MTM4MzM0Nzk0OC4xNzUwNTIzNTY3*_ga_G3GKJFR6Z9*czE3NTE5NzczNjUkbzYkZzAkdDE3NTE5NzczNjUkajYwJGwwJGg0MDYxMzE4MA.."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img
                    src="https://spring-site.in.amaze.co/wp-content/uploads/2020/12/Teespring_178-1.jpg"
                    alt="Check out our Blog"
                  />
                </div>
                <h3 className="link-title">Check out our Blog</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
