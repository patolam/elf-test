import { createStore, select, withProps } from '@ngneat/elf';
import { Injectable } from '@angular/core';

interface AuthProps {
  user?: {
    login: string;
    password: string;
  };
}

const authStore = createStore(
  { name: 'auth' },
  withProps<AuthProps>({}),
);

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  user$ = authStore.pipe(select((state) => state.user));

  updateUser(user: AuthProps['user']) {
    authStore.update((state) => ({
      ...state,
      user,
    }));

    localStorage.setItem('user', JSON.stringify(user));
  };

  removeUser() {
    authStore.reset();

    localStorage.removeItem('user');
  }
}
