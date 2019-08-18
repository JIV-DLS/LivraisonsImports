import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// App imports
import { User } from '../user';
import { AuthService } from '../_services/auth.service';
import { AdressesService } from '../../adresses/_services/adresses.service';
import { Employe } from '../../employes/employe';
import { EmployesService } from '../../employes/_services/employes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  error: any;
  registerForm: FormGroup;
  employes: Employe[];

  constructor(private employesService: EmployesService,private authService: AuthService, private router: Router, private fb: FormBuilder) {

    this.createForm();
    this.getEmployes();
   }

  ngOnInit() {}

  createForm() {

    this.registerForm = this.fb.group({
      name: [this.user.name, Validators.compose([Validators.required])],
      email: [this.user.email, Validators.compose([Validators.required, Validators.email ])],
      password: [this.user.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      employe_id: [this.user.employe_id, Validators.compose([Validators.required])]
    });
  }

  getEmployes(): void {
    //this.isLoading = true;
    this.employesService.getEmployesNotRelated()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }
  protected handleResponse(response: Employe[]) {
    //this.isLoading = false,
    this.employes = response;
  }
  protected handleError(error: any) {
    //this.isLoading = false,
    console.error(error);
  }
  onSubmit(): void {

    this.authService.onRegister(this.registerForm.value).subscribe(
      (response) => {
        this.router.navigate(['bikes']);
      },
      (response) => {
        if (response.status === 422) {
          Object.keys(response.error).map((err) => {
            this.error = `${response.error[err]}`;
          });

        } else {
          this.error = response.error;
        }

      }
    );
  }

}
