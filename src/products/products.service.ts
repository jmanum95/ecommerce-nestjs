import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.createProduct(createProductDto);
  }

  async findAll() {
    return await this.productsRepository.getAllProducts();
  }

  async findOne(id: number) {
    return await this.productsRepository.getOneProduct(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.updateProduct(id, updateProductDto);
  }

  async remove(id: number) {
    return await this.productsRepository.deleteProduct(id);
  }
}
