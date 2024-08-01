import { useFormik } from "formik";
import React from "react";
import validations from "./validations";

const Signup = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        // firstName: "Ali İhsan",
        // lastName: "Özkaya",
        email: "",
        password: "",
        passwordConfirm: "",
        // gender: "male",
        // hobies: [],
        // country: "Turkey",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validations,
    });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        placeholder="Jane"
        onChange={handleChange}
        value={values.firstName}
      />
      <br />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        placeholder="Doe"
        onChange={handleChange}
        value={values.lastName}
      />
      <br />
      <br /> */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        {/* <br />
      <br />
      <br />
      <span>Male</span>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleChange}
        checked={values.gender === "male"}
      />
      <span>Female</span>
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleChange}
        checked={values.gender === "female"}
      />
      <br />
      <br />
      <div>
        <input
          type="checkbox"
          name="hobies"
          value="Football"
          onChange={handleChange}
        />
        Football
      </div>
      <div>
        <input
          type="checkbox"
          name="hobies"
          value="Cinema"
          onChange={handleChange}
        />
        Cinema
      </div>
      <div>
        <input
          type="checkbox"
          name="hobies"
          value="Photography"
          onChange={handleChange}
        />
        Photography
      </div>
      <br />
      <br />
      <select name="country" onChange={handleChange}>
        <option value="Turkey">Turkey</option>
        <option value="England">England</option>
        <option value="Germany">Germany</option>
      </select> */}
        <button type="submit">Submit</button>
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
};

export default Signup;
