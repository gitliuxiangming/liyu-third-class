const str = 'hello world';
const fn = ()=>{
	console.log(str)
}
const obj = {
	name:'tom',
	age:18
}
/*
module.exports={
	str,
	fn,
	obj
}; 
*/
module.exports.fn = fn;
module.exports.str = str;
