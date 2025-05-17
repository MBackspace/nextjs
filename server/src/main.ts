import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN_URL ?? 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['*', 'x-custom-lang', 'x-i18next-current-language', 'i18next'],
    credentials: true
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
