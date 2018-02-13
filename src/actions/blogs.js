export const ADD_RECORD = 'ADD_RECORD';

let nextId = 1;

export const addRecord = record => ({
  type: ADD_RECORD,
  id: nextId++,
  title: record.title,
  text: record.text,
});
