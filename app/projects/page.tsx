'use client';
import { useState } from "react";
import Image from "next/image";
import { projects } from "./project-data";

const tabs = ["All", "WordPress", "PHP/MySQL", "HTML/CSS", "JavaScript", "Bootstrap"];

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredProjects =
    selectedTab === "All"
      ? projects
      : projects.filter((project) => project.type === selectedTab);

  return (
    <section>
      <h1 className="mb-6 text-2xl font-medium">Projects</h1>

      {/* Responsive tab container */}
      <div className="flex overflow-x-auto space-x-4 mb-6 p-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded whitespace-nowrap ${
              selectedTab === tab ? "bg-gray-300 text-black" : "bg-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-60 object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
