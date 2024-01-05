import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;

        if (typeof document !== 'undefined') {
          if (currentRoute === '/') {
            document.getElementById('bcalendario')?.classList.add('botoncontenidoactual');
            document.getElementById('bprofesores')?.classList.remove('botoncontenidoactual');
            document.getElementById('busuario')?.classList.remove('botoncontenidoactual');
            document.getElementById('bmensajes')?.classList.remove('botoncontenidoactual');

          } else if (currentRoute === '/profesores') {
            document.getElementById('bcalendario')?.classList.remove('botoncontenidoactual');
            document.getElementById('bprofesores')?.classList.add('botoncontenidoactual');
            document.getElementById('busuario')?.classList.remove('botoncontenidoactual');
            document.getElementById('bmensajes')?.classList.remove('botoncontenidoactual');

          } else if (currentRoute === '/usuario') {
            document.getElementById('bcalendario')?.classList.remove('botoncontenidoactual');
            document.getElementById('bprofesores')?.classList.remove('botoncontenidoactual');
            document.getElementById('busuario')?.classList.add('botoncontenidoactual');
            document.getElementById('bmensajes')?.classList.remove('botoncontenidoactual');

          } else if (currentRoute === '/mensajes') {
            document.getElementById('bcalendario')?.classList.remove('botoncontenidoactual');
            document.getElementById('bprofesores')?.classList.remove('botoncontenidoactual');
            document.getElementById('busuario')?.classList.remove('botoncontenidoactual');
            document.getElementById('bmensajes')?.classList.add('botoncontenidoactual');

          }
        }
      }
    });
  }
}