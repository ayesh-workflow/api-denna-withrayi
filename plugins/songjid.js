const config = require('../settings');
const {
  cmd,
  commands
} = require("../lib/command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  jsonformat
} = require("../lib/functions");
var {
  get_set,
  input_set
} = require("../lib/set_db");
var BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
cmd({
  'pattern': "stc",
  'react': "🗣️",
  'desc': "To Activate auto news",
  'category': 'main',
  'use': ".setprefix .",
  'filename': __filename
}, async (_0x5e6ffb, _0x3e3811, _0x461842, {
  from: _0x120d17,
  l: _0x2a837c,
  quoted: _0x28b1c8,
  body: _0x1e12a0,
  isCmd: _0x2da5b8,
  command: _0x3ff42e,
  args: _0x38e3e2,
  q: _0x47a702,
  isGroup: _0x30dec3,
  sender: _0x344a4d,
  senderNumber: _0x125037,
  botNumber2: _0xaf5215,
  botNumber: _0x52906d,
  pushname: _0x5b2463,
  isMe: _0x4660d6,
  isOwner: _0x54908c,
  groupMetadata: _0x19b9dc,
  groupName: _0x5a9b36,
  participants: _0x5f53ae,
  groupAdmins: _0x16d624,
  isBotAdmins: _0x23ba0e,
  isAdmins: _0x33769b,
  reply: _0x22175e
}) => {
  try {
    if (!_0x54908c) {
      return await _0x22175e(BOTOW);
    }
    if (config.WACHLINK == _0x47a702) {
      return _0x22175e("Succesfully Change To Whatsapp Channel Link");
    }
    await input_set("WACHLINK", _0x47a702);
    return _0x22175e("Whatsapp Channel Link was changed");
  } catch (_0x317831) {
    _0x22175e("*Error !!*");
    _0x2a837c(_0x317831);
  }
});
cmd({
  'pattern': "setprefix",
  'react': "🗣️",
  'desc': "To change bot prefix",
  'category': "main",
  'use': ".setprefix .",
  'filename': __filename
}, async (_0x1d0b7e, _0xf31afa, _0x2ce2f7, {
  from: _0x26e850,
  l: _0xa38e66,
  quoted: _0x1eb9cf,
  body: _0x4c590c,
  isCmd: _0x2facb2,
  command: _0x54ce71,
  args: _0x13609b,
  q: _0x45af43,
  isGroup: _0x58f467,
  sender: _0x118279,
  senderNumber: _0x11b2c1,
  botNumber2: _0x46fcc1,
  botNumber: _0x1c9fae,
  pushname: _0x5cb6eb,
  isMe: _0x26d85e,
  isOwner: _0x26e8c5,
  groupMetadata: _0xf77b60,
  groupName: _0x5c5511,
  participants: _0x26f2aa,
  groupAdmins: _0x2aff70,
  isBotAdmins: _0x5b5349,
  isAdmins: _0x367c00,
  reply: _0x12e1e8
}) => {
  try {
    if (!_0x26e8c5) {
      return await _0x12e1e8(BOTOW);
    }
    if (config.PREFIX == _0x45af43) {
      return _0x12e1e8(alredy);
    }
    await input_set("PREFIX", _0x45af43);
    return _0x12e1e8("prefix was changed to");
  } catch (_0x462e09) {
    _0x12e1e8("*Error !!*");
    _0xa38e66(_0x462e09);
  }
});

