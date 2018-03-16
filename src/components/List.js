import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function List(props) {
  const { polls } = props;

  return (
    <ul className="dashboard-list">
      {polls.map(poll => (
        <li key={poll.id}>
          <Link
            search={poll.id}
            to={{
              pathname: "/polls",
              search: `?id=${poll.id}`
            }}
          >
            {poll.question}
          </Link>
        </li>
      ))}
    </ul>
  );
}
