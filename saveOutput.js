const fs = require("fs-extra");

async function saveOutput(fileName, data) {
    try {
        await fs.writeJson(fileName, data, {spaces: 2});
        console.log(`Results saved to ${fileName}`);
    }
    catch(error){
        console.log(`Error saving the output:`, error.message);
    }
}
module.exports = {saveOutput};