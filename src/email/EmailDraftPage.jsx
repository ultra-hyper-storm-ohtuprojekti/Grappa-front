import React, { Component } from "react";

import EmailDraftList from "./draftlist/EmailDraftList"

export class EmailDraftPage extends Component {

  constructor() {
    super();
  }

  handleUpdateDraft = (draft) => {
    this.props.updateEmailDraft(draft);
  }

  handleAddDraft = (draft) => {
    this.props.createEmailDraft(draft);
  }

  handleDeleteDraft = (draft) => {
    this.props.deleteEmailDraft(draft);
  }

  render() {
    return (
      <div className="ui form">
        <h2 className="ui dividing header">Email drafts</h2>
        <p>
          Drafts for the emails that are being sent by Grappa. Title is the email's title and body the text.
          Different variables are indicated with double dollars eg. $LINK$ which differ from draft to draft.
        </p>
        <EmailDraftList draftList={this.props.EmailDrafts}
          sendUpdateDraft={this.handleUpdateDraft}
          sendAddDraft={this.handleAddDraft}
          sendDeleteDraft={this.handleDeleteDraft} />
      </div>
    );
  }
}
import { connect } from "react-redux";
import { createEmailDraft, deleteEmailDraft, updateEmailDraft } from "./email.actions";

const mapStateToProps = (state) => {
  const email_r = state.get("email");
  return {
    EmailDrafts: email_r.get("emaildrafts").toJS(),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateEmailDraft(draft) {
    dispatch(updateEmailDraft(draft));
  },
  createEmailDraft(draft) {
    dispatch(createEmailDraft(draft));
  },
  deleteEmailDraft(draft) {
    dispatch(deleteEmailDraft(draft));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailDraftPage);
