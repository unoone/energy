import React from 'react';
import {StyleSheet} from 'react-native';
import {  Text, Content} from 'native-base';

const styles = StyleSheet.create({
    	container: {
            paddingLeft:150,
            paddingTop:300
    	},
    });
 const Map = (props) => (
    <Content style = {styles.container}>
        <Text> Карта </Text>
  </Content>
);
export default Map