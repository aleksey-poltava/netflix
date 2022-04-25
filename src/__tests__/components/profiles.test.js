import React from "react";
import { render } from "@testing-library/react";
import {Profiles} from '../../components';

describe('<Profiles />', () => {
    it('renders <Profiles /> with populated data', () => {
        const {container, getByText, getByTestId} = render(
            <Profiles>
                <Profiles.Title>Who is watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => {}}
                    >
                        <Profiles.Picture src='/images/karl.png' data-testid='profile-picture' />
                        <Profiles.Name>Karl Hadwen</Profiles.Name>
                    </Profiles.User> 
                </Profiles.List>
            </Profiles>
        );

        expect(getByText('Who is watching?')).toBeTruthy();
        expect(getByTestId('profile-picture')).toBeTruthy();
        expect(getByText('Karl Hadwen')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});