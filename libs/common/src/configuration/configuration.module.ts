import { Module } from '@nestjs/common';
import * as joi from 'joi';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: joi.object({
        MONGODB_URL: joi.string().required(),
      }),
    }),
  ],
})
export class ConfigurationModule {}
