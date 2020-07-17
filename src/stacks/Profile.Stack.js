import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import EditProfileContainer from "../screens/EditProfile/EditProfile.Container";
import UserQuestionsContainer from "../screens/UserQuestions/UserQuestions.Container";
import ProfileContainer from "../screens/Profile/Profile.Container";

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileContainer} options={{
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
