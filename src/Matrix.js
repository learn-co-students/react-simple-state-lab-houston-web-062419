import React, { Component } from 'react';
import {pattern1} from "./data.js"
import Cell from "./Cell.js"




export default class Matrix extends Component {


  genRow = (vals) => (
    vals.map(val => <div className="cell"><Cell value = {val}/></div>)
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

const reds_array  =  () => {
    var x = new Array(10);
      for (var i = 0; i < x.length; i++) {
        x[i] = new Array(10);
        for (var j = 0; j < x[i].length; j++) {
          x[i][j] = '#F00'
        }
      }
    return x
  }


Matrix.defaultProps = {
  values: reds_array()

}
