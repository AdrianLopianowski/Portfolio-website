import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  imports: [CommonModule],
  template: `
    <header
      class="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-900 z-50 transition-all duration-300"
    >
      <nav class="container mx-auto px-4 py-4">
        <ul
          class="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs md:text-sm font-medium tracking-widest uppercase"
        >
          <li
            class="hover:text-green-500 text-zinc-400 transition-colors cursor-pointer"
          >
            <a (click)="scrollToSection('home')">Home</a>
          </li>

          <li
            class="hover:text-green-500 text-zinc-400 transition-colors cursor-pointer"
          >
            <a (click)="scrollToSection('about')">About</a>
          </li>

          <li
            class="hover:text-green-500 text-zinc-400 transition-colors cursor-pointer"
          >
            <a (click)="scrollToSection('university')">Education</a>
          </li>

          <li
            class="hover:text-green-500 text-zinc-400 transition-colors cursor-pointer"
          >
            <a (click)="scrollToSection('tech')">Tech</a>
          </li>

          <li
            class="hover:text-green-500 text-zinc-400 transition-colors cursor-pointer"
          >
            <a (click)="scrollToSection('projects')">Projects</a>
          </li>

          <li
            class="hover:text-green-500 text-zinc-400 transition-colors cursor-pointer"
          >
            <a (click)="scrollToSection('contact')">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
