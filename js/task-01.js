const listEl = document.querySelector('#categories');
const listChildrenElems = listEl.children;

console.log('Number of categories:', listChildrenElems.length);

const listItem = document.querySelectorAll('.item');

for (let item of listItem) {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
}
