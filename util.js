const fs = require("fs");

const newComponent = process.argv[2];
const newComponentFolder = `${__dirname}/src/components/${newComponent}`;

// creating new folder
fs.mkdir(newComponentFolder, {}, (err) => {
  if (err) console.error("Error creating directory:", err);
  else {
    console.log("Directory created successfully.");
  }
});

const newFiles = [
  `${__dirname}/src/components/${newComponent}/${newComponent}.tsx`,
  `${__dirname}/src/components/${newComponent}/${newComponent}.stories.tsx`,
  `${__dirname}/src/components/${newComponent}/${newComponent}.styles.ts`,
];

const compTemplate = `const ${newComponent}= () => {
  return <> </>;
}

export default ${newComponent};`;

const storyTemplate = `export default true`;
const styleTemplate = `export default true`;

//creating 3 files.
fs.writeFileSync(newFiles[0], compTemplate);
fs.writeFileSync(newFiles[1], storyTemplate);
fs.writeFileSync(newFiles[2], styleTemplate);

console.log("Created 3 files successfully.");
