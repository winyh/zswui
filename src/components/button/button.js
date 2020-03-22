import React, { Component } from 'react';
import classNames from 'classnames';
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
		const { children, type, onClick } = this.props
		const cls = classNames('zsw-btn', type)
		return(
			<button className={cls} onClick={this.handleClick}> 
				<Icon type="coffee" /> { text } { children }
			</button>
		)
	}
}

Button.propTypes = {
  type:PropTypes.string,
  onClick: PropTypes.func
};

export default Button;