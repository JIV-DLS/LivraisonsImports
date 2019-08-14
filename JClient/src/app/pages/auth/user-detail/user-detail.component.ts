import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { User } from './../user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  isLoading: Boolean = false;

  constructor(
    private usersService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get user detail
    this.getUserDetail();
  }

  getUserDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUserDetail(id)
      .subscribe(user => {
        this.isLoading = false;
        this.user = user['data'];
      });
  }

}
