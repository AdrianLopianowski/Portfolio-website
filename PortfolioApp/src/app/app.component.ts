import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./main/header.component";
import { IntroComponent } from "./main/intro.component";
import { ContactMePlsComponent } from "./main/contactMePls.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroComponent,
    ContactMePlsComponent,
  ],
  template: `
    <app-header></app-header>
    <app-intro></app-intro>
    <app-contact-me-pls></app-contact-me-pls>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "PortfolioApp";
}
