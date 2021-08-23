import React, { Component } from 'react'
import  './index.css'
import refresh from '../image/Resources/refresh.png'
import  LeftArrow from '../image/Resources/leftArrow.png'
import  RightArrow from '../image/Resources/rightArrow.png'
import { HashRouter as Router,Route,Link } from 'react-router-dom'
import {Provider} from "react-redux";
import Counter from "./ReactReduxCounter";
import store from "./store";


export default class index extends Component {
  

    render() {
        return (
            <div className='wrapper'>

            {/* 巴西的图片页面 */}
            <div className='contain'>
                  <div className="font"><span>Melbourne</span></div>
                  <div className="content">
                  <Provider store={store}>
                             <Counter></Counter>
                     </Provider>
                      <div className="bottom">
                      <div><span className='span1'>25°</span></div>
                      <div>
                       <span>18°</span>
                       <span>29°</span>
                      </div>
                      <div><span className='span2'>Thundershowers</span></div>
                  </div>
                  </div>
                  <div className='btn_Sys1 btn_Sys'>   <Link to="/Brisban"> <img src={LeftArrow} className='btn_Sys1' alt="" /></Link>   </div>         
                  <div className='btn_Sys2 btn_Sys '>  <Link to='/Sydney'> <img src={RightArrow}  className='btn_Sys2' alt=""  /></Link> </div>
            </div> 
            </div>
        )
    }
}
