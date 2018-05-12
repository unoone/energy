import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {MODES} from "../constants";

const AppFooter = ({mode = MODES.ARTICLES, setMode = () => {}}) => (
	<Footer>
		<FooterTab>
			<Button
				active={mode === MODES.ARTICLES}
				onPress={
                                  () => setMode(MODES.ARTICLES)}>
				<Text></Text>
			</Button>
			<Button
				active={mode === MODES.PODCAST}
				onPress={
                                  () => setMode(MODES.PODCAST)}>
				<Text></Text>
			</Button>
		</FooterTab>
	</Footer>
);

export default AppFooter;