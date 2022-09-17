import React, { useState } from "react";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import "./SignUpForm.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password does not match.");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, {
                displayName,
            });
            resetFormFields();
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in user.");
            } else if (err.code === "auth/weak-password") {
                alert(
                    "Password is too short. A minimum of 6 characters is required"
                );
            } else {
                console.log(
                    "There was an error when creating user",
                    err.message
                );
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Dont' have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
