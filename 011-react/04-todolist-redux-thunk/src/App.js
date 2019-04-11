import React, { Component,Fragment } from 'react';
import store from './store/index.js'
import axios from 'axios'
import { Button,List,Input,Col,Row } from 'antd'
import { getAddItemAction,getChangeItemAction,getDelItemAction,GetInitDataAction } from './store/actionTypes.js'
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
	componentDidMount(){
		axios
		.get('http://127.0.0.1:3001')
		.then((data)=>{
			// console.log(data)
			
			const action=GetInitDataAction(data.data);
			//发送给store的数据
			store.dispatch(action);
			
		})
		.catch((e)=>{
			console.log(e);
		})
	}
	btnClick(){

		const action = getAddItemAction();
		//通过调用store上的dispatch方法派发action到store
		//store又将action转发给reducer
		//最终由reducer来处理action
		store.dispatch(action)
	};
	inputChange(e){
		var value = e.target.value;
		const action = getChangeItemAction(value)
		store.dispatch(action)
	};
	
	handleDelete(index){
		const action = getDelItemAction(index);
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
