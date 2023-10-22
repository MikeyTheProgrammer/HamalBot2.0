try {
    const {
        usersMessage,
        resetMessage,
        permissionsMessage,
        loginMessage,
        dashboardMessage,
        kfgMessage,
        dataMessage,
        arkMessage,
        WelcomeMessage
    } = require('./messages');

    const { Client } = require('whatsapp-web.js');

    const qrcode = require('qrcode');

    const client = new Client();

    const receivedOneTimeMessage = new Set();

    const pendingIssues = {};
    const pendingIssuesForData = {};

    client.on('authenticated', (session) => {
        console.log('Authenticated:', session);
    });

    client.on('auth_failure', msg => {
        console.error('Authentication failure:', msg);
    });

    client.on('qr', async (qr) => {
        console.log('QR RECEIVED');
        await qrcode.toFile('./qr_code.png', qr);
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    const targetIDs = {
        '9': '120363194824840486@g.us',
        '7': '120363192179109469@g.us',
    };

    const messages = {
        '1': usersMessage,
        '2': resetMessage,
        '3': permissionsMessage,
        '4': loginMessage,
        '5': dashboardMessage,
        '6': kfgMessage,
        '7': dataMessage,
        '8': arkMessage,
        '0': WelcomeMessage,
    }


    client.on('message', async message => {
        try {

            if (message.from === "120363194824840486@g.us" && message.hasQuotedMsg) {
          
                const quotedMsg = await message.getQuotedMessage();         
             
                const match = quotedMsg.body.match(/Issue from (\d+):/);
           
                if (match) {
            
                    const originalSender = `${match[1]}@c.us`;         
            
                    client.sendMessage(originalSender, `${message.body}`);
                }      
                return;
            }

            
            if (message.from === "120363192179109469@g.us" && message.hasQuotedMsg) {
            
                const quotedMsg2 = await message.getQuotedMessage();
              
                const match2 = quotedMsg2.body.match(/Issue from (\d+):/);
             
                if (match2) {
              
                    const originalSender2 = `${match2[1]}@c.us`;
            
                    client.sendMessage(originalSender2, `${message.body}`);
                }
                return;
            }

            if (message.from.length > 17) {
                return;
            }

        if (pendingIssues[message.from]) {
            const targetID = "120363194824840486@g.us";

            const phoneNumber = message.from.split('@')[0];

            client.sendMessage(targetID, `Issue from ${phoneNumber}:
            
            ${message.body}`);
            delete pendingIssues[message.from]; 
            return;
        }

        if (pendingIssuesForData[message.from]) {
            const targetIDforData = "120363192179109469@g.us";

            const phoneNumber2 = message.from.split('@')[0];

            client.sendMessage(targetIDforData, `Issue from ${phoneNumber2}:
            
            ${message.body}`);
            delete pendingIssuesForData[message.from]; 
            return;
        }

            if (!receivedOneTimeMessage.has(message.from)) {
                await message.reply(WelcomeMessage); 
                receivedOneTimeMessage.add(message.from); 
            }

        if (message.body === '9') {
            await message.reply("אנא פרט את בעייתך ככל האפשר בהודעה אחת, פנייתך תועבר לנציג אנושי");
            pendingIssues[message.from] = true;  
            return;
        }

        if (message.body === '7') {
            await message.reply(dataMessage);
            pendingIssuesForData[message.from] = true;  
            return;
        }

            if (!Object.keys(messages)[message.body]) {
                return;
            }

            await message.reply(messages[message.body]);

        } catch (error) {
            console.error('Failed to reply:', error);
        }
    });

    client.initialize();
} catch (error) {
    console.error('An error occurred:', error);
}
