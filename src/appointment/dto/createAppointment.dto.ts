import { ApiProperty } from "@nestjs/swagger";

export class CreateAppointmentDto {
    @ApiProperty({ example: "1" })
    readonly doctorId: number;
    
    @ApiProperty({ example: "1" })
    readonly patientId: number;
    
    @ApiProperty({ example: "2021-05-18T15:00:00.000Z" })
    readonly date: Date;
    
    @ApiProperty({ example: "Some reason" })
    readonly reason: string;
}