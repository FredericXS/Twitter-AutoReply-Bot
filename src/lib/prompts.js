const prompt = require('prompt-sync')();

function getInfo() {
    const tweetText = prompt('Type the tweet content: ');
    let target = prompt('Enter target user: ');
    const targetDate = prompt('Enter date of tweet [YYYY-MM-DD HH:mm:ss]: ');
    const date = new Date(targetDate);
    
    if (target.includes('@')) target = target.replace('@', '');

    console.log(`Tweet scheduled for: ${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
    if (target !== '' && target !== undefined) {
        console.log(`Tweet target: @${target}`);
    }

    return {
        tweetText,
        target,
        date
    };
}

const infos = getInfo();

module.exports = { infos };