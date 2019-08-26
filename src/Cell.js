
import React, { Component } from 'react';


export default class Cell extends Component {

constructor(props) {
	  super(props)
	 	this.state = {
	 		color: props.value
	 	}
	}

	change = () =>{
		this.setState({
			 color: '#333'
		})
	}

  render(props) {
		
  	//debugger
    return (
      <div className="cell" id="cell" onClick={this.change} style={{backgroundColor: this.state.color}}>
        {this.state.color}
      </div>
    )
  }
}