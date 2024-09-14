import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryUserServiceBase } from "./base/libraryUser.service.base";

@Injectable()
export class LibraryUserService extends LibraryUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
