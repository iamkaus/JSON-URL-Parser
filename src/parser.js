// parser.js
const { parseProtocol } = require("./urlParser");
const { parseJson } = require("./jsonHandler");
const { writeFile } = require("./fileHandler");
const fs = require("fs");

/* const inputFile = "json/data.json";
const outputFile = "json/parsed_data.json"; */

//both input and output files should be of .json format and can be any xyz.json;

fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading JSON file:", err);
        return;
    }

    const jsonObject = parseJson(data);
    if (!jsonObject) {
        return;
    }

    const stringURL = jsonObject.url;
    const parsedObject = parseProtocol(stringURL);
    if (!parsedObject) {
        console.error("Error parsing URL:", stringURL);
        return;
    }

    const jsonString = JSON.stringify(parsedObject, null, 2);
    writeFile(outputFile, jsonString);
});
