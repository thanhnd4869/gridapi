import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule],
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
