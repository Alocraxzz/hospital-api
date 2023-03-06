import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Doctor } from "./doctor.model";
import { DoctorService } from "./doctor.service";
import { CreateDoctorDto } from "./dto/createDoctor.dto";

@ApiTags("Doctors")
@Controller("api/doctors")
export class DoctorController {
    constructor(private doctorService: DoctorService) { }

    @ApiOperation({ summary: "Get all doctors" })
    @ApiResponse({ status: 200, type: [Doctor] })
    @Get()
    getAll(): Promise<Doctor[]> {
        return this.doctorService.findAll();
    }

    @ApiOperation({ summary: "Get doctor" })
    @ApiResponse({ status: 200, type: [Doctor] })
    @Get(":id")
    getOne(@Param("id") id: number): Promise<Doctor> {
        return this.doctorService.findOne(id);
    }

    @ApiOperation({ summary: "Store doctor info" })
    @ApiResponse({ status: 200, type: Doctor })
    @Post()
    create(@Body() doctorDto: CreateDoctorDto): Promise<Doctor> {
        return this.doctorService.create(doctorDto);
    }

    @ApiOperation({ summary: "Update doctor info" })
    @ApiResponse({ status: 200, type: Number })
    @Put(":id")
    update(
        @Body() doctorDto: CreateDoctorDto,
        @Param("id") id: number,
    ): Promise<[affectedCount: number]> {
        return this.doctorService.update(id, doctorDto);
    }

    @ApiOperation({ summary: "Destroy doctor info" })
    @ApiResponse({ status: 200, type: Number })
    @Delete(":id")
    destroy(@Param("id") id: number) {
        return this.doctorService.destroy(id);
    }
}
