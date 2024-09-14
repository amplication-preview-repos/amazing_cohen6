import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LibraryUserModuleBase } from "./base/libraryUser.module.base";
import { LibraryUserService } from "./libraryUser.service";
import { LibraryUserController } from "./libraryUser.controller";
import { LibraryUserResolver } from "./libraryUser.resolver";

@Module({
  imports: [LibraryUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [LibraryUserController],
  providers: [LibraryUserService, LibraryUserResolver],
  exports: [LibraryUserService],
})
export class LibraryUserModule {}
