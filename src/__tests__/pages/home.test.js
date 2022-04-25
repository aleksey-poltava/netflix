import React from "react";
import { render } from "@testing-library/react";
import {Home} from '../../pages';

jest.mock('react-router-dom');

test('renders the homepage', () => {
    const {getByText, findAllByText} = render(
        <Home />
    );

    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();

    expect(findAllByText('Ready to watch? Enter your email to create or restart your membership'));
});