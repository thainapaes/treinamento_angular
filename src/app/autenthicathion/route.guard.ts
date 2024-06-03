import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {

  const rota = new Router;
  if (localStorage.getItem('nome') === 'Thaina') {
    return true;
  } else {
    rota.navigateByUrl('/pagina1');
    return false;
  }

};
