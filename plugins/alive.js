const { cmd, commands } = require('../lib/command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `          
╭━━━━━┈⊷
┃◈| *👾owner* : *# 𝐈ᴛᴢ 𝐌ᴇ  𝐑ᴇᴀʟ  ꜱᴜᴅᴜ ʙʙʜ͠     ヤ*
┃◈| *🌸bot owner* : *𝐒ʜᴇʜᴀʀᴀ*
┃◈| *⏳Uptime* :  ${runtime(process.uptime())} 
┃◈| *📟Ram* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
╰──────────────┈⊷
> 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/CsDmCPwx/dinuzzmd.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363296605464049@newsletter',
                    newsletterName: '🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™',
                    serverMessageId: 190
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
