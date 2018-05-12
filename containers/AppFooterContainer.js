import React from 'react';
import AppFooter from '../components/AppFooter.js';
import {connect} from 'react-redux';

import * as actions from "../ducks/actions";
const mapStateToProps = (state) => ({
	currentState: state.currentState
});


const mapDispatchToProps = {
	setMode: actions.setMode,
  };
  
  class AppFooterContainer extends React.Component {
	 render(){
		 return(

			 <AppFooter currentState={this.props.currentState} setMode={this.props.setMode} />
		 )
	 }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppFooterContainer);