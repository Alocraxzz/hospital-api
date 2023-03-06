import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { DoctorController } from "./doctor.controller";
import { Doctor } from "./doctor.model";
import { DoctorService } from "./doctor.service";

@Module({
    controllers: [DoctorController],
    providers: [DoctorService],
    imports: [
        SequelizeModule.forFeature([Doctor]),
    ],
})
export class DoctorModule {}
