import { Directive, ElementRef, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[appFadeIn]",
})
export class FadeInDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.classList.add(
      "opacity-0",
      "translate-y-10",
      "transition-all",
      "duration-700",
      "ease-out"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.remove(
              "opacity-0",
              "translate-y-10"
            );
            this.el.nativeElement.classList.add("opacity-100", "translate-y-0");

            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
