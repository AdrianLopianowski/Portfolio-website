import { Component } from "@angular/core";

@Component({
  selector: "app-contact-me-pls",
  template: `
    <div class="text-left w-full">
      <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
        Let's work <br />
        <span class="text-zinc-600">together.</span>
      </h2>
      <p class="text-zinc-400 text-xl mb-10 max-w-xl">
        Feel free to reach out to me via email or connect on social media.
      </p>

      <div class="flex flex-col sm:flex-row gap-6">
        <a
          href="mailto:adrianlopianowski@gmail.com"
          class="text-xl text-white font-bold border-b-2 border-green-500 hover:bg-green-500/10 pb-1 transition-all w-max"
        >
          → adrianlopianowski&#64;gmail.com
        </a>
      </div>

      <div class="flex gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/lopianowski/"
          class="text-zinc-500 hover:text-white transition-colors"
          >LinkedIn</a
        >
        <a
          href="https://github.com/adrianlopianowski"
          class="text-zinc-500 hover:text-white transition-colors"
          >GitHub</a
        >
      </div>
    </div>
  `,
})
export class ContactMePlsComponent {}
