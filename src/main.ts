import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

(async function bootstrap() {
    const port = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('The NestJS API description')
        .setVersion('1.0')
        .addTag('NestJS')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    app.enableCors();

    await app.listen(port, () => console.log(`Server started on port = ${port}`));
})();