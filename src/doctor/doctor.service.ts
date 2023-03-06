import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Repository } from "sequelize-typescript";
import { Doctor } from "src/doctor/doctor.model";
import { CreateDoctorDto } from "./dto/createDoctor.dto";

@Injectable()
export class DoctorService {
    constructor(
        @InjectModel(Doctor)
        private doctorRepository: Repository<Doctor>,
    ) { }

    async findAll(): Promise<Doctor[]> {
        return await this.doctorRepository.findAll({
            include: { all: true },
        });
    }

    async findOne(id: number): Promise<Doctor> {
        return this.doctorRepository.findOne({
            where: { id },
            include: { all: true },
        });
    }

    async create(doctorDto: CreateDoctorDto): Promise<Doctor> {
        return await this.doctorRepository.create(doctorDto);
    }

    async update(id: number, patientDto: CreateDoctorDto) {
        return this.doctorRepository.update(patientDto, {
            where: { id },
        });
    }

    async destroy(id: number) {
        return this.doctorRepository.destroy({
            where: { id },
        });
    }
}