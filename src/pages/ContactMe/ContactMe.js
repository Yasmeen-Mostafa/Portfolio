import React from "react";
import { useForm } from "react-hook-form";
import discuss from "../../assets/Images/discussion.png";
import ContactInput from "../../components/ContactInput/ContactInput";
import emailjs from "@emailjs/browser";
import "./ContactMe.scss";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (inputs) => {
    emailjs
      .send(
        "service_wbc2099",
        "template_qygj6nl",
        {
          from_name: inputs.Name,
          from_email: inputs.Email,
          from_phone: inputs.Phone,
          message: inputs.Description,
        },
        "g-1CcXqYnn2AP71DO"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="contact-me">
      <h1 className="contact-me__title">Have a project! let's discuss</h1>
      <div className="contact-me__container">
        <figure>
          <img src={discuss}></img>
        </figure>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContactInput
          type="text"
          placeholder="e.g: John Smith"
          label="Full Name"
          register={register}
          validations={{ required: true }}
        />

        {errors["Name"]?.type === "required" && (
          <p className="error">This Field in required</p>
        )}
        <ContactInput
          type="text"
          placeholder="mail@domain.com"
          label="Email"
          register={register}
          validations={{
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
          }}
        />
        {errors["Email"]?.type === "required" && (
          <p className="error">This field is required</p>
        )}
        {errors["Email"]?.type === "pattern" && (
          <p className="error">Wrong email format</p>
        )}

        <ContactInput
          type="tel"
          placeholder="01234567890"
          label="Phone"
          register={register}
          validations={{ minLength: 11, maxLength: 11 }}
        />
        {(errors["Phone"]?.type === "minLength" ||
          errors["Phone"]?.type === "maxLength") && (
          <p className="error">Phone number should be 11 digits</p>
        )}
        <ContactInput
          type="text-area"
          placeholder="What's in your mind"
          label="Message"
          register={register}
          validations={{ required: true }}
        />
        {errors["Description"]?.type === "required" && (
          <p className="error">This field is required</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactMe;
