import { createTask } from "@/utils/actions";

const TaskForm = async () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item min-w-full"
          placeholder="type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
