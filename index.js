// ⚠️ 実行禁止！学習用のサンプルです

const { Client } = require('discord.js');
const client = new Client({ intents: [] }); // イベント監視だけ

// ユーザートークンではなく、環境変数から読み込む形
// process.env.USER_TOKEN に自分のユーザートークンを入れるとセルフボットになる（危険）
const USER_TOKEN = process.env.USER_TOKEN;

// 接続時イベント
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// メッセージ監視の例
client.on('messageCreate', message => {
    if (message.author.id === client.user.id) return; // 自分のメッセージは無視
    if (message.content === 'ping') {
        // 自動返信（実際には規約違反です）
        message.reply('pong');
    }
});

// ⚠️ 実行するとアカウントBANの危険があります
client.login(USER_TOKEN);
