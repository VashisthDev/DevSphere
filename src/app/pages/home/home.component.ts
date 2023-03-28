import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToContact(): void {
    const contactSection = this.elementRef.nativeElement.querySelector('#contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
