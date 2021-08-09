import { React, useEffect, useState } from "react";
import axios from "axios";

const useApi = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/events")
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return [events];
};

export default useApi;
