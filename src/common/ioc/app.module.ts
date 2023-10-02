import { Module } from '@nestjs/common';
import { ProductModule } from 'src/modules/product/product.module';

@Module({
  imports: [ProductModule],
})
export class AppModule {}
