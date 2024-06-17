import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterFormikPage,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/registerformik" activeClassName="nav-active" exact>
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikbasic" activeClassName="nav-active" exact>
                Formik Basic Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikyup" activeClassName="nav-active" exact>
                Formik Yup Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikcomponents"
                activeClassName="nav-active"
                exact
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikabstract" activeClassName="nav-active" exact>
                Formik Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/registerformik">
            <RegisterFormikPage />
          </Route>
          <Route path="/formikbasic">
            <FormikBasicPage />
          </Route>
          <Route path="/formikyup">
            <FormikYupPage />
          </Route>
          <Route path="/formikcomponents">
            <FormikComponents />
          </Route>
          <Route path="/formikabstract">
            <FormikAbstraction />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
