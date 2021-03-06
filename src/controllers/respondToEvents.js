// For posting messages
const {WebClient} = require('@slack/web-api');
const {SLACK_BOT_TOKEN} = process.env;
const web = new WebClient(SLACK_BOT_TOKEN);


// Post the message in slack
exports.respondToEvents = async (userId, channelId, attachments) => {
    try {
        await web.chat.postMessage({
            channel: channelId,
            text: `Hey <@${userId}> :female-astronaut:`,
            attachments: [attachments],
        });
        console.log('Message posted!');
    } catch (error) {
        console.log(error);
    }
};
