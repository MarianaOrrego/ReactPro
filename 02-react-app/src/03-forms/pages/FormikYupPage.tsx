import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .max(15, "Name must be 15 characters or less"),
      lastname: Yup.string()
        .required("Last name is required")
        .max(20, "Last name must be 20 characters or less"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    }),
  });

  return (
    <div>
      <h2>Formik Yup Page</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...getFieldProps("name")} />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="lastname">Last name</label>
        <input type="text" id="lastname" {...getFieldProps("lastname")} />
        {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
