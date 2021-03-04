# simple-play-store-search

Search for an application from the Google Play Store.

[npm](https://www.npmjs.com/package/simple-play-store-search)

```js
const { search } = require("simple-play-store-search");
search("discord").then(console.log);

/*
{
    icon: "https://play-lh.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA",
    name: "Discord - Talk, Video Chat & Hang Out with Friends",
    url: "https://play.google.com/store/apps/details?id=com.discord",
    developer: {
        name: "Discord Inc.",
        url: "https://play.google.com/store/apps/developer?id=Discord+Inc."
    },
    price: "Free",
    description: "Your place to talk, video chat, and hang out with friends and communities.",
    rating: "4.5"
}
*/
```
