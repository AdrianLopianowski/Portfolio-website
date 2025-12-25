import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  template: `
    <h2 class="text-3xl font-bold">My Projects</h2>
    <p class="mt-2">Here are some of the projects I've worked on:</p>
    <ul class="mt-4 space-y-2">
      <li>
        <a
          href="https://github.com/adrianlopianowski/arduino"
          class="text-blue-500"
          >Arduino Project</a
        >
      </li>
      <li>
        <a
          href="https://github.com/adrianlopianowski/rickAndMortyApp"
          class="text-blue-500"
          >Rick and Morty App with API</a
        >
      </li>
      <li>
        <a
          href="https://github.com/AdrianLopianowski/Python-automation-scripts"
          class="text-blue-500"
          >Python Automation Scripts</a
        >
      </li>
    </ul>
  `,
})
export class ProjectsComponent {}
