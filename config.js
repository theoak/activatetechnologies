const status = 'avi'; //'production' or 'test' or 'avi'

//PRODUCTION | Kickabout | heroku git:remote -a limitless-sierra-68694
const PRODUCTION_VERIFICATION_TOKEN = "EAACDZA59ohMoBABsVdZBRaXqrPeauovKzZB2JmyoZA87PLeIlTZCXNy1ry0EX7q7ZBNNpb3UAKlhirwPDZCniRY1JvHZCzlkIXceCWZBNUh3sNooO8L8tVAYcJRZAIzRljP1wcQgxeTuu7rtRLHEteAVmjKuPjfxXfXkkwKW8h7h981QZDZD";
const PRODUCTION_FACEBOOK_APP_ID = "144481079297226";
const PRODUCTION_FACEBOOK_APP_SECRET = "177f41bf5495e3673481700e4ec6995d";
const PRODUCTION_FACEBOOK_PAGE_ID = "1625739117677522";
const PRODUCTION_FACEBOOK_PAGE_URL = "http://wwww.facebook.com/kickaboutapp";
const PRODUCTION_MONGODB_URI = 'mongodb://anirudh:kickabout@ds013664.mlab.com:13664/bot';
const PRODUCTION_ROOT_URL = "http://www.kickabout.football"; //"https://limitless-sierra-68694.herokuapp.com";
const PRODUCTION_MESSENGER_URL = "http://m.me/kickaboutapp"
const PRODUCTION_WIT_TOKEN = "KEGDQB5O6BMVEPWVO33VVLUOPQ6EPUVN";
const PRODUCTION_LUIS_ID = "0a8ae437-0ff1-44c4-af7c-cc94fd0baf11";
const PRODUCTION_LUIS_SUBSCRIPTION_KEY = "a87263ffb22f4feb9a89aea610608ca7";
const PRODUCTION_TWILIO_ACCOUNT_SID = "ACc456f2ee8565e5af8c02a6357e4a9a9e";
const PRODUCTION_TWILIO_AUTH_TOKEN = "57357afaccfe2a344c5cd54fb74f725c";
const PRODUCTION_TWILIO_NUMBER = "Kickabout"; //"+441273917139";
const PRODUCTION_STRIPE_PUBLIC_KEY = "pk_live_Dey0ulbB4AOL81fmpzWnFKYa";

//TEST | Monty Messenger | heroku git:remote -a kickabouttest
const TEST_VERIFICATION_TOKEN = "EAACQ34o5sQ0BANnKbZCduf6FkAZCjaXufTqIsja5YuPVq5ZADHD9u9Q3fGikMBzSRNkzLiwXVzTFUHzZB1eUziYRYIdu6mfvdRzIriHqwVFvrtstBI5vsMcBTQi8eSjV6b8ZAqIsJZCmsabrc9utJFH3J6ZATZAmUaLCiwPMuiRV7QZDZD";
const TEST_MESSENGER_URL = "http://m.me/245261069180348";
const TEST_FACEBOOK_APP_ID = "159289771143437";
const TEST_FACEBOOK_APP_SECRET = "56cabb5a4f98662b998e4849d01bb826";
const TEST_FACEBOOK_PAGE_ID = "245261069180348";
const TEST_FACEBOOK_PAGE_URL = PRODUCTION_FACEBOOK_PAGE_URL;
const TEST_MONGODB_URI = 'mongodb://anirudh:kickabout@ds051575.mlab.com:51575/bottest';
const TEST_ROOT_URL = "https://kickabouttest.herokuapp.com"
const TEST_WIT_TOKEN = PRODUCTION_WIT_TOKEN;
const TEST_LUIS_ID = PRODUCTION_LUIS_ID;
const TEST_LUIS_SUBSCRIPTION_KEY = PRODUCTION_LUIS_SUBSCRIPTION_KEY;
const TEST_TWILIO_ACCOUNT_SID = "ACb187b1657a4f4eee2181ce3042d89a9e";
const TEST_TWILIO_AUTH_TOKEN = "774da0047e06243b9b9fc8a73e6d80e9";
const TEST_TWILIO_NUMBER = PRODUCTION_TWILIO_NUMBER;
const TEST_STRIPE_PUBLIC_KEY = "pk_test_p3GX2e0V1P9FteC3qz29z4YK";

//AVI | Avi Messenger | localhost
const AVI_VERIFICATION_TOKEN = "EAANkfNpMGO4BAB33jQHaexONb3ZAoSd9aZCavOZCM7Xa84WMEYELbJRY2qZB7KWlI2M4DTXUTtlkwA12x4Ms2gK2LYy4r3fh18cs2tI2vSbvZBcJ70RXOdM3ZBmZCHw8iDKXOMJKw5TZBwLLI0FZCRFbISh2LE6q7CBQW0m17ZBZAcwyQZDZD";
const AVI_MESSENGER_URL = "http://m.me/631474433673481";
const AVI_FACEBOOK_APP_ID = "954912331274478";
const AVI_FACEBOOK_APP_SECRET = "17da92fb8241cc4946689e284e64ce60";
const AVI_FACEBOOK_PAGE_ID = "631474433673481";
const AVI_FACEBOOK_PAGE_URL = PRODUCTION_FACEBOOK_PAGE_URL;
const AVI_MONGODB_URI = 'mongodb://anirudh:kickabout@ds051575.mlab.com:51575/bottest';
const AVI_ROOT_URL = "https://31f939b3.ngrok.io";
const AVI_WIT_TOKEN = PRODUCTION_WIT_TOKEN;
const AVI_LUIS_ID = PRODUCTION_LUIS_ID;
const AVI_LUIS_SUBSCRIPTION_KEY = PRODUCTION_LUIS_SUBSCRIPTION_KEY;
const AVI_TWILIO_ACCOUNT_SID = PRODUCTION_TWILIO_ACCOUNT_SID;
const AVI_TWILIO_AUTH_TOKEN = PRODUCTION_TWILIO_AUTH_TOKEN;
const AVI_TWILIO_NUMBER = PRODUCTION_TWILIO_NUMBER;
const AVI_STRIPE_PUBLIC_KEY = TEST_STRIPE_PUBLIC_KEY;

