import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePatientDto } from "./dto/createPatient.dto";
import { Patient } from "./patient.model";
import { PatientService } from "./patient.service";

@ApiTags('Patients')
@Controller('api/patients')
export class PatientController {
    constructor(private patientService: PatientService) { }

    @ApiOperation({ summary: 'Get all patients' })
    @ApiResponse({ status: 200, type: [Patient] })
    @Get()
    getAll(): Promise<Patient[]> {
        return this.patientService.findAll();
    }

    @ApiOperation({ summary: 'Get patient' })
    @ApiResponse({ status: 200, type: [Patient] })
    @Get(':id')
    getOne(@Param('id') id: number): Promise<Patient> {
        return this.patientService.findOne(id);
    }

    @ApiOperation({ summary: 'Store patient info' })
    @ApiResponse({ status: 200, type: Patient })
    @Post()
    create(@Body() patientDto: CreatePatientDto): Promise<Patient> {
        return this.patientService.create(patientDto);
    }

    @ApiOperation({ summary: 'Update patient info' })
    @ApiResponse({ status: 200, type: Number })
    @Put(':id')
    update(
        @Body() patientDto: CreatePatientDto,
        @Param('id') id: number
    ): Promise<[affectedCount: number]> {
        return this.patientService.update(id, patientDto);
    }

    @ApiOperation({ summary: 'Destroy patient info' })
    @ApiResponse({ status: 200, type: Number })
    @Delete(':id')
    destroy(@Param('id') id: number): Promise<number> {
        return this.patientService.destroy(id);
    }
}
