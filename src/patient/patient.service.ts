import { Injectable } from '@nestjs/common';
import { Patient } from "./patient.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePatientDto } from "./dto/createPatient.dto";
import { Repository } from 'sequelize-typescript';
import { Appointment } from "../appointment/appointment.model";
import { CreateAppointmentDto } from "../appointment/dto/createAppointment.dto";

@Injectable()
export class PatientService {
    constructor(
        @InjectModel(Patient)
        private patientRepository: Repository<Patient>
    ) { }

    async findAll(): Promise<Patient[]> {
        return await this.patientRepository.findAll();
    }

    async findOne(id: number): Promise<Patient> {
        return this.patientRepository.findOne({
            where: { id },
            include: { all: true },
        });
    }

    async create(patientDto: CreatePatientDto): Promise<Patient> {
        return await this.patientRepository.create(patientDto);
    }

    async update(id: number, patientDto: CreatePatientDto) {
        return this.patientRepository.update(patientDto, {
            where: { id },
        });
    }

    async destroy(id: number) {
        return this.patientRepository.destroy({
            where: { id }
        });
    }
}
