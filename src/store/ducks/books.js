export const Types = {
    SET_INPUT_BOOK: 'books/SET_INPUT_BOOK',
    SET_BOOKS: 'books/SET_BOOKS',
    SET_LOADING_TRUE: 'books/SET_LOADING_TRUE',
    SET_LOADING_FALSE: 'books/SET_LOADING_FALSE',
}

const INITIAL_STATE = {
    inputBook: '',
    books: [],
    loading: false
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_INPUT_BOOK:
            return {
                ...state,
                inputBook: action.value
            }

        case Types.SET_BOOKS:
            return {
                ...state,
                books: action.books
            }

        case Types.SET_LOADING_TRUE:
            return {
                ...state,
                loading: action.bolean,
            }

        case Types.SET_LOADING_FALSE:
            return {
                ...state,
                loading: action.bolean,
            }

        default:
            return state
    }
}

export const Actions = {
    setInputBook: value => ({
        type: Types.SET_INPUT_BOOK,
        value
    }),

    setBooks: books => ({
        type: Types.SET_BOOKS,
        books
    }),

    setLoadingTrue: () => ({
        type: Types.SET_LOADING_TRUE,
        bolean: true
    }),

    setLoadingFalse: () => ({
        type: Types.SET_LOADING_FALSE,
        bolean: false
    })
}

