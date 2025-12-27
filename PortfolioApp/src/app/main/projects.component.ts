import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  template: `
    <div class="w-full">
      <h2
        class="text-3xl md:text-4xl font-bold text-white mb-10 border-b border-zinc-800 pb-4"
      >
        Selected Projects
      </h2>

      <div class="flex flex-col gap-8">
        <a
          href="https://github.com/adrianlopianowski/arduino"
          target="_blank"
          class="group block border-l-2 border-zinc-800 hover:border-green-500 pl-6 transition-all duration-300"
        >
          <div
            class="text-green-500 mb-1 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0"
          >
            C++ / Hardware
          </div>
          <h3
            class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors"
          >
            Arduino Project
          </h3>
          <p class="text-zinc-500 text-lg group-hover:text-zinc-400">
            Low-level programming and hardware interaction.
          </p>
        </a>

        <a
          href="https://github.com/adrianlopianowski/rickAndMortyApp"
          target="_blank"
          class="group block border-l-2 border-zinc-800 hover:border-green-500 pl-6 transition-all duration-300"
        >
          <div
            class="text-green-500 mb-1 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0"
          >
            Angular / API
          </div>
          <h3
            class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors"
          >
            Rick & Morty App
          </h3>
          <p class="text-zinc-500 text-lg group-hover:text-zinc-400">
            SPA application consuming REST API with pagination.
          </p>
        </a>

        <a
          href="https://github.com/AdrianLopianowski/Python-automation-scripts"
          target="_blank"
          class="group block border-l-2 border-zinc-800 hover:border-green-500 pl-6 transition-all duration-300"
        >
          <div
            class="text-green-500 mb-1 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0"
          >
            Python
          </div>
          <h3
            class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors"
          >
            Automation Scripts
          </h3>
          <p class="text-zinc-500 text-lg group-hover:text-zinc-400">
            Scripts to automate boring daily tasks.
          </p>
        </a>
      </div>
    </div>
  `,
})
export class ProjectsComponent {}