cmd({
  'pattern': "stf",
  'react': "🗣️",
  'desc': "To Activate auto news",
  'category': "main",
  'use': ".setprefix .",
  'filename': __filename
}, async (_0x3b95e6, _0x1ba76b, _0x59434b, {
  from: _0x5963ed,
  l: _0x36be10,
  quoted: _0x5bb4dc,
  body: _0x2d94cd,
  isCmd: _0x38fb29,
  command: _0x3793a0,
  args: _0x1a0012,
  q: _0x2fad31,
  isGroup: _0x2fcfb1,
  sender: _0x23baf1,
  senderNumber: _0x521b08,
  botNumber2: _0x5c51bd,
  botNumber: _0x3aa0b9,
  pushname: _0x4951c,
  isMe: _0x3dab80,
  isOwner: _0x20b82e,
  groupMetadata: _0x4bcd8f,
  groupName: _0x25be20,
  participants: _0x2bfa8a,
  groupAdmins: _0x49c936,
  isBotAdmins: _0x489f22,
  isAdmins: _0x40564a,
  reply: _0x3923f7
}) => {
  try {
    if (!_0x20b82e) {
      return await _0x3923f7(BOTOW);
    }
    if (config.FOOTER == _0x2fad31) {
      return _0x3923f7("Succesfully Change To Footer");
    }
    await input_set("FOOTER", _0x2fad31);
    return _0x3923f7("Footer was changed");
  } catch (_0x3d5680) {
    _0x3923f7("*Error !!*");
    _0x36be10(_0x3d5680);
  }
});
cmd({
  'pattern': 'stj',
  'react': "🗣️",
  'desc': "To Activate auto news",
  'category': "main",
  'use': ".setprefix .",
  'filename': __filename
}, async (_0x73d655, _0x75aa54, _0x238bc3, {
  from: _0x5f25e8,
  l: _0x3479a4,
  quoted: _0xe061c6,
  body: _0x4c1792,
  isCmd: _0x68ea43,
  command: _0x5f4511,
  args: _0x701861,
  q: _0x258289,
  isGroup: _0x260156,
  sender: _0x1fc072,
  senderNumber: _0x225f7e,
  botNumber2: _0x3f0e37,
  botNumber: _0x441e05,
  pushname: _0x534a03,
  isMe: _0x4d6d1e,
  isOwner: _0x396b0b,
  groupMetadata: _0x490132,
  groupName: _0x496d1c,
  participants: _0x4ca47c,
  groupAdmins: _0x2d985a,
  isBotAdmins: _0x3d29cb,
  isAdmins: _0xe9962d,
  reply: _0x20a271
}) => {
  try {
    if (!_0x396b0b) {
      return await _0x20a271(BOTOW);
    }
    if (config.JID == _0x258289) {
      return _0x20a271("Succesfully Song Change To This Section");
    }
    await input_set("JID", _0x258289);
    return _0x20a271("Channel Jid was changed");
  } catch (_0x1dc450) {
    _0x20a271("*Error !!*");
    _0x3479a4(_0x1dc450);
  }
});
cmd({
  'pattern': "onlygrojjjjjjjjjjjjjjjup",
  'react': "🗣️",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4fda2a, _0x3bac2d, _0xf659d9, {
  from: _0x42e307,
  prefix: _0x50257b,
  l: _0x53b70a,
  quoted: _0x57f3d5,
  body: _0x1e765c,
  isCmd: _0x449436,
  command: _0x1737fa,
  args: _0x3592c6,
  q: _0x2056ee,
  isGroup: _0x4c059b,
  sender: _0x144b00,
  senderNumber: _0x137dcd,
  botNumber2: _0x1e7a0f,
  botNumber: _0x275919,
  pushname: _0x1b913b,
  isMe: _0x597a4d,
  isOwner: _0x5a8633,
  groupMetadata: _0x21ea8a,
  groupName: _0x12be15,
  participants: _0x3cd110,
  groupAdmins: _0x587773,
  isBotAdmins: _0xc05554,
  isAdmins: _0x15e07d,
  reply: _0x2db017,
  config: _0xbefec6
}) => {
  try {
    if (!_0x5a8633) {
      return await _0x2db017(BOTOW);
    }
    if (_0x2056ee == 'on') {
      if (_0xbefec6.ONLY_GROUP == "true") {
        return _0x2db017("already Only Group is on ");
      }
      await input_set("ONLY_GROUP", 'true');
      return _0x2db017("Only Group turned on");
    }
    if (_0x2056ee == "off") {
      if (_0xbefec6.ONLY_GROUP !== "true") {
        return _0x2db017("already Only Group is off");
      }
      await input_set("ONLY_GROUP", "false");
      return _0x2db017("Only Group turned off");
    }
  } catch (_0x1443e4) {
    _0x2db017("*Error !!*");
    _0x53b70a(_0x1443e4);
  }
});
cmd({
  'pattern': 'onjjjjjjjjjjjjjjjlyme',
  'react': "🗣️jjjjjjjjjjjjjjjjjjjj",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x180990, _0x4ee9db, _0x7ef3a5, {
  from: _0x306444,
  prefix: _0x123f65,
  l: _0x4a5178,
  quoted: _0xd844a0,
  body: _0x3343ae,
  isCmd: _0x217d7,
  command: _0x447d43,
  args: _0x57154a,
  q: _0x24e1b1,
  isGroup: _0x5830df,
  sender: _0x23f8bb,
  senderNumber: _0x3e217d,
  botNumber2: _0x33f27f,
  botNumber: _0x551c26,
  pushname: _0x124e4e,
  isMe: _0x5d579a,
  isOwner: _0x48c214,
  groupMetadata: _0x3aad41,
  groupName: _0x2bba4e,
  participants: _0x48acd2,
  groupAdmins: _0x2d3cc7,
  isBotAdmins: _0x41528c,
  isAdmins: _0xb96480,
  reply: _0x3ff4cc,
  config: _0x2265f2
}) => {
  try {
    if (!_0x48c214) {
      return await _0x3ff4cc(BOTOW);
    }
    if (_0x24e1b1 == 'on') {
      if (_0x2265f2.ONLY_ME == "true") {
        return _0x3ff4cc("already Only Me is on ");
      }
      await input_set("ONLY_ME", "true");
      return _0x3ff4cc("Only Me turned on");
    }
    if (_0x24e1b1 == "off") {
      if (_0x2265f2.ONLY_ME !== "true") {
        return _0x3ff4cc("already Only Me is off");
      }
      await input_set("ONLY_ME", "false");
      return _0x3ff4cc("Only Me turned off");
    }
  } catch (_0x2dc20e) {
    _0x3ff4cc("*Error !!*");
    _0x4a5178(_0x2dc20e);
  }
});
cmd({
  'pattern': "forwjjjjjjjjjard",
  'desc': "forwarjjjjjjjjd msgs",
  'alias': ['fojjjjjj'],
  'category': 'main',
  'use': ".forwajjjjjjjrd < Jid address >",
  'filename': __filename
}, async (_0x16a13f, _0x2c6b91, _0x315ed3, {
  from: _0x23eccb,
  l: _0x2878a6,
  quoted: _0x2c7d73,
  body: _0x429f15,
  isCmd: _0x5eb318,
  command: _0x429913,
  args: _0x92a0a5,
  q: _0x1a981c,
  isGroup: _0x38455f,
  sender: _0x3d0d2a,
  senderNumber: _0x470b6e,
  botNumber2: _0x6b733f,
  botNumber: _0x1f5a1c,
  pushname: _0x1b6be7,
  isMe: _0x48ca52,
  isOwner: _0xe145ac,
  groupMetadata: _0x5de16c,
  groupName: _0x568381,
  participants: _0x5b3644,
  groupAdmins: _0x5af416,
  isBotAdmins: _0x26c0a6,
  isAdmins: _0x448e61,
  reply: _0x183548
}) => {
  if (!_0xe145ac) {
    return _0x183548("*Owner Only ❌*");
  }
  if (!_0x2c6b91.quoted) {
    _0x183548("*give me message ❌*");
  }
  if (!_0x1a981c) {
    return _0x183548("please give me jids");
  }
  const _0x32a6b4 = _0x1a981c.split(',');
  let _0x486358;
  let _0x38e08a = {
    'key': _0x2c6b91.quoted?.['fakeObj']?.["key"]
  };
  if (_0x2c6b91.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x25c127 = _0x2c6b91.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x5a4de5 = require("mime-types");
    let _0xceb1ea = _0x5a4de5.extension(_0x25c127);
    _0x2c6b91.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x486358 ? _0x486358 : _0x2c6b91.quoted.documentWithCaptionMessage.message.documentMessage.fileName) + '.' + _0xceb1ea;
  }
  _0x38e08a.message = _0x2c6b91.quoted;
  for (let _0x4bc418 = 0x0; _0x4bc418 < _0x32a6b4.length; _0x4bc418++) {}
  return _0x183548("*Message forwarded to:*\n\n " + _0x32a6b4);
});
