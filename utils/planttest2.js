import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs'; // Import fs to create ReadStream

let scientificName = ""
const anchan_img = "/Users/ttontoey/Documents/EmbedLabProj/pruchaya-backend/utils/anchan.jpg";

const project = 'all'; // Change to a specific flora if needed
    const apiKey = '2b102X7JETYFB2Eg8UfuKCO'; // Replace with your actual API key
    const formData = new FormData();
    // formData.append('images', fs.createReadStream(anchan_img));
    console.log(formData);
    const { status, data } = await axios.post(
        `https://my-api.plantnet.org/v2/identify/${project}?api-key=${apiKey}`,
        formData,
        {
          headers: formData.getHeaders()
        }
      );

      console.log('status', status); // should be: 200
    console.log('data', data); // should be: read "Step 6" below