import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./main/header.component";
import { IntroComponent } from "./main/intro.component";
import { ContactMePlsComponent } from "./main/contactMePls.component";
import { AboutMeComponent } from "./main/aboutMe.component";
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
    AboutMeComponent,
    UniversityComponent,
    ProjectsComponent,
    OverviewComponent,
  ],
  template: `
    <main
      class="bg-black min-h-screen pt-24 pb-10 px-4 md:px-8 font-sans text-zinc-300 selection:bg-green-500 selection:text-black"
    >
      <div class="max-w-6xl mx-auto space-y-6">
        <section id="home">
          <app-intro></app-intro>
        </section>

        <section id="about" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <app-about-me class="h-full"></app-about-me>

          <div class="flex flex-col gap-6">
            <app-university></app-university>
            <app-overview></app-overview>
          </div>
        </section>

        <section id="projects">
          <app-projects></app-projects>
        </section>

        <section id="contact">
          <app-contact-me-pls></app-contact-me-pls>
        </section>
      </div>
    </main>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "PortfolioApp";
}
