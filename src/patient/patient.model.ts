import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Appointment } from "../appointment/appointment.model";
import { MedicalRecord } from "../medical-record/medical-record.model";

interface PatientCreationAttrs {
    name: string;
    surname: string;
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
    name: string;

    @ApiProperty({ example: "Last name" })
    @Column({ type: DataType.STRING })
    surname: string;

    @ApiProperty({ example: "2021-05-18T15:00:00.000Z" })
    @Column({ type: DataType.DATEONLY })
    dateOfBirth: Date;

    @ApiProperty({ example: '+380639874565' })
    @Column({ type: DataType.STRING })
    phoneNumber: string;

    @ApiProperty({ example: 'MedicalRecord[]' })
    @HasMany(() => MedicalRecord, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    medicalRecords: MedicalRecord[];

    @ApiProperty({ example: 'Appointment[]' })
    @HasMany(() => Appointment, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    appointments: Appointment[];
}