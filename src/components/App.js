import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/main.scss";
import Loading from "./Loading";
import Jobs from "./Jobs";
import Button from "./Button";
const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await axios.get(url);
    setJobs(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className="heading">
        <span className="heading__text">Experience</span>
        <div className="heading__underline"></div>
      </div>
      <Jobs jobs={jobs} value={value} setValue={setValue} />
      <Button text="more info" />
    </div>
  );
};
export default App;
