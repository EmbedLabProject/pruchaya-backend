import FormData from "form-data";

const api_key = "2b10Nd0zDY95NF6n5C9YrCCfe"

export async function getSpecies(form) {
    const project = 'all'

    const url = `https://my-api.plantnet.org/v2/identify/${project}?api-key=${api_key}`;

    let newForm = new FormData(form)
    console.log(newForm)

    const {status,data} = await fetch(url, {
        method: "POST",
        body: newForm
    });

    console.log('status', status); // should be: 200
    console.log('data', data); // should be: read "Step 6" below
}