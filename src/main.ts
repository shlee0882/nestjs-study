import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AuthGuard } from './guards/auth.guard';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NestJS Swagger')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('NestJS API LIST')
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV !== 'production') {
    setupSwagger(app);
  }
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
