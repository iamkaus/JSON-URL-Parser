# URL Parser Project

* This project is a URL parser that follows a specific format **_(protocol, host, path)_**. It reads a URL from a _data.json_ _(can be changed to different .json file)_ file, converts it to a JavaScript object, and then extracts the string URL from it. The URL string is 
  passed to a function called _parseProtocol()_, which parses it according to a predefined regular expression.
-------------------------------------------------------------------------------------------

## How It Works

* The parser reads a URL from the _data.json_ or different _.json_ file.
* The URL string is converted into a JavaScript object.
* The string URL is extracted from the JavaScript object.
* The extracted URL is passed to the _parseProtocol()_ function.
* The _parseProtocol()_ function parses the URL using a regular expression to extract the **_protocol, host, and path_**.
* The function checks if the URL is parsed correctly before extracting the components.
* If the URL is parsed correctly, the function constructs an object containing the **_full URL, protocol, host, and path_**.
* The parsed object is then converted to a JSON string.
* The JSON string is written to a *parsed_data.json* _(can be a different .json file)_ file.
-------------------------------------------------------------------------------------------

# Files

* `main/parser.js`: Main JavaScript file containing read data logic.
* `main/filehandler.js`: Handles write data logic after _json.stringify_.
* `main/jsonhandler.js`: Handles parsing json data and returns JSON object.
* `main/urlparser.js`: Contains main url parse logic.
-------------------------------------------------------------------------------------------

# Functionality

* The `readjson()` function reads data from input file.
* The `parsejson()` function parses data read from json into a javascript object.
* The `parseProtocol()` function ensures that the URL follows a specific format before parsing it. It validates the URL against a regular expression and returns an object containing the parsed components if the URL is in * the expected format. If the URL does not match the expected format, the function returns null.
* The `writefile()` function writes json stringified object into output file
-------------------------------------------------------------------------------------------

## Constraints

* The function _parsedProtocol()_, _readFile()_ and _writeFile()_ excepts only _string_ of type _stringURL_ and _outputfile/inputfile_ (which is basically the file from which data is to be read from and written to) 
  because of the constraint _@param_ which binds the function parameter to such type of string
* The function _parsedProtocol()_ returns only an object conataining the parsed components upon successfull parse or _null_ if the parse failed because of _@returns_ contraint.
-------------------------------------------------------------------------------------------

## Usage
### To use the URL parser:

* Make sure you have `Node.js` installed on your system.
* Clone this repository to your local machine.
* Install dependencies using `npm install`.
* Place your URL data in the _desired.json file_ or a _data.json_ file for example.
* The url in _.json_ must follow the format specified.
* Run the parser using `npm start`.
* The parsed data will be written to the `parsed_data.json` or anyother `xyz.json` file.
-------------------------------------------------------------------------------------------

# Dependencies
## This project uses the following dependencies:

* `fs`: To read and write files.
-------------------------------------------------------------------------------------------

# Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
-------------------------------------------------------------------------------------------

# License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.
-------------------------------------------------------------------------------------------
