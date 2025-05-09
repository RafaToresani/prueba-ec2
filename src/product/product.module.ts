import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [PrismaService, ProductService],
})
export class ProductModule {}
