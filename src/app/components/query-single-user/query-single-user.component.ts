import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {RoleService} from "../../services/role.service";
import {UserWithRoleQueryModel} from "../../models/user-with-role.query-model";
import {RoleModel} from "../../models/role.model";

@Component({
  selector: 'app-query-single-user',
  templateUrl: './query-single-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleUserComponent {
  readonly userWithRole$: Observable<UserWithRoleQueryModel[]> = combineLatest([
    this._userService.getAllUsers(),
    this._roleService.getAllRoles()
  ]).pipe(
    map(([users, roles]: [UserModel[], RoleModel[]]) => this._mapToUserWithRoleQuery(users, roles))
  );

  constructor(private _userService: UserService, private _roleService: RoleService) {
  }

  private _mapToUserWithRoleQuery(users: UserModel[], roles: RoleModel[]): UserWithRoleQueryModel[] {
    const userRolesMap = roles.reduce((a, c) => {
      return {...a, [c.id]: c}
    }, {}) as Record<number, RoleModel>;
    return users.map(user => ({
        email: user.email,
        role: userRolesMap[user.roleId]?.role
      }),
    )
  }
}
