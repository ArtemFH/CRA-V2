import {configureStore} from '@reduxjs/toolkit'
import {templateReducer} from "./template/reducer";

export const store = configureStore({
    reducer: {
        template: templateReducer.reducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

