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
cd Twitter-Reply-Bot
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
* Type "node index.js" (without quotes)
* Fill in all fields
* Wait the time
* If all is correct, It's works
  > <img src="https://imgur.com/XVgrbc0.jpeg">

## Licenses

MIT License

Copyright (c) [2022] [FredericXS]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

