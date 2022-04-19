import React, {useState, useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { useAuthListener } from '../hooks';
import {Header, Loading} from '../components';


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

          <Header src="joker1">
              <p>Hello</p>
          </Header>
        </>
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfileFunction} />
      );
}

//https://marketplace.visualstudio.com/items?itemName=AlDuncanson.react-hooks-snippets