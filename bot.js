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
	
	let msg = message.content;
	if(!message.author.bot) {
		if (msg.includes('ดี')) {

			let item = hello[Math.floor(Math.random()*hello.length)];
			
			let dee = msg.replace('ดี','');
			
			var foundPresent = (greet.indexOf(dee) > -1);
			
			if(foundPresent) {
				message.reply(item);
			}

		}

		if (msg.includes('บอท')) {
			let item = botrep[Math.floor(Math.random()*botrep.length)];
			message.reply(item);
		}
		
		if (msg.includes('สัส') ) {
			let item = sud[Math.floor(Math.random()*sud.length)];
			message.reply(item);
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


client.on('guildMemberAdd', member => {

  member.guild.defaultChannel.send(`เรียน  ผู้บริการ Rotate Plus คณาจารย์ และแขกผู้มีเกียรติ  ที่เคารพอย่างสูง  สวัสดี พี่ ๆ และเพื่อนทุกคน ดิฉัน ${member} ได้รับมอบหมายจากคณะกรรมการ Rotate Plus ให้ทำหน้าที่เล่นเกม ร่วมใจสัมพันธ์ ในสมาคมนี้ `);

  const channel = member.guild.channels.find('name', 'member-log');

  if (!channel) return;
  
  channel.send(`เรียน  ผู้บริการ Rotate Plus คณาจารย์ และแขกผู้มีเกียรติ  ที่เคารพอย่างสูง  สวัสดี พี่ ๆ และเพื่อนทุกคน ดิฉัน ${member} ได้รับมอบหมายจากคณะกรรมการ Rotate Plus ให้ทำหน้าที่เล่นเกม ร่วมใจสัมพันธ์ ในสมาคมนี้ `);
  
});



let greet = ['ครับ', 'คับ', 'ค่ะ', 'คะ', 'สวัส', 'หวัด'];

let hello = ['ดีจ้าา', 'เฮลโลวว :))', 'ว่าไง', 'อือดี'];

let sud = ['ไรมืง', 'ปากหมาว่ะ','พูดงี้แดกตีนไหม ?' ,'อย่าด่ากันเลย', 'พูดไม่เพราะเลอออ'];

let botrep = ['เรียกเพื่อ?', 'อะไรอีก', 'หุบปาก', 'พูดเยอะ ลำไย' ];

client.login('MzIyNjM3MDY3MjQ1MDYwMTE4.DBvgag.5xmSkuxVB_kH2BQgIfw5p0MEJ0c');

