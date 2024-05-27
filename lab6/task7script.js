// Отримання списку категорій
const categoriesList = document.getElementById('categories');

// Отримання елемента для виведення результатів
const resultsElement = document.getElementById('results');

// Порахунок кількості категорій
const categoryItems = categoriesList.querySelectorAll('li.item');
const categoryCount = categoryItems.length;

// Виведення кількості категорій в консоль
console.log(`Кількість категорій: ${categoryCount}`);

// Отримання інформації про кожну категорію
categoryItems.forEach(categoryItem => {
  // Отримання заголовка категорії
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  // Отримання списку елементів категорії
  const categoryElements = categoryItem.querySelectorAll('li');
  const elementCount = categoryElements.length;

  // Виведення інформації про категорію в консоль
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${elementCount}`);
});


