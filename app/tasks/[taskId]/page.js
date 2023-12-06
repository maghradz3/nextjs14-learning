import EditForm from "@/components/EditForm";
import { editTask, getSingleTask } from "@/utils/actions";
import Link from "next/link";

const page = async ({ params }) => {
  const task = await getSingleTask(params.taskId);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          {" "}
          Back To Task
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default page;
