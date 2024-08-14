import { readFileSync } from 'fs';
import { parseStringPromise } from 'xml2js';
import { join } from 'path';

export async function getTestData(filePath: string) {
  try {
    const absolutePath = join(__dirname, '../resources/testData', filePath);
    console.log(`Reading XML data from: ${absolutePath}`); // Log file path
    const xml = readFileSync(absolutePath, 'utf-8');
    const result = await parseStringPromise(xml);
    console.log('Parsed XML data:', JSON.stringify(result, null, 2)); // Log parsed data
    return result;
  } catch (error) {
    console.error('Error reading or parsing XML file:', error);
    throw error;
  }
}
