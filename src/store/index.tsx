import { createWrapper, Context, MakeStore, HYDRATE } from 'next-redux-wrapper';
import { createStore, Store, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import { IAppRootState } from './rootTypes';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSocketIoMiddleware from 'redux-socket.io';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
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
    const middlewares = [logger, socketIoMiddleware];

    let appliedMiddlewares = applyMiddleware(...middlewares);
    if (process.env.NODE_ENV !== 'production') {
        appliedMiddlewares = composeWithDevTools(appliedMiddlewares);
    }

    const store = createStore(reducer, appliedMiddlewares);

    return store;
};

export const wrapper = createWrapper<IAppRootState>(makeStore, {
    debug: false,
});
