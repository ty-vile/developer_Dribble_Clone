import ProjectCard from "@/components/Project/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/types";

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

const Home = async () => {
  const data = (await fetchAllProjects()) as ProjectsSearch;

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flex flex-col items-start p-4">
        <h2>Categories</h2>
        <p>No projects found</p>
      </section>
    );
  }

  return (
    <section className="flex-start flex-col mb-16 p-4">
      <h2>Categories</h2>
      <section>
        {projectsToDisplay?.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard project={node} />
        ))}
      </section>
      <h2>Load More</h2>
    </section>
  );
};

export default Home;
