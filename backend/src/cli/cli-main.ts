import { CommandFactory } from 'nest-commander';
import { CliModule } from './cli.module';

async function bootstrap() {
  await CommandFactory.run(CliModule, ['warn', 'error', 'debug', 'log']);

  process.exit(0);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
