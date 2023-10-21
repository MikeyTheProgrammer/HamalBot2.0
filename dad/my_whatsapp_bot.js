
try {
    const { Client } = require('whatsapp-web.js');
    const qrcode = require('qrcode');
    const client = new Client();

    
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
    
    
    const messages = {
        '1': 'You selected One.',
        '2': 'You selected Two.',
        '3': 'You selected Three.',
        '4': 'You selected Four.',
        '5': 'You selected Five.',
        '6': 'You selected Six.',
        '7': 'You selected Seven.',
        '8': 'You selected Eight.',
        '9': 'You selected Nine.',
    }

    client.on('message', async message => {
        try {
            if (message.from.length > 17) {
                return;
            }
            
            if (!Object.keys(messages).includes(message.body)) {
                return;
            }
        
            await message.reply(messages[message.body]);
        
        } catch (error) {
            console.error('Failed to reply:', error);
        }
    });
    
    
    
    
    
    
    client.initialize();} catch (error) {
    console.error('An error occurred:', error);
}
