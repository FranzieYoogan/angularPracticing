import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  navIcon() {
    const imgNav = document.getElementById('imgNav') as HTMLImageElement;
    const spanHeader = document.getElementById('spanHeader') as HTMLElement
    spanHeader.style.transition = "1s"
    spanHeader.style.color = "blue"

    if (imgNav) {
      imgNav.src = "icons/gallery2.png";
      console.log('Mouse over - icon changed to gallery2.png');
    }
  }

  navIconOut() {
    const imgNav = document.getElementById('imgNav') as HTMLImageElement;
    const spanHeader = document.getElementById('spanHeader') as HTMLElement

    spanHeader.style.transition = "1s"
    spanHeader.style.color = "black"
    if (imgNav) {
      imgNav.src = "/icons/gallery.png";
      console.log('Mouse out - icon changed back to gallery.png');
    }
  }


}
