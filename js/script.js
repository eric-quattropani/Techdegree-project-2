/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {

   // create two variables which will represent the index for the first and last student on the page
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
   // select the element with a class of `student-list` and assign it to a variable
  const studentList = document.querySelector('.student-list');
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = '';

   // loop over the length of the `list` parameter
  for (i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let studentItem = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
          </div>
        </li>`;
        studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  }
}





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  var numOfPages = Math.ceil(list.length / 9);
  var linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for ( i = 1; i <= numOfPages; i++) {
    let button = `
      <li>
        <button type="button">${i}</button>  
      </li>`
      linkList.insertAdjacentHTML('beforeend', button);
  }

  let buttonActive = document.querySelector('.link-list button'); 
  buttonActive.className = 'active';

  linkList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const removeClass = document.querySelector('.active');
      removeClass.className = '';
      e.target.className = 'active';
      showPage(list,e.target.textContent);
    }
  });
}

showPage(data, 1);
addPagination(data);


//Was able to place a search box in he header - but struggled with the functionality part of it. I was close but couldn't quite get there. I've since looked at how other studens have done it and it makes sense now. 
let header = document.querySelector('.header');
let search = `
  <label for="search" class="student-search">
    <span>Search by name</span>
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
`;
header.insertAdjacentHTML('beforeend', search);


