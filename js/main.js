const links = [
  {
    label: "Week 02 notes",
    url: "week1/index.html"
  },
  {
    label: "Week 02 notes",
    url: "week2/index.html"
  },
  {
    label: "Week 03 notes",
    url: "week3/index.html"
  }
]

var links_list = document.getElementByClassName('list-links');

for (let index = 0; index < links.length; index++) {
  let listItem = document.createElement('LI');
  let linkWeek = document.createElement('A');
  linkWeek.setAttribute('src', links[index]['url']);
  linkWeek.innerText = links[index]['label'];
  listItem.appendChild(linkWeek);
  links_list.appendChild(listItem);
  console.log(links_list);
  
}