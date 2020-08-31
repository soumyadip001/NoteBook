import * as actionTypes from './actionTypes';

const initialState = {
    layout: {
        parentCategory: {
            showTab: "ALL", // DASH OR ALL
        },
        selectedCategory: {
            title: "node",
            parent: "PGLANG",
        },
    },
    allCategories: [
        {
            key: "PGLANG",
            title: "Languages",
            icon: "FolderSpecial",
            lastUpdated: "31-05-2020",
            fileCount: 35,
            isMoreOptions: true,
            showMoreOptions: false,
            showChild: true,
            subCategories: [
                { title: "Node JS", count: 10, key: "node", selected: true },
                { title: "React JS", count: 15, key: "react", },
                { title: "Mongo DB", count: 10, key: "mongo", },
                { title: "Vue JS", count: 30, key: "vue", },
                { title: "Node JS Advanced", count: 120, key: "nodeadv", },
            ],
        },
        {
            key: "GK",
            title: "General Knowledge",
            icon: "FolderSpecial",
            lastUpdated: "3 months ago",
            fileCount: 135,
            isMoreOptions: true,
            showMoreOptions: false,
            showChild: false,
            subCategories: [
                { title: "Flags", count: 40, key: "flag", },
            ],
        },
        {
            key: "Nature",
            title: "NATURE",
            icon: "FolderSpecial",
            lastUpdated: "25 days ago",
            fileCount: 15,
            isMoreOptions: true,
            showMoreOptions: false,
            showChild: false,
            subCategories: [],
        },
    ],
    recentlyViewed: [
        {
            id: "node",
            title: "Node JS",
            link: "",
            parentCategory: "",
        },
        {
            id: "react",
            title: "React JS",
            link: "",
            parentCategory: "",
        },
        {
            id: "vue",
            title: "Vue JS",
            link: "",
            parentCategory: "",
        },
        {
            id: "es6",
            title: "JavaScript ES6",
            link: "",
            parentCategory: "",
        },
    ],
    viewEditSection: true,
    viewNoteViewSection: false,
    textAreaContent: "",
    questionTitle: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FAVOURITES:
            return {
                ...state,
                favourites: [],
            };

        case actionTypes.FETCH_RECENTLY_VIEWED:
            return {
                ...state,
                recentlyViewed: [],
            };

        default:
            return state;
    }
};

export default reducer;