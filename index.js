async function checkUrls(urls) {
  const result = [];
  for (let i = 0; i < urls.length; i++) {
    try {
      await fetch(urls[i]);
      result.push(true);
    } catch (error) {
      result.push(false);
    }
  }
  return result;
}

checkUrls(['http://example.com', 'http://google.com', 'http://some-fake-url.com'])
  .then(results => console.log(results))