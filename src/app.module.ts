import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Board } from './boards/board.entity';
import { BoardsModule } from './boards/boards.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freemysqlhosting.net',
      port: 3306,
      username: 'sql12373171',
      password: 'lRsxkAPC3p',
      database: 'sql12373171',
      entities: [Board],
      synchronize: true,
      autoLoadEntities: true,
    }), 
    BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) { }
}
