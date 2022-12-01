
const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}\n\n`);

// const mainList = document.querySelector('#categories');
// const numberOfCategories = mainList.children;
// console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(item => {
    console.log(
      `Category: ${item.children[0].textContent}\nElements: ${item.children[1].children.length}\n\n`
    );
});
