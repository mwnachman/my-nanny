# CONFIGURE DEVELOPMENT SERVER AS HTTPS #

To configure the development environment to use https, take the following steps:

## INSTALL OPENSSL ##
-First, follow the instructions in this blog post on how to install OpenSSL:

-http://mac-dev-env.patrickbougie.com/openssl/

## OBTAIN KEY AND CERTIFICATE ##
-Then, you'll need to get a key and certificate.  Open this blog, and follow the steps to create a certificate in Keychain Access.

-https://certsimple.com/blog/localhost-ssl-fix

-Follow the instructions that come up, and make sure to put 'localhost' as the name.


## UPDATE CONFIG FILE ##

-Then, you will need to put your key and certificate paths in the server/src/config.js file as the 'key' and 'crt'.  You will also need to change the CORSurl to '*', and add 'env' of 'dev'.  See the config.example.js file to see how.

-When you open in Chrome, it will give you a warning.  Click on 'Advanced' and then click on the 'unsafe' mode.