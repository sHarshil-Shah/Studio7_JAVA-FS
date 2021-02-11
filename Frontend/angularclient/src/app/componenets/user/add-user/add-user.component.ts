import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    country: new FormControl('')
  });

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {

    const email = this.addUserForm.get('email');
    const pass = this.addUserForm.get('pass');
    const country = this.addUserForm.get('country');

    console.log(email);
    console.log(pass);
    console.log(country);

    if (email && pass && country) {
      console.log("here");

      this.user.email = email.value;
      this.user.pass = pass.value;
      this.user.country = country.value;
      console.log("here");
      this.userService.save(this.user).subscribe(result => this.gotoUserList());
    }

  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
