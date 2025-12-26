import { Component } from "@angular/core";

@Component({
  selector: "app-university",
  template: `
    <div
      class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
    >
      <h2
        class="text-xl font-bold text-white mb-3 flex items-center justify-between"
      >
        University
        <span
          class="text-xs text-green-500 border border-green-500/30 px-2 py-1 rounded bg-green-500/10"
          >2023 - Present</span
        >
      </h2>
      <p class="text-zinc-400">
        Studied Computer Science at <br />
        <span class="text-white font-medium">Kazimierz Wielki University</span>
        in Bydgoszcz.
      </p>
    </div>
  `,
})
export class UniversityComponent {}
