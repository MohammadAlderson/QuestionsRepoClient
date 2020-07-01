import React from 'react';
import {View} from 'react-native'
import Logo from './../../assets/icons/logo.svg'
import {Container, Body, PrimaryButton, BoldText} from './../ui/index'
import LinearGradient from "react-native-linear-gradient";

// background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

function Home(props) {

    function navigator(destination) {
        return props.navigation.navigate(destination)
    }
    return (
        <Container>
            <Body style={{paddingTop: 0, justifyContent: 'flex-start'}}>
                <View style={{
                    height: 300,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#874fcc'
                }}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#194b9a', '#4b6cb7']} style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Logo width={100} height={100}/>
                        <BoldText style={{color: '#FFFFFE', fontSize: 40, marginTop: 10}}>کوییز</BoldText>
                    </LinearGradient>
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

export default Home;
