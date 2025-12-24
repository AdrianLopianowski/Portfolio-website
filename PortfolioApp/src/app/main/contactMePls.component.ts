import { Component } from "@angular/core";

@Component({
  selector: "app-contact-me-pls",
  template: `
    <h2 class="text-3xl font-bold">Contact Me</h2>
    <p class="mt-2">Feel free to reach out to me via email or LinkedIn.</p>
    <div class="mt-4 space-y-2">
      <p>
        <a href="mailto:adrianlopianowski@gmail.com">Email Me</a>
      </p>
      <p>
        my socials:
        <a href="https://www.linkedin.com/in/lopianowski/">LinkedIn</a><br />
        <a href="https://github.com/adrianlopianowski">GitHub</a>
      </p>
    </div>
  `,
})
export class ContactMePlsComponent {}
