import { CATEGORIES, SUBCATEGORIES } from './categoriesConfig';

export const classes = [
    {
        id: 111,
        course: "CS 111",
        name: "Introduction to Computer Science",
        description: "Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.",
        category: CATEGORIES.BASICS,
        subcategory: SUBCATEGORIES[CATEGORIES.BASICS].REQUIRED,
        link: "https://catalog.byu.edu/courses/14243-000"
    },
    {
        id: 202,
        course: "CS 202",
        name: "Software Engineering Lab 1",
        description: "The first of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/13855-000"
    },
    {
        id: 235,
        course: "CS 235",
        name: "Data Structures and Algorithms",
        description: "Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.",
        category: CATEGORIES.BASICS,
        subcategory: SUBCATEGORIES[CATEGORIES.BASICS].REQUIRED,
        link: "https://catalog.byu.edu/courses/10648-000"
    },
    {
        id: 203,
        course: "CS 203",
        name: "Software Engineering Lab 2",
        description: "The second of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/13856-000"
    },
    {
        id: 236,
        course: "CS 236",
        name: "Discrete Structures",
        description: "Introduction to grammars and parsing; predicate and propositional logic; proof techniques; sets, functions, relations, relational data model; graphs and graph algorithms.",
        category: CATEGORIES.ALGORITHMS,
        subcategory: SUBCATEGORIES[CATEGORIES.ALGORITHMS].REQUIRED,
        link: "https://catalog.byu.edu/courses/10649-000"
    },
    {
        id: 224,
        course: "CS 224",
        name: "Intro to Computer Systems",
        description: "How a computer works to execute sequential code: low level data representation and abstraction, the relationship between C and assembly, computer architecture and pipelining, the memory hierarchy, dynamic memory allocation, and linking.",
        category: CATEGORIES.LLS,
        subcategory: SUBCATEGORIES[CATEGORIES.LLS].REQUIRED,
        link: "https://catalog.byu.edu/courses/10178-002"
    },
    {
        id: 240,
        course: "CS 240",
        name: "Advanced Software Construction",
        description: "Advanced software development with an object-oriented focus. Design, implementation, and testing of medium-sized programs including a server program.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/09200-000"
    },
    {
        id: 260,
        course: "CS 260",
        name: "Web Programming",
        description: "Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/13420-000"
    },
    {
        id: 204,
        course: "CS 204",
        name: "Software Engineering Lab 3",
        description: "The third of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/13857-000"
    },
    {
        id: 312,
        course: "CS 312",
        name: "Advanced Algorithms and Problem Solving",
        description: "A study of the design and analysis of algorithms as solutions to problems, including dynamic programming, linear programming, greedy algorithms, divide-and-conquer algorithms, graph algorithms, and intelligent search algorithms.",
        category: CATEGORIES.ALGORITHMS,
        subcategory: SUBCATEGORIES[CATEGORIES.ALGORITHMS].REQUIRED,
        link: "https://catalog.byu.edu/courses/01499-002"
    },
    {
        id: 324,
        course: "CS 324",
        name: "Systems Programming",
        description: "Systems programming principles and concepts, including Linux systems programming, multiprocessing, concurrency, exceptional control flow, caching, sockets, protocols, and non-blocking I/O.",
        category: CATEGORIES.LLS,
        subcategory: SUBCATEGORIES[CATEGORIES.LLS].REQUIRED,
        link: "https://catalog.byu.edu/courses/13421-000"
    },
    {
        id: 329,
        course: "CS 329",
        name: "Testing, Analysis, and Verification",
        description: "Fundamental challenge of software quality through the entire software product life-cycle. Sound engineering principles to ensure and assure quality at each stage of the life-cycle with an emphasis in early stages on testing techniques, dynamic and static program analysis, and formal verification for high assurance systems.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/13780-000"
    },
    {
        id: 340,
        course: "CS 340",
        name: "Software Design",
        description: "Fundamental challenge of software quality through the entire software product life-cycle. Sound engineering principles to ensure and assure quality at each stage of the life-cycle with an emphasis in early stages on testing techniques, dynamic and static program analysis, and formal verification for high assurance systems.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/11440-001"
    },
    {
        id: 452,
        course: "CS 452",
        name: "Database Modeling Concepts",
        description: "Database models: relational, deductive, object-oriented. Integrity constraints, query languages, database design.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/08102-002"
    },
    {
        id: 480,
        course: "CS SE 480",
        name: "Software Engineering Capstone 1",
        description: "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/13941-000"
    },
    // {
    //     id: 1,
    //     course: "CS Elective",
    //     name: "Elective A",
    //     description: "Select a course from the Elective A group of courses",
    //     category: CATEGORIES.SENIOR,
    //     subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].FALL
    // },
    // {
    //     id: 0,
    //     course: "CS Elective",
    //     name: "Elective A or Elective B",
    //     description: "Select a course from the Elective A or Elective B group of courses",
    //     category: CATEGORIES.SENIOR,
    //     subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].WINTER
    // },
    {
        id: 481,
        course: "CS SE 481",
        name: "Software Engineering Capstone 2",
        description: "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].REQUIRED,
        link: "https://catalog.byu.edu/courses/13942-000"
    },
    // {
    //     id: 402,
    //     course: "CS Elective",
    //     name: "Elective A or B",
    //     description: "Select a course from the Elective A or Elective B group of courses",
    //     category: CATEGORIES.SENIOR,
    //     subcategory: SUBCATEGORIES[CATEGORIES.SENIOR].WINTER
    // },
    {
        id: 404,
        course: "CS 404",
        name: "Ethics and Computers in Society",
        description: "Societal impact of computer technology, the computer scientist's place in society, ethical issues. Reading, discussion, and writing seminar.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].REQUIRED,
        link: "https://catalog.byu.edu/courses/10181-000"
    },
    {
        id: 330,
        course: "CS 330",
        name: "Concepts of Programming Languages",
        description: "Principles and concepts characterizing high-level computer programming languages, process and data abstration, encapsulation, inheritance, functional programming, logic programming, scanners, and parsers.",
        category: CATEGORIES.LLS,
        subcategory: SUBCATEGORIES[CATEGORIES.LLS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/01500-001"
    },
    {
        id: 345,
        course: "CS 345",
        name: "Operating Systems Design",
        description: "Principles and concepts of operating systems design and the implementation of an operating system.",
        category: CATEGORIES.LLS,
        subcategory: SUBCATEGORIES[CATEGORIES.LLS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/01513-003"
    },
    {
        id: 356,
        course: "CS 356",
        name: "Advanced Techniques in Human Computer Interaction",
        description: "This class combines designing the user experience with implementing the technology. Students learn website design, information architecture, and how to design for the broader ecosystem of use.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].ELECTIVE,
        link: "https://catalog.byu.edu/courses/12328-001"
    },
    {
        id: 453,
        course: "CS 453",
        name: "Fundamentals of Information Retrieval",
        description: "Concepts and terminology of information retrieval (IR) systems. Design methodologies and issues. Fundamental IR models examined: Boolean, Vector Space, Probabilistic models, and evaluation strategies.",
        category: CATEGORIES.ALGORITHMS,
        subcategory: SUBCATEGORIES[CATEGORIES.ALGORITHMS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/11823-000"
    },
    {
        id: 456,
        course: "CS 456",
        name: "Mobile and Ubiquitous Human-Computer Interaction",
        description: "Iterative user experience design for mobile and ubiquitous computing with an emphasis on conceptualization and prototyping in specific contexts. Complete an open-ended project from initial design through functional prototype, with design and critique sessions.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].ELECTIVE,
        link: "https://catalog.byu.edu/courses/09202-000"
    },
    {
        id: 460,
        course: "CS 460",
        name: "Computer Communications and Networking",
        description: "Introduction to data communications and computer networking. Communications fundamentals, computer networks, software, architecture, telecommunications, regulation, standards.",
        category: CATEGORIES.ALGORITHMS,
        subcategory: SUBCATEGORIES[CATEGORIES.ALGORITHMS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/07626-002"
    },
    {
        id: 462,
        course: "CS 462",
        name: "Large-Scale Distributed System Design",
        description: "Principles and concepts of designing and building distributed systems. Introduction to architectures for distributed computation. Reliability, availability, and scalability of large applications. Cloud computing and APIs.",
        category: CATEGORIES.SOFTWARE,
        subcategory: SUBCATEGORIES[CATEGORIES.SOFTWARE].ELECTIVE,
        link: "https://catalog.byu.edu/courses/10117-000"
    },
    {
        id: 465,
        course: "CS 465",
        name: "Computer Security",
        description: "Introduction to computer security fundamentals: confidentiality, integrity, authentication, and access control. Secret key and public key cryptography, network security protocols, viruses, and fire walls.",
        category: CATEGORIES.LLS,
        subcategory: SUBCATEGORIES[CATEGORIES.LLS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/10321-000"
    },
    {
        id: 486,
        course: "CS 486",
        name: "Verification and Validation",
        description: "Foundational topics in verification and validation; the application of logic to building correct systems. Covers logics to formally specify properties of systems, verifications of basic systems, and advanced topics in formal verification for complex systems.",
        category: CATEGORIES.LLS,
        subcategory: SUBCATEGORIES[CATEGORIES.LLS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/10952-003"
    },
    {
        id: 252,
        course: "CS 252",
        name: "Introduction to Computational Theory",
        description: "Finite state automata, regular languages, lexical analysis; push-down automata, context-free languages, parsing; Turing machines and unrestricted grammars; computability complexity, NP-completeness.",
        category: CATEGORIES.ALGORITHMS,
        subcategory: SUBCATEGORIES[CATEGORIES.ALGORITHMS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/06974-004"
    },
    {
        id: 355,
        course: "CS 355",
        name: "Interactive Graphics and Image Processing",
        description: "Introduces basic concepts of computer graphics and image processing.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/12329-002"
    },
    {
        id: 393,
        course: "CS 393",
        name: "Advanced Algorithms and Problem Solving",
        description: "This course will help students to become better at problem solving, increasing their ability to excel at technical/coding interviews (a challenging part of the hiring/interviewing process).",
        category: CATEGORIES.ALGORITHMS,
        subcategory: SUBCATEGORIES[CATEGORIES.ALGORITHMS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/14034-000"
    },
    {
        id: 401,
        course: "CS 401R",
        name: "Topics in Computer Science",
        description: "Undergraduate level subjects as announced before each semester. Consult your department for more information.",
        category: CATEGORIES.SPECIAL,
        subcategory: SUBCATEGORIES[CATEGORIES.SPECIAL].ELECTIVE,
        link: "https://catalog.byu.edu/courses/10951-000"
    },
    {
        id: 405,
        course: "CS 405",
        name: "Creating and Managing a Software Business",
        description: "Entrepreneurship, idea/opportunity generation, strategic planning, legal organization, product development, marketing/sales, customer support, fund raising, and effective management.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/11295-000"
    },
    {
        id: 412,
        course: "CS 412",
        name: "Linear Programming and Convex Optimization",
        description: "Optimization, problem formulation, and solution algorithms, including simplex and interior point methods. Applications from control, data mining, finance, game theory, learning, network flow, operations research, and statistical estimation.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/11187-001"
    },
    {
        id: 450,
        course: "CS 450",
        name: "Computer Vision",
        description: "Introduction to fundamental concepts and algorithms of computer vision, including feature extraction, detection, segmentation, registration, recognition, motion, 3D vision, and image understanding.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/09201-001"
    },
    {
        id: 455,
        course: "CS 455",
        name: "Computer Graphics",
        description: "Interactive computer graphics systems programming and architecture.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/06774-000"
    },
    {
        id: 470,
        course: "CS 470",
        name: "Introduction to Artificial Intelligence",
        description: "Introduction to core areas of artifical intelligence; intelligent agents, problem solving and search, knowledge-based systems and inference, planning, uncertainty, learning, and perception.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/01526-002"
    },
    {
        id: 471,
        course: "CS 471",
        name: "Voice User Interfaces",
        description: "Methods and development platforms for Voice User Interfaces. Principles of effective design; differences from visual or menu-based interfaces’ mechanics of automatic speech recognition, intent detection, slot filling, dialog state tracking, text generation, and knowledge representation.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/14035-000"
    },
    {
        id: 472,
        course: "CS 472",
        name: "Introduction to Machine Learning",
        description: "Machine learning models and other mechanisms allowing computers to learn and find knowledge from data.",
        category: CATEGORIES.ALGORITHMS,
        subcategory: SUBCATEGORIES[CATEGORIES.ALGORITHMS].ELECTIVE,
        link: "https://catalog.byu.edu/courses/10322-004"
    },
    {
        id: 474,
        course: "CS 474",
        name: "Introduction to Deep Learning",
        description: "Theory and practice of modern deep learning and associated software frameworks. A broad look at the field, drawing on material from machine vision, machine translation, dynamical systems, audio processing, neural computing and human perception.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/13781-000"
    },
    {
        id: 493,
        course: "CS 493R",
        name: "Computing Competitions",
        description: "Students work in teams to prepare for and compete in computer science competitions in areas such as programming, data science, and ethical hacking.",
        category: CATEGORIES.SPECIAL,
        subcategory: SUBCATEGORIES[CATEGORIES.SPECIAL].ELECTIVE,
        link: "https://catalog.byu.edu/courses/13435-000"
    },
    {
        id: 497,
        course: "CS 497R",
        name: "Undergraduate Research",
        description: "Students receive course credit for doing undergraduate research under the supervision of a faculty mentor.",
        category: CATEGORIES.SPECIAL,
        subcategory: SUBCATEGORIES[CATEGORIES.SPECIAL].ELECTIVE,
        link: "https://catalog.byu.edu/courses/13424-000"
    },
    {
        id: 498,
        course: "CS 498R",
        name: "Undergraduate Special Projects",
        description: "Students identify an interesting problem in computer science and solve it with the aid of faculty members.",
        category: CATEGORIES.SPECIAL,
        subcategory: SUBCATEGORIES[CATEGORIES.SPECIAL].ELECTIVE,
        link: "https://catalog.byu.edu/courses/12417-000"
    },
    {
        id: 501,
        course: "CS 501R",
        name: "Advanced Topics in Computer Science",
        description: "Advanced undergraduate- and graduate-level subjects as announced before each semester. Contact your department fpr more information.",
        category: CATEGORIES.SPECIAL,
        subcategory: SUBCATEGORIES[CATEGORIES.SPECIAL].ELECTIVE,
        link: "https://catalog.byu.edu/courses/10939-000"
    },
    {
        id: 513,
        course: "CS 513",
        name: "Robust Control",
        description: "Introduction to the analysis and design of feedback systems guaranteed to perform well in spite of model uncertainty.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/11441-002"
    },
    {
        id: 580,
        course: "CS 580",
        name: "Theory of Predictive Modeling",
        description: "Mathematical, computational, and philosophical foundations of machine learning, control, and physical modeling. Introduction to system identification, causality, uncertainty, model approximation, and information geometry.",
        category: CATEGORIES.MISC,
        subcategory: SUBCATEGORIES[CATEGORIES.MISC].ELECTIVE,
        link: "https://catalog.byu.edu/courses/14084-000"
    }
]