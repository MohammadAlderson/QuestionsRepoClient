import React from 'react';
import SplashScreen from 'react-native-splash-screen'
import HomeView from "./Home.View";

function HomeContainer(props) {

    function navigator(destination) {
        return props.navigation.navigate(destination)
    }

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <HomeView
            navigator={navigator}
        />
    )
}

export default HomeContainer;
