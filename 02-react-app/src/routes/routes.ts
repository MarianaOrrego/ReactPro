import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterFormikPage,
  DynamicForm,
} from "../03-forms/pages";

export const routes = [
  { path: "/register", component: RegisterPage, name: "Register Page" },
  {
    path: "/registerformik",
    component: RegisterFormikPage,
    name: "Register Formik Page",
  },
  {
    path: "/formikbasic",
    component: FormikBasicPage,
    name: "Formik Basic Page",
  },
  { path: "/formikyup", component: FormikYupPage, name: "Formik Yup Page" },
  {
    path: "/formikcomponents",
    component: FormikComponents,
    name: "Formik Components",
  },
  {
    path: "/formikabstract",
    component: FormikAbstraction,
    name: "Formik Abstraction",
  },
  { path: "/dynamicform", component: DynamicForm, name: "Dynamic Form" },
];
