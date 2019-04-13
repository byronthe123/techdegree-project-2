/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Global variables to select all the student list items and to store the max number of items per page:

const studentsList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

/* 
The showPage() function handles displaying student list items and search results 
which are also passed in as a list. If there are no results, a No Results Found message 
is displayed.
*/

const showPage = (list, page) => {  

   if(document.querySelector('.no-results')) {
      const noResults = document.querySelector('.no-results');
      noResults.parentNode.removeChild(noResults);
   }
   
   const startIndex = ((page * itemsPerPage) - itemsPerPage);
   const endIndex = page * itemsPerPage;

   if(list.length === 0) {
      const noResults = document.createElement('h1');
      noResults.className = 'no-results';
      noResults.innerHTML = 'No Results Found';
      document.querySelector('.student-list').appendChild(noResults);
   } else {
      for(let i = 0; i < list.length; i++) {
         if(i >= startIndex && i < endIndex) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
   }

}

/*
The handLiClick() function handles page link clicks (1, 2, etc) 
and applies the active class to the clicked link.
*/

const handleLiClick = (e) => {
   const page = e.innerHTML;
   showPage(studentsList, page);

   const links = document.querySelectorAll('a');
   for(let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
   }

   e.classList.add('active');
}

/*
The appendPageLinks() function handles dynamically displaying the correct number of pages
for the students list.
*/

const appendPageLinks = (list) => {

   const numPages = Math.ceil(list.length / itemsPerPage);

   let li = '';

   for(let i = 0; i < numPages; i++) {
      li += `<li><a href='#' class=${i === 0 ? 'active' : null} onclick='return handleLiClick(this)'>${i+1}</a></li>`;
   }

   const pagination = document.createElement('div');
   pagination.innerHTML = 
      `<div class='pagination'>
         <ul class='pagination-ul'>
            ${li}
         </ul>
      </div>`;

   if(document.querySelector('.pagination')) {
      const existingPagination = document.querySelector('.pagination');
      existingPagination.parentNode.removeChild(existingPagination);
   }

   document.querySelector('.page').appendChild(pagination);
}

/*
The handleSearch() function handles student searches by name in the search bar.
The methodology was to create a list of student names that contain the search letters
using String.includes(). This list is passed to the showPage() and appendPageLinks() functions
to display the results and to update the number of pages for the results. 
*/

const handleSearch = (e) => {
   let matchList = [];

   if(e.value.length > 0) {
      for(let i = 0; i < studentsList.length; i++) {
         if(studentsList[i].textContent.includes(e.value)){
            matchList.push(studentsList[i]);
         } else {
            studentsList[i].style.display = 'none';
         }
         showPage(matchList, 1);
         appendPageLinks(matchList);
      }
   } else {
      onLoad();
   }
}


/*
This is the searchForm() that is dynamically added to the page.
 A handleSearch() method has been added to the form which is called on the oninput event.
*/

const searchForm = document.createElement('div');
searchForm.innerHTML = 
   `<div class="student-search">
      <input class='in-search' oninput='return handleSearch(this)' placeholder="Search for students...">
      <button>Search</button>
   </div>`;

document.querySelector('.page-header').appendChild(searchForm);

/*
The showPage() and appendPageLinks() methods have been combined in a onLoad method
to prevent code repetition as this is also called in the handleSearch() function.
*/

const onLoad = () => {
   showPage(studentsList, 1);
   appendPageLinks(studentsList);
}

/*
   onLoad() is called when the app stats.
*/
onLoad();

