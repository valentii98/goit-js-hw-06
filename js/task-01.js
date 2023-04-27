const ulEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulEl.length}`);
const liEl = document.querySelectorAll("#categories .item");
liEl.forEach(function (list) {
  console.log("Category:", list.firstElementChild.textContent);
  console.log("Elements:", list.lastElementChild.children.length);
});
