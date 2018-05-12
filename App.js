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
export default class CardListExample extends Component {
  render() {
    //var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    var items = [{name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
    {name:"Новосибирск,Орджаникидзе,32", state:"Норм"},
  ];
    
    return (
      <Container>
        <Header />
        <Content>
          {items.map((element,index) => {
         return(
         <Card key={index}>
            <CardItem >
              <Content>
          <List object = {element}/>
        </Content>
             </CardItem>
           </Card>
           )
      })}
        </Content>

        {/* <Footer>
          <FooterTab>
            <Button active = {}>
             
              <Text>Объекты</Text>
            </Button>
            <Button >
             
              <Text>Карта</Text>
            </Button>
           
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}