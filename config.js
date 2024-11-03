const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=KixXUJqb#3edt1AgGesft0lHo675G6QHGOYLi7FGR9evi2U9YYAs",
MONGODB: process.env.MONGODB || "mongodb+srv://drn200901:5srGVc8qe2xBOMiV@cluster0.mbwpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
