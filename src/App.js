import React, { useState } from 'react';
import './App.css';
import './index.css';
import './button.css';
import { CATEGORIES, SUBCATEGORIES } from './categoriesConfig.js';
import {classes} from './Classes.js';

// this is a test

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const filteredClasses = classes.filter((c) => {
    const categoryMatch = (!selectedCategory || c.category === selectedCategory);
    const subcategoryMatch = (!selectedSubcategory || c.subcategory === selectedSubcategory);

  
    return categoryMatch && subcategoryMatch;
  });


  return (
    <div className="App">
      <header className="App-header">
        <a>
          Software Engineering Class Path 
        </a>

        {/* Render buttons for categories */}
        <div className="horizontal-buttons"> {/* Added container for horizontal buttons */}
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category}
              className={`button ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Render subcategory buttons if a category is selected */}
        {selectedCategory && (
          <div className="horizontal-buttons"> {/* Added container for horizontal buttons */}
            {Object.values(SUBCATEGORIES[selectedCategory]).map((subcategory) => (
              <button
                key={subcategory}
                className={`button ${selectedSubcategory === subcategory ? 'selected' : ''}`}
                onClick={() => handleSelectSubcategory(subcategory)}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}

        {/* Render filtered quotes */}
        <div className="class-container"> {/* Added container for quotes */}
          {filteredClasses.map((c) => (
            <div key={c.id} className="quote"> {/* Added class name for quote */}
              <p className="quote-text">{c.course}</p> {/* Added class name for quote text */}
              <p className="quote-year">{c.name}</p> {/* Added class name for quote year */}
              <p className='quote'
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;
