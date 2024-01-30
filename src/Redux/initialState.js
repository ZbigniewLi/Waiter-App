const initialState = {
  tables: [
    { id: '1', name: 'Table 1', status: 'Free', bill: 0, people: 0, maxPeople: 5 },
    { id: '2', name: 'Table 2', status: 'Reserved', bill: 50, people: 2, maxPeople: 5 },
    { id: '3', name: 'Table 3', status: 'Busy', bill: 100, people: 4, maxPeople: 5 },
    { id: '4', name: 'Table 4', status: 'Cleaning', bill: 0, people: 0, maxPeople: 5},
  ],
  statuses: ['Reserved', 'Busy', 'Cleaning', 'Free']
};

export default initialState;
