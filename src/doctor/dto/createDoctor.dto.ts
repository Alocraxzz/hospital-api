import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDto {
    @ApiProperty({ example: "First name" })
    readonly firstName: string;

    @ApiProperty({ example: "Last name" })
    readonly lastName: string;

    @ApiProperty({ example: "Medical assistant" })
    readonly speciality: string;

    @ApiProperty({ example: '+380639874565' })
    readonly phoneNumber: string;
}