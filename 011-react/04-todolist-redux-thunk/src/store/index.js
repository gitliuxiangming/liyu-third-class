import { createStore } from 'redux';
import reducer from './reducer.js'

//1.store是负责整个数据的管理
//2.整个应用只有一个store
//3.
const store  = createStore(reducer);


export default store;