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
global.devs = "254110853827";
global.sudo = process.env.SUDO_NUMBERS || "2347039570336";
global.sudo = process.env.SUDO || "2347039570336";
global.owner = process.env.OWNER_NUMBER || "2347039570336";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254110853827";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254110853827";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke/bots/giftedmd/sessions";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "GIFTED_08_50_06_19_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhYNkVwam5nOGNHVjRSWG5QRkhkb3pmTFRCam5aWGIyeGo4cGdpVThHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1NyUlZqMmZUNzJqUFpucHB6M1poOEJLeGNLeWptcjZPZCtJOW5PY0xoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSi9Dd0Y5V29SQVMzeERjT2U2Z3pLL3BPVDR4UDlCSHJ4eVpienpmcGxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0SCt5Wllub04wVTBhTjBHSTM0S2tMS2drMzhML3RaZnhGRUgva2ZVbmtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJaDArdmVEQVRvdlRwOXl0OEVUSllyMzdjUTJ1NXovMWxRYVloRHgwWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl0VUdiekNabkluNDg4WWpDeHJ4S3dOVitXdGs1Nk1QK3YxckhVRjBQd0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid014UDE5cjhON1ExQmI5ZFJ0eHZiSFNRZXdvdGlLRHZsL0NkUi9NcVcxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTJ6UmlnbkdpUDRYZ2I1NzBUNXg4aGZTQS92dTNRejlzQmVWb2F0K0ZXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBKV2pPb0ErREtoUW5sNk52NWtqWWFTZlVkYVhFWGd6LzBKTmJ1Z25JRlZSZVMyMnJLbWs3MmxIamNDZVQxTnBTVGlVbVhxRDVnUnFFS2JHQmhYTENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJYdE5tWHRlVjBvekFWbVRDaVZjcUo4Zngvc2lvdEZtUlR0MDhhQTI3NE5rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4Z3dtdV9uMlFGQ3RZYzI2YXFkbVhnIiwicGhvbmVJZCI6ImE0MWZmODQ2LTEwMzgtNDQwNi1iN2JjLTE2OTRiMDE0NzA5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDYUVNb2t3Sm9PckdDL3ZLQjN4bzcxSTBSU0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmxtK1FYOGpwVThaVG9KWkQyZmhockNtWTE4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1MNlNNOEJBIiwibWUiOnsiaWQiOiIyMzQ5MTMzMDE5MzEzOjM0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcXE1OXdGRUpQTjU3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjTFJRdEpWUTJHRENVOFFSbVBZeUY1eFRkb2xGb0QzU1VIMURocjNuemlNPSIsImFjY291bnRTaWduYXR1cmUiOiJzUERLQ2RjT0hHa1h0NVI1bGlmRDBMQWU1R3ZlV3Z4Qm4vRlF3S0F1NTJKemtLQ2h4VFlwK2xlWEs0SFhOaWhBQ2w3aDNpVG40RHc4NC80eFYyUVdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiay9DN0NXQzNiSmV2WUFHS0R5U0ljdjBCV2Z2QUF1ZjRZN0w3YmxqWDl5YWRkYnR4MHp5cXIycDUrVVFDc09pbnhuNWdZZFZYZEQxSU5VUzdOYjZkQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTMzMDE5MzEzOjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhDMFVMU1ZVTmhnd2xQRUVaajJNaGVjVTNhSlJhQTkwbEI5UTRhOTU4NGoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkyNjQ5MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjZ3In0="
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



