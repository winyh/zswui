import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import "./style.less"

class Icon extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { type } = this.props
		return(
			<FontAwesomeIcon icon={type} />
		)
	}
}

export default Icon;