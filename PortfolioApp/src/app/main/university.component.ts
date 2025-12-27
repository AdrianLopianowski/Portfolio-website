import { Component } from "@angular/core";

@Component({
  selector: "app-university",
  template: `
    <div class="h-full flex flex-col justify-center">
      <div class="flex items-baseline gap-4 mb-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white">University</h2>
        <span
          class="text-green-500 font-mono text-sm border-l border-green-500 pl-4"
        >
          2023 - Present
        </span>
      </div>

      <p class="text-zinc-400 text-xl md:text-2xl">
        Studied Computer Science at <br />
        <span class="text-white font-medium">Kazimierz Wielki University</span>
        in Bydgoszcz.
      </p>
    </div>
  `,
})
export class UniversityComponent {}
