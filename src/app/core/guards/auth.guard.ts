import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthRepository } from '../../modules/auth/auth.repository';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authRepository: AuthRepository,
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.authRepository.user$.pipe(
      map(user => {
          if (!!user?.login) {
            return true;
          } else {
            this.router.navigate(['auth/login']);
            return false;
          }
        },
      ),
    );
  }
}
