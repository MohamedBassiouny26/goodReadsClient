import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from 'src/app/services/home.service';
import { Subscription } from 'rxjs'



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor( private router:Router , private auth:AuthService , private bookPage : HomeService) {
  }

  logoutIcon:boolean = false
  subscription !: Subscription;

  ngOnInit() {
    this.logoutIcon = this.auth.loggedIn()
    this.subscription = this.bookPage.currentMessage.subscribe( (message) => this.logoutIcon = message)
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }

  logOut(){
      localStorage.removeItem('id')
      localStorage.removeItem('token')
      this.logoutIcon = false
      this.router.navigateByUrl('')
  }
}
