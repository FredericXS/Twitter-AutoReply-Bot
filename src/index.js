const colors = require('colors');
const schedule = require('node-schedule');

setTimeout(() => {
    console.log(colors.green('Initializing...'));
}, 500);

setTimeout(() => {
   console.log(colors.blue('Twitter Auto-Reply BOT')); 
}, 2500);

setTimeout(() => {
    console.log(colors.red('Developed by: @zfredericxs'))
}, 4500);

setTimeout(() => {
    const quest = require('./lib/prompts');
    const tweet = require('./lib/tweet');

    const job = schedule.scheduleJob(quest.infos.date, function() {
            tweet.tweetFuncs();
    });

}, 6500);