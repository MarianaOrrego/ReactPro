import { useField, ErrorMessage } from "formik";

interface MyCheckboxProps {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={field.name} component="span" />
    </>
  );
};
