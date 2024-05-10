async function test(){
    const results = await fetch(`http://localhost:3222/problems`).then(r => (r.json()));
      console.log(results);
}


test();