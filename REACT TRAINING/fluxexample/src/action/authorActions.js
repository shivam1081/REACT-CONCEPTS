import Dispatcher from '../dispatcher/AppDispatcher';
export function createAuthor(authorName) {
    Dispatcher.dispatch({
        type: "CREATE_AUTHOR",
        authorName
    });
}