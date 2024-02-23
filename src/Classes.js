import { CATEGORIES, SUBCATEGORIES } from './categoriesConfig';

export const classes = [
    {
        id: 111,
        course: "CS 111",
        name: "Intro to Programming",
        description: "Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.",
        category: CATEGORIES.FRESHMAN,
        subcategory: SUBCATEGORIES[CATEGORIES.FRESHMAN].FALL,
        link: "https://catalog.byu.edu/courses/14243-000"
    },
    {
        id: 202,
        course: "CS 202",
        name: "Software Engineering Lab 1",
        description: "",
        category: CATEGORIES.FRESHMAN,
        subcategory: SUBCATEGORIES[CATEGORIES.FRESHMAN].WINTER
    },
    {
        id: 235,
        course: "CS 235",
        name: "Data Structures",
        description: "",
        category: CATEGORIES.FRESHMAN,
        subcategory: SUBCATEGORIES[CATEGORIES.FRESHMAN].WINTER
    },
    {
        id: 203,
        course: "CS 203",
        name: "Software Engineering Lab 2",
        description: "",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].FALL
    },
    {
        id: 236,
        course: "CS 236",
        name: "Discrete Structures",
        description: "",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].FALL
    },
    {
        id: 224,
        course: "CS 224",
        name: "Intro to Computer Systems",
        description: "",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].FALL
    },
    {
        id: 240,
        course: "CS 240",
        name: "Advanced Programming",
        description: "",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].WINTER
    },
    {
        id: 260,
        course: "CS 260",
        name: "Web Programming",
        description: "",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].WINTER
    },
    {
        id: 204,
        course: "CS 204",
        name: "Software Engineering Lab 3",
        description: "",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].FALL
    },
    {
        id: 312,
        course: "CS 312",
        name: "Algorithm Analysis",
        description: "",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].FALL
    },
    {
        id: 324,
        course: "CS 324",
        name: "Systems Programming",
        description: "",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].FALL
    },
    {
        id: 329,
        course: "CS 329",
        name: "Testing, Analysis, and Verification",
        description: "",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].WINTER
    },
    {
        id: 340,
        course: "CS 340",
        name: "Software Design",
        description: "",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].WINTER
    },
    {
        id: 452,
        course: "CS 452",
        name: "Database Modeling",
        description: "",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].WINTER
    },
]