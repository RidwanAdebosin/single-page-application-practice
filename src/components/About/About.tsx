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
      <section className="section-company-images-container">
        <div className="first-image"></div>
        <div className="second-image"></div>
        <div className="third-image"></div>
      </section>
      <section className="section-company-why-container">
        <div className="section-container">
          <h1 className="section-container-h1">Why we exist</h1>
          <p>
            Femi our founder, realized that looking your best has a whole lot to
            do with the condition of your clothes and thinks a lot of people
            would agree. So he started Pressd Laundry to make it easy for
            everyone to always have fresh, great-looking clothes.
          </p>
          <figure>
            <img
              src="https://media.licdn.com/dms/image/D5603AQH8F8dXtT0lYA/profile-displayphoto-shrink_200_200/0/1719415807025?e=1727308800&v=beta&t=zfRNgx73JZx3_3aWVDc8q8DVqGMRbfTdPdrjvKbK7yQ"
              className="founder-image"
            />
            <figcaption>
              <h1>Eze Nbuka</h1>
              <small>Founder</small>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section-customer-order">
        <div className="customer-order-content">
          <h1>Request a laundry pickup with Pressed today!</h1>
          <p>
            Take the first step towards looking your best every time by
            requesting a laundry pickup from Pressd
          </p>
          <button>Request Pickup</button>
        </div>
        <div className="customer-image"></div>
      </section>
    </main>
  );
};

export default About;
