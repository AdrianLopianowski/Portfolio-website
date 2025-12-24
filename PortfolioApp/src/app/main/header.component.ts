import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <nav>
        <ul class="flex space-x-4">
          <li class="active bg-gray-800 text-white rounded-md px-3 py-2">
            <a href="#home">Home</a>
          </li>
          <li class="hover:bg-gray-200 rounded-md px-3 py-2">
            <a href="#about">About</a>
          </li>
          <li class="hover:bg-gray-200 rounded-md px-3 py-2">
            <a href="#projects">Projects</a>
          </li>
          <li class="hover:bg-gray-200 rounded-md px-3 py-2">
            <a href="#contact">Contact</a>
          </li>
          <li class="hover:bg-gray-200 rounded-md px-3 py-2">
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
