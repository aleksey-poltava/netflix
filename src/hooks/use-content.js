import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { getFirestore } from 'firebase/firestore';

export default function useContent(target) {
    const [content, setContent] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        
        // const querySnapshot = await getDocs(collection(db, "users"));
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
        // });

        getDocs(collection(db, target))
        .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return {[target]: content};
}