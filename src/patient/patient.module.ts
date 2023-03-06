import { Controller, Module } from "@nestjs/common";
import { PatientController } from "./patient.controller";
import { PatientService } from "./patient.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Patient } from "./patient.model";

@Module({
    controllers: [PatientController],
    providers: [PatientService],
    imports: [
        SequelizeModule.forFeature([Patient]),
    ],
})
export class PatientModule {}
