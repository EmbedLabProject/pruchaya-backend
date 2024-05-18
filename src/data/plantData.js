import FormData from "form-data";

export async function getSpecies(file) {
    
    const project = 'all'; // Change to a specific flora if needed
    const apiKey = '2b10kVnMfoV1NWbG3rJWbp3M7'; // Replace with your actual API key

    let form = new FormData();
    req.files.forEach(file => {
      form.append('images', fs.createReadStream(file.path));
    });

    const { status, data } = await axios.post(
        `https://my-api.plantnet.org/v2/identify/${project}?api-key=${apiKey}`,
        form,
        {
          headers: form.getHeaders()
        }
      );

    if (status === 200 && data.results && data.results.length > 0) {
        const scientificName = data.results[0].species.scientificNameWithoutAuthor;
        console.log('scientificName: ',scientificName)
    } else {
        res.status(404).send('No plant identification results found.');
    }

    // console.log('status', status); // should be: 200
    // console.log('data', data); // should be: read "Step 6" below
}