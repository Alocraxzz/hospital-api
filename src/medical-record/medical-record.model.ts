import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "../patient/patient.model";
import { Doctor } from "../doctor/doctor.model";

interface MedicalRecordAttrs {
    patientId: number;
    doctorId: number;
    date: Date;
    diagnosis: string;
    prescription: string;
}

@Table({ tableName: "medicalRecords" })
export class MedicalRecord extends Model<MedicalRecord, MedicalRecordAttrs> {
    @ApiProperty({ example: 1, description: "Unique identifier" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 1, description: "Patient unique identifier" })
    @ForeignKey(() => Patient)
    @Column({ type: DataType.INTEGER })
    patientId: number;

    @ApiProperty({ example: 1, description: "Doctor unique identifier" })
    @ForeignKey(() => Doctor)
    @Column({ type: DataType.INTEGER })
    doctorId: number;

    @ApiProperty({ example: "2021-05-18T15:00:00.000Z", description: "Date of visit" })
    @Column({ type: DataType.DATE })
    date: Date;

    @ApiProperty({ example: "Arrhythmia", description: "Some diagnosis" })
    @Column({ type: DataType.STRING })
    diagnosis: string;

    @ApiProperty({ example: "Some medicine, {count} per day / week / month", description: "Some prescription" })
    @Column({ type: DataType.STRING })
    prescription: string;

    @BelongsTo(() => Patient)
    patient: Patient;

    @BelongsTo(() => Doctor)
    doctor: Doctor;
}