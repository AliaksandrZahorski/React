import React from 'react';
import { connect } from 'react-redux';
import { addRecord } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onAddRecord(record) {
    dispatch(addRecord(record));
  },
});

class AddRecord extends React.Component {
  state = {
    title: '',
    text: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onAddRecord(this.state);
  };

  handleTitleChange = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };

  handleTextChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmitForm} autoComplete="off">
          <label htmlFor="title">
            title
          </label>
          <input
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <br/>
          <br/>
          <label htmlFor="text">
            text
          </label>
          <input
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddRecord);
