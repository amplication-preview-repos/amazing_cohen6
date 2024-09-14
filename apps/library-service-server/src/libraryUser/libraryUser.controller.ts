import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LibraryUserService } from "./libraryUser.service";
import { LibraryUserControllerBase } from "./base/libraryUser.controller.base";

@swagger.ApiTags("libraryUsers")
@common.Controller("libraryUsers")
export class LibraryUserController extends LibraryUserControllerBase {
  constructor(
    protected readonly service: LibraryUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
