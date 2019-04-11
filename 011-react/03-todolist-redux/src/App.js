import React, { Component,Fragment } from 'react';
import store from './store/index.js'
import { Button,List,Input,Col,Row } from 'antd'
import { getAddItemAction,getChangeItemAction,getDelItemAction } from './store/actionTypes.js'
import AppUI from './App-UI.js'

import './App.css';


//容器组件
class App extends Component {
	constructor(options){
		super(options);
		//初始化时获取store中的数据
		this.state=store.getState()
		//当store中的数据发生变化时触发
		store.subscribe(()=>{
			//获取store中最新数据，来更新当前组件的state数据
			this.setState(()=>store.getState())

		});
		this.handleDelete=this.handleDelete.bind(this)
		this.inputChange=this.inputChange.bind(this)
		this.btnClick=this.btnClick.bind(this)
	}
	btnClick(){
		/*
		this.setState((preState)=>({
			list:[...preState.list,preState.value],
			value:'',
		}))
		*/
		/*
		const action = {
			type:ADD_ITEM,
		}
		*/
		const action = getAddItemAction();
		//通过调用store上的dispatch方法派发action到store
		//store又将action转发给reducer
		//最终由reducer来处理action
		store.dispatch(action)
	};
	inputChange(e){
		var value = e.target.value;
		/*
		const action = {
			type:CHANGE_ITEM,
			payload:value
		}
		*/const action = getChangeItemAction(value)
		store.dispatch(action)
	};
	
	handleDelete(index){
		/*
		this.setState((preState)=>{
			var list = [...preState.list]
			list.splice(index,1)
			return{
					list
				}
		})
		*/
		/*
		const action = {
			type:DEL_ITEM,
			payload:index
		}
		*/const action = getDelItemAction(index);
		store.dispatch(action)
	}

	render(){
		return(
			<AppUI 
				inputChange = {this.inputChange} 
				value = {this.state.value}
				btnClick = {this.btnClick}
				list = {this.state.list}
				handleDelete = {this.handleDelete}
			/>
		)
		
		
	}
}

export default App;
