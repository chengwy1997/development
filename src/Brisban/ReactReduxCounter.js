
import React, { Component } from 'react';
import {connect} from "react-redux"
import refresh from '../image/Resources/refresh.png'
// import  rain from '../image/Resources/refresh.png'
//子组件
class Counter extends Component {
    //方法调用后自动更新数据
    increment=()=>{
        this.props.increment()
        document.getElementById('btn3').remove="display:none"
    }
    render() {
        return (
            <div>
                <div>{this.props.num}</div>
                <img src={refresh} id="btn3"  alt="" onClick={this.increment} />
            </div>
        );
    }
}

//该函数作为connect的第一个参数，能拿到state
//映射state到组建的props上
function mapStateToProps(state){
    return {
        num:state.counter
    }
}

//该函数作为connect的第二个参数，能拿到dispatch
//映射dispatch方法到组建的props上
function mapDispatchToProps(dispatch){
    return {
        increment(){
            dispatch({
                type:"increment"
            })
        }, 
    }
}

//connet函数执行返回一个高阶组件
//调用这个高阶组件，传入当前组件Counter作为参数,返回一个增强的Counter组件
//这个增强的组件props里有store的state和dispach方法
export default connect( mapStateToProps , mapDispatchToProps )(Counter)