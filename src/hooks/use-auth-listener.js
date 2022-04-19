import {useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";



export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    // const {firebase} = useContext(FirebaseContext);
    
    //https://firebase.google.com/docs/auth/web/start

    const auth = getAuth();


    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log('uid: ', uid);
              localStorage.setItem('authUser', JSON.stringify(user));
              setUser(user); 
              // ...
            } else {
              // User is signed out
              localStorage.removeItem('authUser');
              setUser(null);

              console.log('User sign out');
            }
          });
        
        return () => listener();
    }, []);

    return {user};
}
