import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
				<FontAwesomeIcon icon={faCoffee} /> { text } { children }
			</button>
		)
	}
}

export default Button;