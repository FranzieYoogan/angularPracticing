import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
      
    const containerAll:any = document.getElementById('containerAll')
    const footerStyle:any = document.getElementById('footerStyle')

    containerAll.style.transition = "1s"
    

    setTimeout(() => {
          containerAll.style.opacity = "1"
          containerAll.style.marginTop = "2em"
    }, 300);

   
    window.addEventListener('scroll', () => {
    
      footerStyle.style.transition = "0.5s";
      if (window.scrollY > 900) {
         
          setTimeout(() => {
              footerStyle.style.opacity = "1";
          }, 300);
      }
  });

  

  }



}
