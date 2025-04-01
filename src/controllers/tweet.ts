import Tweetdatabase from "../db/tweet";

const tweetdatabase = new Tweetdatabase()

class TweetController {

    async getAllTweets() {
        const tweet = await tweetdatabase.tweet_db();

        let returned_tweet = []

        for(let i = 0; i < tweet.length; i++){
            if(tweet[i] % 2 === 0){
                returned_tweet.push(tweet[i]);
                
            }
        }

        return returned_tweet;
    }
}

export default TweetController;
