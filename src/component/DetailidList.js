import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function DetailidList() {
  let { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((response) => response.json())
      .then((charaters) => {
        setData(charaters);
      });
  }, []);
  console.log(data);
  return (
    <>
      {" "}
      {data != null ? (
        <div className="main">
          <div className="img">
            <img src={data.imageUrl} />
          </div>
          <div className="content">
            <h3>Name:{data.fullName}</h3>
            <h4>
              {" "}
              Family:{data.family}
              <br />
              title:{data.title}
            </h4>
          </div>{" "}
          
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}
