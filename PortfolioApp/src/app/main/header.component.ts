import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [CommonModule, RouterLink],
  template: `
    <header
      class="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-900/30 z-50"
    >
      <nav class="container mx-auto p-4">
        <ul
          class="flex space-x-6 justify-center text-sm font-medium tracking-wide"
        >
          <li
            class="hover:text-green-400 text-zinc-400 transition-colors cursor-pointer"
          >
            <a routerLink="." fragment="home">HOME</a>
          </li>
          <li
            class="hover:text-green-400 text-zinc-400 transition-colors cursor-pointer"
          >
            <a routerLink="." fragment="about">ABOUT</a>
          </li>
          <li
            class="hover:text-green-400 text-zinc-400 transition-colors cursor-pointer"
          >
            <a routerLink="." fragment="projects">PROJECTS</a>
          </li>
          <li
            class="hover:text-green-400 text-zinc-400 transition-colors cursor-pointer"
          >
            <a routerLink="." fragment="contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
