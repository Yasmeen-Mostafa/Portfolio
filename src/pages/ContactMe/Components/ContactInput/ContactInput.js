import "./ContactInput.scss";
const ContactInput = ({ label, placeholder, type, validations, register }) => {
  if (type === "text-area") {
    return (
      <>
        <label>{label}</label>
        <textarea placeholder={placeholder} {...register(label, validations)} />
      </>
    );
  }
  return (
    <>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        {...register(label, validations)}
      />
    </>
  );
};
export default ContactInput;
