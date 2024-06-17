import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h2>Formik Abstraction</h2>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .max(15, "Name must be 15 characters or less"),
          lastname: Yup.string()
            .required("Last name is required")
            .max(20, "Last name must be 20 characters or less"),
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
          job: Yup.string().required("Job type is required"),
          terms: Yup.boolean()
            .required("You must accept the terms and conditions")
            .oneOf([true], "You must accept the terms and conditions"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Name" name="name" />
            <MyTextInput label="Last name" name="lastname" />
            <MyTextInput label="Email" name="email" type="email" />

            <MySelect label="Job Type" name="job">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="product">Product Manager</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terms and conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
