const Discord = require('discord.js');
const client = new Discord.Client();
const Simsimi = require('simsimi');

client.on('ready', () => {
	console.log('I am ready!');
});

var simsimi = new Simsimi({
  key: '23fbca8e-fce5-47d6-b07c-76fa7aca74a1'
});

client.on('message', message => {
	
	if(!message.author.bot) {
		if (message.content.includes('ดี')) {

			let item = hello[Math.floor(Math.random()*hello.length)];
			
			let dee = message.content.replace('ดี','');
			
			var foundPresent = (greet.indexOf(dee) > -1);
			
			if(foundPresent) {
				message.reply(item);
			}

		}

		if (message.content.match(/สัส.*/)) {
			let item = sud[Math.floor(Math.random()*sud.length)];
			message.reply(item);
		}

		if (message.content.match(/บอท.*/)) {
			message.reply('เรียกทำไม ?');
		}
	}
	
	//if(!message.author.bot) {
	//	simsimi.listen(message.content, function(err, msg){
	//	if(err){
	//		return console.error(err);
	//	} 
	//	else {
	//		console.log('simsimi say:', msg);
	//		message.reply(msg);
	//	}
	//	});
	//}
});

let greet = ['ครับ', 'คับ', 'ค่ะ', 'คะ', 'สวัส', 'หวัด'];

let hello = ['ดีจ้าา', 'เฮลโลวว :))', 'ว่าไง', 'อือดี'];

let sud = ['ไรมืง', 'ปากหมาว่ะ','พูดงี้แดกตีนไหม ?' ,'อย่าด่ากันเลย', 'พูดไม่เพราะเลอออ'];

client.login('MzIyNjM3MDY3MjQ1MDYwMTE4.DBvgag.5xmSkuxVB_kH2BQgIfw5p0MEJ0c');

