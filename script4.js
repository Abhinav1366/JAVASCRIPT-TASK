// FETCHING URLS

const urlsToFetch = [
   'a','b'
]
async function fetchData(urls){
   try{
    const promises = urls.map(url => fetch(url));
    const responses = await Promise.all(promises)
    const data = await Promise.all(responses.map(responses => responses.json()));
    return data;
   }
   catch(error) {
     throw new Error('failed to fetch data: ${error}')
   }
}

fetchData(urlsToFetch)
 .then(data => {
    console.log('Feteched data:' , data)
}).catch(error =>{
    console.log('Error fecting data:' , error)
});