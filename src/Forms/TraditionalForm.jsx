import { useState } from "react";

const TraditionalForm = () => {
  const initialFormData = {
    firstName: "",
    mobileNum: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <>
      <h3>Traditional Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Mobile Number"
          name="mobileNum"
          value={formData.mobileNum}
          onChange={handleChange}
        />{" "}
        <br />
        <button>SUBMIT</button>
      </form>
    </>
  );
};

export default TraditionalForm;
