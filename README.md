Web Push Notifications - End to End implementation 
https://youtu.be/2zHqTjyfIY8

setup
=====
npm init -y
npm i web-push

Generate vapidKeys
================== 
PS C:\Users\jhawker\DEV\webpushPWA> node push
{
  publicKey: 'BOhiidivtDwwMnsc_17NH47CxxqaqT2HixaYxzUI1liFJqSZBpwM20GaWh9aidTDUdO7RB-aZTc8j08hKhpepDw',
  privateKey: 'B7bihMAQFWc21zkEKL0qFDWpdMIuAd7WgRqZYQ4r3y8'
}

deploy to git
=============
git init
(Create new repository on github eg https://github.com/jeff-sun21/pushwebPWA.git)
git remote add origin https://github.com/jeff-sun21/pushwebPWA.git
git add .
git status
git commit -m "initial"
git push origin master -u

sw
===
push event code
https://developers.google.com/web/ilt/pwa/lab-integrating-web-push
added install and fetch to sw.js

publish to netlify
==================
https://app.netlify.com/

maskable icon
=============
Maskable.app Editor
