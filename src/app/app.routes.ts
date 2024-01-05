import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MensajesComponent } from './mensajes/mensajes.component';

export const routes: Routes = [
    {
    path: '', title: 'Calendario', component: CalendarioComponent,
    },
    {
        path: 'profesores', title: 'Profesores', component: ProfesoresComponent,
    },
    {
        path: 'usuario', title: 'Usuario', component: UsuarioComponent,
    },
    {
        path: 'mensajes', title: 'Mensajes', component: MensajesComponent,
    },
];