/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
Created the showPage function which displays the student data. I was originally using the thumbnail object in the image source, but due to its poor quality ended up using the large object instead.
Also I only realised at the end I could of just have assigned a constant to the 9 items. It would only help if I'd have to show more items per page for whatever reason.
*/
function showPage(list, page) {

  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

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
Created the addPagination function which creates a button for every single page of data.
It's also clickable which moves can move the pages forwards or backwards.
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

  //changes the page and button styling when clicked
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


//Was able to place a search box in the header - but struggled with the functionality part of it. I was close but couldn't quite get there. I've since looked at how other students have done it and it makes sense now. 
let header = document.querySelector('.header');
let search = `
  <label for="search" class="student-search">
    <span>Search by name</span>
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
`;
header.insertAdjacentHTML('beforeend', search);


