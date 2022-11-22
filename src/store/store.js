import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// root reducer

const middleWares = [];

export const store = createStore(rootReducer);
