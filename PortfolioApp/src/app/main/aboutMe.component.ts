import { Component } from "@angular/core";

@Component({
  selector: "app-about-me",
  template: `
    <div class="h-full flex flex-col justify-center">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-1 bg-green-500"></div>
        <h2 class="text-3xl md:text-4xl font-bold text-white">About Me</h2>
      </div>
      <p class="text-zinc-400 leading-relaxed text-xl md:text-2xl max-w-3xl">
        I am a passionate web developer with experience in Angular. I enjoy
        solving complex problems and turning designs into functional code.
      </p>
    </div>
  `,
})
export class AboutMeComponent {}
