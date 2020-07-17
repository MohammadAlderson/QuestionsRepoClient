import React from 'react';
import {UserContext} from "../../context/UserContext";
import ProfileView from "./Profile.View";

function ProfileContainer(props) {

    const {userId, fetchUserData, loading, userData, logOutHandler} = React.useContext(UserContext);

    const [logoutModalState, setLogoutModalState] = React.useState(false);

    React.useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <ProfileView
            setLogoutModalState={setLogoutModalState}
            logoutModalState={logoutModalState}
            logOutHandler={logOutHandler}
            loading={loading}
            userData={userData}
            userId={userId}
            {...props}
        />
    )
}

export default ProfileContainer;
