import { Module } from '@nestjs/common';
import { ProductController } from './http/product.controller';
import { ProductService } from './domain/product.service';
import { PrismaModule } from 'src/common/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
