import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  template: `
    <div class="space-y-4">
      <h2 class="text-3xl font-bold text-white pl-2">My Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href="https://github.com/adrianlopianowski/arduino"
          target="_blank"
          class="group block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div class="text-green-500 mb-2 text-sm font-mono">
            C++ / Hardware
          </div>
          <h3
            class="text-xl font-bold text-white mb-2 group-hover:text-green-400"
          >
            Arduino Project
          </h3>
          <p class="text-sm text-zinc-500">
            Low-level programming and hardware interaction.
          </p>
        </a>

        <a
          href="https://github.com/adrianlopianowski/rickAndMortyApp"
          target="_blank"
          class="group block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div class="text-green-500 mb-2 text-sm font-mono">
            Angular / API / TypeScript
          </div>
          <h3
            class="text-xl font-bold text-white mb-2 group-hover:text-green-400"
          >
            Rick & Morty App
          </h3>
          <p class="text-sm text-zinc-500">
            SPA application consuming REST API with pagination.
          </p>
        </a>

        <a
          href="https://github.com/AdrianLopianowski/Python-automation-scripts"
          target="_blank"
          class="group block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div class="text-green-500 mb-2 text-sm font-mono">Python</div>
          <h3
            class="text-xl font-bold text-white mb-2 group-hover:text-green-400"
          >
            Automation Scripts
          </h3>
          <p class="text-sm text-zinc-500">
            Scripts to automate boring daily tasks.
          </p>
        </a>
      </div>
    </div>
  `,
})
export class ProjectsComponent {}
