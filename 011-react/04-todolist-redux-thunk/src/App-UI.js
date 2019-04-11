import React, { Component,Fragment } from 'react';
import { Button,List,Input,Col,Row } from 'antd'

import './App.css';

/*
class AppUI extends Component {
	
	render(){
		return (
			<Fragment>
			<div className="box">
				<Row>
					<Col span={18}>
						<Input 
							value={this.props.value} 
							onChange={this.inputChange} 
						/>
					</Col>
					<Col span={6}>
						<Button onClick={this.btnClick} >新增</Button>
					</Col>
				</Row>
				<List 
					style = {{ marginTop:'20px' }}
				    bordered
				    dataSource={this.props.list}
				    renderItem={
				    	(item,index) => (
				    		<List.Item
				    			onClick = {()=>{this.props.handleDelete(index)}}
					    	>
					    	{item}
					    	</List.Item>
					    )
				    }
				/>

			</div>
			</Fragment>
		)
	}
}
*/
//UI组件
const AppUI = (props)=>{
	const { value,inputChange,btnClick,list,handleDelete } = props;
	return (
		<Fragment>
		<div className="box">
			<Row>
				<Col span={18}>
					<Input 
						value={value} 
						onChange={inputChange} 
					/>
				</Col>
				<Col span={6}>
					<Button onClick={btnClick} >新增</Button>
				</Col>
			</Row>
			<List 
				style = {{ marginTop:'20px' }}
			    bordered
			    dataSource={list}
			    renderItem={
			    	(item,index) => (
			    		<List.Item
			    			onClick = {()=>{handleDelete(index)}}
				    	>
				    	{item}
				    	</List.Item>
				    )
			    }
			/>

		</div>
		</Fragment>
	)	

}

export default AppUI;
