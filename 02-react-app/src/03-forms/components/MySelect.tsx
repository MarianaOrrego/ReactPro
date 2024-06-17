import { ErrorMessage, useField } from "formik";

interface MySelectProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  [x: string]: any;
}

export const MySelect = ({ label, ...props }: MySelectProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={field.name} component="span" />
    </>
  );
};
