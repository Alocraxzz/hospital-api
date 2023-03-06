import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface DoctorCreationAttrs {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
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
    firstName: string;

    @ApiProperty({ example: "Last name" })
    @Column({ type: DataType.STRING })
    lastName: string;

    @ApiProperty({ example: "Medical assistant" })
    @Column({ type: DataType.STRING })
    speciality: string;

    @ApiProperty({ example: '+380639874565' })
    @Column({ type: DataType.STRING })
    phoneNumber: string;
}