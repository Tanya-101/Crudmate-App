
export const AddTask = ({taskList,setTaskList,task,setTask}) => {

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Submit is divided into two parts - Add and Update
    //since task useState variable is initialized in edit function so logic says...
    //Handling Update part..

    if(task.id){
      const date = new Date();
      const updatedTaskList = taskList.map((todo)=>(
        todo.id === task.id ? 
        {
          id:task.id,
          name:task.name,
          time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        } : todo
      ));
      setTaskList(updatedTaskList);
      setTask({});
      //Here is one problem encountered that if we click on edit then we further can't modify it.
      //In order to enable change on input field we have to make an onChange function..because fixed value is passed in value parameter of input field
    }else{
      const date = new Date();
      const newTask = 
      {
        id:date.getTime(),
        name:e.target.task.value,
        time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList,newTask]);
      setTask({});//if we set it will null object---After add or edit we clear the input field using setTast({})...
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="task" 
        autoComplete="off" 
        placeholder="Add Task" 
        maxLength="25" 
        value={task.name || ""} //then the value of task.name is undefined because task is an empty object. So, we have to || "" also in case task is empty
        onChange=
        {e => setTask({...task,
          name:e.target.value
        })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}
