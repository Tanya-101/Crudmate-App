import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TaskList = ({taskList,setTaskList,task,setTask}) => {

  const editHandler = (id) => {
    const selectedTask = taskList.find(note => note.id === id);
    setTask(selectedTask); 
  }

  const deleteHandler = (id) => {
    setTaskList(taskList.filter(note=>note.id!==id));
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <span className="clearAll" onClick={()=>setTaskList([])}>Clear All</span>
      </div>
      <ul>
        {
          taskList.map((todo) => (
            <li key={todo.id}>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              <FaEdit style={{ color: "blue", fontSize: "18px", cursor: "pointer" }} onClick={()=>{editHandler(todo.id)}} />
              <MdDelete style={{ color: "red", fontSize: "18px", cursor: "pointer" }} onClick={()=>{deleteHandler(todo.id)}}/>
            </li>
          ))

        }
      </ul>

    </section>
  )
}
