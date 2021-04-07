import React from "react";
import * as Yup from "yup";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is invalid")
    .max(25, "Password is invalid")
    .required("Password is required"),
});

export default LoginFormSchema;
