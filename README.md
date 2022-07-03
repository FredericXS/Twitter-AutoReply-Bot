<h1 align="center">Twitter Reply Bot</h1>

## Description
<p align="center">This is a simple bot to auto reply tweets of a specific user in a specific hour.</p>

## Summary
<!--ts-->
   * [About](#description)
   * [Summary](#summary)
   * [Install](#install)
   * [How to use](#how-to-use)
      * [Prerequisites](#prerequisits)
      * [Running](#running)
   * [Licenses](#licenses)
<!--te-->

## Install

* Download and install [Node.js](https://nodejs.org/en)
* Download and install [Visual Studio Code](https://code.visualstudio.com)
* Open your terminal and clone the project to your PC:
```
git clone https://github.com/FredericXS/Twitter-AutoReply-Bot
```
* Enter in the project folder:
```
cd Twitter-AutoReply-Bot
```
* Install the last npm version with this command:
```
npm install -g npm
```
* After installing npm, install the dependencies:

   ```
   npm i colors prompt-sync twitter twit node-schedule
   ```

Now We are ready to use

## How to use

### Prerequisits

* First, let's create a [Twitter developer account](https://developer.twitter.com/en)
* After created, will create a [new Project and App](https://developer.twitter.com/en/docs/tutorials/step-by-step-guide-to-making-your-first-request-to-the-twitter-api-v2)
* After creating the app, go to the settings and search for "User authentication settings"
  > <img src="https://imgur.com/1u24PXT.jpeg">
* Enable OAuth 1.0a and change App permissions to "Read and Write"
  > <img src="https://imgur.com/3NYhewc.jpeg">
* You will need to enter a Callback URI link and a website URL
  > <img src="https://imgur.com/hGLsKLX.jpeg">
* Finally, copy all Keys and Tokens, and replace in file ".env"
  > <img src="https://imgur.com/gKC8yPA.jpeg">

### Running

* In the terminal, open the project folder
* Type "npm start" (without quotes)
* Fill in all fields
* Wait the time
* If all is correct, It's works
  > ![Wroking](https://media.giphy.com/media/RkUfJYApjuca4kIcUq/giphy.gif)
