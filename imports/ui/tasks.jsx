import React ,{useState} from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { tasksCollection } from '../api/task';
const Task = ({ task, onCheckboxClick,onDeleteClick })=>{
  return (
    <li className="mt-1 d-flex justify-content-between shadow-sm p-3 mb-1 bg-body rounded align-items-baseline" >
      <input
        type="checkbox"
        checked={task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <span className="ml-5">{task.isChecked ? <span className="text-success">done</span> :<span className="text-danger">pending</span>}</span>
      <button   className="ml-5 " onClick={ () => onDeleteClick(task) }>&times;</button>
    </li>
  );

}

const hideCompletedFilter = { isChecked: { $ne: true } };


export const Tasks = ({user}) => {

  const userFilter = user ? { userId: user._id } : {};

  const [hideCompleted, setHideCompleted] = useState(false);

  const tasks = useTracker(() => {

    return tasksCollection.find(hideCompleted ? {...userFilter, ...hideCompletedFilter} :{  userId:user._id},{ sort: { createdAt: -1 }}).fetch();
  });

  const handleClick = ({_id,isChecked})=>{
    tasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked
      }
    })
  }
  const handleDeleteClick = ({_id})=>{
     tasksCollection.remove(_id);

  }
  

  

  
     return ( <>
      <div className="w-100 mt-4">
    <h3 onClick={() => setHideCompleted(!hideCompleted)} className="text-center button">
      {hideCompleted ? 'Show All' : `show pending  `}
    </h3>
    <h1 className={`text-success border  mt-2 mb-2 text-center  text-${hideCompleted?"danger":"success"} `}> Tasks ({tasks.length})</h1>
 
  </div>
 
    <div className="mt-1">
      <ul className="pl-1 h-100">{tasks.map(
        task => <Task key={task._id} className='text-info' onCheckboxClick={handleClick} onDeleteClick = {handleDeleteClick} task={task}>
        </Task>
      )}</ul>
    </div>
  
  </>)
};
