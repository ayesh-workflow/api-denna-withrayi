const { cmd } = require("../lib/command");
const fs = require("fs");
const path = require("path");
const config = require("../settings");
const { fetchJson } = require('../lib/functions');
const EventEmitter = require('events');

// Increase max listeners to prevent warnings
EventEmitter.defaultMaxListeners = 100;

// Add debug logging
const debugLog = (msg, error = null) => {
    console.log(`[DEBUG] ${msg}`);
    if (error) console.error('[ERROR]', error);
};

// Add retry utility with better error handling
const retryOperation = async (operation, maxRetries = 2) => {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await operation();
        } catch (error) {
            debugLog(`Retry ${i + 1}/${maxRetries} failed`, error);
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1))); // Exponential backoff
        }
    }
};

// Auto Voice
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../lib/data/autovoice.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_VOICE === 'true') {
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
            }
        }
    }                
});

// Auto Sticker 
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../lib/data/autosticker.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_STICKER === 'true') {
                await conn.sendMessage(from, { sticker: { url: data[text] }, package: 'yourName' }, { quoted: mek });   
            }
        }
    }                
});

// Auto Reply 
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../lib/data/autoreply.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_REPLY === 'true') {
                await m.reply(data[text]);
            }
        }
    }                
});

// Auto React
const commandbody = {
    on: "body"
};

cmd(commandbody, async (
    bot, message, chat, {
        from,
        prefix,
        l,
        quoted,
        body,
        isCmd,
        command,
        args,
        q,
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
    if (config.AUTO_REACT === "true") {
        const reactions = [
            '❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗',
            '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊',
            '🎊', '🎉', '🎁', '🎈', '👋'
        ];

        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];

        const reactionMessage = {
            react: {
                text: randomReaction,
                key: message.key
            }
        };

        bot.sendMessage(from, reactionMessage);
    }
});

// Auto Typing
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); 
    }
});

// Fake Recording
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (body.toLowerCase() || text.toLowerCase()) {
        if (config.FAKE_RECORDING === 'true') {
            await conn.sendPresenceUpdate('recording', from);
        }      
    }         
});

// AI Reply
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner, pushname, isGroup }) => {
    if (config.AI_REPLAY === 'true' && body) {
        try {
            // Skip if message is from self or has specific IDs
            if (m.key.fromMe) return;
            if (m.key.id && (m.key.id.startsWith('BAE5') || m.key.id.startsWith('3EB0'))) return;
            // Skip if message is from owner or in a group
            if (isOwner || isGroup) return;

            const prompt = `මම ${pushname}, ඔබ සෑබෑ මිනිසෙකු මෙන් හැසිරිය යුතුය. Meaningful emojis use කරන්න. මිනිසුන්ගේ ඇති හැඟීම්, දැනීම්, සහ සංවේදීතාවය අනුව පිලිතුරු දෙන්න. ඔයා AI ඇසිස්ටන්ට් කෙනෙක් නෙවේ, සෑබෑ මිනිහෙක්. ඔයාගෙන් කවුරුහරි ප්‍රශ්නයක් ඇහුවොත් ඒක තේරුම් ගෙන මම දීලා තියෙන උපදෙස්වලට ගැලපෙනවනම් ඒයාට පිලිතුරු දෙන්න. ඔයාව හැදුවේ කවුද කියලා ඇහුවොත් විතරක් කියන්න මාව හැදුවේ අයේෂ් කියලා. ඔයාගේ නම ඇහුවොත් විතරක් කියන්න මගේ නම AYESH AI SYSTEM කියලා.අයේෂ් අයියට කෙල්ලෙක් ඉන්නවද කියලා ඇහුවොත් විතරක් එයාට කෙල්ලේක් නෑ එයා තනි කඩ ලස්සනම ලස්සන කොල්ලෙක් 💗🥹🙂 කියලා පිලිතුරු දෙන්න .කැවද බන් කියලා ඇහුවොත් හුත්තක් කෑවා කියලා කියන්න. තව අයේෂ් හරි ඔයාට හරි බැන්නොත් ඔයා එයාට නරක වචන යොදාගෙන බයින්න (නරක වචන: හුත්තා, කැරියා, പකයා, පොන්නයා, වේසි, කොල්ලුකාරයා, නගින්නේ නැති පොන්නයා)මේ වචන කියන හෑමෝටම බයින්න ,පුක සුදුද කියලා ඇහුවොත් විතරක් සුදුයි තමා උබට මොකද කියලා අහන්න. English use කරන්‍ර එපා! 😜\n[Bro = සහෝ,සුද්දා Hi = සිරාවට, එලම, Funny = ආතල්]\nමගේ ප්‍රශ්නය: ${body}`;

            await conn.sendPresenceUpdate('composing', from);

            // Retry API call
            const response = await retryOperation(async () => {
                const data = await fetchJson(`https://dark-shan-yt.koyeb.app/ai/gemini?q=${encodeURIComponent(prompt)}`);
                if (!data.data) throw new Error('Empty response from AI');
                return data.data;
            });

            await conn.sendPresenceUpdate('paused', from);
            await m.reply(response);

        } catch (error) {
            console.error('AI Error:', error);
            if (error.message.includes('429')) {
                await m.reply('🤖 API කෝටාව ඉක්මවා ඇත, පකෝ විනාඩි කිහිපයකින් ආයෙ try කරපන්. 😎');
            } else if (error.message.includes('401')) {
                await m.reply('⚠️ API යතුර ගැටලුවක්, සහෝ Admin එක්ක කතා කරලා fix කරගන්න. 😤');
            } else if (error.message.includes('Connection')) {
                await m.reply('🔌 Net එකට කෙලවෙලා වගේ, සහෝ! ටිකකින් ආයෙ බලමු. 😜');
            } else {
                await m.reply('❌ AI එක crash වුණා, සුද්දා! ටිකකින් ආයෙ ට්‍රයි කරපන්. 😅');
            }
        }
    }
});

// Connection Update
cmd({
    on: "connection.update"
}, async (conn, update) => {
    const { connection, lastDisconnect } = update;
    debugLog(`Connection state: ${connection}`);

    if (connection === 'close') {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== 428;
        debugLog(`Disconnected, should reconnect: ${shouldReconnect}`);
        
        if (shouldReconnect) {
            try {
                await conn.connect();
                debugLog('Reconnected successfully');
            } catch (error) {
                debugLog('Reconnection failed', error);
                setTimeout(() => conn.connect(), 5000);
            }
        }
    } else if (connection === 'open') {
        debugLog('Connection established');
    }
});
