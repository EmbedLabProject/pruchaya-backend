import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs'; // Import fs to create ReadStream

let scientificName = ""

export async function getSpecies(imageFiles) {
    
    const project = 'all'; // Change to a specific flora if needed
    const apiKey = '2b10kVnMfoV1NWbG3rJWbp3M7'; // Replace with your actual API key
    const formData = new FormData();
    imageFiles.forEach((file) => {
            if (file !== null) {
                formData.append('images', file);
            }
        });
    const { status, data } = await axios.post(
        `https://my-api.plantnet.org/v2/identify/${project}?api-key=${apiKey}`,
        formData,
        {
          headers: formData.getHeaders()
        }
      );

    if (status === 200 && data.results && data.results.length > 0) {
        scientificName = data.results[0].species.scientificNameWithoutAuthor;
        console.log('scientificName: ',scientificName)
    } else {
        throw new Error('No plant identification results found.');
    }

    // console.log('status', status); // should be: 200
    // console.log('data', data); // should be: read "Step 6" below
}