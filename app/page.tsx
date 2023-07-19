import Categories from "@/components/Categories";
import ProjectCard from "@/components/Project/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/types";
import { type } from "os";

type ProjectsSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
  };
  pageInfo: {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    startCursor: string;
    endCursor: string;
  };
};

type SearchParams = {
  category?: string;
};

type Props = {
  searchParams: SearchParams;
};

const Home = async ({ searchParams: { category } }: Props) => {
  const data = (await fetchAllProjects(category)) as ProjectsSearch;

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flex flex-col items-start px-6">
        <Categories />
        <h2>Categories</h2>
        <p>No projects found</p>
      </section>
    );
  }

  return (
    <section className="flex-start flex-col mb-16 p-4">
      <Categories />
      {category && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Showing results for {category}</h2>
        </div>
      )}
      <section className="w-full relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-8">
        {projectsToDisplay?.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy.avatarUrl}
            userId={node?.createdBy.id}
          />
        ))}
      </section>
      <h2>Load More</h2>
    </section>
  );
};

export default Home;
