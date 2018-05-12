// import React from 'react';
// import {Container, Content} from 'native-base';
// import {StyleSheet, Text, View} from 'react-native';
// import AppFooter from './components/AppFooter.js';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import reducers from './reducers';
// import {MODES} from './constants';

// const initialState = {
// 	mode: MODES.ARTICLES
// };

// const store = createStore(reducers, initialState);

// const styles = StyleSheet.create({
// 	container: {
// 		padding: 20
// 	},
// });

// const App = () => (
// 	<Provider store={store}>
// 		<Container>
// 			<Content>
// 				<View style={styles.container}>
// 					<Text>
// 						Lorem ipsumрпарпара...
// 					</Text>
// 				</View>
// 			</Content>
// 			<AppFooter/>
// 		</Container>
// 	</Provider>
// );

// export default App;

import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, ListItem,  Footer, FooterTab, Button,} from 'native-base';
import {List} from "./components/List"
import AppContainer from './containers/AppContainer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { reducer } from "./ducks/Reducer";

const initialState = {
	currentState: "objects"
};
const store = createStore(reducer, initialState);

export default class CardListExample extends Component {
  render() {
    //var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    console.log("рповрпоарвоправопраоврполавррол")
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}