import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstraction } from "../03-forms/pages/FormikAbstraction";

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
