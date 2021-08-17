# Cypress API Automation

## Dependencies

1. Install Visual Studio
2. Install NodeJS
3. Install Cypress

## How To run the Code
1. Clone the repo 
2. Open and run Cypress using the below command :

```
npx cypress open
```
3. Before running the script in you test runner, Go to the link to verify the layout of json>https://serverest.dev/produtos
4. To understand what are we validating
5. The ApiTest.js consists of two test.
   Test 1:Verify Api response is json
   Test 2:Verify Api assertions
6. Run **Api.test** under integration\examples 

## Expected Result
1. Test 1: would resturn the list of products in JSON string format
2. Test 2: would validate & return the status of the assertions that we put on the request
