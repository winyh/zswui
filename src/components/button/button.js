import React, { Component } from 'react';
import Icon from "../icon"
import "./style.less"

class Button extends Component {
	constructor(props){
		super(props)
		this.state = {
	      text: "预置文字",
	    };
	}

	render(){
		const { text } = this.state
		const { children } = this.props
		return(
			<button className="button"> 
				<Icon type="coffee" /> { text } { children }
			</button>
		)
	}
}

export default Button;