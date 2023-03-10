import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { MedicalRecord } from "../medical-record/medical-record.model";
import { Appointment } from "../appointment/appointment.model";

interface DoctorCreationAttrs {
    name: string;
    surname: string;
    speciality: string;
    phoneNumber: string;
}

@Table({ tableName: "doctors" })
export class Doctor extends Model<Doctor, DoctorCreationAttrs>
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

    @ApiProperty({ example: "Medical assistant" })
    @Column({ type: DataType.STRING })
    speciality: string;

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