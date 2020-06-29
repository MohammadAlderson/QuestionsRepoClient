import React from 'react';
import {View} from 'react-native'
import Logo from './../../assets/icons/logo.svg'
import {Container, Body, PrimaryButton, BoldText} from './../ui/index'
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
                    <Logo width={100} height={100}/>
                    <BoldText style={{color: '#FFFFFE', fontSize: 40, marginTop: 10}}>کوییز</BoldText>
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
