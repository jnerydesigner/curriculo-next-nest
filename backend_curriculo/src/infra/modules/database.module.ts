import { Module } from '@nestjs/common';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
