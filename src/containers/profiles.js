import React from "react";
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Profiles } from "../components";

export function SelectProfileContainer({user, setProfile}) {
    console.log('user email in SelectProfileContainer', user.email);

    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who is watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => setProfile({email: user.email, photoURL: '3'})}
                    >
                        <Profiles.Picture src='3' />
                        <Profiles.Name>{user.email}</Profiles.Name>
                    </Profiles.User> 
                </Profiles.List>
            </Profiles>
        </>
    );
}