const { BufferJSON, WA_DEFAULT_EPHEMERAL,updateProfilePicturePrivacy, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage} = require('@whiskeysockets/baileys');
const { cmd, commands } = require("../lib/command");
const {
  GDriveDl,
  mediafireDl,
  getBuffer,
  getGroupAdmins,
  getRandom,
  getimage,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  Func,
  fetchJson
} = require("../lib/functions");
const config = require('../settings'); // Ensure your API key is in config
const fetch = require("node-fetch");
const yts = require("yt-search");
const axios = require('axios');
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const apilink = 'https://www.dark-yasiya-api.site' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "download",
    alias: ["downurl"],
    use: '.download < link>',
    react: "📁",
    desc: "Search and get details from youtube.",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
    if (!q) {
      return reply("❗ කරුණාකර download link එකක් ලබා දෙන්න."); // "Please provide a download link."
    }

    const link = q.trim();
    const urlPattern = /^(https?:\/\/[^\s]+)/;

    if (!urlPattern.test(link)) {
      return reply("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න."); // "The provided URL is incorrect. Please check the link carefully."
    }
let info = `> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™`;

   await conn.sendMessage(from, {
                        document: { url: link},
                        mimetype: "video/mp4",
                        fileName: `QSM.mp4`, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                        caption: info
                                            
                      }, { quoted: mek });

} catch (e) {
        console.log(e);
        reply(`${e}`);
        }
    });  


cmd({
    pattern: "apk",
    desc: "Download apk.",
    category: "download",
    use: ".apk",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("⬇")
      
const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${q}/limit=1`;
const response = await axios.get(apiUrl);
const data = response.data;

let step1 = data.datalist.list[0].size % 1000000
let step2 = `.` + step1
let step3 = data.datalist.list[0].size / 1000000
let correctsize = step3 - step2
    
let desc = `
*APP NAME :* ${data.datalist.list[0].name}
*Last Update :* ${data.datalist.list[0].updated}

> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™
`
await m.react("⬆")
await conn.sendMessage(from,{
    document: {url: data.datalist.list[0].file.path_alt},
    fileName: data.datalist.list[0].name,
    mimetype: 'application/vnd.android.package-archive',
    caption: desc,
    contextInfo: {
        mentionedJid: ['94775341543@s.whatsapp.net'], // specify mentioned JID(s) if any
        groupMentions: [],
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363296605464049@newsletter',
            newsletterName: "🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™",
            serverMessageId: 999
        },
        //externalAdReply: {
            //title: 'LARA MD',
            //body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
            //mediaType: 1,
            //sourceUrl: "https://github.com/sadiyamin",
            //thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
            //renderLargerThumbnail: false,
            //showAdAttribution: true
        }
    //}
    }, {quoted: mek});
    
        
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})



//=========================================================
//===================================
cmd({
    pattern: "tiktok",
    alias: ["ttdl", "tt", "tiktokdl"],
    desc: "Download TikTok video without watermark",
    category: "download",
    use: ".tiktok <link>",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("Please provide a TikTok video link.");
        if (!q.includes("tiktok.com")) return reply("Invalid TikTok link.");
        
        reply("Downloading video, please wait...");
        
        const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status || !data.data) return reply("Failed to fetch TikTok video.");
        
        const { title, like, comment, share, author, meta } = data.data;
        const videoUrl = meta.media.find(v => v.type === "video").org;
        
        const caption = `🎵 *TikTok Video* 🎵\n\n` +
                        `👤 *User:* ${author.nickname} (@${author.username})\n` +
                        `📖 *Title:* ${title}\n` +
                        `👍 *Likes:* ${like}\n💬 *Comments:* ${comment}\n🔁 *Shares:* ${share}`;
        
        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: mek });
        
    } catch (e) {
        console.error("Error in TikTok downloader command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd({
    pattern: "ytpost",
    alias: ["ytcommunity", "ytc"],
    desc: "Download a YouTube community post",
    category: "download",
    use: ".ytpost <link>",
    react: "📩",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a YouTube community post URL.\nExample: `.ytpost <url>`");

        const apiUrl = `https://api.siputzx.my.id/api/d/ytpost?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌");
            return reply("Failed to fetch the community post. Please check the URL.");
        }

        const post = data.data;
        let caption = `📢 *YouTube Community Post* 📢\n\n` +
                      `📜 *Content:* ${post.content}`;

        if (post.images && post.images.length > 0) {
            for (const img of post.images) {
                await conn.sendMessage(from, { image: { url: img }, caption }, { quoted: mek });
                caption = ""; // Only add caption once, images follow
            }
        } else {
            await conn.sendMessage(from, { text: caption }, { quoted: mek });
        }

        await react("✅");
    } catch (e) {
        console.error("Error in ytpost command:", e);
        await react("❌");
        reply("An error occurred while fetching the YouTube community post.");
    }
});
//====================================

