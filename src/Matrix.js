import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <div className="cell">  <Cell value={val}/> </div>) 
    )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      
      </div>
    )
  }
  
}
var fullArray =[]
var array = []
for (var j = 0; j < 10; j++){
  for (var i = 0; i < 1; i++){
    array.push('#F00')
  }
  fullArray.push(array)
}

Matrix.defaultProps = {
  values: fullArray
}
