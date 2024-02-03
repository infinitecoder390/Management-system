import { Test, TestingModule } from '@nestjs/testing';
import { ReservationCrudController } from './reservation-crud.controller';
import { ReservationCrudService } from './reservation-crud.service';

describe('ReservationCrudController', () => {
  let reservationCrudController: ReservationCrudController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReservationCrudController],
      providers: [ReservationCrudService],
    }).compile();

    reservationCrudController = app.get<ReservationCrudController>(ReservationCrudController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reservationCrudController.getHello()).toBe('Hello World!');
    });
  });
});
