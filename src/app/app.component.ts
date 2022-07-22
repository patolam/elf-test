import { Component, OnInit } from '@angular/core';
import { AuthRepository } from './modules/auth/auth.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'elf-test';

  constructor(private authRepository: AuthRepository) {
  }

  ngOnInit() {
    const user = localStorage.getItem('user');

    if (user) {
      this.authRepository.updateUser(JSON.parse(user));
    }
  }
}
