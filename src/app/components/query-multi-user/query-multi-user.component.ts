import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, combineLatest, map} from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {RoleModel} from "../../models/role.model";
import {DepartmentModel} from "../../models/department.model";
import {MultiUserQueryModel} from "../../query-models/multi-user.query-model";

@Component({
  selector: 'app-query-multi-user',
  templateUrl: './query-multi-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryMultiUserComponent {
  readonly userWithRoleAndDept$: Observable<MultiUserQueryModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this._userService.getAllRoles(),
    this._userService.getAllDepartments()
  ]).pipe(
    map(([users, roles, depts] : [UserModel[], RoleModel[], DepartmentModel[]]) => this._mapToUserWithRoleAndDept(users,roles,depts))
  )

  constructor(private _userService: UserService) {
  }

  private _mapToUserWithRoleAndDept(users: UserModel[], roles: RoleModel[], depts: DepartmentModel[]) : MultiUserQueryModel[] {
    const rolesMap = roles.reduce((a,c) => (
    {...a, [c.id] : c}
    ),{}) as Record<number, RoleModel>;

    const deptsMap = depts.reduce((a,c) => (
      {...a,[c.id] : c}
    ),{}) as Record<string, DepartmentModel>

    return users.map(user => ({
      email : user.email,
      role : rolesMap[user.roleId]?.role,
      department : deptsMap[user.departmentId]?.name.toLowerCase()
    }))
  }
}
