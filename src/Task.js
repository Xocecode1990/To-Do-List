export const Task = (props) => {
  return (
    <div
      style={{ backgroundColor: props.completed === true ? 'green' : 'blue' }}
    >
      <h1>{props.taskname}</h1>
      <button onClick={() => props.completedTask(props.id)}>Completed</button>
      <button onClick={() => props.DeleteTask(props.id)}>X</button>
    </div>
  );
};
