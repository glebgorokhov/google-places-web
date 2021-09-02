import Places from '../dist';

try {
  const apiKey = process.env.PLACES_API_KEY;
  if (!apiKey) {
    throw new Error('Missing PLACES_API_KEY env variable');
  }

  Places.apiKey = apiKey;
  Places.debug = true;

  // eslint-disable-next-line no-inner-declarations
  async function run() {
    try {
      const response = await Places.nearbysearch({
        location: '-37.814,144.96332',
        rankby: 'distance'
        // cannot use radius because rankby is DISTANCE
      });

      console.log('Example Nearby Result', response.results[0]);
    } catch (error) {
      console.log('Error', error);
    }
  }

  run();
} catch (error) {
  if (error.message === 'Missing PLACES_API_KEY env variable') {
    console.log(error.message);
    console.log('\tTo run the example:');
    console.log('\tPLACES_API_KEY=<your_key_here> node places-example.js');
  } else {
    console.log(error);
  }
}
