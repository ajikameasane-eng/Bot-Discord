
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages
    ]
});

client.on('ready', () => {
    console.log(`Bot đã đăng nhập với tên: ${client.user.tag}`);
});

// Sự kiện khi có người mới vào server
client.on('guildMemberAdd', member => {
    // Lấy kênh hệ thống (kênh chào mừng mặc định của server)
    const channel = member.guild.systemChannel;

    if (!channel) return;

    channel.send(`Chào mừng ${member} đã vào server! 🎉`);
});

// Đăng nhập bot TOKEN
client.login(process.env.TOKEN);
