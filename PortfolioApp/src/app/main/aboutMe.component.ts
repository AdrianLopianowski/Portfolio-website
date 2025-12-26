import { Component } from "@angular/core";

@Component({
  selector: "app-about-me",
  template: `
    <div
      class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 h-full hover:border-zinc-700 transition-colors"
    >
      <div class="flex items-center gap-3 mb-4">
        <div class="w-2 h-8 bg-green-500 rounded-full"></div>
        <h2 class="text-2xl font-bold text-white">About Me</h2>
      </div>
      <p class="text-zinc-400 leading-relaxed text-lg">
        I am a passionate web developer with experience in Angular. I enjoy
        solving complex problems and turning designs into functional code.
      </p>
    </div>
  `,
})
export class AboutMeComponent {}
