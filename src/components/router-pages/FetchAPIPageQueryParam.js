import { React, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export function FetchAPIPageQueryParam() {
  const [result, setResult] = useState({});
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get('id');


  useEffect(() => {
    if (id == undefined) {
      id = 1;
    }

    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setResult(json);
      });
  }, []);

  return (
    <div>
      <small>ID</small>
      <p>{result.id}</p>
      <small>Title</small>
      <p>{result.title}</p>
    </div>
  );
}
