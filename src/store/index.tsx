import { createWrapper, Context, MakeStore, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import { createStore, Store, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import { IAppRootState } from "./rootTypes";
import rootSagas from "./rootSagas";
import { composeWithDevTools } from "redux-devtools-extension";
import createSocketIoMiddleware from "redux-socket.io";
import { io } from "socket.io-client";
export interface SagaStore extends Store {
  sagaTask: Task;
}

const socket = io("http://localhost:3001");
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const logger = createLogger();

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    if (state.count) {
      nextState.count = state.count;
    } // preserve count value on client side navigation

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

// create a makeStore function
export const makeStore: MakeStore<IAppRootState> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [logger, socketIoMiddleware, sagaMiddleware];

  let appliedMiddlewares = applyMiddleware(...middlewares);
  if (process.env.NODE_ENV !== "production") {
    appliedMiddlewares = composeWithDevTools(appliedMiddlewares);
  }

  const store = createStore(reducer, appliedMiddlewares);

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSagas);

  return store;
};

export const wrapper = createWrapper<IAppRootState>(makeStore, {
  debug: false,
});
