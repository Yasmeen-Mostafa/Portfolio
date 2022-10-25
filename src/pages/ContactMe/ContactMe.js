import { useState } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import Result from "./Components/Result/Result";
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
