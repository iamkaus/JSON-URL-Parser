/**
 * Parse JSON data from a string
 * @param {string} jsonString - the JSON string to parse
 * @returns {Object} - the parsed Javascript object
 */
function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return null;
    }
}

module.exports = {
    parseJson
};
