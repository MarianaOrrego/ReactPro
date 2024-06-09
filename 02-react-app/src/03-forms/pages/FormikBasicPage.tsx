import { useFormik } from "formik";
import "../styles/styles.css";

export const FormikBasicPage = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
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
          value={values.name}
        />
        <span>Name is required</span>

        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={handleChange}
          value={values.lastname}
        />
        <span>Last name is required</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <span>Email is required</span>
        <span>Check for a valid email format</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
