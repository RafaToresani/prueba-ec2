import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly _prisma:PrismaService){}
  async create(createProductDto: CreateProductDto) {
    return await this._prisma.product.create({data: createProductDto})
  }

  async findAll() {
    return await this._prisma.product.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
