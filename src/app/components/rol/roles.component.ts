import { Component, OnInit } from '@angular/core';
import { Rol } from '../../model//rol';
import { RolService } from '../../services/rol/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  private rol: Rol = new Rol()
  roles: Rol[]
  constructor(private rolService: RolService) {

   }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe((data: Rol[]) => {
      this.roles = data;
      });
  }
}
