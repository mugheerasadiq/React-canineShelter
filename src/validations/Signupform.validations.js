import * as Yup from "yup";

export const SingupFormUserSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is invalid")
    .max(25, "Password is invalid")
    .required("Password is required"),
});

export const SingupFormEmpSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is invalid")
    .max(25, "Password is invalid")
    .required("Password is required"),
  code: Yup.string()
    .min(3, "Signup code should be greater.")
    .required("Signup code is required"),
});
