const fs = require("fs");
const axios = require("axios");

const file = process.argv[2];
let urls = [];

async function getUrls(file) {
  const fileContents = fs.readFileSync(file, "utf-8");
  fileContents.split(/\r?\n/).forEach((line) => {
    if (line !== "") {
      urls.push(line);
    }
  });
  htmls = {};
  for (let url of urls) {
    try {
      res = await axios.get(url);
      htmls[url] = res.data;
    } catch (err) {
      console.log("Couldn't download " + url);
    }
  }
  for (let key of Object.keys(htmls)) {
    const url = new URL(key);
    const fileName = url.hostname;
    fs.writeFile(fileName, htmls[key], function (err) {
      if (err) throw err;
      console.log("Wrote to " + fileName);
    });
  }
}

getUrls(file);
