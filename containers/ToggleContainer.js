import React from 'react';
import Objects from '../components/Objects';
import Map from '../components/Map';
import {connect} from 'react-redux';

import * as actions from "../ducks/actions";

const mapStateToProps = (state) => ({
	currentState: state.currentState
});



  
  class ToogleContainer extends React.Component {
      
	 render(){
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
      console.log(this.props.currentState)
		 return(
            this.props.currentState === "map" ? <Map /> :<Objects items={items} /> 
			
		 )
	 }
}

export default connect(
	mapStateToProps,
	null
)(ToogleContainer);