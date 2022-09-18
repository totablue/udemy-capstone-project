import React from "react";

import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "./SignInForm";

import "./SignIn.styles.scss";

const SignIn = () => {
    return (
        <div className="sign-in-page">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default SignIn;
