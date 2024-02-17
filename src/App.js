import React, { useState } from 'react';
import './App.css';
import './index.css';
import './button.css';
import { CATEGORIES, SUBCATEGORIES } from './categoriesConfig.js';
import Quotes from './Quotes.js';

console.log("Quotes:", Quotes); // Logging the Quotes array

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

  const filteredQuotes = Quotes.filter((quote) => {
    const categoryMatch = (!selectedCategory || quote.category === selectedCategory);
    const subcategoryMatch = (!selectedSubcategory || quote.subcategory === selectedSubcategory);
    
    console.log("Quote:", quote);
    console.log("Category Match:", categoryMatch);
    console.log("Subcategory Match:", subcategoryMatch);
  
    return categoryMatch && subcategoryMatch;
  });

  console.log("Selected Category:", selectedCategory);
  console.log("Selected Subcategory:", selectedSubcategory);
  console.log("Filtered Quotes:", filteredQuotes)

  return (
    <div className="App">
      <header className="App-header">
        <a>
          Waterparks Lyrics !!!
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
        <div className="quotes-container"> {/* Added container for quotes */}
          {filteredQuotes.map((quote) => (
            <div key={quote.id} className="quote"> {/* Added class name for quote */}
              <p className="quote-text">{quote.text}</p> {/* Added class name for quote text */}
              <p className="quote-year">{quote.year || quote.date}</p> {/* Added class name for quote year */}
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;
