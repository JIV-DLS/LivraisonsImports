import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/pages/auth/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  public constructor(
    private titleTagService: Title,
    public auth: AuthService,
    private router: Router ) {
      auth.getUser();
    }

  public setTitle( pageTitle: string) {
    this.titleTagService.setTitle( pageTitle );
  }

  ngOnInit() {
    if (this.auth.getToken()) {
      this.auth.getUser().subscribe();
    }
  }

  onLogout() {
    this.auth.onLogout().subscribe();
  }

}
