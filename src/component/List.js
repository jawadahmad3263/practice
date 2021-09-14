import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
export default function List() {
  const [list, setList] = useState();
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters`)
      .then((response) => response.json())
      .then((charaters) => {
        setList(charaters);
      });
  }, []);

  const Search = (e) => {
    setSearchName(e.target.value);
    //pending
  };
  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="search"
          name="searchName"
          value={searchName}
          onChange={Search}
        />
      </div>
      <table  id="customers">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/DetailedList/${item.id}`}
                      className="action-btn"
                    >
                      {" "}
                      Show Detail
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

//gittoken=> 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
