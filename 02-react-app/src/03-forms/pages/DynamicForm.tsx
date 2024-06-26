import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: {
  [key: string]: string | any;
} = {};

const requiredFields: {
  [key: string]: string | any;
} = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  let schema = Yup.string();

  if (!input.validations) continue;

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }

    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value || 1, rule.message);
    }

    if (rule.type === "email") {
      schema = schema.email(rule.message);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object().shape(requiredFields);

export const DynamicForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ name, placeholder, label, type, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                    type={type as any}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Seleccione una opción</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
