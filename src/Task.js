import React from "react";
import { formatDistanceToNow } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
 const dateArr = taskObj.deadline.split('-');
 console.log(dateArr)
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span>
          {formatDistanceToNow(new Date(dateArr[0], dateArr[2], dateArr[1]), { addSuffix: true })
          }
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
