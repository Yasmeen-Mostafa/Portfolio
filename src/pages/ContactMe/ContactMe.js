import React, { useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Result from "../../components/Result/Result";
import "./ContactMe.scss";

const ContactMe = () => {
  const [result, setResult] = useState(null);
  return (
    <>
      {result === null && <ContactForm setResult={setResult} />}
      {result !== null && <Result result={result} />}
    </>
  );
};
export default ContactMe;
