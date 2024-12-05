import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigModule } from './swagger-config/swagger-config.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerConfigModule.configureSwagger(app);

  await app.listen(3001);
}
bootstrap();
