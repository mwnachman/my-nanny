# Introduction

My-Nanny contains the parental interface for managing kids' chores and schedule, which the children can then interact with through Alexa.  It is intended to be used in conjunction with the My-Nanny-API and the myNanny Alexa skill.

![ScreenShot](screenshot.png)

See more at https://my-nanny.org

# Setting Up the Development Environment

Because this client uses AWS Login, the development environment uses https to pass the tokens securely.  See the README in /src for instructions on how to set up https on localhost.

```ssh
Set Up the Backend - my-nanny-api (https://github.com/dystopian-smurfs/my-nanny-api)

Enable local SSL (link)

Configure Ports - see 

sudo npm run start (webpack)

Set Up Alexa - my-nanny-alexa (https://github.com/dystopian-smurfs/my-nanny-alexa)

```

# Overal Architecture

[Shared text between all 3 modules, this is a picture of the modules, and how they interact (web, api and alexa)]
