import React from "react";
import { Link } from "react-router-dom";
import FacebookBtn from "../../../components/UiComponents/FacebookBtn";
import Form from "../../../components/UiComponents/Form";
import GoogleBtn from "../../../components/UiComponents/GoogleBtn";
import {
  emailObj,
  firstNameObj,
  lastNameObj,
  passwordObj,
} from "../../../helpers/GeneralObjects";

const fields = [firstNameObj, lastNameObj, emailObj, passwordObj];
const initialValues = {
  password: "",
  email: "",
  firstName: "",
  lastName: "",
};
const SignUp = () => {
  return (
    <div className="auth_form">
      <h1>Sign up</h1>
      <p className="auth_form_have_ac">
        <span>Already have an account?</span>
        <Link to="/auth/signin">Sign in</Link>
      </p>
      <div className="auth_form_soc">
        <GoogleBtn />
        <FacebookBtn />
      </div>
      <div className="grey_line"></div>
      <Form fields={fields} initValues={initialValues} submitValue="Sign Up" />
    </div>
  );
};

export default SignUp;
