const fs = require("fs");

/**
 * Write data to a file
 * @param {string} outputFile - the path to the output file
 * @param {string} data - the data to write to the file
 */
function writeFile(outputFile, data) {
    fs.writeFile(outputFile, data, (err) => {
        if (err) {
            console.error("Error writing data to file:", err);
        } else {
            console.log("Data has been saved to", outputFile);
        }
    });
}

module.exports = {
    writeFile
};