if (status == 'production') {
	exports.VERIFICATION_TOKEN = PRODUCTION_VERIFICATION_TOKEN;
	exports.FACEBOOK_APP_ID = PRODUCTION_FACEBOOK_APP_ID;
	exports.FACEBOOK_APP_SECRET = PRODUCTION_FACEBOOK_APP_SECRET;
	exports.MESSENGER_URL = PRODUCTION_MESSENGER_URL;
	exports.FACEBOOK_PAGE_ID = PRODUCTION_FACEBOOK_PAGE_ID;
	exports.FACEBOOK_PAGE_URL = PRODUCTION_FACEBOOK_PAGE_URL;
	exports.MONGODB_URI = PRODUCTION_MONGODB_URI;
	exports.WIT_TOKEN = PRODUCTION_WIT_TOKEN;
	exports.LUIS_ID = PRODUCTION_LUIS_ID;
	exports.LUIS_SUBSCRIPTION_KEY = PRODUCTION_LUIS_SUBSCRIPTION_KEY;
	exports.ROOT_URL = PRODUCTION_ROOT_URL;
	exports.TWILIO_ACCOUNT_SID = PRODUCTION_TWILIO_ACCOUNT_SID;
	exports.TWILIO_AUTH_TOKEN = PRODUCTION_TWILIO_AUTH_TOKEN;
	exports.TWILIO_NUMBER = PRODUCTION_TWILIO_NUMBER;
	exports.STRIPE_PUBLIC_KEY = PRODUCTION_STRIPE_PUBLIC_KEY;
} else if (status == 'test') {
	exports.VERIFICATION_TOKEN = TEST_VERIFICATION_TOKEN;
	exports.FACEBOOK_APP_ID = TEST_FACEBOOK_APP_ID;
	exports.FACEBOOK_APP_SECRET = TEST_FACEBOOK_APP_SECRET;
	exports.MESSENGER_URL = TEST_MESSENGER_URL;
	exports.FACEBOOK_PAGE_ID = TEST_FACEBOOK_PAGE_ID;
	exports.FACEBOOK_PAGE_URL = TEST_FACEBOOK_PAGE_URL;
	exports.MONGODB_URI = TEST_MONGODB_URI;
	exports.WIT_TOKEN = TEST_WIT_TOKEN;
	exports.LUIS_ID = TEST_LUIS_ID;
	exports.LUIS_SUBSCRIPTION_KEY = TEST_LUIS_SUBSCRIPTION_KEY;
	exports.ROOT_URL = TEST_ROOT_URL;
	exports.TWILIO_ACCOUNT_SID = PRODUCTION_TWILIO_ACCOUNT_SID;
	exports.TWILIO_AUTH_TOKEN = PRODUCTION_TWILIO_AUTH_TOKEN;
	exports.TWILIO_NUMBER = TEST_TWILIO_NUMBER;
	exports.STRIPE_PUBLIC_KEY = TEST_STRIPE_PUBLIC_KEY;
} else if (status == 'avi') {
	exports.VERIFICATION_TOKEN = AVI_VERIFICATION_TOKEN;
	exports.FACEBOOK_APP_ID = AVI_FACEBOOK_APP_ID;
	exports.FACEBOOK_APP_SECRET = AVI_FACEBOOK_APP_SECRET;
	exports.FACEBOOK_PAGE_ID = AVI_FACEBOOK_PAGE_ID;
	exports.FACEBOOK_PAGE_URL = AVI_FACEBOOK_PAGE_URL;
	exports.MESSENGER_URL = AVI_MESSENGER_URL;
	exports.MONGODB_URI = AVI_MONGODB_URI;
	exports.WIT_TOKEN = AVI_WIT_TOKEN;
	exports.LUIS_ID = AVI_LUIS_ID;
	exports.LUIS_SUBSCRIPTION_KEY = AVI_LUIS_SUBSCRIPTION_KEY;
	exports.ROOT_URL = AVI_ROOT_URL
	exports.TWILIO_ACCOUNT_SID = AVI_TWILIO_ACCOUNT_SID;
	exports.TWILIO_AUTH_TOKEN = AVI_TWILIO_AUTH_TOKEN;
	exports.TWILIO_NUMBER = AVI_TWILIO_NUMBER;
	exports.STRIPE_PUBLIC_KEY = AVI_STRIPE_PUBLIC_KEY;
}

exports.DEVELOPMENT_STATUS = status;

//AWS S3 keys
exports.AWSaccessKeyId =  "AKIAIAQYS6UTUGDGOUPA";
exports.AWSsecretAccessKey = "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";

//Stripe Payments
//Test Public Key: pk_test_p3GX2e0V1P9FteC3qz29z4YK
//Live Public Key: pk_live_Dey0ulbB4AOL81fmpzWnFKYa

// CHANGE REMOTE ON HEROKU ACCORDINGLY BEFORE DEPLOYING

//Alex's real account
// 10153573553662304