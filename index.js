const { Client } = require('discord.js');
const client = new Client({ intents: [] }); // イベント監視だけ

// 環境変数からトークンを取得
const USER_TOKEN = process.env.USER_TOKEN;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.id === client.user.id) return; // 自分のメッセージは無視
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

// 環境変数から取得したトークンでログイン
client.login(USER_TOKEN);
