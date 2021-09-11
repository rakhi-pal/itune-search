Problem Statement:

Show top 100 albums based on the json feed here: 
https://itunes.apple.com/us/rss/topalbums/limit=100/json
Requirements
1.	Allow the top 100 to be searchable.
2.	Allow the user to see more information about the Album of a selected song.
3.	Allow the user to apply category filter and date filter for release dates. done
4.	Add a "Favorite" functionality. done
5.	Surprise us! Add a feature that you think would work well here.
6.	The layout must be responsive.


Evaluation Criteria.
●	Code should be written in ReactJS
●	Usage of Redux (Hooks) would be a plus.
●	Flawless implementation of requirements..
●	Project organization, structure, documentation.


## Introduction

This project is developed using React with functional components and hooks(ES6+).
It uses React-router-dom for routing to different pages. It also uses Material UI components. It provides a simple itune search app with the following requirements met.
1.	Allow the top 100 to be searchable.
2.	Allow the user to see more information about the Album of a selected song.
3.	Allow the user to apply category filter and date filter for release dates.
4.	Add a "Favorite" functionality.
5.	Surprise us! Add a feature that you think would work well here. (Added dynamic filtering based on artist)
6.	The layout must be responsive.

## Installation and Running test cases
● yarn/npm is used as a package manager 

Steps to run the application -
● "npm i" can be used to download the dependencies
● "npm run start" can be used to run the application (http://localhost:3000 to be accessed in the browser).

## Design Decisions

1. Functional component based development methodology is used.
2. I have though of having seperation of concerns while designing this simple application.
3. You can find the sepeartion of the concerns in the src/components directory.
4. Multiple components are created to handle different functionalities.
5. Some common components like dropdow is created

## Trade offs or Further Enhancements - if given extra time

 ● We can do the testing of the components using jest. 
 ● Performance of the application can be improved.
 ● UI can be enhanced further.
 ● Favorites list can be stored in the localhost and retrieved from there.
 
