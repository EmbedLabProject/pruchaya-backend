import fs from "fs"
import FormData from "form-data"

async function test(){
    const results = await fetch(`http://localhost:3222/problems`).then(r => (r.json()));
      console.log(results);
}

async function test2(){
    await fetch(`http://localhost:3222/problems/setStatus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ticket_id: "TEST", status: "solved"}),
    });
}

async function test3(){
    const result = await fetch(`http://localhost:3222/problems/getStatus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ticket_id: "TEST"}),
    }).then(r => (r.json()));
    console.log(result);
}

async function test4(){
  const result = await fetch(`http://localhost:3222/sensors/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({device_id: "69420", humidity: 100}),
  }).then(r => (r.json()));
  console.log(result);
}

async function test5(){
  const result = await fetch(`http://localhost:3222/sensors/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({device_id: "69420"}),
  }).then(r => (r.json()));
  console.log(result);
}

async function test6(){
  const formdata = new FormData();

  formdata.append('organs', 'fruit');
  formdata.append('images', fs.createReadStream("../images/apple.jpg"));

  formdata.append('organs', 'leaf');
  formdata.append('images', fs.createReadStream("../images/leaf.jpg"));

  const result = await fetch(`http://localhost:3222/plant/get`, {
    method: "POST",
    body: formdata
  });//.then(r => (r.json()));
  console.log(result);
}


async function main(){
  test6();
}

main();



