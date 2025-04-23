import React, { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formData;
  const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFormData({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      // Add sign-up logic here
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      // Optionally, you can redirect the user or show a success message
      console.log("User signed up successfully:", user);
      console.log("User signed up with email:", email);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }

      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have and account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button buttonType="default" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
