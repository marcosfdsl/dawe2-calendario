import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { MensajeComponent } from './mensaje/mensaje.component';

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
        path: 'notificaciones', title: 'Notificaciones', component: NotificacionesComponent,
    },
    {
        path: 'profesores/profesor', title: 'Profesor', component: ProfesorComponent,
    },
    {
        path: 'profesores/mensaje', title: 'Mensaje', component: MensajeComponent,
    },
];