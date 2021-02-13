const fs = require('fs-extra')
//const sleep = require('./lib/functions')

module.exports = welcome = async (iluser, event) => {
	const kont = event.who
	const a = '62'
    const tod = kont.startsWith(a)
    const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json')) 
    const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {  
        	if(!tod){
                    await iluser.sendTextWithMentions(event.chat, `Hii @${event.who.replace('@c.us', '')}.,\nThis group only accepted indonesian peaple, If u want to join, contact the admins this group to added manually`)
                    //await sleep(7000)
                    await iluser.removeParticipant(event.chat, event.who)
                } else {
                	const gChat = await iluser.getChatById(event.chat)
            		const { contact, groupMetadata, name } = gChat
					await iluser.sendTextWithMentions(event.chat, `Selamat datang @${event.who.replace('@c.us', '')} 🥰\n\nJangan lupa baca deskripsi grup ${name} 😎 \n\nKetik .menu untuk melihat fitur bot`)
                } 	
        }
            			
    } catch (err) {
        console.log(err)
    }
}