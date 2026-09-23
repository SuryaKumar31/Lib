import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  firstName: "",
  mobileNum: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required("Enter name"),
  mobileNum: yup.string().required("Enter mobile number"),
});

const BasicForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h3>Formik Form</h3>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field type="text" name="firstName" placeholder="Name" />
          <br />

          <ErrorMessage name="firstName" />
          <br />

          <Field type="text" name="mobileNum" placeholder="Mobile Number" />
          <br />

          <ErrorMessage name="mobileNum" />
          <br />

          <button type="submit">SUBMIT</button>
        </Form>
      </Formik>
    </>
  );
};

export default BasicForm;
