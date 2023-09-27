const fs = require("fs");

const newComponent = process.argv[2];
const newComponentFolder = `${__dirname}/src/components/${newComponent}`;

try {
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

  const storyTemplate = `import ${newComponent} from "./${newComponent}";
  import { Meta, StoryObj } from "@storybook/react";
  
  const meta: Meta<typeof ${newComponent}> = {
    title: "${newComponent}",
    component: ${newComponent},
  };
  
  export default meta;
  
  type StoryType = StoryObj<typeof meta>;
  export const ${newComponent}Template: StoryType = {
    args: {
      
    },
  };`;

  const styleTemplate = `export default true`;

  //creating 3 files.
  fs.writeFileSync(newFiles[0], compTemplate);
  fs.writeFileSync(newFiles[1], storyTemplate);
  fs.writeFileSync(newFiles[2], styleTemplate);

  console.log("Created 3 files successfully.");
} catch (error) {
  console.error("Folder already exists. \nFinished without creating Files.");
}
