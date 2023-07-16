import RelatedProjects from "@/components/Project/RelatedProjects";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { ProjectInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  const result = (await getProjectDetails(id)) as { project: ProjectInterface };

  if (!result?.project) {
    <p>Failed to fetch project information</p>;
  }

  const {
    title,
    description,
    image,
    liveSiteUrl,
    githubUrl,
    category,
    id: projectId,
    createdBy: { email, avatarUrl, id: userId },
  } = result?.project;

  return (
    <section className="p-4  w-full flex flex-col items-center h-fit">
      <div className="w-full max-w-4xl">
        <h1 className="my-4 text-4xl font-bold">{title}</h1>
        <div className="mb-4 border-4 border-black bg-purple-500 text-white w-fit px-3 py-2 rounded-lg">
          {category}
        </div>
        <Image
          src={image}
          width={1000}
          height={600}
          alt="Project Banner"
          className="object-cover rounded-2xl shadow-lg"
        />
        <div className="my-4 text-3xl">
          <h2>{description}</h2>
        </div>
        <div className="flex items-center w-full gap-4">
          <Link
            href={githubUrl}
            className="p-3 bg-purple-300 w-fit rounded-full border-4 border-black"
          >
            <Image src="/github.svg" width={40} height={40} alt="Github Logo" />
          </Link>
          <Link
            href={liveSiteUrl}
            className="p-3 bg-purple-300 w-fit rounded-full border-4 border-black"
          >
            <Image
              src="/website.svg"
              width={40}
              height={40}
              alt="Github Logo"
            />
          </Link>
        </div>
        <div className="h-2 my-8 bg-purple-500"></div>
        <div className="">
          <RelatedProjects
            userId={userId}
            projectId={projectId}
            avatarUrl={avatarUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
