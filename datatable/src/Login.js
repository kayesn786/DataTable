import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';

const Login = () => {
  const [state, setState] = useState({
    error: "",
  });
  return (

    <Formik initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          if (values.email === "abdul@gmail.com" && values.password === "abdul123") {
            window.location = "http://localhost:3000/home";
          }
          else {
            setState({ error: "Invalid Credentials" })
          }
          resetForm()
          setSubmitting(false)
          console.log(values);
        }, 500);
      }}

      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email Must be Valid")
          .required("Required"),

        password: Yup.string()
          .required("No Password Provided")
          .min(8, "too Short -- Minimum 8 characters Long")
          .max(16, "too Long -- atmost 16 Characters Long")
          .matches(/(?=.*[0-9])/, "Password Should contain a Number")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit

        } = props;
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm form1">
                <p className="para">Hi There, Welcome to the <span>DataTable</span> Dashboard</p>
              </div>
              <div className="col-sm-4 form">

                <form className="bg form" autoComplete="off" onSubmit={handleSubmit}>
                  <h4 className="App">Sign In</h4>
                  <br></br>

                  <div className="form-group">
                    <label htmlFor="usr">Email address</label>
                    <input type="email" placeholder="Enter email" value={values.email} name="email" className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && "error", "form-control"} />
                  </div>
                  {
                    errors.email && touched.email && (
                      <div className="feedback">{errors.email}</div>
                    )
                  }


                  <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" placeholder="Password" name="password" value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password && "error", "form-control"} />
                  </div>
                  {
                    errors.password && touched.password && (
                      <div className="feedback">{errors.password}</div>
                    )
                  }
                  <br></br>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block">
                    Login
          </button>
                  <br></br>
                  <p className="feedback">{state.error}</p>
                </form>
              </div>
            </div>
          </div>

        );
      }

      }
    </Formik>

  );
}
export default Login;