const categories = document.querySelectorAll('.item');

const numbersOfCategories = categories.length;
console.log('    Number of categories:', numbersOfCategories);

categories.forEach(category => {
   const title = category.querySelector('h2').textContent;
   const numbersOfCategories = category.querySelectorAll('li').length;
   console.log(`    Category: ${title}, 
    Elements: ${numbersOfCategories}`);
})