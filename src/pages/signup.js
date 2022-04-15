import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import {HeaderContainer} from "../containers/header";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useNavigate();
    const auth = getAuth();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (event) => {
        event.preventDefault();

        // do firabase stuff
        createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                history(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method='POST'>
                        <Form.Input
                            placeholder='First name'
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder='Email address'
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type='password'
                            placeholder='Password'
                            value={password}
                            autoComplete='off'
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user? <Form.Link to='/signin' >Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}