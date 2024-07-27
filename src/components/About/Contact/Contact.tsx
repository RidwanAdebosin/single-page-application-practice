import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <main>
      <section className="contact-hero">
        <div className="contact-hero-wrapper">
          <h1>Contact Us</h1>
          <p>
            Whether you have a query, need more information, or are ready to
            kickstart your project, we are just a message away.
          </p>
        </div>
      </section>
      <section className="contact-details">
        <div className="contact-box">
          <img data-aos="fade-down" src="" alt="message logo" />
          <p>eze@gmail.com</p>
          <small>Email us your enquiries</small>
        </div>
        <div className="contact-box">
          <img src="" alt="phone icon" />
          <p>+234 999 999 9999</p>
          <small>Send us a message on WhatsApp</small>
        </div>
      </section>
      <section className="contact-extras">
        <section className="contact-extra">
          <p>Get in Touch</p>
          <h1>Need more info? Contact us. We're happy to help</h1>
          <p>
            Need more information? Reach us on all our channels, and we'll be
            happy to respond.{" "}
          </p>
        </section>
        <section className="contact-image">
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
