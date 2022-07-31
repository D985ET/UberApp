import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

// <Text style={[tw`text-red-500 pt-11`]}>I am the homescreen!</Text>
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}> 
    <View style={tw`pt-5 pl-5`}>
        <Image 
        style={{width:100,height:100,resizeMode:'contain',}}
        source= {{uri: "https://links.papareact.com/gzs",}}/>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create
({
    text:{
        color: 'blue',
    },
});