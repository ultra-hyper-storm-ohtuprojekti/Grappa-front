import React, { Component } from "react";

import EmailDraft from "./EmailDraft"

export class EmailDraftList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDraftName: "",
            draftList: []
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.draftList) {
            this.sortDraftList(newProps.draftList);
            this.setState({ draftList: newProps.draftList });
        }
    }

    sortDraftList = (draftList) => {
        draftList.sort(draft => draft.id).reverse();
    }

    //TODO: CUID
    findSuitableDraftId = (draftList) => {
        let id = 30;
        let notOk = true;
        this.sortDraftList(draftList);
        while (notOk) {
            draftList.forEach(draft => {
                if (draft.id == id) {
                    id++;
                }
            });
            notOk = draftList.some(draft => draft.id == id);
        }
        return id;
    }

    addDraft = () => {
        if (this.state.newDraftName) {
            let id = this.findSuitableDraftId(this.state.draftList);
            let draft = {
                id,
                body: "",
                title: "",
                type: this.state.newDraftName,
            };
            this.props.sendAddDraft(draft);
        }
    }

    handleChange = (event) => {
        this.setState({ newDraftName: event.target.value });
    }

    render() {
        return (
            <div>
                {this.state.draftList.map((draft, index) => {
                    return <EmailDraft draft={draft} key={index} index={index} updateDraft={this.props.handleUpdateDraft} />
                })}

                <div className="ui input focus">
                    <input type="text" value={this.state.newDraftName} onChange={this.handleChange} placeholder="Name of the Draft" />
                </div>
                <button className="ui green button" onClick={this.addDraft}>Create A New Draft</button>

            </div>
        );
    }
}

export default EmailDraftList;