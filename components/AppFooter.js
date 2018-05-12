import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';


const AppFooter = (props) => (
	<Footer>
		<FooterTab>
			<Button
				active={props.currentState === "objects"}
				onPress={
                                  () => props.setMode("objects")}>
				<Text>Объекты</Text>
			</Button>
			<Button
				active={props.currentState === "map"}
				onPress={
                                  () => props.setMode("map")}>
				<Text>Карта</Text>
			</Button>
		</FooterTab>
	</Footer>
);

export default AppFooter;