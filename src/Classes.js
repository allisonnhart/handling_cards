import { CATEGORIES, SUBCATEGORIES } from './categoriesConfig';

export const classes = [
    {
        id: 111,
        course: "CS 111",
        name: "Introduction to Computer Science",
        description: "Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.",
        category: CATEGORIES.FRESHMAN,
        subcategory: SUBCATEGORIES[CATEGORIES.FRESHMAN].FALL,
        link: "https://catalog.byu.edu/courses/14243-000"
    },
    {
        id: 202,
        course: "CS 202",
        name: "Software Engineering Lab 1",
        description: "The first of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice.",
        category: CATEGORIES.FRESHMAN,
        subcategory: SUBCATEGORIES[CATEGORIES.FRESHMAN].WINTER,
        link: "https://catalog.byu.edu/courses/13855-000"
    },
    {
        id: 235,
        course: "CS 235",
        name: "Data Structures and Algorithms",
        description: "Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.",
        category: CATEGORIES.FRESHMAN,
        subcategory: SUBCATEGORIES[CATEGORIES.FRESHMAN].WINTER,
        link: "https://catalog.byu.edu/courses/10648-000"
    },
    {
        id: 203,
        course: "CS 203",
        name: "Software Engineering Lab 2",
        description: "The second of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice.",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].FALL,
        link: "https://catalog.byu.edu/courses/13856-000"
    },
    {
        id: 236,
        course: "CS 236",
        name: "Discrete Structures",
        description: "Introduction to grammars and parsing; predicate and propositional logic; proof techniques; sets, functions, relations, relational data model; graphs and graph algorithms.",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].FALL,
        link: "https://catalog.byu.edu/courses/10649-000"
    },
    {
        id: 224,
        course: "CS 224",
        name: "Intro to Computer Systems",
        description: "How a computer works to execute sequential code: low level data representation and abstraction, the relationship between C and assembly, computer architecture and pipelining, the memory hierarchy, dynamic memory allocation, and linking.",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].FALL,
        link: "https://catalog.byu.edu/courses/10178-002"
    },
    {
        id: 240,
        course: "CS 240",
        name: "Advanced Software Construction",
        description: "Advanced software development with an object-oriented focus. Design, implementation, and testing of medium-sized programs including a server program.",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].WINTER,
        link: "https://catalog.byu.edu/courses/09200-000"
    },
    {
        id: 260,
        course: "CS 260",
        name: "Web Programming",
        description: "Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.",
        category: CATEGORIES.SOPHOMORE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOPHOMORE].WINTER,
        link: "https://catalog.byu.edu/courses/13420-000"
    },
    {
        id: 204,
        course: "CS 204",
        name: "Software Engineering Lab 3",
        description: "The third of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice.",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].FALL,
        link: "https://catalog.byu.edu/courses/13857-000"
    },
    {
        id: 312,
        course: "CS 312",
        name: "Advanced Algorithms and Problem Solving",
        description: "A study of the design and analysis of algorithms as solutions to problems, including dynamic programming, linear programming, greedy algorithms, divide-and-conquer algorithms, graph algorithms, and intelligent search algorithms.",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].FALL,
        link: "https://catalog.byu.edu/courses/01499-002"
    },
    {
        id: 324,
        course: "CS 324",
        name: "Systems Programming",
        description: "Systems programming principles and concepts, including Linux systems programming, multiprocessing, concurrency, exceptional control flow, caching, sockets, protocols, and non-blocking I/O.",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].FALL,
        link: "https://catalog.byu.edu/courses/13421-000"
    },
    {
        id: 329,
        course: "CS 329",
        name: "Testing, Analysis, and Verification",
        description: "Fundamental challenge of software quality through the entire software product life-cycle. Sound engineering principles to ensure and assure quality at each stage of the life-cycle with an emphasis in early stages on testing techniques, dynamic and static program analysis, and formal verification for high assurance systems.",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].WINTER,
        link: "https://catalog.byu.edu/courses/13780-000"
    },
    {
        id: 340,
        course: "CS 340",
        name: "Software Design",
        description: "Fundamental challenge of software quality through the entire software product life-cycle. Sound engineering principles to ensure and assure quality at each stage of the life-cycle with an emphasis in early stages on testing techniques, dynamic and static program analysis, and formal verification for high assurance systems.",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].WINTER,
        link: "https://catalog.byu.edu/courses/11440-001"
    },
    {
        id: 452,
        course: "CS 452",
        name: "Database Modeling Concepts",
        description: "Database models: relational, deductive, object-oriented. Integrity constraints, query languages, database design.",
        category: CATEGORIES.JUNIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.JUNIOR].WINTER,
        link: "https://catalog.byu.edu/courses/08102-002"
    },
    {
        id: 480,
        course: "CS SE 480",
        name: "Software Engineering Capstone 1",
        description: "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
        category: CATEGORIES.SENIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].FALL,
        link: "https://catalog.byu.edu/courses/13941-000"
    },
    {
        id: 400,
        course: "CS Elective",
        name: "Elective A",
        description: "Select a course from the Elective A group of courses",
        category: CATEGORIES.SENIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].FALL
    },
    {
        id: 401,
        course: "CS Elective",
        name: "Elective A or Elective B",
        description: "Select a course from the Elective A or Elective B group of courses",
        category: CATEGORIES.SENIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].WINTER
    },
    {
        id: 481,
        course: "CS SE 481",
        name: "Software Engineering Capstone 2",
        description: "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
        category: CATEGORIES.SENIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].WINTER,
        link: "https://catalog.byu.edu/courses/13942-000"
    },
    {
        id: 402,
        course: "CS Elective",
        name: "Elective A or B",
        description: "Select a course from the Elective A or Elective B group of courses",
        category: CATEGORIES.SENIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].WINTER
    },
    {
        id: 404,
        course: "CS 404",
        name: "Ethics and Computers in Society",
        description: "Societal impact of computer technology, the computer scientist's place in society, ethical issues. Reading, discussion, and writing seminar.",
        category: CATEGORIES.SENIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].WINTER,
        link: "https://catalog.byu.edu/courses/10181-000"
    },
    {
        id: 261,
        course: "CS 260",
        name: "Web Programming",
        description: "Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.",
        category: CATEGORIES.SENIOR,
        subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].ELECTA,
        link: "https://catalog.byu.edu/courses/13420-000"
    },
]