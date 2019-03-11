'use strict';
const express = require('express');
var jsdom  = require("jsdom");
const http = require('https');
const request = require('request');

function scrape(scrape_url) {

    return new Promise((resolve, reject) => {

      request({uri: scrape_url}, function(error, response, body) {
        if(!error && response.statusCode == 200) {
          const dom = new jsdom.JSDOM(body);
          // const text = dom.window.document.getElementsByTagName('h1')[0].textContent;
          resolve(dom.window.document.getElementsByTagName('h1')[0].textContent);
        } else {
          reject('failed');
        }
      });
    });
}

module.exports = { scrape };

