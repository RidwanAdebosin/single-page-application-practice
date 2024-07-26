import "./About.css";

const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="container">
          <p>Welcome to My World</p>
          <h1 className="section-about-h1">
            Discover Why We Are Passionate About Helping People Look Their Best
          </h1>
          <p>
            At Pressd Laundry, we are dedicated to helping you look good. Our
            goal is to provide convenient and reliable laundry pickup and
            delivery services that fit into your busy life. Clean,
            well-cared-for clothes make a difference in how you feel and present
            yourself in various scenarios of life you'll find yourself.
          </p>
          <p>
            Our professional team ensures your laundry is treated with care and
            delivered fresh to your door.
          </p>
          <p>
            With our incoming flagship offering, Pressd Prime, you can schedule
            regular pickups and deliveries weekly, biweekly, or monthly.
          </p>
          <p>
            We believe looking your best should be easy. Choose Pressd Laundry
            for a hassle-free, quality laundry experience.
          </p>
          <div className="section-about-player">
            <div className="circle"></div>
            <p>
              Uncover the tale of Pressd.{" "}
              <a href="#" target="_blank">
                Watch Video.
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="company-images-container">
        <div className="first-image"></div>
        <div className="second-image"></div>
        <div className="third-image"></div>
      </section>
    </main>
  );
};

export default About;
