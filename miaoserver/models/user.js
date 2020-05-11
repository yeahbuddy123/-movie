var mongoose=require('mongoose');

var UserSchema=new mongoose.Schema({
	username:{ type:String,required:true,index:{unique:true}},
	password:{type:String,required:true},
	email:{type:String,required:true,index:{unique:true}},
	date:{type:Date,default:Date.now()}
})

var UserModel=mongoose.model('user',UserSchema);
UserModel.createIndexes();

var save=()=>{
	var user=new UserModel(data)
	return user.save().then(()=>{
		return true;
	})
	.catch(()=>{
		return false;
	})
};
var findLogin=(data)=->{
	return UserModel.findOne(data);
}

var updatePassword=(email,password)=>{
	return UserModel.update({email},{$set:{password}}).then(()=>{
		return true;
	}).catch(()=>{
		return false;
	})
}
module.exports={
	save
}