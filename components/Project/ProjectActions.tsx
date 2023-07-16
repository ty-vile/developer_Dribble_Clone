"use client";

import { deleteProject, fetchToken } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const ProjectActions = ({ projectId }: { projectId: string }) => {
  const router = useRouter();

  const handleDeleteProject = async () => {
    const { token } = await fetchToken();

    try {
      await deleteProject(projectId, token);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="bg-gray-200 p-3 rounded-xl"
      >
        <Image
          src="/pencile.svg"
          width={20}
          height={20}
          alt="Edit Project Icon"
        />
      </Link>
      <button
        type="button"
        className="bg-red-500 p-3 rounded-xl"
        onClick={handleDeleteProject}
      >
        <Image
          src="/trash.svg"
          width={20}
          height={20}
          alt="Trash Project Icon"
        />
      </button>
    </>
  );
};

export default ProjectActions;
