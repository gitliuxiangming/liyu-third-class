
import { ADD_ITEM,DEL_ITEM,CHANGE_ITEM,INIT_ITEM } from './storeTypes.js'

const defaultState = {
	list:['aaa','bbb','ccc'],
	value:''
}
//1.reducer是一个函数
//2.reducer是一个纯函数（固定的输入就有固定的输出）
//3.reducer的主要作用是负责业务逻辑的

export default (state=defaultState,action)=>{

	if(action.type == CHANGE_ITEM){
		/*不推荐使用
		state.value = action.payload
		return state
		*/
		const newState = JSON.parse(JSON.stringify(state));
		newState.value = action.payload;
		return newState;
	}
	if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.value);
		newState.value='';
		return newState;
	}
	if(action.type == DEL_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1)
		return newState;
	}
	if(action.type == INIT_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload;
		return newState;
	}
	return state;
};