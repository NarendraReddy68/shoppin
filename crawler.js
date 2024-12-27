const axios = require("axios");
const cheerio = require("cheerio");

async function crawlDomain(domain){
    const productUrls = [];

    try{
        const {data: html} = await axios.get(`https://${domain}`);
        const $ = cheerio.load(html);

        $("a").each((_, element) => {
            const href = $(element).attr("href");

            if (href && isProductUrl(href)) {
                const fullUrl = new URL(href, `https://${domain}`).href;
                productUrls.push(fullUrl);
            }
        });
    }
    catch(error){
        console.log(`Failed to crawl ${domain}:`, error.message);
    }
    return productUrls;
}
module.exports = {crawlDomain}