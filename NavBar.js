function Navbar({ categories, selectedCategory, selectedSubcategory, onSelectCategory, selectedSubcategory, onSelectSubcategory }) {

    return (

        <div className="navbar">

            <div className="category-nav">

                {categories.map(category => (

                    <button

                        key={category.name}

                        className={selectedCategory === category.name ? "active" : ""}

                        onClick={() => onSelectCategory(category.name === selectedCategory ? null : category)}

                    >

                        {category.name}

                    </button>

                ))}

            </div>

            <div>

// code for category buttons shown above.

            </div>{selectedCategory && (

                <div className="subcategory-nav">

                    {categories.find(cat => cat.name === selectedCategory).

                        subcategories.map(subcategory => (

                            <button

                                key={subcategory}

                                className={selectedSubcategory === subcategory ? "active" : ""}

                                onClick={() => onSelectSubcategory(subcategory === selectedSubcategory ? null : subcategory)}

                            >

                                {subcategory}

                            </button>

                        ))}

                </div>

            )}

        </div >
        
    )
}

export default Navbar;
// more code to handle subcategories follows…