import React, { useState } from "react";

import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./SignInForm.styles.scss";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={signInUserWithEmailAndPassword}>
                <FormInput
                    label="Email"
                    type="text"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className="all-button-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" onClick={logGoogleUser}>
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
