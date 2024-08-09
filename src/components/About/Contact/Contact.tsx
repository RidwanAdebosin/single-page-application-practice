import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <section className="contact-hero-wrapper">
        <div data-aos="fade-down" className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            Whether you have a query, need more information, or are ready to
            kickstart your project, we are just a message away.
          </p>
        </div>
      </section>
      <section className="contact-details">
        <div className="contact-box">
          <img data-aos="zoom-in" src="" alt="message logo" />
          <p data-aos="zoom-in">eze@gmail.com</p>
          <small data-aos="zoom-in">Email us your enquiries</small>
        </div>
        <div className="contact-box">
          <img data-aos="zoom-in" src="" alt="phone icon" />
          <p data-aos="zoom-in">+234 999 999 9999</p>
          <small data-aos="zoom-in">Send us a message on WhatsApp</small>
        </div>
      </section>
      <section className="contact-extras">
        <section className="contact-extra">
          <p data-aos="fade-down">Get in Touch</p>
          <h1 data-aos="fade-up">
            Need more info? Contact us. We're happy to help
          </h1>
          <p data-aos="fade-up">
            Need more information? Reach us on all our channels, and we'll be
            happy to respond.{" "}
          </p>
        </section>
        <section data-aos="fade-left" className="contact-image">
          <img
            src="https://www.pressdng.com/Pressd%20laundry%20support%20image.jpg"
            alt="a girl looking into a washing machine"
          />
        </section>
      </section>
    </main>
  );
};

export default Contact;
