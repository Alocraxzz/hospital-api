import { Body, Controller, Get, Post, Param, Put, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Appointment } from "./appointment.model";
import { AppointmentService } from "./appointment.service";
import { CreateAppointmentDto } from "./dto/createAppointment.dto";

@ApiTags("Appointments")
@Controller("api/appointments")
export class AppointmentController {
    constructor(private appointmentService: AppointmentService) { }

    @ApiOperation({ summary: "Get all appointments" })
    @ApiResponse({ status: 200, type: [Appointment] })
    @Get()
    getAll(): Promise<Appointment[]> {
        return this.appointmentService.findAll();
    }

    @ApiOperation({ summary: "Get appointment" })
    @ApiResponse({ status: 200, type: Appointment })
    @Get(':id')
    getOne(@Param('id') id: number): Promise<Appointment> {
        return this.appointmentService.findOne(id);
    }

    @ApiOperation({ summary: "Store appointment info" })
    @ApiResponse({ status: 200, type: Appointment })
    @Post()
    create(@Body() patientDto: CreateAppointmentDto): Promise<Appointment> {
        return this.appointmentService.create(patientDto);
    }

    @ApiOperation({ summary: "Update appointment info" })
    @ApiResponse({ status: 200, type: Number })
    @Put(':id')
    update(
        @Body() patientDto: CreateAppointmentDto,
        @Param('id') id: number
    ): Promise<[affectedCount: number]> {
        return this.appointmentService.update(id, patientDto);
    }

    @ApiOperation({ summary: "Destroy appointment info" })
    @ApiResponse({ status: 200, type: Number })
    @Delete(':id')
    destroy(@Param('id') id: number): Promise<number> {
        return this.appointmentService.destroy(id);
    }
}
