import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from "../icon"
import { PREFIX } from "../_util"
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
		const { children, type, disabled, onClick } = this.props
		const cls = classNames(`${PREFIX}-btn`, `${PREFIX}-${type}`)

		return(
			<button className={cls} onClick={this.handleClick} disabled={disabled}> 
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