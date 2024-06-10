import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  name: string;
  lastname: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ name, lastname, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!name) {
      errors.name = "Name is required";
    } else if (name.length > 15) {
      errors.name = "Name must be 15 characters or less";
    }

    if (!lastname) {
      errors.lastname = "Last name is required";
    } else if (lastname.length > 20) {
      errors.lastname = "Last name must be 20 characters or less";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        lastname: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  return (
    <div>
      <h2>Formik Basic Page</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastname}
        />
        {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
