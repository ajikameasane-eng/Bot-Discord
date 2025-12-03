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

client.on('guildMemberAdd', member => {

    // Nhập ID kênh chào mừng của cậu vào đây
    const welcomeChannelId = "1445717561944838328";

    // Lấy kênh từ server
    const channel = member.guild.channels.cache.get(welcomeChannelId);

    if (!channel) return console.log("Không tìm thấy kênh chào mừng!");

    channel.send(`🎉 Chào mừng ${member} đã tham gia server!`);
});

client.login(process.env.TOKEN);
