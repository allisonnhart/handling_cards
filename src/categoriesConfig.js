// categoriesConfig.js
export const CATEGORIES = {
    FRESHMAN: 'Freshman',
    SOPHOMORE: 'Sophomore',
    JUNIOR: 'Junior',
    SENIOR: 'Senior',
};



export const SUBCATEGORIES = {
    [CATEGORIES.FRESHMAN]: {
        FALL: 'Fall',
        WINTER: 'Winter'
    },
    [CATEGORIES.SOPHOMORE]: {
        FALL: 'Fall',
        WINTER: 'Winter'
    },
    [CATEGORIES.JUNIOR]: {
        FALL: 'Fall',
        WINTER: 'Winter'
    },
    [CATEGORIES.SENIOR]: {
        FALL: 'Fall',
        WINTER: 'Winter',
        ELECTA: "Elective A",
        ELECTB: "Elective B"
    }
};
