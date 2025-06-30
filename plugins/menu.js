const { cmd, commands } = require('../lib/command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*ලස්සනම ලස්සන  🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™  තමා ඉතින් අනේ 💗🥹*
➺──➺──❍❍❍❍❍❍❍❍❍❍❍❍➺──➺──

> ᥫ᭡֟֟  𝐚𝐥𝐢𝐯𝐞
> ᥫ᭡֟֟  𝐨𝐰𝐧𝐞𝐫
> ᥫ᭡֟֟  𝐩𝐢𝐧𝐠
> ᥫ᭡֟  𝐜𝐡𝐫
> ᥫ᭡֟  𝐠𝐞𝐭𝐩𝐩
> ᥫ᭡֟  𝐟𝐨
> ᥫ᭡֟  𝐣𝐢𝐝
> ᥫ᭡֟  𝐯𝐯
> ᥫ᭡֟  apk
> ᥫ᭡֟֟  twitter
> ᥫ᭡֟֟  tiktok
> ᥫ᭡֟֟  fb
> ᥫ᭡֟֟  ig
> ᥫ᭡֟֟  gdrive
> ᥫ᭡֟  song
> ᥫ᭡֟֟  mfire
> ᥫ᭡֟֟  pinterest
> ᥫ᭡֟֟  yts
> ᥫ᭡֟֟  tiktoksearch
> ᥫ᭡֟  𝐬𝐞𝐭𝐭𝐢𝐧𝐠
> ᥫ᭡֟  𝐫𝐞𝐬𝐭𝐚𝐫𝐭
> ᥫ᭡֟  𝐬𝐞𝐭𝐩𝐫𝐢𝐟𝐢𝐱 

ヤ •━━━━━━━━━━━━━━━━• ヤ

 *⚕️   𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐅𝐎𝐑 𝐒𝐄𝐍𝐃 𝐒𝐎𝐍𝐆  ⚕️*

ヤ •━━━━━━━━━━━━━━━• ヤ

    💎 𝐬𝐭𝐟 /𝐒𝐄𝐓 𝐅𝐎𝐎𝐓𝐄𝐑
    💎 𝐬𝐭𝐣 /𝐒𝐄𝐓 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐉𝐈𝐃 
    💎 𝐬𝐯 /𝐒𝐄𝐍𝐃 𝐒𝐎𝐍𝐆 𝐒𝐘𝐒𝐓𝐄𝐌

➺──➺──❍❍❍❍❍❍❍❍❍❍❍❍➺──➺──

> 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/4RNRDK7L/dinuzzmd.jpg` },  // Image URL
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
