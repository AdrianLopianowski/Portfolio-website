import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  template: `
    <h2 class="text-3xl font-bold">My Projects</h2>
    <p class="mt-2">Here are some of the projects I've worked on:</p>
    <ul class="mt-4 space-y-2">
      <li>
        <a
          href="https://github.com/adrianlopianowski/project1"
          class="text-blue-500"
          >Project 1</a
        >
      </li>
      <li>
        <a
          href="https://github.com/adrianlopianowski/project2"
          class="text-blue-500"
          >Project 2</a
        >
      </li>
      <li>
        <a
          href="https://github.com/adrianlopianowski/project3"
          class="text-blue-500"
          >Project 3</a
        >
      </li>
    </ul>
  `,
})
export class ProjectsComponent {}
