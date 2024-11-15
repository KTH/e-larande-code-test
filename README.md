# The Acme API

Our external provider Acme has developed a national database with students grades and is providing a REST API to the entire country. Unfortunately, the API is not built specifically for us so it returns more information than required, making it difficult to understand it.

To solve the issue, we have decided to build an API that filters out irrelevant information and translates the Acme data model to the one used in our team.

## Before the test day

Install the latest LTS version of Node.js or higher

1. Clone this repository
2. Install dependencies `npm install`
3. Try to run `npm test`. The test should fail.

## Under the test day

- You will pair-program with a developer in our team to implement the `getResults` function in `src/index.ts`.
  