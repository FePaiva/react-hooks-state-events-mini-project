import React from "react";

function CategoryFilter({categories, onSelectedCategory, selectedCategory}) {
  
  const createButton = categories.map((category) => {
    const className = category === selectedCategory ? 'selected' : null;
    return (
      <button className={className} 
      key={category} 
      onClick={() => onSelectedCategory(category)}>
        {category}
        </button>
    )
  } )
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {createButton}

    </div>
  );
}

export default CategoryFilter;
