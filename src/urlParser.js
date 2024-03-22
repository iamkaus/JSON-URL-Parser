/**
 * Parse a URL string and extract protocol, host and path,
 * Assumes the URL is of format protocol://host/path
 * @param {string} urlString - the string URL to parse
 * @returns {Object|null} - an object containing protocol, host, and path,
 *                           or null if URL does not match the expected URL format
 */
function parseProtocol(urlString) {
    const regX = /^(\w+):\/\/([^/]+)\/(.*)$/;
    const parsedURL = regX.exec(urlString);
    if (!parsedURL) {
        return null;
    } else {
        const [fullUrl, protocol, fullhost, fullpath] = parsedURL;
        return {
            Url: fullUrl,
            Protocol: protocol,
            Host: fullhost,
            Path: fullpath
        };
    }
}

module.exports = {
    parseProtocol
};