
export const handler = async (event) => {
  // TODO implement
  try {
    const inputArray = event.inputArray; // Pass the array as input using an event
    
    if (!Array.isArray(inputArray)) {
      throw new Error('Input is not an array');
    }

    // Your array processing code goes here

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Array processed successfully',
        result: inputArray,
      }),
    };
  } catch (error) {
     console.error(error);
    return {
      statusCode: 400, // You can choose an appropriate status code
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
