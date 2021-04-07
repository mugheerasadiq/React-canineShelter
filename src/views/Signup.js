import React, { useState } from "react";
import { Formik } from "formik";
import SignupFormSchema from "../validations/Signupform.validations";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Input, Button, Radio } from "antd";

// Services
// import { userLogin } from "../../services/user.services";

const EmpSignupForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        code: "",
      }}
      validationSchema={SignupFormSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="auth_form">
          <Input
            type="text"
            onChange={handleChange}
            name="name"
            onBlur={handleBlur}
            touched={touched}
            value={values.name}
            placeholder="Your Name"
            className="auth_input"
          />

          <Input
            type="email"
            onChange={handleChange}
            name="email"
            onBlur={handleBlur}
            touched={touched}
            value={values.email}
            placeholder="Your Email"
            className="auth_input"
          />
          {errors.email && touched.email ? (
            <div className="text-danger">{errors.email}</div>
          ) : null}

          <Input
            type="password"
            name="password"
            placeholder="Your password"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched}
            value={values.password}
            className="auth_input"
          />
          {errors.password && touched.password ? (
            <div className="text-danger">{errors.password}</div>
          ) : null}

          <Input
            type="text"
            name="code"
            placeholder="Signup code"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched}
            value={values.code}
            className="auth_input"
          />
          {errors.code && touched.code ? (
            <div className="text-danger">{errors.code}</div>
          ) : null}

          <Button type="primary" className="auth_btn" htmlType="submit">
            Signup
          </Button>
        </form>
      )}
    </Formik>
  );
};

const UserSignupForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupFormSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="auth_form">
          <Input
            type="text"
            onChange={handleChange}
            name="name"
            onBlur={handleBlur}
            touched={touched}
            value={values.name}
            placeholder="Your Name"
            className="auth_input"
          />

          <Input
            type="email"
            onChange={handleChange}
            name="email"
            onBlur={handleBlur}
            touched={touched}
            value={values.email}
            placeholder="Your Email"
            className="auth_input"
          />
          {errors.email && touched.email ? (
            <div className="text-danger">{errors.email}</div>
          ) : null}

          <Input
            type="password"
            name="password"
            placeholder="Your password"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched}
            value={values.password}
            className="auth_input"
          />
          {errors.password && touched.password ? (
            <div className="text-danger">{errors.password}</div>
          ) : null}

          <Button type="primary" className="auth_btn" htmlType="submit">
            Signup
          </Button>
        </form>
      )}
    </Formik>
  );
};

const Signup = ({ userSignup, history }) => {
  const [type, setType] = useState("user");

  const signup = (data) =>
    new Promise((resolve, reject) => {
      userSignup(data, resolve, reject);
    });

  const onSubmit = async (values) => {
    try {
      console.log(values);
      //   await signup(values);
      //   setTimeout(() => {
      //     history.replace("/");
      //   }, 300);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeRadioButton = (e) => {
    setType(e.target.value);
  };

  if (type === "user")
    return (
      <div className="auth_form_container">
        <div className="auth_form_wrapper">
          <Radio.Group
            onChange={onChangeRadioButton}
            value={type}
            className="auth_radio_btn"
          >
            <Radio value={"user"}>User</Radio>
            <Radio value={"employee"}>Charity worker</Radio>
          </Radio.Group>
          <UserSignupForm onSubmit={onSubmit} />
        </div>
      </div>
    );
  else if (type === "employee")
    return (
      <div className="auth_form_container">
        <div className="auth_form_wrapper">
          <Radio.Group
            onChange={onChangeRadioButton}
            value={type}
            className="auth_radio_btn"
          >
            <Radio value={"user"}>User</Radio>
            <Radio value={"employee"}>Charity worker</Radio>
          </Radio.Group>
          <EmpSignupForm onSubmit={onSubmit} />
        </div>
      </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      //   userSignup,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
