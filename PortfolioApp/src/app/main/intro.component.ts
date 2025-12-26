import { Component } from "@angular/core";

@Component({
  selector: "app-intro",
  template: `
    <div
      class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 hover:border-green-500/30 transition-colors duration-500 relative overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"
      ></div>

      <h3
        class="text-sm font-bold text-green-500 uppercase tracking-widest mb-3"
      >
        Fullstack Developer
      </h3>
      <h1
        class="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4"
      >
        Adrian Łopianowski
      </h1>
      <p class="text-lg text-zinc-400 max-w-2xl leading-relaxed">
        I create responsive and accessible web applications. Focusing on
        performance and clean architecture.
      </p>
    </div>
  `,
})
export class IntroComponent {}
