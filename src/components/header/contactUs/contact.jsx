import React from "react";
import "../contactUs/contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../animation/Animation - 1737915264523.json";
import contactAnimation from "../../../animation/Animation - 1737916007396.json";
function Contact() {
  const [state, handleSubmit] = useForm("mnnjjbyv");

  return (
<section className="flex" style={{justifyContent:"space-between"}}>
      <div className="contact">
        <h1 className="title">
          <span className="icon-envelope" />
          Cuntact Us
        </h1>
        <p className="sup-title">
          contact us for more information and get notified when publish someting
          new.
        </p>
        <form style={{justifyContent:"space-between"}} onSubmit={handleSubmit} className="  form">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="flex" style={{ marginTop: "24PX" }}>
            <label htmlFor="massage">Your massage:</label>
            <textarea required name="message" id="massage"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.succeeded ? "Submitting ...." : "submit"}
            {}
          </button>
          {state.succeeded && (
            <h1
              className="flex"
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 44 }}
                animationData={doneAnimation}
              />
              Your Massage has been sent successfully 👌
            </h1>
          )}
        </form>
      </div>
      <div className=" massege-animation ">
        <Lottie
                loop={true}
                style={{ height: 350 }}
                animationData={contactAnimation}
              />
        </div>
</section>
  );
}

export default Contact;
