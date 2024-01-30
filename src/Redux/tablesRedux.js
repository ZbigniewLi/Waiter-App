import { API_URL } from './config';

//selectors
export const getAllTables = (state) => state.tables;
export const getTablebyId = (state, id) => state.tables.find(table => table.id === id);
//export const filteredTablesByCategory = ({ tables }, status) => tables.filter(table => table.status === status);
export const filteredTablesByCategory = (state, status) => state.tables.filter(table => table.status === status);



// actions
const createActionName = actionName => `app/tables/${actionName}`;

const EDIT_TABLE= createActionName('EDIT_TABLE');

// action creators
export const editTable = payload => ({ type: EDIT_TABLE, payload });


// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {

    case EDIT_TABLE:
  return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));

    default:
      return statePart;
  };
};
export default tablesReducer;




