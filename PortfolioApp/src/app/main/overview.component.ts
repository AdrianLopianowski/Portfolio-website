import { Component } from "@angular/core";

@Component({
  selector: "app-overview",
  template: `
    <div class="h-full flex flex-col justify-center">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-6">
        Tech Overview
      </h1>
      <p class="text-zinc-500 text-lg mb-8">
        Main stack used in recent projects.
      </p>

      <div class="flex flex-wrap gap-4">
        <span
          class="text-2xl md:text-3xl font-bold text-zinc-300 hover:text-green-400 transition-colors cursor-default"
        >
          Angular
        </span>
        <span class="text-2xl md:text-3xl font-bold text-zinc-700">/</span>
        <span
          class="text-2xl md:text-3xl font-bold text-zinc-300 hover:text-green-400 transition-colors cursor-default"
        >
          TypeScript
        </span>
        <span class="text-2xl md:text-3xl font-bold text-zinc-700">/</span>
        <span
          class="text-2xl md:text-3xl font-bold text-zinc-300 hover:text-green-400 transition-colors cursor-default"
        >
          Tailwind
        </span>
        <span class="text-2xl md:text-3xl font-bold text-zinc-700">/</span>
        <span
          class="text-2xl md:text-3xl font-bold text-zinc-300 hover:text-green-400 transition-colors cursor-default"
        >
          Node.js
        </span>
      </div>
    </div>
  `,
})
export class OverviewComponent {}
