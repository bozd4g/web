import useSWR from "swr";
import Content from "../components/content";
import Layout from "../components/layout";
import ProjectCard from "../components/project-card";
import Spinner from "../components/spinner";
import Text from "../components/typography";
import { ProjectDto } from "./api/projects";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data;
  }

  throw new Error(data.error);
};

const ProjectsPage = () => {
  const { data, error } = useSWR("/api/projects", fetcher);

  return (
    <Layout title="projects">
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          I just hit the keys.
        </Text>
        <Text variant="p" className="mt-6 text-base text-zinc-600 max-w-2xl">
          I'm working on some projects. You can see them here.
        </Text>

        {error && <p className="mt-5">Failed to load projects.</p>}
        {!error && !data ? (
          <Spinner layout="center" />
        ) : (
          <ul
            role="list"
            className="mt-[3em] grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.map((project: ProjectDto) => {
              return (
                <li key={project.id} className="group relative flex flex-col items-start">
                  <ProjectCard {...project} />
                </li>
              );
            })}
          </ul>
        )}
      </Content>
    </Layout>
  );
};

export default ProjectsPage;
