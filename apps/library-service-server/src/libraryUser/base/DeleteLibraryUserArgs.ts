/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LibraryUserWhereUniqueInput } from "./LibraryUserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteLibraryUserArgs {
  @ApiProperty({
    required: true,
    type: () => LibraryUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LibraryUserWhereUniqueInput)
  @Field(() => LibraryUserWhereUniqueInput, { nullable: false })
  where!: LibraryUserWhereUniqueInput;
}

export { DeleteLibraryUserArgs as DeleteLibraryUserArgs };
