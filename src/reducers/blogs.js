import {
  ADD_RECORD,
  DELETE_RECORD
} from '../actions';

const initialState = [
  {
    id: 0,
    title: 'title',
    text: 'Sample text',
  },
];

const blogs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
        }
      ];
    case DELETE_RECORD:
      return state.filter(s => s.id !== action.id);

    default:
      return state;
  }
}

export default blogs;
