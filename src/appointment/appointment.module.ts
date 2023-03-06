import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppointmentController } from './appointment.controller';
import { Appointment } from './appointment.model';
import { AppointmentService } from './appointment.service';

@Module({
    controllers: [AppointmentController],
    providers: [AppointmentService],
    imports: [
        SequelizeModule.forFeature([Appointment]),
    ]
})
export class AppointmentModule { }
