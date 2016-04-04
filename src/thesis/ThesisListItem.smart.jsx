// import React, { Component, PropTypes } from "react";
import React, { Component } from "react";

export class ThesisListItem extends Component {

  constructor() {
    super();
    this.saveThesis = this.saveThesis.bind(this);
  }

  saveThesis(event) {
    event.preventDefault();
    const { addThesis } = this.props;
    const newItem = {
      id: this.props.id + 1,
      author: this.props.author,
      email: this.props.email,
      title: this.props.title,
      urkund: this.props.urkund,
      ethesis: this.props.ethesis,
      abstract: this.props.abstract,
      grade: this.props.grade,
    };
    addThesis(newItem);
  }

  render() {
    const { id, author, email, title, urkund, ethesis, abstract, grade } = this.props;
    return (
      <div>
        <h3>Olen khhsggThesis id: { id }</h3>
        <p>author: { author }</p>
        <p>email: { email }</p>
        <p>title: { title }</p>
        <p>urkund: { urkund }</p>
        <p>ethesis: { ethesis }</p>
        <p>abstract: { abstract }</p>
        <p>grade: { grade }</p>
        <button onClick={this.saveThesis}>addThesis</button>
      </div>
    );
  }
}

// ThesisListItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   author: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   urkund: PropTypes.string.isRequired,
//   ethesis: PropTypes.string.isRequired,
//   abstract: PropTypes.string.isRequired,
//   grade: PropTypes.string.isRequired,
// };

import { connect } from "react-redux";

import { addThesis } from "./thesis.actions";

const mapDispatchToProps = (dispatch) => ({
  addThesis(newItem) {
    dispatch(addThesis(newItem));
  },
});

export default connect(mapDispatchToProps)(ThesisListItem);
