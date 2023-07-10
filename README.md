# Generating and Using Mock Data with ChatGPT

This respository was created as part of my Tech Talk for the 2023 CBI IDS Intern Hackathon. 

> No time to set up a database? No problem! In this presentation, we'll harness ChatGPT's natural language processing to generate realistic datasets and integrate them into a basic HTML+JavaScript app. We'll also discuss how to make a smooth transition from mock data to a real database, allowing you to unlock the full potential of your application. Don't miss this opportunity to discover how ChatGPT can become your ultimate ally in accelerating development and delivering compelling user experiences.

## How to use this repository

The `mock/` directory contains the code for generating the mock data using ChatGPT. This is the code discussed in the presentation. To view this file simply open `mock/index.html` in your preferred browser.

The `real/` directory contains almost the same code as `mock/` in its `frontend/` directory, with the only exception being that the `fetchContacts()` function is making an API request to the [random user API](https://randomuser.me/documentation). Open the `real/frontend/index.html` file in browser to see the API data in the table. (Note that this data differs from the `mock/` data due to the constraints of the random user API).

The `backend/` directory contains an example [node JS](https://nodejs.org/en) API. It currently serves no purpose, as the database credentials have been left with dummy variables. However, it can be used to connect to a database if provided with valid credentials. To run the code in the this directory, enter the `backend/` directory in a terminal. Be sure node JS is installed, then run `npm install` followed by `node index.js`. Then change the URL in the `fetchContacts()` function in `real/frontend/script.js` to use `http://localhost:3000/contacts`.

> Note that the `index.js` file expects a table named `contacts` (line 31). Change this query if you wish to support a table of another name. Additionally, this file is intended to connect to Postgres databases. Drivers for other database flavors are readily available online.

## Resources

- [VSCode](https://code.visualstudio.com/download): my preferred editor for web development
- [W3 Schools](https://www.w3schools.com/): lots of language resources including HTML, CSS, and JavaScript
- [MDN Web Docs](https://developer.mozilla.org/en-US/): more HTML, CSS, and JavaScript resources along with the best documentation on backend development for the web
- [React](https://react.dev/): frontend JavaScript library that makes some aspects of development easier. I recommend having a thorough understanding of JavaScript before diving into React.

## Going Further
- **JavaScript and CSS:** Javascript can also control the style of each element! Try to change the color of the status indicator conditionally. Make the text green if the contact is online and red otherwise.
- **Loading:** Add a loading indicator while the timeout is being resolved to let the user know the page is still progressing. (Increase the timeout if needed)
- **Pagination**: Implement a pagination feature that allows users to navigate through multiple pages of contacts. 
- **Responsiveness**: Edit the CSS to use responsive sizes (ex. %, rem, vw, flexbox, css grids...) so that the page renders correctly on different sized screens. 
- **Set up a database**: Set up a real database and connect to it using the code in `real/backend/`. There are a million ways to spin up a database for a few cents or less. Try using [AWS](https://aws.amazon.com/) or Fly.io. 

**Disclaimer:**

*CBI does not endorse or promote the materials presented above.*
