# CONFIGURE DEVELOPMENT SERVER AS HTTPS #

To configure the development environment to use https, take the following steps:

## INSTALL OPENSSL ##
-First, follow the instructions in this blog post on how to install OpenSSL:

-http://mac-dev-env.patrickbougie.com/openssl/

## OBTAIN KEY AND CERTIFICATE ##
-Then, you'll need to get a key and certificate.  Follow the steps in this blog to create a certificate in Keychain Access.

-https://certsimple.com/blog/localhost-ssl-fix

-Follow the instructions that come up, and make sure to put 'localhost' as the name.


## UPDATE CONFIG FILE ##

-Then, you will need to put your key and certificate paths in the server/src/config.js file as the 'key' and 'crt'.  You will also need to change the CORSurl to '*', and add an 'env' of 'dev'.  See the config.example.js file to see how.


## CONFIG SERVER ##

-If you haven't done so already, follow the instructions in the first answer to this Stack Overflow question to configure your server to have this alternative for the development environment only:

-http://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node


### CHROME ###

-When you open in Chrome, it will give you a warning.  Click on 'Advanced' and then click on the 'unsafe' mode.  You will have to do this every time unless you follow these instructions to change it:

-https://www.accuweaver.com/2014/09/19/make-chrome-accept-a-self-signed-certificate-on-osx/

-You will need to go into the browser window's Dev Tools' security tab and click on View Certificate.  Then drag the certificate icon into the Desktop.  Open Keychain Access and drag the icon into it.  Open it, and change the security preference in the Trust tab, and change 'When Using this Certificate' to 'Always Trust.' That should also make the 'https' in the nav bar show up in green.