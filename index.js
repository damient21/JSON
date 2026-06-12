const { readFile, writeFile } = require('fs').promises;

async function something() {
  const content = await readFile('data.json')
  const data  = JSON.parse(content)
  console.log(`App's Name: ${data.name}`);
  console.log(`App's Description: ${data.description}`);

  data.name = "s4edrtfgvyuhbj"
  console.log(`Updated to ${data.name}!`)
  await writeFile('data.json', JSON.stringify(data, null, 2));
}
something();
