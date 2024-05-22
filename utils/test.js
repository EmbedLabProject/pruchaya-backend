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
      body: JSON.stringify({device_id: "69420",light:100,  humidity: 100, vibration: 100 }),
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
  const result = await fetch(`http://localhost:3222/chatbot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({prompt: "อัลกอริทึมแบบละโมบ"}),
  }).then(r => (r.json()));
  console.log(result);
}


async function main(){
    await test4();
    await test4();
    await test5();

    
}

main();



