import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://radity-case.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 5001);
}
bootstrap();
