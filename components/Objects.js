import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, ListItem,  Footer, FooterTab, Button,} from 'native-base';
import {List} from "./List"
 const Objects = (props) => (
    <Content>
    {props.items.map((element,index) => {
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
);
export default Objects