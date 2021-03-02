import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Globals } from 'src/app/global';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addUserForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    country: new FormControl(''),
    admin: new FormControl(''),
  });

  user: User;
  hide = true;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  options: FormGroup;
  checked = true;
  isAdmin: boolean;


  contries: string[] = [];
  constructor(fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService, public globals: Globals,
    public navbarService: ToolbarService,
  ) {
    this.contries = this.globals.contries;
    this.user = new User();
    this.isAdmin = this.navbarService.isAdmin();
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  onSubmit() {

    const email = this.addUserForm.get('email');
    const pass = this.addUserForm.get('pass');
    const country = this.addUserForm.get('country');
    const admin = this.addUserForm.get('admin');


    if (email && pass && country && admin) {
      //console.log(admin.value);

      this.user.email = email.value;
      this.user.pass = pass.value;
      this.user.country = country.value;
      if (admin.value == true) {
        this.user.admin = true;
      }
      this.userService.save(this.user).subscribe(result => this.gotoUserList());
    }

  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }


}
