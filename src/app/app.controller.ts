import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("/api")
export class AppController {
    constructor(private readonly appService: AppService) { }

    @ApiOperation({ summary: "Get connection info" })
    @ApiResponse({ status: 200, type: String })
    @Get()
    getHello(): string {
        return this.appService.getConnection();
    }
}