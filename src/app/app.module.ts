import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Patient } from "../patient/patient.model";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PatientModule } from "../patient/patient.module";
import { Doctor } from "src/doctor/doctor.model";
import { DoctorModule } from "src/doctor/doctor.module";
import { Appointment } from "src/appointment/appointment.model";
import { AppointmentModule } from "src/appointment/appointment.module";
import { MedicalRecord } from "../medical-record/medical-record.model";
import { MedicalRecordModule } from "../medical-record/medical-record.module";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Patient, Doctor, Appointment, MedicalRecord],
            autoLoadModels: true,
        }),
        PatientModule,
        DoctorModule,
        AppointmentModule,
        MedicalRecordModule,
    ],
})
export class AppModule {}
