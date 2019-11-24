import React, { Component } from 'react';
import classNames from "classNames";
import PropTypes from 'prop-types';
import Icon from "../icon"
import "./style.less"

class Button extends Component {
	constructor(props){
		super(props)
		this.state = {
	      text: "预置文字",
	    };
	}

	handleClick = () => {
		const { onClick } = this.props
		if(onClick){
			onClick()
		}
	}

	render(){
		const { text } = this.state
		const { children, onClick } = this.props
		return(
			<button className="button" onClick={this.handleClick}> 
				<Icon type="coffee" /> { text } { children }
			</button>
		)
	}
}

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;