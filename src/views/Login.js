// import React from "react";
// import { Formik } from "formik";
// import LoginFormSchema from "../Validations/Loginform.validation";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

// // Services
// import { userLogin } from "../../services/user.services";

// const LoginForm = ({ onSubmit }) => {
//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//       }}
//       validationSchema={LoginFormSchema}
//       onSubmit={(values) => {
//         console.log(values);
//         onSubmit(values);
//         //alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
//       }}
//     >
//       {({
//         values,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         errors,
//         /* and other goodies */
//       }) => (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-5 contact-form col-md-7 mb-5 mt-5"
//         >
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control"
//               onChange={handleChange}
//               name="email"
//               onBlur={handleBlur}
//               touched={touched}
//               value={values.email}
//               placeholder="Your Email"
//             />
//             {errors.email && touched.email ? (
//               <div className="text-danger">{errors.email}</div>
//             ) : null}
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Your password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               touched={touched}
//               value={values.password}
//             />
//             {errors.password && touched.password ? (
//               <div className="text-danger">{errors.password}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <button htmlType="submit" className="btn btn-primary py-3 px-5">
//               Login
//             </button>
//           </div>
//         </form>
//       )}
//     </Formik>
//   );
// };

// const Login = ({ userLogin, history }) => {
//   const login = (data) =>
//     new Promise((resolve, reject) => {
//       userLogin(data, resolve, reject);
//     });

//   const onSubmit = async (values) => {
//     try {
//       await login(values);
//       setTimeout(() => {
//         history.replace("/");
//       }, 300);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
//       <div className="container">
//         <div className="row">
//           <div className="container">
//             <div className="row align-items-center justify-content-center contact-section">
//               <LoginForm onSubmit={onSubmit} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       userLogin,
//     },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
