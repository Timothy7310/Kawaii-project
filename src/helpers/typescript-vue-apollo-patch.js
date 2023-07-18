import { writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const loadGeneratedPath = resolve(__dirname, '../src/generated/graphql.ts');
writeFileSync(
  loadGeneratedPath,
  readFileSync(loadGeneratedPath, 'utf8').replace(/@vue\/composition-api/m, 'vue')
);
