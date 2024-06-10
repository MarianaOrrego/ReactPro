import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h2>Formik Components</h2>
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
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />

            <label htmlFor="lastname">Last name</label>
            <Field name="lastname" type="text" />
            <ErrorMessage name="lastname" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="job">Job type</label>
            <Field name="job" as="select">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="product">Product Manager</option>
            </Field>
            <ErrorMessage name="job" component="span" />

            <label>
              <Field name="terms" type="checkbox" /> Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
