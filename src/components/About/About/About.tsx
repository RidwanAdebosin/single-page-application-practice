import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
  return (
    <section data-aos="fade-down" className="section-user-subscription">
      <div className="section-user-container">
        <h1>Subscribe To Our Newsletter</h1>
        <p>
          Stay informed about our latest updates through email.
          <small> Subscribe here.</small>
        </p>
        <form className="form">
          <label htmlFor="text">
            <input placeholder="Email" id="text" />
          </label>
          <button className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <section className="section-about">
        <div className="container">
          <p data-aos="fade-down">Welcome to My World</p>
          <h1 data-aos="fade-down" className="section-about-h1">
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
      <section data-aos="fade-up" className="section-company-images-container">
        <div className="first-image"></div>
        <div className="second-image"></div>
        <div className="third-image"></div>
      </section>
      <section data-aos="fade-down" className="section-company-why-container">
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
          <h1 data-aos="fade-down">
            Request a laundry pickup with Pressed today!
          </h1>
          <p data-aos="fade-down">
            Take the first step towards looking your best every time by
            requesting a laundry pickup from Pressd
          </p>
          <button data-aos="fade-up">Request Pickup</button>
        </div>
        <div className="img-wrapper">
          <img
            src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-1233.webp"
            className="customer-image"
          />
        </div>
      </section>
      <Subscribe />
    </main>
  );
};

export default About;
