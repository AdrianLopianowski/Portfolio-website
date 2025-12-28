import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./main/header.component";
import { IntroComponent } from "./main/intro.component";
import { ContactMePlsComponent } from "./main/contactMePls.component";
import { UniversityComponent } from "./main/university.component";
import { ProjectsComponent } from "./main/projects.component";
import { OverviewComponent } from "./main/overview.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroComponent,
    ContactMePlsComponent,
    UniversityComponent,
    ProjectsComponent,
    OverviewComponent,
  ],
  template: `
    <app-header></app-header>
    <main
      class="bg-black h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-zinc-300 selection:bg-green-500 selection:text-black"
    >
      <div class="max-w-4xl mx-auto px-4 md:px-8">
        <section
          id="home"
          class="min-h-screen flex flex-col justify-center snap-start"
        >
          <app-intro></app-intro>
        </section>

        <section
          id="university"
          class="min-h-screen flex flex-col justify-center snap-start"
        >
          <app-university class="w-full"></app-university>
        </section>

        <section
          id="tech"
          class="min-h-screen flex flex-col justify-center snap-start"
        >
          <app-overview class="w-full"></app-overview>
        </section>

        <section
          id="projects"
          class="min-h-screen flex flex-col justify-center snap-start"
        >
          <app-projects></app-projects>
        </section>

        <section
          id="contact"
          class="min-h-screen flex flex-col justify-center snap-start"
        >
          <app-contact-me-pls></app-contact-me-pls>
        </section>

        <div class="h-10"></div>
      </div>
    </main>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "PortfolioApp";
}
