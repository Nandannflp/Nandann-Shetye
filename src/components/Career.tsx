import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Operator</h4>
                <h5>Andrew Amphenol Antenna India</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              February 2025 – April 2025. Handled technical operations and
              production processes related to fiber antenna components. Focused on
              equipment operation, monitoring, and quality control.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Implementation Engineer</h4>
                <h5>Goa Electronics Limited</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              April 2025 – July 2025. Worked on system implementation and
              technical support tasks related to electronics and operational
              systems. Provided technical troubleshooting and engineering support.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Coach</h4>
                <h5>Forever Living Products</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Mentoring individuals in entrepreneurial mindset and digital
              marketing strategies. Coaching in business development and training
              in digital tools and productivity methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
