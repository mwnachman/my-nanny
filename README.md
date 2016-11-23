# Introduction

my-nanny contains the parental control interface (react webpack) for maintainging chores, which the kids can then interact with through Alexa.

[Screen shot of a nice page]

See more at https://my-nanny.org

# Setting Up Developing Environment

Because this client uses AWS Login, the development environment uses https to pass the tokens securely.

```ssh
Set Up the Backend - my-nanny-api (link)
Enable local SSL (link)
Configure Ports
sudo npm run start (webpack)
```

# Overal Architecture

[Shared text between all 3 modules, this is a picture of the modules, and how they interact (web, api and alexa)]
