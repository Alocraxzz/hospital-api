import { ApiProperty } from "@nestjs/swagger";

export class CreatePatientDto {
    @ApiProperty({ example: "First name" })
    readonly firstName: string;

    @ApiProperty({ example: "Last name" })
    readonly lastName: string;

    @ApiProperty({ example: "2021-05-18T15:00:00.000Z" })
    readonly dateOfBirth: Date;

    @ApiProperty({ example: '+380639874565' })
    readonly phoneNumber: string;
}