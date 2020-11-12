import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text,SafeAreaView } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width

  
    function Description({ route }) {
        const { hero } = route.params;
        return (
          <SafeAreaView>
            <ScrollView> 
                <Image 
                    source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                    style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}  
                />
                                
                <Text style={{padding:10, fontSize:20}}>{hero.name}</Text>
                <Text style={{padding:10,fontSize:20}}> Id do personagem: {hero.id}</Text> 
                <Text style={{padding:10}}>{hero.description}</Text>  
                <Text style={{padding:10}}>Aparições em histórias em quadrinhos:  {hero.comics.available}</Text>  
                <Text style={{padding:10}}>Aparições em séries : {hero.series.available}</Text>
                <Text style={{padding:10}}>Aparições em Histórias : {hero.stories.available}</Text>    
                
                     
            </ScrollView>
          </SafeAreaView>
        );        
    }


export default Description

