import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
   // Using User Model class
   users: User[];
   isLoading: Boolean = false;

 constructor(private userService: AuthService) { }

 ngOnInit() {
   // Get user detail
   this.getUsers();
 }

 getUsers(): void {
   this.isLoading = true;
   this.userService.getusers()
     .subscribe(
       response => this.handleResponse(response),
       error => this.handleError(error));
 }

 protected handleResponse(response: User[]) {
   this.isLoading = false,
   this.users = response;
 }
 protected handleError(error: any) {
   this.isLoading = false,
   console.error(error);
 }


}
