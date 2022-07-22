import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { createStore, select, Store, withProps } from '@ngneat/elf';
import {
  selectAllEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';

interface AuthProps {
  user: { id: string } | null;
  data: Store;
}

interface Todo {
  id: number;
  label: string;
}

const authStore = createStore(
  { name: 'test' },
  withProps<AuthProps>({
    user: null,
    data: createStore({ name: 'todos' }, withEntities<Todo>()),
  })
);

authStore.subscribe(state => {
  console.log(state);
});

const user$ = authStore.pipe(select(state => state.user));

authStore.update(state => ({
  ...state,
  user: { id: 'foo' },
}));

setTimeout(() => {
  authStore.state.data.update(
    setEntities([
      { id: 1, label: 'one ' },
      { id: 2, label: 'two' },
    ])
  );
}, 2000);

authStore.state.data.subscribe(state => {
  console.log(state);
});
