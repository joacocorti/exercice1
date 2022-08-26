import React from 'react'
import { State } from './task.class';
import TaskComponent from './taskComponent';

const TaskListComponent = () => {
    const defaultState = new State('joaquin', 'corti','joacocorti@gmail.com', true);


  return (
    <div>
        <TaskComponent state={defaultState}/>
        
    </div>
  )
}

export default TaskListComponent;
