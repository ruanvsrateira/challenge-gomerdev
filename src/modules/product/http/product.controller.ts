import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../domain/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async fetchProducts() {
    return this.productService.fetchAllProducts();
  }
}
