import getData from './app.js';

(async () => {
    const result = await getData(1); 
    console.log(result);
  })();
// getData(1);
// getData();

