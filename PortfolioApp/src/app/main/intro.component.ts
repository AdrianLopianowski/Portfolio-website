import { Component } from "@angular/core";
import { CommonModule, NgFor, NgClass } from "@angular/common";

@Component({
  selector: "app-intro",
  imports: [CommonModule, NgFor, NgClass],
  template: `
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 relative"
    >
      <div
        class="absolute -top-20 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"
      ></div>

      <div class="z-10">
        <h3
          class="text-sm font-bold text-green-500 uppercase tracking-widest mb-4"
        >
          Fullstack Developer
        </h3>
        <h1
          class="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
        >
          Adrian Łopianowski
        </h1>
        <p
          class="text-xl md:text-1xl text-zinc-400 max-w-2xl leading-relaxed mb-8"
        >
          I create responsive and accessible web applications. Focusing on
          performance and clean architecture.
        </p>
        <button
          class="px-6 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600 transition-colors cursor-pointer"
        >
          Contact Me
        </button>
      </div>

      <div class="relative flex flex-col items-center md:ml-120">
        <div class="relative w-160 aspect-video animate-float">
          <ng-container *ngFor="let img of images; let i = index">
            <img
              [src]="img"
              alt="Project Image"
              class="absolute inset-0 w-full h-full object-cover rounded-xl border-4 border-zinc-800 shadow-2xl transition-all duration-700 ease-in-out"
              [ngClass]="getImageClass(i)"
            />
          </ng-container>
        </div>

        <div class="flex gap-3 mt-15 z-20 animate-float">
          <button
            *ngFor="let img of images; let i = index"
            (click)="setCurrentImageIndex(i)"
            class="w-3 h-3 rounded-full transition-all duration-300 "
            [ngClass]="
              i === currentImageIndex
                ? 'bg-green-500 scale-125'
                : 'bg-zinc-600 hover:bg-zinc-500'
            "
          ></button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    `,
  ],
})
export class IntroComponent {
  currentImageIndex = 0;

  images = [
    "assets/project1.png",
    "assets/project2.png",
    "assets/project3.png",
  ];

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  setCurrentImageIndex(index: number) {
    this.currentImageIndex = index;
  }

  getImageClass(index: number): string {
    if (index === this.currentImageIndex) {
      return "z-20 scale-100 opacity-100 translate-x--25 translate-y--15";
    }

    const nextIndex = (this.currentImageIndex + 1) % this.images.length;
    if (index === nextIndex) {
      return "z-10 scale-90 opacity-90 translate-x-15 translate-y-15 brightness-50";
    }

    return "z-0 opacity-0 scale-90";
  }
}
