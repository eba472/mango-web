import graphQLFetch from "../../../graphQLFetch.js";
import React, { useEffect, useState } from "react";

export default function Experiment() {
  const [issues, setIssues] = useState([]);

  async function loadData() {
    const query = `query {
          issueList {
            id title status owner
            created effort due
          }
        }`;
    const data = await graphQLFetch(query);
    if (data) {
      setIssues(data.issueList);
    }
  }
  // async function createIssue(issue) {
  //   const query = `mutation issueAdd($issue: IssueInputs!) {
  //         issueAdd(issue: $issue) {
  //           id
  //         }
  //       }`;
  // }
  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log("issues :>> ", issues);

  return (
    <>
      <h1>Issue Tracker</h1>
    </>
  );
}
