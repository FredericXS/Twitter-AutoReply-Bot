const Twitter = require('twitter');
const Post = require('twit');
const quest = require('./prompts');
const tokens = require('./tokens');
const tw = quest.infos;

const bot = new Post ({
    consumer_key: tokens.CONSUMER_KEY,  
    consumer_secret: tokens.CONSUMER_SECRET,
    bearer_token: tokens.BEARER_TOKEN,
    access_token: tokens.ACCESS_TOKEN,
    access_token_secret: tokens.ACCESS_TOKEN_SECRET
});

const client = new Twitter ({
    consumer_key: tokens.CONSUMER_KEY,  
    consumer_secret: tokens.CONSUMER_SECRET,
    bearer_token: tokens.BEARER_TOKEN
});

function tweetFuncs() {
    function postTweet() {
        bot.post('statuses/update', {
            // Posting tweet
            status: tw.tweetText,
            function (err) {
                err ? console.log('ERROR: ' + err) : console.log('Tweet sent successfully!');
            }
        })
    }
    
    function postTweetId(id) {
        bot.post('statuses/update', {
            // Setting up and posting tweet
            in_reply_to_status_id: id,
            status: `@${tw.target} ${tw.tweetText}`},
            function (err) {
                err ? console.log('ERROR: ' + err) : console.log(`Tweet sent successfully to @${tw.target}!`);
        });
    }
    
    function getLastTweet() {
        client.get('search/tweets', {q: `from:${tw.target}`, count: 1}, function(error, tweets) { 
        // Searching the most recent tweet
        tweets.statuses.forEach(function(tweet) {
                // Getting the ID
                const tweetId = tweet.id_str;
                postTweetId(tweetId);
            });
        });
    }

    if (tw.target === '' || tw.target === undefined) {
        postTweet();
    } else {
        getLastTweet();
    }
}

module.exports = { tweetFuncs };