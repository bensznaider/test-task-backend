# test-task-backend

In order to start this backend server, clone this repo in the main folder of the project and then run "npm install" on the terminal to install the necessary dependencies. Create a .env file inside the repo root directory containing this environment variables:
ORIGIN="http://localhost:3000"  
INFO_REQUEST_URL="https://date.nager.at/api/v3/CountryInfo"  
FLAG_REQUEST_URL="https://countriesnow.space/api/v0.1/countries/flag/images"  
POPULATION_REQUEST_URL="https://countriesnow.space/api/v0.1/countries/population"  

Bare in mind that this proceeding of pointing out the environment variables in the readme file should be avoided, but I proceeded this way given the instructions provided for the task and also considering that all of the urls are actually public and do not require any API keys.

When everything's ready, run "npm start" on the terminal, which will get the app listening in port 8080.
