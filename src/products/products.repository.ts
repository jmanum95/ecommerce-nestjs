import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High performance laptop',
      price: 999.99,
      stock: true,
      imgUrl: 'https://example.com/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model smartphone',
      price: 699.99,
      stock: true,
      imgUrl: 'https://example.com/smartphone.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise cancelling headphones',
      price: 199.99,
      stock: true,
      imgUrl: 'https://example.com/headphones.jpg',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Feature-packed smartwatch',
      price: 299.99,
      stock: false,
      imgUrl: 'https://example.com/smartwatch.jpg',
    },
    {
      id: 5,
      name: 'Tablet',
      description: 'Portable and powerful tablet',
      price: 499.99,
      stock: true,
      imgUrl: 'https://example.com/tablet.jpg',
    },
    {
      id: 6,
      name: 'Monitor',
      description: '4K UHD monitor',
      price: 399.99,
      stock: false,
      imgUrl: 'https://example.com/monitor.jpg',
    },
    {
      id: 7,
      name: 'Keyboard',
      description: 'Mechanical gaming keyboard',
      price: 129.99,
      stock: true,
      imgUrl: 'https://example.com/keyboard.jpg',
    },
    {
      id: 8,
      name: 'Mouse',
      description: 'Wireless ergonomic mouse',
      price: 59.99,
      stock: true,
      imgUrl: 'https://example.com/mouse.jpg',
    },
    {
      id: 9,
      name: 'Printer',
      description: 'All-in-one wireless printer',
      price: 149.99,
      stock: false,
      imgUrl: 'https://example.com/printer.jpg',
    },
    {
      id: 10,
      name: 'Speaker',
      description: 'Bluetooth portable speaker',
      price: 79.99,
      stock: true,
      imgUrl: 'https://example.com/speaker.jpg',
    },
  ];

  async getAllProducts() {
    return this.products;
  }

  async getOneProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }

  async createProduct(product: any) {
    this.products.push({ id: this.products.length + 10, ...product });
    return product;
  }

  async updateProduct(id: number, product: any) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = { ...this.products[index], ...product };
    return product;
  }

  async deleteProduct(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return true;
  }
}
