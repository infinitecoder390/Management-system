import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  MongooseModule as DBMongooseModule,
  ModelDefinition,
} from '@nestjs/mongoose';
@Module({
  imports: [
    DBMongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configSerive: ConfigService) => ({
        uri: configSerive.get('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbmoduleModule {
  static forFeature(models: ModelDefinition[]) {
    return DBMongooseModule.forFeature(models);
  }
}
