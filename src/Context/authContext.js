import React, { createContext, useState, useEffect } from 'react';

import { app } from '../base';
import history from '../history';

const Context = createContext();

function AuthProvider({children}) {
    const [authenticated, setAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setAuthenticated(user);
            setLoading(false);
        })
    }, [])

    async function signOut() {
        try {
            const user = await app.auth().signOut();   
            setAuthenticated(user);
            history.push('/login');
        } catch(err) {
            alert(err)
        }

    }


    return (
        <Context.Provider value={{ authenticated, signOut, loading }}>
            {children}
        </Context.Provider>
    )
};

export { Context, AuthProvider };