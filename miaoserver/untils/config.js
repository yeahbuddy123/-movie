var mongoose=require('mongoose');

var Mongoose={
	url:'mongodb://localhost:27017/miao',
	connect(){
		mongoose.connect(this.url,{ userNewUrlParser:true },(err)=>{
			ir(err){
				console.log('数据库连接失败');
				return
			}
			console.log('数据库连接成功')
		})
	}
}
var Email={
	config:{
		host: "smtp.qq.com",
		    port: 587,
		    secure: false, // true for 465, false for other ports
		    auth: {
		      user: testAccount.user, // generated ethereal user
		      pass: testAccount.pass // generated ethereal password
		    }
	},
	get transporter(){
		return nodemailer.createTransport(this.config)
	},
	get verify(){
		return Math.random().toString().substring(2,6)
	}
}

module.exports={
	Mongoose,
	Email
}