import { INestApplication, Module } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Module({})
export class SwaggerConfigModule {
  static configureSwagger(app: INestApplication) {
    if (process.env.NODE_ENV === 'development') {
      const config = new DocumentBuilder()
        .setTitle('api-server')
        .setDescription('server api specification')
        .setVersion('1.0')
        .addBearerAuth()
        .build();

      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('docs', app, document);
    }
  }
}
