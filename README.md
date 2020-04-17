# flag-identifier

Flags are generated from https://countryflags.io/

### How to run the website locally:
- Fork the repository and clone it locally
- Install dependencies by running: ```npm install```
- Start the website by running: ```npm run dev```
- The website can then be found at http://localhost:3000/

### How to run tests:
- From the root run ```npm run test```

### How to run the data bulding tool:
-- Within the repo is a tool that can be run to add flag data to the data set
- From the root directory run: ```python addFlagData.py```
- Follow directions given by the program
- Country and Flag information can be found on the https://countryflags.io/ website

### About the UI:
- Built using the React framework Next.js
- Flag data is stored statically in a JSON file on the client
- The displayed flags are based off of the selected filters in the left column
- When a user clicks on a filter, the URL (route) is updated with the new query parameters through Next.js' Link Component
- The new parameters trigger the displayed flags to be updated