cmd({
    pattern: "mediafire",
    alias: "mfire",
    desc: "To download MediaFire files.",
    react: "🎥",
    category: "download",
    use: ".mfire",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        if (!q) return m.reply("Please provide a valid MediaFire link.");
        
        // React to indicate download start
        m.react('⬇️');
        
        // Fetch file information from the Dark Yasiya API
        const response = await axios.get(`https://www.dark-yasiya-api.site/download/mfire?url=${q}`);
        const resData = response.data;

        if (!resData || !resData.status || !resData.result || !resData.result.dl_link) {
            return m.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
        }

        const fileUrl = resData.result.dl_link;
        const fileName = resData.result.fileName || "mediafire_download";
        const fileType = resData.result.fileType || "application/octet-stream";
        
        // React to indicate file is being sent
        m.react('⬆️');

        let msg = `

*ꜰɪʟᴇ ɴᴀᴍᴇ :* ${fileName}

│*ꜰɪʟᴇ ᴛʏᴘᴇ :* ${fileType}
│*ꜰɪʟᴇ ɴᴀᴍᴇ :* ${fileName}
│*ꜰɪʟᴇ ᴛʏᴘᴇ :* ${fileType}

> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™
        `

        // Send file to chat without downloading
        await conn.sendMessage(from, {
          document: { url: fileUrl},
          mimetype: fileType,
          fileName: fileName, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
          caption: msg,
          contextInfo: {
            mentionedJid: ['94775341543@s.whatsapp.net'], // specify mentioned JID(s) if any
            groupMentions: [],
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363296605464049@newsletter',
                newsletterName: "🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™",
                serverMessageId: 999
            },
            //externalAdReply: {
                //title: 'LARA MD',
                //body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                //mediaType: 1,
                //sourceUrl: "https://github.com/sadiyamin",
                //thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                //renderLargerThumbnail: false,
                //showAdAttribution: true
            }
        //}
 }, {quoted: mek});

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
  

//===================================================

cmd({
    pattern: "pindl",
    alias: ["pinterestdl", "pin", "pins", "pindownload"],
    desc: "Download media from Pinterest",
    category: "download",
    use: ".pindl <link>",
    filename: __filename
}, async (conn, mek, m, { args, quoted, from, reply }) => {
    try {
        // Make sure the user provided the Pinterest URL
        if (args.length < 1) {
            return reply('❎ Please provide the Pinterest URL to download from.');
        }

        // Extract Pinterest URL from the arguments
        const pinterestUrl = args[0];

        // Call your Pinterest download API
        const response = await axios.get(`https://api.giftedtech.web.id/api/download/pinterestdl?apikey=gifted&url=${encodeURIComponent(pinterestUrl)}`);

        if (!response.data.success) {
            return reply('❎ Failed to fetch data from Pinterest.');
        }

        const media = response.data.result.media;
        const description = response.data.result.description || 'No description available'; // Check if description exists
        const title = response.data.result.title || 'No title available';

        // Select the best video quality or you can choose based on size or type
        const videoUrl = media.find(item => item.type.includes('720p'))?.download_url || media[0].download_url;

        // Prepare the new message with the updated caption
        const desc = `*🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™*
╭━━❐━⪼
┇๏ *Title* - ${title}
┇๏ *Media Type* - ${media[0].type}
╰━━❑━⪼
> 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™`;

        // Send the media (video or image) to the user
        if (videoUrl) {
            // If it's a video, send the video
            await conn.sendMessage(from, { video: { url: videoUrl }, caption: desc }, { quoted: mek });
        } else {
            // If it's an image, send the image
            const imageUrl = media.find(item => item.type === 'Thumbnail')?.download_url;
            await conn.sendMessage(from, { image: { url: imageUrl }, caption: desc }, { quoted: mek });
        }

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('❎ An error occurred while processing your request.');
    }
});





//=============================================================================================

cmd({
    pattern: "twitter",
    alias: ["tweet", "twdl"],
    desc: "Download Twitter videos",
    category: "download",
    use: ".tweet < link>",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return conn.sendMessage(from, { text: "❌ Please provide a valid Twitter URL." }, { quoted: mek });
    }

    // React to indicate processing start
    await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });

    // Fetch video information from Dark Yasiya Twitter API
    const twitterData = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = twitterData.data;

    if (!data || !data.status || !data.result) {
      return m.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { desc, thumb, video_sd, video_hd } = data.result;
    const captionHeader = `
 ╭──────────────────❖
 │ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢
 │
 │ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ 🎬      
 │
 │ _1.1_ *ꜱᴅ ᴠɪᴅᴇᴏ ꜰɪʟᴇ 📽️*
 │ _1.2_ *ʜᴅ ᴠɪᴅᴇᴏ ꜰɪʟᴇ 📽️*
 │ 
 │ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ 🎧
 │
 │ _2.1_ *ᴀᴜᴅɪᴏ*
 │ _2.2_ *ᴅᴏᴄᴜᴍᴇɴᴛ*
 │ _2.3_ *ᴠᴏɪᴄᴇ*
 
 ╰──────────────────❖
> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈  🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™
`;

    const sentMsg = await conn.sendMessage(from, {
      image: { url: thumb}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
      caption: captionHeader,
      contextInfo: {
        mentionedJid: ['94775341543@s.whatsapp.net'], // specify mentioned JID(s) if any
        groupMentions: [],
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363296605464049@newsletter',
            newsletterName: "🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™",
            serverMessageId: 999
        },
        //externalAdReply: {
            //title: 'DARK NERO',
            //body: 'ᴅᴀʀᴋ ɴᴇʀᴏ',
            //mediaType: 1,
            //sourceUrl: "https://github.com/MALAKA-CM/DARK NERO-V1",
            //thumbnailUrl: 'https://i.ibb.co/JrdxHSY/3439.jpg', // This should match the image URL provided above
            //renderLargerThumbnail: false,
            //showAdAttribution: true
        }
    //}
}, {quoted: mek});
    const messageID = sentMsg.key.id;

    // Listen for the user's response
    conn.ev.on('messages.upsert', async (messageUpdate) => {
      const mek = messageUpdate.messages[0];
      if (!mek.message) return;
      const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
      const from = mek.key.remoteJid;

      // Check if the message is a reply to the previously sent message
      const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

      if (isReplyToSentMsg) {
        // React to the user's selection
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });

        if (messageType === '1.1') {
          // Send SD video
          await conn.sendMessage(from, {
            video: { url: video_sd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: "*🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™ · · ·👩‍💻*"}, { quoted: mek });
        } else if (messageType === '1.2') {
          // Send HD video
          await conn.sendMessage(from, {
            video: { url: video_hd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: "*🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™· · ·👩‍💻*"}, { quoted: mek });
        } else if (messageType === '2.1') {
          // Send audio as an audio file
          await conn.sendMessage(from, { audio: { url: video_sd }, mimetype: "audio/mpeg" }, { quoted: mek });
        } else if (messageType === '2.2') {
          // Send audio as a document file
          await conn.sendMessage(from, {
            document: { url: video_sd },
            mimetype: "audio/mpeg",
            fileName: `QSM/TWDL.mp3`,
            caption: "*𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™· · ·👩‍💻*",
            contextInfo: {
                mentionedJid: ['94775341543@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363296605464049@newsletter',
                    newsletterName: "🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™",
                    serverMessageId: 999
                },
                //externalAdReply: {
                    //title: 'DARK NERO',
                    //body: 'ᴅᴀʀᴋ ɴᴇʀᴏ',
                    //mediaType: 1,
                    //sourceUrl: "https://github.com/MALAKA-CM/DARK NERO-V1",
                    //thumbnailUrl: 'https://i.ibb.co/JrdxHSY/3439.jpg', // This should match the image URL provided above
                    //renderLargerThumbnail: false,
                    //showAdAttribution: true
                }
            //}
     }, {quoted: mek});
        } else if (messageType === '2.3') {
          // Send audio as a voice note (ptt)
          await conn.sendMessage(from, { audio: { url: video_sd }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek });
        }
    }
    });
  } catch (e) {
    console.log(e);
    reply(`An error occurred: ${e}`);
  }
});

