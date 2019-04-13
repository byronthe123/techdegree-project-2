# Project 2 - Pagination 

This project uses JavaScript to achieve pagination by taking a list of student HTML data and breaking it into pages of 10 students each. User's can also search for names. **Aiming for exceeds expectations.**


## Programming Approach

This project was completed by following the instruction for displaying lists and pages. The showPage() function takes in list and page parameters and handles displaying student list items and search results. If there are no results, a No Results Found message is displayed. Unobtrusive JavaScript principles are also used by separating JavaScript completely from the HTML section, by keeping cross-browser consistency, and by using progressive enhancement so that if JavaScript is disabled, the user can still view the entire list of students.

The appendPageLinks() function handles dynamically displaying the correct number of pages for the students list by rounding up (Math.ceil()) - for example: 56 students list items will result in 6 pages.

The handLiClick() function handles page link clicks (1, 2, etc) and removes the active class from all links and  applies the active class to the clicked link.

The handleSearch() function was by far the trickiest function to code. It handles student searches by name in the search bar. The methodology was to create a list of student names that contain the search letters using String.includes(). This list is passed to the showPage() and appendPageLinks() functions to display the results and to update the number of pages for the results. The number of page links are based on how many results there are - for example: 5 results will result in a single page. If there are no results, No Results Found is displayed.

## Syntax and Conventions

The app is written in ES6 JavaScript and no additional packages such as jQuery are used. 
