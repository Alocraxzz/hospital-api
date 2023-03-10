import { ApiProperty } from "@nestjs/swagger";

export class CreatePatientDto {
    @ApiProperty({ example: "Name" })
    readonly name: string;

    @ApiProperty({ example: "Surname" })
    readonly surname: string;

    @ApiProperty({ example: "2021-05-18T15:00:00.000Z" })
    readonly dateOfBirth: Date;

    @ApiProperty({ example: '+380639874565' })
    readonly phoneNumber: string;
}