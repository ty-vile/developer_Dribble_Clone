import { getUserProjects } from "@/lib/actions";
import { UserProfile, ProjectInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

type RelatedProjectProps = {
  userId: string;
  projectId: string;
  avatarUrl: string;
};

const RelatedProjects = async ({
  userId,
  projectId,
  avatarUrl,
}: RelatedProjectProps) => {
  const result = (await getUserProjects(userId)) as {
    user?: UserProfile;
  };

  const filteredProjects = result?.user?.projects?.edges?.filter(
    ({ node }: { node: ProjectInterface }) => node?.id !== projectId
  );

  if (filteredProjects?.length === 0) return null;

  return (
    <section className="flex flex-col mt-16 w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold ">More by {result?.user?.name}</p>
        <Link href={`/profile/${result?.user?.id}`}>View All</Link>
      </div>

      <div className="w-full relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects?.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={avatarUrl}
            userId={userId}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
