import React from "react";

import { JumbotronContainer } from "../containers/jumbotron";
import {FaqContainer} from "../containers/faq";
import { FooterContainer } from "../containers/footer";
import {HeaderContainer} from "../containers/header";

export default function Home() {
    return (<>
            <HeaderContainer>
                <JumbotronContainer />
                <FaqContainer />
                <FooterContainer/>
            </HeaderContainer>
        </>
    );
}