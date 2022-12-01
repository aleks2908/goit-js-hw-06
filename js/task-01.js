const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}\n\n`);

numberOfCategories.forEach(item => {
  console.log(
    `Category: ${item.children[0].textContent}\nElements: ${item.children[1].children.length}\n\n`
  );
});
