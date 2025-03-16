// Menu data structure

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
const mainEl = document.querySelector("main");
mainEl.classList.add('flex-ctr')
// set background color
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// part 2
//Select and cache the <nav id="top-menu"> element in a
// variable named topMenuEl.

const topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor="var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");



// loop through each item in the menulinks arry
for (var i=0; i<menuLinks.length;i++){
  //get current link object
  var link =menuLinks[i]
  //reate a new anchor element
  var newElement= document.createElement('a');
  // set href attribute to current object
  newElement.href =link.href;
 // set the text content of the current text object
 newElement.textContent=link.text;
// append the new element to navigation menu
  topMenuEl.appendChild(newElement);
}

//Select Submenu
const subMenuEl=document.querySelector('#sub-menu');
//set menu height to 100%
subMenuEl.style.height="100%"
//set background color
subMenuEl.style.backgroundColor= "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
//added from sandbox
// mainEl.style.backgroundColor = "var(--main-bg)";
// mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = "absolute";
//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

//cache all topmenuEl links
const topMenuLinks=topMenuEl.querySelectorAll("a")

// add the active class to the <a> element that was clicked, 
// unless it was already active, in which case it should remove it

 //use buildSubmenu  function and takes subLinks Array
function buildSubmenu(subLinks){
  // clean the current content of the submenu
  subMenuEl.innerHTML='';
  //iterate over each link in the sublinks array
  subLinks.forEach(link=>{
    const subLink=
    //Create a new anchor element in the memory
    document.createElement('a');
    //set href attribute of the anchor, to links href
    subLink.href=link.href;
    // text content of the anchor set to links text
    subLink.textContent=link.text;
    subMenuEl.appendChild(subLink); // add a child of submenu element to parent 

  });


}// attach event listener to the topmenu element
topMenuEl.addEventListener('click',
  function(event){
    //prevent the default link behavior
    event.preventDefault();
  //exit the function if the clicked item is not an anchor tag
if (event.target.tagName !== 'A')
  return;


// log the text content of the clicked tag
console.log(event.target.textContent);
// from all topmenu links remove the 'active ' class
topMenuLinks.forEach(link=>{
  link.classList.remove('active');
});

// when link clicked while not active, add active class
  if (!event.target.classList.contains('active')) {
    event.target.classList.add('active');



//sumenu interaction
// get the text of the clicked link
const clickedText=event.target.textContent;
// find link oject in menulinks array
const linkObject=menuLinks.find(link => link.text===event.target.textContent);
if
 (linkObject && linkObject.subLinks) {
 //show the submenu if it there
  subMenuEl.style.top = '100%';

  //build submenu with sublinks
  buildSubmenu(linkObject.subLinks);
// adding event listener to the submenu
  subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
    
    console.log(event.target.textContent);
    
    subMenuEl.style.top = '0';
    //remove active class
    topMenuLinks.forEach(link => link.classList.remove('active'));
    // update main content with clicked mainEl is update with <h1>
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });
 }else{
// clear contents if no submenu
   subMenuEl.style.top = '0';
      subMenuEl.innerHTML = '';
 }
}else{
  // if active already, hide submenu and clear
  subMenuEl.style.top = '-100';
  subMenuEl.innerHTML = '';
}
// check clicked mnu==='about'
if (event.target.textContent==='about'){
  // About set as main content
  mainEl.innerHTML ='<h1>About</h1>';
  // hide submenu, set its top =0
  subMenuEl.style.top='0';
  // return to stop the process
  return;
}

});


