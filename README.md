# Node & Express Bug Hunt!

**READ ALL INSTRUCTIONS BEFORE STARTING**

There are 10 bugs in total, can you find them all? There are hints throughout (???), you should only need to make minor modifcations to 10 lines of code.

**Don't race through the files looking for the issues!** They should all have a console log or error that help you identify them. Read the console so that you know what error will cause each bug. The last one is tricky since it doesn't throw any errors. Document the error, line number and your fix in this README for each of the bugs.

## Setup
```
npm install
npm start
```

> NOTE: A couple of bugs prevent the server from starting.

## Error List

TODO: Add the error here followed by the line of code you fixed.

### Bug 0

`ReferenceError: app is not defined`

Fixed `quote.router.js` line 28: switch `app` to `router`. _This is the solution to the first bug._

### Bug 1

added module.exports... to quote.router.js

### Bug 2

on server.js changed route of app.use(express.static('public')) to app.use(express.static('server/public'));

### Bug 3

getQuote() changed to getQuotes() in client.js

### Bug 4

changed quote list variable to be an empty arrray instead of an empty object

### Bug 5

changed get pathing in quote.router.js from /quotes to /

### Bug 6

changed quotesList.push to quoteList.push in quote.router.js POST

### Bug 7

on client.js removed i++ from for of loop

### Bug 8

line 7 client.js removed a curly brace in '/quote' pathing

### Bug 9

line 9 - 10 index.html defered and moved axios package to be above the scripts/client.js



## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html
