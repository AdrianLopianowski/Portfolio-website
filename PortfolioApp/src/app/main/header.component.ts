import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [CommonModule, RouterLink],
  template: `
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav class="container mx-auto p-4">
        <ul class="flex space-x-4 justify-center">
          <li class="hover:bg-gray-200 rounded-md px-3 py-2 cursor-pointer">
            <a routerLink="." fragment="home">Home</a>
          </li>
          <li class="hover:bg-gray-200 rounded-md px-3 py-2 cursor-pointer">
            <a routerLink="." fragment="about">About</a>
          </li>
          <li class="hover:bg-gray-200 rounded-md px-3 py-2 cursor-pointer">
            <a routerLink="." fragment="projects">Projects</a>
          </li>
          <li class="hover:bg-gray-200 rounded-md px-3 py-2 cursor-pointer">
            <a routerLink="." fragment="contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
