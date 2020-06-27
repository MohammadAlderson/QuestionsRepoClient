import React from 'react';

export const UserContext = React.createContext();

function UserContextProvider(props) {

    const [userId, setUserData] = React.useState()

    function setUserDataHandler(user_data) {
        setUserData(user_data)
        console.log(user_data)
    }

    return (
        <UserContext.Provider value={{userId, setUserDataHandler}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
