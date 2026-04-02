import { useState } from "react";
import { Airplay, ArrowDown, Glasses, MessageCircle } from "lucide-react";

const faqs = [
  {
    number: "01",
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers movies, TV shows, documentaries and more."
  },
  {
    number: "02",
    question: "How much does Netflix cost?",
    answer:
      "Plans start at ₦2,200 depending on your region."
  },
  {
    number: "03",
    question: "Where can I watch?",
    answer:
      "You can watch on smart TVs, phones, tablets, laptops and game consoles."
  },
  {
    number: "04",
    question: "How do I cancel?",
    answer:
      "Cancel anytime from your account page."
  }
];

export function Home() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="notice">
        <p>
          Attention : Ce site est un projet personnel de démonstration et n'est
          pas affilié à Netflix.
        </p>
      </section>

      <section className="hero">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Starts at ₦2,200. Cancel anytime.</h3>

        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email-box">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </section>

    <div className="Get">
  <img src="/hq.jpg" />
  <img src="/hq1.jpg" />
  <img src="/image42.jpg" />
  <img src="/images40.jpg" />
  <img src="/images41.jpg" />
  <img src="/images43.jpg" />
  <img src="/images45.jpg" />
  <img src="/images46.jpg" />
  <img src="/images47.jpg" />
  <img src="/images48.jpg" />
</div>

      <h2 style={{ textAlign: "center" }}>More Reasons to Join</h2>

      <section className="reasons">
        <div className="Apple">

          <div className="reason">
            <h3>Enjoy on your TV</h3>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast,
              Apple TV, Blu-ray players, and more.
            </p>
            <Airplay className="and" />
          </div>

          <div className="reason">
            <h3>Download your shows to watch offline</h3>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
            <Glasses className="and" />
          </div>

        </div>

        <div className="Apple">

          <div className="reason">
            <h3>Watch everywhere</h3>
            <p>
              Stream unlimited movies and TV shows on your phone,
              tablet, laptop, and TV.
            </p>
            <ArrowDown className="and" />
          </div>

          <div className="reason">
            <h3>Create profiles for kids</h3>
            <p>
              Send kids on adventures with their favorite characters
              in a space made just for them.
            </p>
            <MessageCircle className="and" />
          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        {faqs.map((item, index) => (

          <div key={index} className="faq-item">

            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >
              <span className="faq-number">{item.number}</span>

              {item.question}

              <span className={`icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}

          </div>

        ))}

      </section>

      <section className="signup">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email-box">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </section>

      <footer className="footer">

        <p>Questions? Contact us.</p>

        <ul className="footer-links">
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Ways to Watch</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
          <li>Speed Test</li>
          <li>Legal Notices</li>
          <li>Only on Netflix</li>
        </ul>

        <p>Netflix Nigeria</p>

        <p>
          This page is protected by Google reCAPTCHA
          to ensure you're not a bot.
        </p>

      </footer>

    </>
  );
}