import Categories from "@/components/Categories";
import Pagination from "@/components/Pagination/Pagination";
import ProjectCard from "@/components/Project/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/types";

type ProjectsSearch = {
  projectSearch: {
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
    edges: { node: ProjectInterface }[];
  };
};

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
};

type Props = {
  searchParams: SearchParams;
};

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
  const data = (await fetchAllProjects(category, endcursor)) as ProjectsSearch;

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
      <Pagination
        startCursor={data?.projectSearch?.pageInfo?.startCursor}
        endCursor={data?.projectSearch?.pageInfo?.endCursor}
        hasNextPage={data?.projectSearch?.pageInfo?.hasNextPage}
        hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage}
      />
    </section>
  );
};

export default Home;
