# Build

-Run `npm start` to run the project in your local and  the browser will open automatically

-full disclosure, project is deployed on githubpages at link https://hahazim1992.github.io/hazim-comics-assessment/ , however the API call did not went through on the production server, only can retrieve in local. 

-hence, please fork the project and run it locally

# HazimComicsAssessment

### Dear Code Reviewer,

#### project flow guide:
-character in home page is sort by date_last_updated

-search box catered for date_last_updated, name, real name and id but id is not shown on home page

-search box has auto fill but must choose with arrow key and click the enter key from the suggested list (not clicked by mouse)

-search box handles fuzzy search and the dataview will display result dynamically as you type

-clicking read more button at the respective character card will bring the user to the character page where id is used to fetch the character profile

-user can click at the home icon located on the far top left to return to home page

#### cons:

-unable to complete lazy load on time

-unable to start unit test

-unable to start CI/CD

-unable to start packaging project in docker