import React, {useState, useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { useAuthListener } from '../hooks';
import {Header, Loading} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({slides}) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {user} = useAuthListener();

    function setProfileFunction(profile) {
        setProfile(profile);
    }
    
    useEffect(() => {
        console.log('profile', profile);

        setTimeout(() => {
            setLoading(false);
        }, 7000);
        
    }, [profile.email]);

    return profile.email ? (
        <>
          {loading ? <Loading src='3' /> : <Loading.ReleaseBody />}

          <Header src="joker1" dontShowOnSmallViewPort >
            <Header.Frame>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Films</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Profile>
                  <Header.Picture src="3" />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src="3" />
                      <Header.TextLink>{user.email}</Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
             </Header.Frame>
            <Header.Feature>
              <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                <Header.Text>
                  Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                  City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                  futile attempt to feel like he is part of the world around him.
                </Header.Text>
            </Header.Feature>
          </Header>
        </>
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfileFunction} />
      );
}

//https://marketplace.visualstudio.com/items?itemName=AlDuncanson.react-hooks-snippets