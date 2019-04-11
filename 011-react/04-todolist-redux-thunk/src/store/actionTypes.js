import { ADD_ITEM,DEL_ITEM,CHANGE_ITEM,INIT_ITEM } from './storeTypes.js'


export const getAddItemAction = ()=>{
	return {
		type:ADD_ITEM
	}
}

export const getChangeItemAction = (payload)=>{
	return {
		type:CHANGE_ITEM,
		payload
	}
}

export const getDelItemAction = (payload)=>{
	return {
		type:DEL_ITEM,
		payload
	}
}
export const GetInitDataAction = (payload)=>{
	return {
		type:INIT_ITEM,
		payload
	}
}