import React, {useState, useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { useAuthListener } from '../hooks';
import {Card, Header, Loading, Player} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

import { getAuth, signOut } from "firebase/auth";


export function BrowseContainer({slides}) {

    const auth = getAuth();

    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {user} = useAuthListener();
    const [slideRows, setSlideRows] = useState([]);

    function setProfileFunction(profile) {
        setProfile(profile);
    }

    function signOutUser() {
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful');
      }).catch((error) => {
        // An error happened.
        console.log('Sign-out unsuccessful', error);
      });
    }
    
    useEffect(() => {
        console.log('profile', profile);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
        
    }, [profile.email]);

    useEffect(() => {
      setSlideRows(slides[category]);
    
      
    }, [slides, category]);

    return profile.email ? (
        <>
          {loading ? <Loading src='3' /> : <Loading.ReleaseBody />}

          <Header src="joker1" dontShowOnSmallViewPort >
            <Header.Frame>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                <Header.TextLink
                  active = {category === 'series' ? 'true' : 'false'}
                  onClick = {() => setCategory('series')}
                >
                  Series
                </Header.TextLink>
                <Header.TextLink
                  active = {category === 'films' ? 'true' : 'false'}
                  onClick = {() => setCategory('films')}
                >
                  Films
                </Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <Header.Profile>
                  <Header.Picture src="3" />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src="3" />
                      <Header.TextLink>{user.email}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink
                        onClick={signOutUser}
                      >
                        Sign Out
                      </Header.TextLink>
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
                <Header.PlayButton>
                  Play
                </Header.PlayButton>
            </Header.Feature>
          </Header>

          <Card.Group>
            {slideRows.map((slideItem) => (
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video src='videos/bunny.mp4' />
                  </Player>
                </Card.Feature>
              </Card>
            ))}
          </Card.Group>
          <FooterContainer />
        </>
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfileFunction} />
      );
}

//https://marketplace.visualstudio.com/items?itemName=AlDuncanson.react-hooks-snippets