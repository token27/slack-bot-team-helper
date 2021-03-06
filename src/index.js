if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const port = process.env.PORT;
const app = express();

// Multilanguage
const i18n = require("i18n");
i18n.configure({
    locales: ['en', 'es'],
    defaultLocale: 'es',
    register: global,
    directory: __dirname + '/locales'
});


// Listen for events route
const events = require('./events');
events.listenForEvents(app);


// Listen for interactions route
const interactions = require('./interactions');
interactions.listenForInteractions(app);


// Listen for slash commands route
const slashCommand = require('./slashCommand');
slashCommand.listenForCommands(app);


// Listen app
app.listen(port, function () {
    console.log(i18n.__('Bot is active and listening on ' + `${port}`));
});


// Send availability response
app.use((req, res, next) => {
    res.status(200).json({message: i18n.__('Slack bot team helper is operative and running !')});
    next();
});
