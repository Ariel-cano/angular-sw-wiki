import { Routes } from '@angular/router';
import {NavigationComponent} from './pages/components/navigation/navigation.component';
import {EmptyComponent} from './pages/components/empty/empty.component';
import {PlanetsComponent} from './pages/components/planets/planets.component';
import {PlanetComponent} from './entities/components/planet/planet.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
  },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: 'planets/:id',
    component: PlanetComponent,
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
