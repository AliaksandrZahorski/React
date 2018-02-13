import React from 'react';
import { connect } from 'react-redux';

import { deleteRecord } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onDeleteRecord(id) {
    dispatch(deleteRecord(id));
  },
});

const Blog = ({ data, onDeleteRecord }) => {
  const deleteRecord = id => onDeleteRecord(id);
  return(
    <div>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          deleteRecord(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Blog);
