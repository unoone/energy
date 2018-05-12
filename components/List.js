import React from 'react';
import {  Text, Content} from 'native-base';
export const List = (props) => (
    <Content>
    <Text>Адрес:{props.object.name} </Text>
    <Text>Состояние:{props.object.state} </Text>
    </Content>
);