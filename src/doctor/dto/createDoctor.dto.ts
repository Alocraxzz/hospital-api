import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDto {
    @ApiProperty({ example: "Name" })
    readonly name: string;

    @ApiProperty({ example: "Surname" })
    readonly surname: string;

    @ApiProperty({ example: "Medical assistant" })
    readonly speciality: string;

    @ApiProperty({ example: '+380639874565' })
    readonly phoneNumber: string;
}