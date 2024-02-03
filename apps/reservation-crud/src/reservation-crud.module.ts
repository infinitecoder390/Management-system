import { Module } from '@nestjs/common';
import { ReservationCrudController } from './reservation-crud.controller';
import { ReservationCrudService } from './reservation-crud.service';

@Module({
  imports: [],
  controllers: [ReservationCrudController],
  providers: [ReservationCrudService],
})
export class ReservationCrudModule {}
