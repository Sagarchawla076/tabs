import { logDOM } from "@testing-library/dom";
import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
const Jobs = ({ jobs, value, setValue }) => {
  const currentJob = jobs[value];
  const { title, company, dates, duties } = currentJob;

  return (
    <div className="jobs">
      <div className="btns">
        {jobs.map((job, i) => {
          const active = i === value ? "active" : "";
          console.log(active);
          return (
            <button
              className={`btns__company ${active}`}
              onClick={() => setValue(i)}
            >
              {job.company}
            </button>
          );
        })}
      </div>
      <div className="description">
        <div className="description__title">{title}</div>
        <div className="description__company">{company}</div>
        <div className="description__date">{dates}</div>

        <div className="description__duties">
          {duties.map((duty) => (
            <div className="description__container">
              <BsChevronDoubleRight className="description__duties--icon"></BsChevronDoubleRight>

              <div className="description__duties--text">{duty}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
