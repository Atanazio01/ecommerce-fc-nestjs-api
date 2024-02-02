import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0k',
      name: 'Product 1',
      description: 'Description 1',
      image_url: 'https://localhost:9000/products/image1.jpg',
      price: 100,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0l',
      name: 'Product 2',
      description: 'Description 2',
      image_url: 'https://localhost:9000/products/image2.jpg',
      price: 200,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0m',
      name: 'Product 3',
      description: 'Description 3',
      image_url: 'https://localhost:9000/products/image3.jpg',
      price: 300,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0n',
      name: 'Product 4',
      description: 'Description 4',
      image_url: 'https://localhost:9000/products/image4.jpg',
      price: 400,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0o',
      name: 'Product 5',
      description: 'Description 5',
      image_url: 'https://localhost:9000/products/image5.jpg',
      price: 500,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0p',
      name: 'Product 6',
      description: 'Description 6',
      image_url: 'https://localhost:9000/products/image6.jpg',
      price: 600,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0q',
      name: 'Product 7',
      description: 'Description 7',
      image_url: 'https://localhost:9000/products/image7.jpg',
      price: 700,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0r',
      name: 'Product 8',
      description: 'Description 8',
      image_url: 'https://localhost:9000/products/image8.jpg',
      price: 800,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0s',
      name: 'Product 9',
      description: 'Description 9',
      image_url: 'https://localhost:9000/products/image9.jpg',
      price: 900,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0t',
      name: 'Product 10',
      description: 'Description 10',
      image_url: 'https://localhost:9000/products/image10.jpg',
      price: 1000,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0u',
      name: 'Product 11',
      description: 'Description 11',
      image_url: 'https://localhost:9000/products/image11.jpg',
      price: 1100,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0v',
      name: 'Product 12',
      description: 'Description 12',
      image_url: 'https://localhost:9000/products/image12.jpg',
      price: 1200,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0w',
      name: 'Product 13',
      description: 'Description 13',
      image_url: 'https://localhost:9000/products/image13.jpg',
      price: 1300,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0x',
      name: 'Product 14',
      description: 'Description 14',
      image_url: 'https://localhost:9000/products/image14.jpg',
      price: 1400,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0y',
      name: 'Product 15',
      description: 'Description 15',
      image_url: 'https://localhost:9000/products/image15.jpg',
      price: 1500,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j0z',
      name: 'Product 16',
      description: 'Description 16',
      image_url: 'https://localhost:9000/products/image16.jpg',
      price: 1600,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j00',
      name: 'Product 17',
      description: 'Description 17',
      image_url: 'https://localhost:9000/products/image17.jpg',
      price: 1700,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j01',
      name: 'Product 18',
      description: 'Description 18',
      image_url: 'https://localhost:9000/products/image18.jpg',
      price: 1800,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j02',
      name: 'Product 19',
      description: 'Description 19',
      image_url: 'https://localhost:9000/products/image19.jpg',
      price: 1900,
    },
    {
      id: '7f8c9d8e-9f0a*1b2c*3d4e-5f6g7h8i9j03',
      name: 'Product 20',
      description: 'Description 20',
      image_url: 'https://localhost:9000/products/image20.jpg',
      price: 2000,
    },
  ]);

  await app.close();
}
bootstrap();
