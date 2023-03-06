import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Appointment } from "../appointment/appointment.model";

interface PatientCreationAttrs {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    phoneNumber: string;
}

@Table({ tableName: "patients" })
export class Patient extends Model<Patient, PatientCreationAttrs>
{
    @ApiProperty({ example: 1, description: "Unique identifier" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "First name" })
    @Column({ type: DataType.STRING })
    firstName: string;

    @ApiProperty({ example: "Last name" })
    @Column({ type: DataType.STRING })
    lastName: string;

    @ApiProperty({ example: "2021-05-18T15:00:00.000Z" })
    @Column({ type: DataType.DATEONLY })
    dateOfBirth: Date;

    @ApiProperty({ example: '+380639874565' })
    @Column({ type: DataType.STRING })
    phoneNumber: string;
}