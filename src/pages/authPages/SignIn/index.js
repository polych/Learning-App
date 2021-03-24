import React from "react";
import { Link } from "react-router-dom";
import FacebookBtn from "../../../components/UiComponents/FacebookBtn";
import Form from "../../../components/UiComponents/Form";
import GoogleBtn from "../../../components/UiComponents/GoogleBtn";
import { emailObj, passwordObj } from "../../../helpers/GeneralObjects";

const ForgotPass = () => <Link to="/auth/resetpass">Forgot Password?</Link>;

const fields = [emailObj, { ...passwordObj, addInfo: <ForgotPass /> }];
const initialValues = {
  password: "",
  email: "",
};
const SignIn = () => {
  return (
    <div className="auth_form">
      <h1>Sign in</h1>
      <p className="auth_form_have_ac">
        <span>Don`t have an account yet?</span>
        <Link to="/auth/signup">Sign up</Link>
      </p>
      <div className="auth_form_soc">
        <GoogleBtn />
        <FacebookBtn />
      </div>
      <div className="grey_line"></div>
      <Form fields={fields} initValues={initialValues} submitValue="Sign In" />
    </div>
  );
};

export default SignIn;
