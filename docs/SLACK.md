# Slack App

[![Latest Stable Version](https://poser.pugx.org/token27/slack-bot-team-helper/v/stable.svg)](https://packagist.org/packages/token27/slack-bot-team-helper)
[![NodeJS Version](https://img.shields.io/badge/nodejs-%3E%3D%2014.5.5-8892BF.svg)](https://php.net/)
[![License](https://poser.pugx.org/token27/slack-bot-team-helper/license)](https://packagist.org/packages/token27/slack-bot-team-helper)
[![Total Downloads](https://poser.pugx.org/token27/slack-bot-team-helper/d/total)](https://packagist.org/packages/token27/slack-bot-team-helper)

## Credentials

Go to [create new slack app](https://api.slack.com/apps?new_app=1)

### Setup your app name and workspace

![Create Slack App](../images/create_a_slack_app.png)

### Setup your app functionality

- Bots
- Permissions
- Slash Commands
- Event Subscriptions
- Interactive Components.

![App Functionality](../images/functionality.png)

## Scopes & Permissions

### Bot Token Scopes

    app_mentions:read
    chat:write
    commands
    channels:read
    channels:join
    channels:manage
    groups:read
    incoming-webhook
    users:read
    users.profile:read
    users:read.email

### User Token Scopes

    channels:history
    channels:read
    groups:history
    groups:read
    im:read
    im:history
    chat:write
    links:write
    users:read
    users:read.email
    identity.email

![Create Bot Scopes](../images/create_scopes.png)
![Oauth and Permissions](../images/oauth_and_permissions.png)
![Scopes](../images/scopes.png)
![Install to Workspace](../images/install_to_workspace.png)
![Workspace](../images/acept_workspace.png)
![Bot Token](../images/bot_user_oauth_token.png)

## Configure With NGROK

```
    npm start    
```

![Start App](../images/start_app.png)

```
    npm run ngrok    
```

![Start App](../images/start_ngrok.png)

### Interactions

![Start App](../images/interactivity_ngrok.png)

### Commands

    how-you-feel
    work-place
    project-change-status

![Create Command](../images/create_command.png)
![Setup Command](../images/setup_command.png)

## Events

![Event Subscription](../images/events_subscriptions.png)

### Bot events

    app_mention
    member_joined_channel
    message.im
    message.channels
    message.groups
    team_join

![Bot Events](../images/events_bot.png)

### Workspace events

    im_close
    im_created
    im_open
    member_joined_channel
    message.im
    message.channels
    message.groups
    team_join

![Workspace Events](../images/events_workspace.png)

![Reinstall Your App](../images/reinstall_your_app.png)

### App Credentials

(Basic Information)
![Generate App Level Token](../images/app_credentials.png)

### Generate App Token Level

(Basic Information)

![Generate App Level Token](../images/generate_app_level_token.png)
![Save App Token](../images/copy_app_token.png)




