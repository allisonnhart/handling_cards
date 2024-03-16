// categoriesConfig.js
export const CATEGORIES = {
    SOFTWARE: 'Software',
    ALGORITHMS: 'Algorithms',
    LLS: 'Low Level Systems/Computer Security',
    BASICS: 'Basics',
    MISC: 'Miscellaneous Topics',
    SPECIAL: 'Special Courses'
};

export const SUBCATEGORIES = {
    [CATEGORIES.SOFTWARE]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.ALGORITHMS]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.LLS]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.BASICS]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.MISC]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.SPECIAL]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    }
};


/*export const SUBCATEGORIES = {
    [CATEGORIES.FRESHMAN]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.SOPHOMORE]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.JUNIOR]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective'
    },
    [CATEGORIES.SENIOR]: {
        REQUIRED: 'Required',
        ELECTIVE: 'Elective',
        ELECTA: "Elective A",
        ELECTB: "Elective B"
    }
};*/
