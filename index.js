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

// set background color
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// part 2
//Select and cache the <nav id="top-menu"> element in a
// variable named topMenuEl.

var topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor="var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")

// document.body.appendChild(topMenuEl);

// add an href attribute with its value set to the href property of the "link" object.
// const newElement= document.createElement('a');
// newElement.href =menuLinks.href;

//Set the new element's content to the value of the text property of the "link" object
// const newElement=document.createElement('a');
// newElement.textContent = menuLinks.text;

//Append the new element to the topMenuEl element.
// topMenuEl.appendChild(newElement);

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
 const subMenuEl=document.querySelector("#sub-menu");
//set menu height to 100%
subMenuEl.style.height="100%"
//set background color
subMenuEl.style.backgroundColor= "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
//added from sandbox
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = "absolute";
//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

//cache topmenuEl
const topMenuLinks=topMenuEl.querySelector("a")
//Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click',function(event){
  //call the event object's preventDefault() method.
event.preventDefault();
//return if the element clicked was not an <a> element.
if (event.target.tagName !=='A') return;
//Log the content of the <a> to verify the handler is working.
console.log(event.target.textContent)
});

// add the active class to the <a> element that was clicked, 
// unless it was already active, in which case it should remove it


topMenuEl.addEventListener('click',
  function(event){
    event.preventDefault();
  
if (event.target.tagName !== 'A')
  return;

topMenuLinks.forEach(link=>{link.classList.remove('active');

});

if (!event.target.classList.contains('active'))
{
  event.target.classList.add('active');
}
   console.log(event.target.textContent);
});