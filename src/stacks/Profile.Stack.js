import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Profile from "../screens/Profile.Screen";
import EditProfileContainer from "../screens/EditProfile/EditProfile.Container";
import UserQuestionsContainer from "../screens/UserQuestions/UserQuestions.Container";

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} options={{
                headerShown: false
            }}/>
            <ProfileStack.Screen name="EditProfile" component={EditProfileContainer} options={{
                headerShown: false
            }}/>
            <ProfileStack.Screen name="UserQuestions" component={UserQuestionsContainer} options={{
                headerShown: false
            }}/>
        </ProfileStack.Navigator>
    );
}

export default ProfileStackScreen;
