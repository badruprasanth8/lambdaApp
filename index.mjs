import fs from 'fs';

export const handler = async (event) => {
  const fileName = 'example.txt';

  // Attempt to read a file without catching exceptions
  const fileContent = fs.readFileSync(fileName, 'utf-8');

  // Your array processing or other code goes here

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'File read successfully',
      result: fileContent,
    }),
  };
};
