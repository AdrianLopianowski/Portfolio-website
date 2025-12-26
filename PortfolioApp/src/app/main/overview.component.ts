import { Component } from "@angular/core";

@Component({
  selector: "app-overview",
  template: `
    <div
      class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 h-full flex flex-col justify-center"
    >
      <h1 class="text-xl font-bold text-white mb-2">Tech Overview</h1>
      <p class="text-zinc-400 text-sm mb-4">
        Main stack used in recent projects.
      </p>

      <div class="flex gap-2 flex-wrap">
        <span
          class="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-mono border border-zinc-700"
          >Angular</span
        >
        <span
          class="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-mono border border-zinc-700"
          >TypeScript</span
        >
        <span
          class="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-mono border border-zinc-700"
          >Tailwind</span
        >
        <span
          class="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs font-mono border border-zinc-700"
          >Node.js</span
        >
      </div>
    </div>
  `,
})
export class OverviewComponent {}
