import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {

  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element?.clientHeight) {
      element.classList.add('navbar-inverse');

    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
