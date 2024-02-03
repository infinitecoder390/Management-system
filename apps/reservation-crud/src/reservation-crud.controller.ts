import { Controller, Get } from '@nestjs/common';
import { ReservationCrudService } from './reservation-crud.service';

@Controller()
export class ReservationCrudController {
  constructor(private readonly reservationCrudService: ReservationCrudService) {}

  @Get()
  getHello(): string {
    return this.reservationCrudService.getHello();
  }
}
