function filterCategory(category, displayedCategory) {
  return category === displayedCategory;
}

function filterByAttribute(itemAttribute, displayedAttribute) {
  if (displayedAttribute.length === 0) {
    return true;
  }
  return displayedAttribute.includes(itemAttribute);
}

function stripCurrencySymbol(price) {
  return price.substring(1);
}

function sortByPrice(current, next) {
  const currentPrice = stripCurrencySymbol(current.price);
  const nextPrice = stripCurrencySymbol(next.price);
  return currentPrice - nextPrice;
}

export default function filterProducts(data, onDisplay) {
  return data
    .filter(item => filterCategory(item.category, onDisplay.category))
    .filter(item => filterByAttribute(item.brand, onDisplay.brands))
    .filter(item => filterByAttribute(item.color, onDisplay.colors))
    .sort((current, next) => sortByPrice(current, next));
}
