const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sycoalak786@@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Pakistan/Islamabad";
global.github = process.env.GITHUB || "https://github.com/Afzaal-786";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FCPmEG7I8lkGTHmt8i4EP5";
global.website = process.env.GURL || "https://chat.whatsapp.com/FCPmEG7I8lkGTHmt8i4EP5";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/Afzaal-786/Alexa/blob/main/20240925_211249.jpg";
global.devs = "923556159234";
global.sudo = process.env.SUDO || "923556159234";
global.owner = process.env.OWNER_NUMBER || "923556159234";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05uNDVnKy85SElENk5TUE9Mclora04wM2NVRGRCcVY2SUJRNXRkdjltND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWptU3JlSlFWQUxOY3doQWJUZU45dUYwbzBWUnk0Z1VqbTdUdWJ2Rmtrbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRERBT0gxNWM3bGdtNWNNcnhFWVVxd25QZ1pmMTZsaGlCcG1GbEhGOG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJycUxpSjE4azYzaXBiRE94NFA5VTVHVEJqeDBCSDVway9rWGdubFl5VTNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBTGdZVWxmdUZNZlpQTDFzVmd2L1VaczdtOHlWR0tQRkRyQVd1QmtTV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik52a2o1UmZsNXZiWC9BaDk0LzU1dGZVbWZ3U0I1WkVFZUw4UHUvb1BJMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5PRUlHZzR6OXJybmUyWmpvTUFMYlIvWEdxcTNmdDhiYkozbExsNCtWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWVjVHZIZUlmUk1xU0tBU1ZXTEdVSldCbWgrSVN4dTVwcC9scFFlbURHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVueUIyZjJSVXJ5VENNenhwc3YrLzk5bDJ5U3VXY3NSaElvc2ZxTlBHSFZCODNLb1hCTHBjMTBjMlR6NDJDYzVNc29aejJiSE9xTDVNQXlYaGNvbWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJtTnBxQmcrenF0MTFJdXdBYnNiUUJmSmYzOXdvd2N5bEo1eEZWcndLVDNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEZ2ZGckhJb1MtcVN0WWlOX0RWTXhnIiwicGhvbmVJZCI6ImFlZjIyMzNjLTU1NTItNGRmMS1iN2YwLWIyNGRmZjlhOTY5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTWW5hZGc0Rm02TWZycGhXVFRLNmp4dGhacHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3VmeDRoUmZERWl0d09KTzBnSFBOSXFyZVl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik0xRkJLWDNGIiwibWUiOnsiaWQiOiI5MjM1NTYxNTkyMzQ6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09HTndkMEJFSnprMUxjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlZRDBzMDZScElsbTdMM0h1djVUYURuS0RqcE5aOWVPZlg5dXdwRDFlRnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVNQlN1ZGpHWm1IUlZUSUtZd1J3TDFpT2ZaU2xKaVFoWjEwQ25TZXhPOG1POXdoMEJmOEtGYWZ5dUV5cXJxNGtteFk4Y2FWUTM3U2U0OThiY0dROEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHblNlV3kyeCtsR0xLdCs2aEJPRzBTUzkzZHR0ZGlVUEhnZEJpZ3hNM3JVS0w5bUUzWVdTdWJuVDcyRG56aWJYaGhpY2xBWGE2SnAvR3hxKzN6NjVoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzU1NjE1OTIzNDozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbUE5TE5Pa2FTSlp1eTl4N3IrVTJnNXlnNDZUV2ZYam4xL2JzS1E5WGhiIn19LHsiaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNTU2MTU5MjM0OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNtQTlMTk9rYVNKWnV5OXg3citVMmc1eWc0NlRXZlhqbjEvYnNLUTlYaGIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjczNDUxOTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRW9wIn0=";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©The'w Khan",
  author: process.env.PACK_AUTHER || "A&Z-bot",
  packname: process.env.PACK_NAME || "A&Z-bot",
  botname: process.env.BOT_NAME || "A&Z-bot",
  ownername: process.env.OWNER_NAME || "Afzaal_Khan",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "AZ").toUpperCase(),
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
