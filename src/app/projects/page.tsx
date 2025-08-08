import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Curator",
    description:
      "Open‑source, self‑hosted cloud storage leveraging Telegram’s infrastructure for free unlimited file hosting, with .NET 8 backend, PostgreSQL auth, full REST API, Docker support and JWT security.",
    url: "https://github.com/korefs/Curator",
    imageUrl: "/projects/510706.jpeg",
    githubUrl: "https://github.com/korefs/Curator",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-white">
          .NET
        </span>
        <span className="rounded-full bg-[#CC2927] px-2.5 py-0.5 text-sm text-white">
          C#
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-white">
          Entity Framework Core
        </span>
        <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-white">
          PostgreSQL
        </span>
        <span className="rounded-full bg-[#000000] px-2.5 py-0.5 text-sm text-white">
          Docker
        </span>
      </div>
    )
  },
  {
    name: "wdrop",
    description:
      "Lightweight and fast terminal tool for instant file or folder sharing over LAN or web. Provides an HTTP download link, QR code, P2P transfer, and optional uploads to 0x0.st. Supports cross-platform use (Windows, macOS, Linux).",
    url: "https://github.com/korefs/wdrop",
    imageUrl: "/projects/510706.jpeg",
    githubUrl: "https://github.com/korefs/wdrop",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-white">
          C#
        </span>
        <span className="rounded-full bg-[#000000] px-2.5 py-0.5 text-sm text-white">
          .NET
        </span>
        <span className="rounded-full bg-[#008000] px-2.5 py-0.5 text-sm text-white">
          Cross‑Platform
        </span>
        <span className="rounded-full bg-[#FFA500] px-2.5 py-0.5 text-sm text-black">
          CLI
        </span>
        <span className="rounded-full bg-[#FFD700] px-2.5 py-0.5 text-sm text-black">
          HTTP / P2P
        </span>
      </div>
    )
  },
  {
    name: "Flux",
    description:
      "Simple and powerful personal finance manager—a modern web application to track income, expenses, recurring transactions, customizable categories, with interactive charts and dark/light theme support.",
    url: "https://github.com/korefs/Flux",
    imageUrl: "/projects/510706.jpeg",
    githubUrl: "https://github.com/korefs/Flux",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#61DBFB] px-2.5 py-0.5 text-sm text-zinc-950">
          React
        </span>
        <span className="rounded-full bg-[#3178C6] px-2.5 py-0.5 text-sm text-white">
          TypeScript
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950">
          Tailwind CSS
        </span>
        <span className="rounded-full bg-[#FFB800] px-2.5 py-0.5 text-sm text-zinc-950">
          Recharts
        </span>
        <span className="rounded-full bg-[#F0DB4F] px-2.5 py-0.5 text-sm text-zinc-950">
          Lucide
        </span>
      </div>
    ),
  },
  {
    name: "Giyu",
    description:
      "Discord bot built with .NET Core using Discord.Net v3 and integrated with a LavaLink server for music playback.",
    url: "https://github.com/eCine-boys/Giyu",
    imageUrl: "/projects/510706.jpeg",
    githubUrl: "https://github.com/eCine-boys/Giyu",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-white">
          .NET Core
        </span>
        <span className="rounded-full bg-[#008080] px-2.5 py-0.5 text-sm text-white">
          Discord.Net v3
        </span>
        <span className="rounded-full bg-[#FF4500] px-2.5 py-0.5 text-sm text-white">
          LavaLink
        </span>
      </div>
    )
  }
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={620}
        height={324}
        alt="Logo for css2wind website"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
