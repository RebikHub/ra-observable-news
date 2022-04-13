import { applyMiddleware, combineReducers, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getNewsEpic } from "../epic/index";
import reducerGet from "./reducerGet";
import reducerGetMore from "./reducerGetMore";


const reducer = combineReducers({
  newsList: reducerGet,
  newsMore: reducerGetMore,
});

const epic = combineEpics(
  getNewsEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(epic);

export default store;