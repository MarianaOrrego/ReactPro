import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  const { handleSubmit, errors, touched, getFieldProps, handleReset } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .max(15, "Name must be 15 characters or less")
        .min(2, "Name must be 2 characters or more"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be 6 characters or more"),
      repeatPassword: Yup.string()
        .required("Repeat password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
  });

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" placeholder="Name" {...getFieldProps("name")} />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <input
          type="text"
          placeholder="Email"
          {...getFieldProps("email")}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <input
          type="password"
          placeholder="Password"
          {...getFieldProps("password")}
        />
        {touched.password && errors.password && <span>{errors.password}</span>}
        <input
          type="password"
          placeholder="Repeat password"
          {...getFieldProps("repeatPassword")}
        />
        {touched.repeatPassword && errors.repeatPassword && (
          <span>{errors.repeatPassword}</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
