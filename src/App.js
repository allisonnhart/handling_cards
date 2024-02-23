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
      <div className="App-holder">
        <header className="App-header">
          <h2>
            Software Engineering Class Path 
          </h2>
        </header>

        {/* Render buttons for categories */}
        <div className="horizontal-buttons"> {/* Added container for horizontal buttons */}
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category}
              className={`button${selectedCategory === category ? '-selected' : ''}`}
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
                className={`button${selectedSubcategory === subcategory ? '-selected' : ''}`}
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
            <div key={c.id} className="class"> {/* Added class name for quote */}
              <p className="class-course">{c.course}</p> {/* Added class name for quote text */}
              <p className="class-name">{c.name}</p> {/* Added class name for quote year */}
              <p className='class-description'>{c.description}</p>
              {c.link && <a className='class-link' href={c.link}>Click here for more information!</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
