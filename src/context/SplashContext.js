import React from 'react';

export const SplashContext = React.createContext();

function SplashContextProvider(props) {

    const [loading, setLoading] = React.useState()

    function setLoadingHandler(status) {
        setLoading(status)
    }

    return (
        <SplashContext.Provider value={{loading, setLoadingHandler}}>
            {props.children}
        </SplashContext.Provider>
    )
}

export default SplashContextProvider
