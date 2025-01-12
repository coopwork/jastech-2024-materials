import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext(undefined);


const UserProvider = ({children}) => {
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const logout = () => {
        setUser(undefined)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.org/users/1')
            .then((response) => {
                setUser(response.data);
            })
            .catch((err)=>{
                console.error(err)
            })
            .finally(()=>{
                setIsLoading(false)
            });

        // fetch('https://jsonplaceholder.org/users/1')
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(user => {
        //         setUser(user);
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error);
        //     }).finally(()=>{
        //     setIsLoading(false)
        // });
    }, []);

    const values = {
        user,
        setUser,
        isLoading,
        logout,
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;