const googleSpreadsheet = require('../db/googleSpreadsheet');
const database = require('../db/database');

//slack api
const {SLACK_BASE_URL, SLACK_BOT_TOKEN} = process.env;
const axios = require('axios');

const respond = async (payload, respond) => {

    //set variables
    let userId = payload.user.id;
    let userName = payload.user.name; // we will rewrite this
    let answerValue = payload.actions[0].value;
    let channelId = payload.channel.id;
    let text;
    let longAnswer;
    let question = 'HowYouFeel';
    let userEmail = '';

    //call slack api to get user info
    //TODO: Fix
    try {
        // console.log(payload.user);
        // console.log('Reuesting  User Info: ' + `${SLACK_BASE_URL}users.info?token=${SLACK_BOT_TOKEN}&user=${userId}`)
        // const response = await axios.get(
        //     `${SLACK_BASE_URL}users.info?token=${SLACK_BOT_TOKEN}&user=${userId}`
        // );
        // const rawUserList = response.data;
        //
        // console.log(response);

        // userEmail = response.data.user.profile.email;
        // userName = response.data.user.profile.real_name;
    } catch (error) {
        // console.log(error);
    }

    //log to keep track
    console.log(`reacting to mood question: ${answerValue} for user ${userName}`);

    //block of automatic response
    let block = [
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: 'Thanks for your honest answer :female-astronaut:',
            },
        },
    ];

    //replace the block with automatic response
    respond({
        blocks: block,
        replace_original: true,
    });

    //save to spreadsheet
    // saveToSpreadsheet(userId, userName, answerValue, channelId);
    //save to the database
    saveToDatabase(question, answerValue, userName, userEmail, userId);
};

async function saveToSpreadsheet(userId, userName, answerValue, channelId) {
    console.log('Should update the excel file');
    //update the spreadsheet
    let date = new Date().toLocaleDateString();
    let newArray = [[userName, date, answerValue]];
    googleSpreadsheet.updateMoodSheet(newArray);
}

const saveToDatabase = async (
    question,
    answerValue,
    userName,
    userEmail,
    userId
) => {
    console.log('going to save to the database');
    const date = new Date();

    //Table structure
    const answer = {
        SlackId: userId,
        EmployeeName: userName,
        EmployeeEmail: userEmail,
        Question: question,
        Answer: answerValue,
        Date: date,
        Time: date
    };

    database.saveAnswer(answer);
};

module.exports.respond = respond;