//====================================

cmd({

    pattern: "gdrive",
    desc: "To download Gdrive files.",
    react: "🌐",
    category: "download",
    use: ".gdrive < link>",
    filename: __filename
  
  },
  
  async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  
  try{
    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
  if (!q) return m.reply(`Please Give Me a vaild Link...`);
  
  const apiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${q}&apikey=mnp3grlZ`;

  const downloadResponse = await axios.get(apiUrl);
                            const downloadUrl = downloadResponse.data.result.downloadUrl; // Assuming this is the correct path

                            if (downloadUrl) {
                                // Send the video as a document (.mp4)
                                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
                                await conn.sendMessage(from, {
                                    document: { url: downloadUrl },
                                    mimetype: downloadResponse.data.result.mimetype,
                                    fileName: downloadResponse.data.result.fileName,
                                    caption: `> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™`,
                                    contextInfo: {
                                        mentionedJid: ['94775341543@s.whatsapp.net'], // specify mentioned JID(s) if any
                                        groupMentions: [],
                                        forwardingScore: 1,
                                        isForwarded: true,
                                        forwardedNewsletterMessageInfo: {
                                            newsletterJid: '120363296605464049@newsletter',
                                            newsletterName: "🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™",
                                            serverMessageId: 999
                                        },
                                        //externalAdReply: {
                                            //title: 'LARA MD',
                                            //body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                                            //mediaType: 1,
                                            //sourceUrl: "https://github.com/sadiyamin",
                                            //thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                                            //renderLargerThumbnail: false,
                                            //showAdAttribution: true
                                        }
                                    //}
                                    }, {quoted: mek});
                            }
         
                            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
  }catch(e){
  console.log(e)
  }
  });
  
//====================================

cmd({
    pattern: "fb",
    desc: "To download facebook videos.",
    category: "download",
    use: ".fb2 < link>",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

 await conn.sendMessage(from, { text: '📥 *🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™  DOWNLOAD SYSYTEM WAIT...* 📥' }, { quoted: mek });


  if (!args[0]) {
    return reply('*`Please give a waild Facebook link`*');
  }

  await m.react('🕒');
  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return reply('*`Error obtaining data.`*');
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return reply('*`No resalt found.`*');
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return reply('*`Error data loss.`*');
  }

  if (!data) {
    return reply('*`No data found.`*');
  }

  await m.react('✅');
  let video = data.url;
  let dev = '© 2025  FB DOWNLOAD HD.'
  
  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: dev, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return reply('*`Error download video.`*');
  await m.react('❌');
  }
}catch(e){
console.log(e)
  reply(`${e}`)
}
});

//====================================

cmd({
  pattern: 'pussybdl',
  alias: ["dlpussyb", "pussybdown", "hentaivid"],
  desc: "Download adult videos from pussyboy.net.",
  category: "download",
  use: ".pussybdown",
  react: "🔞",
  filename: __filename
}, async (bot, message, context, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  query,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    // React to the message with an emoji
    await context.react('🔞');

    // Construct the video URL
    const videoUrl = "https://www.pussyboy.net/porn/" + query + '/';

    // Fetch the webpage
    const response = await fetch(videoUrl);
    const html = await response.text();

    // Parse the HTML content
    const $ = cheerio.load(html);

    // Extract the video source URL
    const videoSource = $("body > div.container-xxl.videos > div.col-md-12.videos-detail > div.col-md-12.videos-details > div > video > source").attr("src");

    // Send the video as a message
    await bot.sendMessage(from, {
      video: { url: videoSource },
      mimetype: "video/mp4",
      caption: "> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™"
    }, { quoted: message });
  } catch (error) {
    // Log the error and reply with the error message
    console.error(error);
    reply('Error: ' + error.message);
  }
});


//====================================

cmd({

  pattern: "ig",
  desc: "To download instagram videos.",
  react: "🎥",
  use: ".ig < link>",
  category: "download",
  filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
  
if (!q) return m.reply(`Please Give Me a vaild Link...`);
m.react('⬇️')

       let res = await igdl(q);
      
       let data = await res.data;
       for (let i = 0; i < 20; i++) {
          let media = data[i];
          let downloadurl = media.url
           m.react('⬆️')
          await conn.sendMessage(from,{
            video: {url:downloadurl},
            mimetype:"video/mp4",
            caption: `> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™`,
            contextInfo: {
                mentionedJid: ['94775341543@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363296605464049@newsletter',
                    newsletterName: "🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™",
                    serverMessageId: 999
                },
                //externalAdReply: {
                    //title: 'LARA MD',
                    //body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    //mediaType: 1,
                    //sourceUrl: "https://github.com/sadiyamin",
                    //thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    //renderLargerThumbnail: false,
                    //showAdAttribution: true
                }
            //}
     }, {quoted: mek});
           m.react('✅')
       }

}catch(e){
console.log(e)
}
})
  
//====================================

const tiktokCommand = {
  pattern: "tiktoksearch",
  alias: ["ttw", "tiks"],
  desc: "Search TikTok videos",
  use: "tiktoksearch",
  category: "search",
  react: '📱',
  filename: __filename
};

cmd(tiktokCommand, async (sendMessage, message, args, context) => {
  const { from, quoted, body, isCmd, command, args: commandArgs, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply } = context;

  const promptMessage = { text: "[❗] What do you want to search on TikTok?" };
  const quotedMessage = { quoted: message };

  if (!q) {
    return sendMessage(from, promptMessage, quotedMessage);
  }

  try {
    let searchResult = await tiktokSearch(q);
    if (!searchResult.status) {
      throw new Error(searchResult.result);
    }
    let results = searchResult.result;
    shuffleArray(results);
    let topResults = results.slice(0, 7);
    let videoMessages = await Promise.all(topResults.map(video => createVideoMessage(video.videoUrl, sendMessage)));

    const headerMessage = { text: '' };
    const footerMessage = { text: "> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™" };
    const buttonOptions = { buttons: [] };

    let interactiveMessages = videoMessages.map((videoMessage, index) => ({
      body: proto.Message.InteractiveMessage.Body.fromObject(headerMessage),
      footer: proto.Message.InteractiveMessage.Footer.fromObject(footerMessage),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: topResults[index].description,
        hasMediaAttachment: true,
        videoMessage: videoMessage
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject(buttonOptions)
    }));

    const deviceListMetadata = { deviceListMetadata: {}, deviceListMetadataVersion: 2 };
    const bodyMessage = { text: "*< TIKTOK SEARCH >*\n\n🔎 *Searched text:* " + q + "\n\n📝 *Results obtained:*" };
    const footerText = { text: '' };
    const headerNoMedia = { hasMediaAttachment: false };
    const carouselMessages = { cards: interactiveMessages };
    const quotedReply = { quoted: message };

    const finalMessage = generateWAMessageFromContent(from, {
      viewOnceMessage: {
        message: {
          messageContextInfo: deviceListMetadata,
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create(bodyMessage),
            footer: proto.Message.InteractiveMessage.Footer.create(footerText),
            header: proto.Message.InteractiveMessage.Header.create(headerNoMedia),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject(carouselMessages)
          })
        }
      }
    }, quotedReply);

    await sendMessage.relayMessage(from, finalMessage.message, { messageId: finalMessage.key.id });
  } catch (error) {
    const errorMessage = { quoted: message };
    await sendMessage(from, { text: error.toString() }, errorMessage);
  }
});

async function tiktokSearch(query) {
  try {
    const searchParams = new URLSearchParams({
      keywords: query,
      count: '10',
      cursor: '0',
      HD: '1'
    });

    const response = await axios.post("https://tikwm.com/api/feed/search", searchParams, {
      headers: {
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'Cookie': "current_language=en",
        'User-Agent': "Mozilla/5.0 (Linux Android 10 K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    });

    const videos = response.data.data.videos;

    if (videos.length === 0) {
      return { status: false, result: "No videos found." };
    }

    return {
      status: true,
      result: videos.map(video => ({
        description: video.title ? video.title : "No description",
        videoUrl: video.play ? video.play : "No URL"
      }))
    };
  } catch (error) {
    return { status: false, result: error.message };
  }
}

async function createVideoMessage(videoUrl, sendMessage) {
  try {
    const response = await axios.get(videoUrl, { responseType: "arraybuffer" });
    const videoData = response.data;

    const videoContent = { video: videoData };
    const uploadOptions = { upload: sendMessage.waUploadToServer };

    const { videoMessage } = await generateWAMessageContent(videoContent, uploadOptions);
    return videoMessage;
  } catch (error) {
    throw new Error("Error creating video message: " + error.message);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


cmd({
    pattern: "yts",
    desc: "button test",
    react: "🎵",
    category: "search",
    use: ".ytsearch",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q) return reply(`*Need title*`);
        let search = await yts(q);
        let videos = search.all;
        console.log(videos)
        if (!videos || videos.length === 0) {
          reply('No video found');
          return;
        }
        // Choose between 1 and 5 videos at random
        const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
        const selectedVideos = [];
        while (selectedVideos.length < numVideos) {
          const randomIndex = Math.floor(Math.random() * videos.length);
          const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
          selectedVideos.push(randomVideo);
        }
        let push = [];
        for (let i = 0; i < selectedVideos.length; i++) {
          let video = selectedVideos[i];
          let cap = `Title : ${video.title}`;
          let foot = `𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™· · ·`;
          const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: conn.waUploadToServer });
          push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: cap
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: foot
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: `Video ${i + 1}`,
              subtitle: '',
              hasMediaAttachment: true,
              ...mediaMessage
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                {
                  "name": "cta_copy",
                  "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
                }
              ]
            })
          });
        }
        let sadee = `🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™`;
        let foot2 = `🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™ · ·`;
        const msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: sadee
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: foot2
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: push
                }),
                contextInfo: {
                      mentionedJid: ['94775341543@s.whatsapp.net'], 
                      forwardingScore: 999,
                      isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363296605464049@newsletter',
                      newsletterName: '🫟 𝐐ᴜᴇᴇɴ  𝐒ʜᴇʜᴀʀᴀ  𝐌ᴅ™',
                      serverMessageId: 999
                    }
                    }
              })
            }
          }
        }, {quoted:mek});
        await conn.relayMessage(from, msg.message, {
          messageId: msg.key.id
        });
    console.log('Button Send Sucsses');
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
})
