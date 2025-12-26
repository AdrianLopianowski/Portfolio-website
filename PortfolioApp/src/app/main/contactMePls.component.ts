import { Component } from "@angular/core";

@Component({
  selector: "app-contact-me-pls",
  template: `
    <div
      class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center"
    >
      <h2 class="text-3xl font-bold text-white mb-4">Let's work together</h2>
      <p class="text-zinc-400 mb-8 max-w-xl mx-auto">
        Feel free to reach out to me via email or connect on social media.
      </p>

      <div class="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="mailto:adrianlopianowski@gmail.com"
          class="px-6 py-3 bg-green-600 text-black font-bold rounded-lg hover:bg-green-500 transition-colors w-full md:w-auto"
        >
          Email Me
        </a>

        <div class="flex gap-4">
          <a
            href="https://www.linkedin.com/in/lopianowski/"
            class="px-6 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 hover:border-green-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adrianlopianowski"
            class="px-6 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 hover:border-green-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ContactMePlsComponent {}
