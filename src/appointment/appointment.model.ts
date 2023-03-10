import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Doctor } from "src/doctor/doctor.model";
import { Patient } from "src/patient/patient.model";

interface AppointmentCreationAttrs {
    patientId: number;
    doctorId: number;
    date: Date;
    reason: string;
}

@Table({ tableName: "appointments" })
export class Appointment extends Model<Appointment, AppointmentCreationAttrs> {
    @ApiProperty({ example: 1, description: "Unique identifier" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 1 })
    @ForeignKey(() => Doctor)
    @Column({ type: DataType.INTEGER })
    doctorId: number;

    @ApiProperty({ example: 1 })
    @ForeignKey(() => Patient)
    @Column({ type: DataType.INTEGER })
    patientId: number;

    @ApiProperty({ example: "2021-05-18T15:00:00.000Z" })
    @Column({ type: DataType.DATE })
    date: Date;

    @ApiProperty({ example: "Some reason" })
    @Column({ type: DataType.STRING })
    reason: string;

    @BelongsTo(() => Patient)
    patient: Patient;

    @BelongsTo(() => Doctor)
    doctor: Doctor;
}