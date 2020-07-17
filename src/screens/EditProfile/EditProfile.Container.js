import React from 'react';


import {domain, headers} from "../../config";
import {UserContext} from "../../context/UserContext";
import ErrorToast from "../../components/ErrorToast";
import EditProfileView from "./EditProfile.View";
import CustomToast from "../../ui/Toast";

function EditProfileContainer(props) {
    const {fetchUserData, handleLoader, userId} = React.useContext(UserContext);
    const [displayName, setDisplayName] = React.useState('')
    const [email, setEmail] = React.useState('')

    function refreshUserDataHandler() {
        fetchUserData();
        handleLoader(true);
    }

    async function editProfileHandler() {

        if (displayName === '' && email === '') {
            CustomToast('لطفا اطلاعات را وارد کنید', 4000, "danger")
        } else {
            const body = JSON.stringify({
                userId: userId,
                displayName,
                email
            })
            const url = `${domain}/api/EditUserProfile`
            try {


                let response = await fetch(url, {body, method: 'POST', headers});
                let res = await response.json();
                if (res.statusCode === 200) {
                    CustomToast('اطلاعات با موفقیت تغییر یافت', 3000, "success")
                    refreshUserDataHandler();
                    props.navigation.goBack();
                }
            } catch (e) {
                console.log(e)
                ErrorToast()
            }
        }
    }

    return (
        <EditProfileView
            setDisplayName={setDisplayName}
            setEmail={setEmail}
            editProfileHandler={editProfileHandler}
            {...props}
        />
    )
}

export default EditProfileContainer
