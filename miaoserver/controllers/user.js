var {Email}=require('../untils/config.js')
var UserModel=require('../untils/config.js')

var login=async(req,res,next)=>{
	var {username ,password}=req.body;
	var result=await UserModel.findLogin({
		username,
		password
	});
	if(result){
		res.send({
			msg:'登陆成功',
			status:0
		});
	}else{
		res.send({
			msg:'登陆失败',
			status:-1
		});
	}
};
var register=async(req,res,next)=>{
	
};
var verify=async(req,res,next)=>{
	var email=req.query.email;
	var verify=Email.verify;
	req.session.verify=verify;
	req.session.email=email;
	var mailOptions={
		from: 'miaonet n666@qq.com', 
		to: email, 
		subject: "miaonet邮箱验证码", 
		text: "验证码:"+Email.verify, 
	}
	var info=await Email.transporter.sendMail(mailOptions)
	if(info){
		res.send({
			msg:'验证码发送成功',
			status:0
		})
	}else{
		res.send({
			msg:'验证码发送失败',
			status:-1
		})
	}
	var result=await UserModel.save({
		username,
		password,
		email
	});
	if(result){
		res.send({
			msg:'注册成功',
			status:0
		});
	}else{
		res.send({
			msg:'注册失败',
			status:-2
		})
	}
};
var logout=async(req,res,next)=>{
	req.session.username='';
	res.send({
		msg:'退出成功',
		status:0
	})
};
var getUser=async(req,res,next)=>{
	if(req.session.username){
		res.send({
			msg:'获取用户信息成功',
			status:0,
			data:{
				username:req.session.username,
				isAdmin:req.session.isAdmin
			}
		});
	}
	else{
		res.send({
			msg:'获取用户信息失败',
			status:-1,
			});
	}
};
var findPassword=async(req,res,next)=>{
	var {email,password,verify}=req.body;
	if(email===req.session.email && req.session.verify){
		var result=await UserModel.findPassword(email,password);
		if(result){
			res.send({
				msg:'修改密码成功',
				status:0
			})
		}else{
			res.send({
				msg:'修改密码失败',
				status:-1
			})
		}
	}else{
		res.send({
			msg:'验证码失败',
			statusL-1
		})
	}
};

module.exports={
	login,
	register,
	verify,
	logout,
	getUser,
	findPassword
}