const { cmd } = require('../lib/command');
const config = require('../settings');
cmd(
  {
    pattern: "chr",
    alias: ["chr"],
    react: "📕",
    use: ".channelreact <link,emoji>",
    desc: ".",
    category: "owner",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
      quoted,
      l,
      body,
      isCmd,
      command,
      args,
      q,
      prefix,
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
      reply,
    }
  ) => {
    try {
      let [linkPart, emoji] = q.split(",");
      if (!linkPart || !emoji) return reply("Please provide a link and an emoji, separated by a comma.");

      const channelId = linkPart.trim().split("/")[4];
      const messageId = linkPart.trim().split("/")[5];

      const res = await conn.newsletterMetadata("invite", channelId);

      await conn.newsletterReactMessage(res.id, messageId, emoji.trim());

      reply(`DONE REACT ${emoji.trim()}`);
    } catch (e) {
      console.log(e);
      reply(e.toString());
    }
  }
);
