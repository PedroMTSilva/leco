import React from "react";
import fetchRepositories from "../../services/fetchRepositories";
import data from "../../config.json";
import ProjectCard from "./ProjectCard";
import {
  SectionStructure,
  SectionTitle,
  SectionContent,
} from "../SectionStructure";

const Projects = () => {
  const repositories = fetchRepositories();
  const projectData = data.pt.projects;
  return (
    <SectionStructure name="projects">
      <SectionTitle title={projectData.title} />
      <SectionContent>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {repositories.length ? (
            repositories.map((repo) => (
              <ProjectCard key={repo.id} project={repo} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </SectionContent>
    </SectionStructure>
  );
};

export default Projects;
