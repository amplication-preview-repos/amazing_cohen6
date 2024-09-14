import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LibraryUserResolverBase } from "./base/libraryUser.resolver.base";
import { LibraryUser } from "./base/LibraryUser";
import { LibraryUserService } from "./libraryUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LibraryUser)
export class LibraryUserResolver extends LibraryUserResolverBase {
  constructor(
    protected readonly service: LibraryUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
