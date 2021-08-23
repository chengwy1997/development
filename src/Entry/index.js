import React, { Component } from 'react'
import     './index.css'
 import { HashRouter as Router,Route,Link } from 'react-router-dom'




export default class Entry extends Component {

  handleOnclick = ()=>{
    document.getElementsByClassName('wrapper_index')[0].className=''
};

    render() {
        return (
                <div className="wrapper_index"  >             
                  <Link to="/Sydney"><h1 onClick={this.handleOnclick} >Start App</h1></Link>
                </div>      
        )
    }
}



