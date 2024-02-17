// categoriesConfig.js
export const CATEGORIES = {
    ENTERTAINMENT: 'Entertainment',
    FANDOM: 'Fandom',
    GREATESTHITS: 'Greatest Hits',
    INTELLECTUALPROPERTY: 'Intellectual Property',
};



export const SUBCATEGORIES = {
    [CATEGORIES.ENTERTAINMENT]: {
        WENEEDTOTALK: 'We Need To Talk',
        NOTWARRIORS: 'Not Warriors',
        RARE: 'Rare',
    },
    [CATEGORIES.FANDOM]: {
        EASYTOHATE: 'Easy To Hate',
        TURBULENT: 'Turbulent',
        IFELTYOUNGERWHENWEMET: 'I Felt Younger When We Met',
    },
    [CATEGORIES.GREATESTHITS]: {
        THESECRETLIFEOFME: 'The Secret Life of Me',
        YOUDBEPARANOIDTOOIFEVERYONEYOUKNEWWASOUTTOGETYOU: "You'd Be Paranoid Too (If Everyone Was Out to Get You)",
        SEEYOUINTHEFUTURE: 'See You In The Future',
    },
    [CATEGORIES.INTELLECTUALPROPERTY]: {
        REALSUPERDARK: 'REAL SUPER DARK',
        CLOSER: 'CLOSER',
        ANIGHTOUTONEARTH: 'A NIGHT OUT ON EARTH',
    }
};
