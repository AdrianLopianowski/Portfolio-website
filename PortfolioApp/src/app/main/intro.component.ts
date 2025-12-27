import { Component } from "@angular/core";

@Component({
  selector: "app-intro",
  template: `
    <div class="relative py-10">
      <div
        class="absolute -top-20 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"
      ></div>

      <h3
        class="text-sm font-bold text-green-500 uppercase tracking-widest mb-4"
      >
        Fullstack Developer
      </h3>
      <h1
        class="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
      >
        Adrian Łopianowski
      </h1>
      <p class="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
        I create responsive and accessible web applications. Focusing on
        performance and clean architecture.
      </p>
    </div>
  `,
})
export class IntroComponent {}
