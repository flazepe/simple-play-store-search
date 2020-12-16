const fetch = require("node-fetch");
const baseURL = "https://play.google.com";

module.exports = async query => {
    try {
        const body = await (
            await fetch("https://play.google.com/_/PlayStoreUi/data/batchexecute", {
                method: "POST",
                headers: { "content-type": "application/x-www-form-urlencoded" },
                body: "f.req=%5B%5B%5B%22lGYRle%22%2C%22%5B%5B%5B%5D%2C%5B%5B10%2C%5B10%2C50%5D%5D%2Ctrue%2Cnull%2C%5B96%2C27%2C4%2C8%2C57%2C30%2C110%2C11%2C16%2C49%2C1%2C3%2C9%2C12%2C104%2C55%2C56%2C51%2C10%2C34%2C31%2C77%2C145%5D%2C%5Bnull%2Cnull%2Cnull%2C%5B%5B%5B%5B7%2C31%5D%2C%5B%5B1%2C52%2C43%2C112%2C92%2C58%2C69%2C31%2C19%2C96%2C103%5D%5D%5D%5D%5D%5D%5D%2C%5B%5C%22" + encodeURIComponent(query) + "%5C%22%5D%2C4%2C%5Bnull%2C1%5D%2Cnull%2Cnull%2C%5B%5D%5D%5D%22%2Cnull%2C%222%22%5D%5D%5D"
            })
        ).text();
        
        const json = JSON.parse(
            JSON.parse(body.slice(6))[0][2]
        ).flat(5)[1].flat(Infinity).filter(x => x && typeof x !== "number").slice(2, -2);

        const price = json.includes("Buy") ? json.splice(7, 6)[1] : "Free";
        json.splice(4, 1);
        
        return {
            icon: json[0],
            name: json[1],
            url: baseURL + json[6],
            developer: {
                name: json[2],
                url: baseURL + json[3]
            },
            price: price,
            description: json[4],
            rating: json[5]
        };
    }
    
    catch(e) { return null; }
};
