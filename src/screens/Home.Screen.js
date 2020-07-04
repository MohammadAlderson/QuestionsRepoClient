import React from 'react';
import {StatusBar, View} from 'react-native'
import Logo from './../../assets/icons/logo.svg'
import {Container, Body, PrimaryButton, BoldText, Gradient} from './../ui/index'
import SplashScreen from 'react-native-splash-screen'
import LinearGradient from "react-native-linear-gradient";
import {start, end, locations, colors} from './../ui/GradientConfig'

// background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

function Home(props) {

    function navigator(destination) {
        return props.navigation.navigate(destination)
    }

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <Container>
            <View>
                <Gradient style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Gradient>
                <View style={{
                    height: '67%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Logo width={100} height={100}/>
                    <BoldText style={{color: '#FFFFFE', fontSize: 40, marginTop: 10}}>کوییز</BoldText>
                </View>
                <View style={{
                    height: '33%',
                    backgroundColor: '#f6f6f6',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24
                }}>
                    <PrimaryButton btnText="شروع"
                                   style={{height: 60}}
                                   onPress={() => navigator('CategoriesList')}
                                   textStyle={{fontFamily: 'IRANYekanMobileBold', fontSize: 24}} />
                </View>
            </Gradient>
        </Container>
    )
}

// background-image: linear-gradient(-20deg, #d558c8 0%, #24d292 100%);
export default Home;
