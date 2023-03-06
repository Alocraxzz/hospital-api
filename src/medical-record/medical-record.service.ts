import { Injectable } from "@nestjs/common";
import { MedicalRecord } from "./medical-record.model";
import { Repository } from "sequelize-typescript";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMedicalRecordDto } from "./dto/createMedicalRecord.dto";

@Injectable()
export class MedicalRecordService {
    constructor(
        @InjectModel(MedicalRecord)
        private medicalRecordRepository: Repository<MedicalRecord>,
    ) {}

    async findAll(): Promise<MedicalRecord[]> {
        return await this.medicalRecordRepository.findAll({
            include: { all: true },
        });
    }

    async findOne(id: number): Promise<MedicalRecord> {
        return await this.medicalRecordRepository.findOne({
            where: { id },
            include: { all: true },
        });
    }

    async create(medicalRecordDto: CreateMedicalRecordDto): Promise<MedicalRecord> {
        return await this.medicalRecordRepository.create(medicalRecordDto);
    }

    async update(id: number, medicalRecordDto: CreateMedicalRecordDto): Promise<[affectedCount: number]> {
        return await this.medicalRecordRepository.update(medicalRecordDto, {
            where: { id },
        });
    }

    async destroy(id: number): Promise<number> {
        return await this.medicalRecordRepository.destroy({
            where: { id },
        });
    }
}
