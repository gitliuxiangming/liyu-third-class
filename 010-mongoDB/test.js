 new mongoose.Schema({
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

//定义实例方法
UserSchema.methods.findBlogs = function(callback){
	//console.log(this);
	//console.log(this.model('blog'));
	this.model('blog').find({author:this._id},callback);
}
//定义静态方法
UserSchema.statics.findByPhone = function(val,callback){
	// console.log(val)
	//console.log(this)
	//console.log(this.model('user') === this);
	this.findOne({phone:val},callback)
}