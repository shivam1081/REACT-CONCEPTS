import { EventEmitter } from "events";
import Dispatcher from "../dispatcher/AppDispatcher";
class authorStore extends EventEmitter{
    constructor() {
        super();
        this.authors = [{
            authorName: 'Sameul'
        }, {
            authorName: 'Michel'
        }];
    }
    creatorAuthor(authorName) {
        this.authors.push({ authorName });
        this.emit("change");
    }
    getAllAuthors() {
        return this.authors;
    }
    handleActions(action) {
        switch (action.type) {
            case "CREATE_AUTHOR": {
                this.creatorAuthor(action.authorName);
                break;
            }
        }
    }
}
const authorstore = new authorStore();
Dispatcher.register(authorstore.handleActions.bind(authorstore));
export default authorstore;