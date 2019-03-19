import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu:any=[
  {
    titulo: 'Recepcion',
    icon: 'move_to_inbox',
    submenu:[
      {titulo: 'Reservas', url:'/reservas',icon:'calendar_today'},
      {titulo: 'Huespedes', url:'/huespedes',icon:'group'},
      {titulo: 'Disponibilidad', url:'/Disponibilidad',icon:'meeting_room'}
    ]
  }
]
  constructor() { }
}
