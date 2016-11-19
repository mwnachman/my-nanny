# CONFIGURE DEVELOPMENT SERVER AS HTTPS #

To configure the development environment to use https, take the following steps:

## INSTALL OPENSSL ##
-First, follow the instructions in this blog post on how to install OpenSSL:

-http://mac-dev-env.patrickbougie.com/openssl/

## OBTAIN KEY AND CERTIFICATE ##
-Then, you'll need to get a key and certificate.  Open this blog, search for 'pkc' and run the command in the folder where you want your key.  

-Follow the instructions that come up, and make sure to put 'localhost' as the Common Name:

-https://certsimple.com/blog/localhost-ssl-fix

## EXTRACT KEY AND CERTIFICATE ##
-Open Keychain Access and search for localhost.  There should be a certificate that looks like a paper certificate (ie, not a key icon).  Open it and expand the 'Trust' category. Change 'Secure Sockets Layer' to 'Always Trust'.  

-Then, make sure you are in 'My Certificates' (on the left).  Right click on the certificate and export it.  Then save as a .p12 file.  You will need to go into the file in your editor and separate it out into two files, one with the key and another with the certificate, with the extension .pem.  

## UPDATE CONFIG FILE ##

-Then, you will need to put your key and certificate paths in the server/src/config.js file as the 'key' and 'crt'.  You will also need to change the CORSurl to '*', and add 'env' of 'dev'.  See the config.example.js file to see how.

-When you open in Chrome, it will give you a warning.  Click on 'Advanced' and then click on the 'unsafe' mode.