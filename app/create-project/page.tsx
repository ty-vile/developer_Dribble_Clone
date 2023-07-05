import ProjectForm from "@/components/Forms/ProjectForm";
import Modal from "@/components/Modal/Modal";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const CreateProject = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  return (
    <Modal>
      <h3 className="text-3xl font-bold text-purple-500 mb-4">
        Create a New Project
      </h3>
      <ProjectForm type="create" session={session} />
    </Modal>
  );
};

export default CreateProject;
