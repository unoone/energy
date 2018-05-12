
import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, Body, ListItem, Title, Footer, FooterTab, Button,} from 'native-base';
import {StyleSheet} from 'react-native';
import ToggleContainer from "./ToggleContainer"
import AppFooterContainer from './AppFooterContainer.js';
import {connect} from 'react-redux';

import * as actions from "../ducks/actions";

const styles = StyleSheet.create({
    container: {
       marginTop:20
    },
});

const mapStateToProps = (state) => ({
	currentState: state.currentState
});


const mapDispatchToProps = {
	setMode: actions.setMode,
  };
  
  class AppContainer extends React.Component {
	 render(){
       
		 return(
            <Container>
            <Header> 
            <Left/>
          <Body style = {styles.container}>
            <Title>Недоделыш</Title>
          </Body>
          <Right />
            </Header>
            <ToggleContainer />
			<AppFooterContainer />
            </Container>
		 )
	 }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);

