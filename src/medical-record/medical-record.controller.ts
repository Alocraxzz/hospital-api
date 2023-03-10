import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MedicalRecordService } from "./medical-record.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MedicalRecord } from "./medical-record.model";
import { CreateMedicalRecordDto } from "./dto/createMedicalRecord.dto";

@ApiTags("MedicalRecords")
@Controller("api/medical-records")
export class MedicalRecordController {
    constructor(private medicalRecordService: MedicalRecordService) { }

    @ApiOperation({ summary: "Get all medical records" })
    @ApiResponse({ status: 200, type: [MedicalRecord] })
    @Get()
    getAll(): Promise<MedicalRecord[]> {
        return this.medicalRecordService.findAll();
    }

    @ApiOperation({ summary: "Get medical record" })
    @ApiResponse({ status: 200, type: MedicalRecord })
    @Get(":id")
    getOne(@Param("id") id: number): Promise<MedicalRecord> {
        return this.medicalRecordService.findOne(id);
    }

    @ApiOperation({ summary: "Store medical record into" })
    @ApiResponse({ status: 200, type: MedicalRecord })
    @Post()
    create(@Body() medicalRecordDto: CreateMedicalRecordDto): Promise<MedicalRecord> {
        return this.medicalRecordService.create(medicalRecordDto);
    }

    @ApiOperation({ summary: "Update medical record info" })
    @ApiResponse({ status: 200, type: Number })
    @Put(":id")
    update(
        @Body() medicalRecordDto: CreateMedicalRecordDto,
        @Param("id") id: number,
    ): Promise<[affectedRowCount: number]> {
        return this.medicalRecordService.update(id, medicalRecordDto);
    }

    @ApiOperation({ summary: "Destroy medical record into" })
    @ApiResponse({ status: 200, type: Number })
    @Delete(":id")
    destroy(@Param("id") id: number): Promise<number> {
        return this.medicalRecordService.destroy(id);
    }
}
