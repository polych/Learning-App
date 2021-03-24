import React from "react";
import { Link } from "react-router-dom";
import Form from "../../../components/UiComponents/Form";
import { emailObj } from "../../../helpers/GeneralObjects";
const fields = [emailObj];
const initialValues = {
  email: "",
};
const ResetPass = () => {
  return (
    <div className="auth_form">
      <h1>Reset password</h1>
      <Form
        fields={fields}
        initValues={initialValues}
        submitValue="Send me the link"
      />
      <Link to="/auth/signin" className="auth_link">
        or Sign in
      </Link>
    </div>
  );
};

export default ResetPass;
