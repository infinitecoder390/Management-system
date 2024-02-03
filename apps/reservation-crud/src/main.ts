import { NestFactory } from '@nestjs/core';
import { ReservationCrudModule } from './reservation-crud.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationCrudModule);
  await app.listen(3000);
}
bootstrap();
