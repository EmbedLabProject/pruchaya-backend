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


async function main(){
    await test2();
    await test3();
}

main();



