import ProjectForm from "@/components/Forms/ProjectForm";
import Modal from "@/components/Modal/Modal";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { ProjectInterface } from "@/types";
import { redirect } from "next/navigation";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  return (
    <Modal>
      <h3 className="text-3xl font-bold text-purple-500 mb-4">Edit Project</h3>
      <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  );
};

export default EditProject;
