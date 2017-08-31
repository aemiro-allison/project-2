# Build A Smoothie

### Description

The build a smoothie website will allow users to **create**, **read**, **update** or **delete** smoothies. A **user** can create a **smoothie** by adding ingredients with their respective quantity to a smoothie recipe. A user can also add instructions to their recipe to help other users who view their recipe. Each recipe will have a nutritional value which is the sum of all of the nutritional values among all the added ingredients.

### Technologies Used
Technology | Description
--- | ---
HTML | Strucutre of web page
CSS | animations, transitions, fonts
Javascript | AJAX
Server | Node.js + Express.js
DB | PostgresSQL + pg-promise *(Node.js postgres driver)*
API | [nutritionix API](https://developer.nutritionix.com)


<br>


## Reaching the MVP


<br>


### The Initial Approach
#### The API
The first task that was considered was the data flow of the site. To enable having a nutritional value for each smoothie recipe, **each ingredient itself would require a nutritional value**. To address this problem, the [nutritionix API](https://developer.nutritionix.com) was used to gather relevant data for each ingredient such as: nutritional values like protein, calories etc; a image of the ingredient, the quantity etc.

#### The Database
As the site will allow for multiple users to create their own recipes, the database will need to allow users to perform CRUD operations on their smoothie recipes. The database will also need to hold onto the different usres information such as their recipes, their usernames, passwords etc. Taking these requirements into consideration, the database will need to handle the following:
- Storing a new user with their info when they **sign up** for the first time.
- Save recpie to a user when they **create a new recipe**.
- Allow the user to perform **CRUD operations on their recipes**.
- Also allow guest *(visitors who have are not logged in)* to view all recipes with seacrhing functionality.


<br>

##### The models
The representation of the each entitiy within the database:

**User** - store each user and their info.

Fields | Data-Type
--- | ---
username | string
email | string
password | string
recipes | [Model]**Recipe**

**Recipe** - store info about recipe and ingredients.

Fields | Data-Type
--- | ---
userid | [Model]**User**
title | string
instructions | string
ingredients | object
date_created | timestamp


<br>


#### The User Interface
Other than the CRUD operations that a user can perform on their smoothie recpies, a user, or guest, should be able to search and filter to find a smoothie recipe. The user interface will follow a wireframe which encompasses all these functions plus the search functionality. The following wireframes were used to:

[Full picture of wireframe](./readme-assets/full-wireframe.jpg)
[Guest user story](./readme-assets/guest-user-story.jpg)
[Logged-in user story](./readme-assets/logged-in-user-story.jpg)





