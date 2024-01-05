import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { CalendarioComponent } from './calendario/calendario.component';

export const routes: Routes = [
    {
    path: '', title: 'Calendario', component: CalendarioComponent,
    },
    {
        path: 'usuario', title: 'Usuario', component: UsuarioComponent,
    },

];