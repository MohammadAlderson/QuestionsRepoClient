import React from 'react';
import {StatusBar, View} from 'react-native'
import Logo from './../../assets/icons/logo.svg'
import {Container, Body, PrimaryButton, BoldText, Gradient} from './../ui/index'
import LinearGradient from "react-native-linear-gradient";
import {start, end, locations, colors} from './../ui/GradientConfig'

// background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

function Home(props) {

    function navigator(destination) {
        return props.navigation.navigate(destination)
    }

    return (
        <Container>
            <View>
                <Gradient style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Body style={{paddingTop: 0, justifyContent: 'flex-start'}}>
                <View style={{
                    height: 300,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#874fcc'
                }}>
                    <Gradient>
                        <Logo width={100} height={100}/>
                        <BoldText style={{color: '#FFFFFE', fontSize: 40, marginTop: 10}}>کوییز</BoldText>
                    </Gradient>
                </View>
                <View style={{marginTop: 50}}>
                    <PrimaryButton btnText="شروع"
                                   onPress={() => navigator('CategoriesList')}
                                   textStyle={{fontFamily: 'IRANYekanMobileBold', fontSize: 24}}
                                   style={{height: 75, borderRadius: 4}}/>
                </View>
            </Body>
        </Container>
    )
}

// background-image: linear-gradient(-20deg, #d558c8 0%, #24d292 100%);
export default Home;
