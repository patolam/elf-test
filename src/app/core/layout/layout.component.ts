import { Component, OnInit } from '@angular/core';
import { AuthRepository } from '../../modules/auth/auth.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    public authRepository: AuthRepository,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigate(['auth']).then(
      () => this.authRepository.removeUser(),
    );
  }
}
