import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs'; // Import fs to create ReadStream

let scientificName = ""

function base64toFile(base64String, fileName){
    const byteString = atob(base64String.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new File([ab], fileName, { type: 'image/jpeg' }); // Change 'image/jpeg' to the appropriate MIME type
}

export async function getSpecies(imageFiles) {
    
    const project = 'all'; // Change to a specific flora if needed
    const apiKey = '2b10kVnMfoV1NWbG3rJWbp3M7'; // Replace with your actual API key
    // const formData = imageFiles["imageFile"]
    console.log(imageFiles)
    const index = 0
    const formData = new FormData();
    imageFiles["imageString"].forEach(base64String => {
        console.log(base64String)
        const file = base64toFile(base64String, index);
        formData.append('images', file)
    });
    // imageFiles["imageFile"].forEach((file) => {
    //     console.log(file);
    //     if (file instanceof File) {
    //         formData.append('images', file)
    //     }
    // });
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