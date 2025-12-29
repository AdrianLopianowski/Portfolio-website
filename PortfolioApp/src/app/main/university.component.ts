import { Component } from "@angular/core";
import { FadeInDirective } from "./fade-in.directive";

@Component({
  selector: "app-university",
  imports: [FadeInDirective],
  template: `
    <div
      appFadeIn
      class="reveal h-full flex flex-col md:flex-row md:items-start justify-center gap-8 opacity-0 translate-y-8 transition-all duration-2400 ease-out"
    >
      <div class="flex-1 flex flex-col justify-center">
        <div class="flex items-baseline gap-4 mb-4">
          <h2 class="text-3xl md:text-4xl font-bold text-white">University</h2>
          <span
            class="text-green-500 font-mono text-sm border-l border-green-500 pl-4"
          >
            2023 - Present ⧗
          </span>
        </div>

        <p class="text-zinc-400 text-xl md:text-2xl">
          Studied Computer Science at <br />
          <span class="text-white font-medium"
            >Kazimierz Wielki University</span
          >
          in Bydgoszcz.
        </p>
      </div>

      <div class="flex-1 flex flex-col justify-center">
        <div class="flex items-baseline gap-4 mb-4">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Technical High School
          </h2>
          <span
            class="text-green-500 font-mono text-sm border-l border-green-500 pl-4"
          >
            2019 - 2023 ✔
          </span>
        </div>

        <p class="text-zinc-400 text-xl md:text-2xl">
          IT Technician Profile at <br />
          <span class="text-white font-medium">ZSOiT Miastko</span>
        </p>
      </div>
    </div>
  `,
})
export class UniversityComponent {}
