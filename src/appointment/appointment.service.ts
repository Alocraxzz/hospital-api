import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Repository } from "sequelize-typescript";
import { Appointment } from "./appointment.model";
import { CreateAppointmentDto } from "./dto/createAppointment.dto";

@Injectable()
export class AppointmentService {
    constructor(
        @InjectModel(Appointment)
        private appointmentRepository: Repository<Appointment>,
    ) { }

    async findAll(): Promise<Appointment[]> {
        return this.appointmentRepository.findAll({
            include: { all: true },
        });
    }

    async findOne(id: number): Promise<Appointment> {
        return this.appointmentRepository.findOne({
            where: { id },
            include: { all: true },
        });
    }

    async create(appointmentDto: CreateAppointmentDto): Promise<Appointment> {
        return await this.appointmentRepository.create(appointmentDto);
    }

    async update(id: number, appointmentDto: CreateAppointmentDto): Promise<[affectedCount: number]> {
        return this.appointmentRepository.update(appointmentDto, {
            where: { id },
        });
    }

    async destroy(id: number): Promise<number> {
        return this.appointmentRepository.destroy({
            where: { id }
        });
    }
}
