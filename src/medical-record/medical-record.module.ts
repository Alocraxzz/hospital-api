import { Module } from "@nestjs/common";
import { MedicalRecordController } from "./medical-record.controller";
import { MedicalRecordService } from "./medical-record.service";
import { MedicalRecord } from "./medical-record.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    controllers: [MedicalRecordController],
    providers: [MedicalRecordService],
    imports: [
        SequelizeModule.forFeature([MedicalRecord]),
    ],
})
export class MedicalRecordModule {}