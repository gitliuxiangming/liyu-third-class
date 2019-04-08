const mongoose = require('mongoose');
//构建数据用
const getRandom	= (min,max)=>{	
	return Math.round(min + (max-min)*Math.random());
}

const names = ["Amy","Tom","Leo","Peter","Ricky","Lucy","Andy","Mike"];
const majors = ["art","computer","sport","music"];

const getName = ()=> names[getRandom(0,names.length-1)]
const getMajor = ()=> majors[getRandom(0,majors.length-1)]

//1.连接数据库服务
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});

db.once('open', ()=>{
	//2.定义Schema
	const UserSchema =  new mongoose.Schema({
		name: {
			type:String,
			default:"Mark",
			maxlength:[8,"最多5位字符"],
			minlength:[3,"最小3位字符"]
		},
		age:{
			type:Number,
			required:[true,"年龄必须输入"],
			min:[18,"最小年龄是18"],
			max:[40,"最大年龄是40"]
		},
		major:{
			type:String,
			enum:["art","computer","sport","music"]
		},
	});
	//3.生成模型Model
	//3.1 mongoose.model第一个参数是指定集合的名称,mongoose会自动变为复数
	//3.2 mongoose.model第二个参数指定Schema
	const UserModel = mongoose.model('user', UserSchema);


	//4.用模型操作数据(CRUD)
	

	const user = new UserModel({name:"Amy",age:18,major:"aaa"});
	
	user.save((err,doc)=>{
		if(err){
			console.log('save user error::',err);
		}else{
			console.log(doc);
		}
	})





	
	
	
	
 	 	





});