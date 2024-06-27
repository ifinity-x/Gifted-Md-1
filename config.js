//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fc815a90e59c2203f0c41.jpg";
global.devs = "234703957033";
global.sudo = process.env.SUDO_NUMBERS || "2347039570336";
global.sudo = process.env.SUDO || "2347039570336";
global.owner = process.env.OWNER_NUMBER || "2347039570336";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254110853827";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254110853827";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke/bots/giftedmd/sessions";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "GIFTED_08_50_06_19_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUo3bWNENWhNNjgxOXpVcnYxdUFQTUZRMHpUN0QvZzRiZ01EUm1tVTUzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFF1STBCb1l5bGNFYWpyN09QeTNNZU1CdUdjcFJqRkRSN216VUtOTG9SRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSTRPajlyeHJaWGhqM1BWZ3psbUFtMmlvZjQ4UFBQdUJJWVRsSVlNUDNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiR2ROVWxRaElnMDRsU0toMFJQRXg2YkZNYjB5R1RjbE9vR1diYmx0dW04PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KazkzSWFrSUVHVm9qZXMxV2w5aTAwT0JBY1ZYckVpc2FIQTR0NzJUbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks1VW1LbkMveGs2b0MvYWJDVDluektvb1NLS2FtWFV4WDBTUThCclJQbWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFWUS94MVRtM3UrRWlQTnVUUmxRMnBOZFlWNEJ5TTNkczhEZS9QcnZXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1lnbU9SUEx3YjFZRW03SDVQcHhncEUxM1QyMzdtSHJYZVdwN211RlZtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImduREFhaTEwd2c3cUp5NmpTd0Qzd2VzeWZITWlSc0VWVFVzMDlDa2F2K3RSS2txQmRQQ1J4RGtMaUZVWStMd3cyRWx3VEl1LzU0SisvU0NKdXl0OWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IjY0WUZHaUEwMmNyTmdydXVwYmdFN3d1NEZ5bnAzK2NDOXlUV2MwN0ZIU1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkMzZFpsT1pOVFotOVpYZ1JQb0RCdGciLCJwaG9uZUlkIjoiNWZmNGFmMGQtMDY5MS00Y2U4LTllMzgtN2VlOWFjMzc3NDIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ0UEtUOFZJL1hya0ZUVnk0bnYwK2NDUXltWT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXlWMkFlQTZBVm5jOWN3VHU1WHJtL3VrS0c0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUtSZ3BzSUVOQzQ5Yk1HR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUm1wRktpeWxzSEJTVkNONUV5RE9kMFZoUlhjbWN5TGJNdmR1WXU0SW5rWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMUhCdEFraEhQRVErT1QzbXFqb3Nkd0xFZVl1ek1zOURzZXEyZjRKaVA3NlV1MmU5S2ZhTkNtSmZCU3N2V0tOSzFDeWlIMXJGNW4yYm1TTWN6VXNPRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkpXSkxibXpQQUQ2bC9iajg4U09PMk80cjYrVUxrSnYrZU5tWG1GUTZQalgvaVdnaWFKQjVzWjczOHU0WEQyUkpzTzN0RzZqYjFvbFYzU3ZVVzFwK2hBPT0ifSwibWUiOnsiaWQiOiIyMzQ3MDg2MTI5ODkyOjI0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwODYxMjk4OTI6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVpxUlNvc3BiQndVbFFqZVJNZ3puZEZZVVYzSm5NaTJ6TDNibUx1Q0o1RyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NDkxNjY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUEyeiJ9"
module.exports = {
  menu: process.env.MENU_STYLE || "G2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟰.𝟬.𝟬",
  author: process.env.STICKER_AUTHOR || "𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗",
  packname: process.env.STICKER_NAME || "♥️",
  botname: process.env.BOT_NAME || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});



