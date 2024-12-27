const {crawlDomain} = require("./crawler");
const {saveOutput} = require("./saveOutput");

(async () => {
    const domains = ["example1.com", "example2.com", "example3.com"];
    const results = {};

    for (const domain of domains){
        console.log(`Crawling ${domain}...`);
        const productUrls = await crawlDomain(domain);
        results[domain] = productUrls;
    }

    await saveOutput("output.json", results);
})()