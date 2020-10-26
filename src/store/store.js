// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {
    currentSelection: [{ label: "Barcelona", id_municipio: "08019", cod_provincia: "08" }],
    historicSearches: []
};
const store = createContext(initialState);
const { Provider } = store;


const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SET_CURRENT_SELECTION':
        return {...state, currentSelection: action.payload};
        case 'ADD_TO_HISTORIC':
            return {...state, historicSearches: [...state.historicSearches, action.payload ]};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }