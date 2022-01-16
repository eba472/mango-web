import graphQLFetch from "../../../graphQLFetch.js";
import React from "react"

// export default function Experiment() {
//     return (
//       <div></div>
//     );
//   }

export default class Experiment extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
          issueList {
            id title status owner
            created effort due
          }
        }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  async createIssue(issue) {
    const query = `mutation issueAdd($issue: IssueInputs!) {
          issueAdd(issue: $issue) {
            id
          }
        }`;

    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { issues } = this.state;
    console.log('issues :>> ', issues);
    return (
      <>
        <h1>Issue Tracker</h1>
      </>
    );
  }
}
