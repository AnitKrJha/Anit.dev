import { join, dirname } from "path";
import readline from "readline";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const rootDir = dirname(__filename);

const BLOG_DIRPATH = join(rootDir, "src", "content", "blog");
const PROJECT_DIRPATH = join(rootDir, "src", "content", "projects");

const BLOG_TEMPLATE = `---
title: "BLOG TITLE HERE"
description: "BLOG DESCRIPTION"
isDraft: true
tags: []
#image:
date: "MM-DD-YYYY"
#slug: ""
---`;

const PROJECT_TEMPLATE = `---
name: "PROJECT NAME"
description: "PROJECT DESC"
isDraft: true
#slug: ""
#image:""
# ghLink: ""
# liveLink: ""
---
`;

// ANSI escape codes for text color
const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const blue = "\x1b[34m";

const enterChoice = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    yellow +
      "Do you want to create a Blog " +
      reset +
      red +
      "or a Project?\n" +
      reset,
    (input) => {
      rl.close();
      processChoice(input);
    }
  );
};

const createFile = async (type, name) => {
  const dirPath = type === "blog" ? BLOG_DIRPATH : PROJECT_DIRPATH;
  const template = type === "blog" ? BLOG_TEMPLATE : PROJECT_TEMPLATE;
  const filePath = join(dirPath, `${name}.mdx`);

  console.log(
    green + `Creating your ${type} at ${filePath} ...` + reset + "\n"
  );

  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, template, (err) => {
      if (err) throw err;
      console.log(
        green + `Your ${type} Template has been created ✌🏻` + reset + "\n"
      );
    });
  } else {
    console.log(
      red +
        `🚫🚫 A ${type} with this name already exists. Please enter a different name.\n` +
        reset
    );
    askFileName(type);
  }
};

const askFileName = (type) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`What is the name of your ${type} post?\n`, (name) => {
    rl.close();
    createFile(type, name);
  });
};

const processChoice = (type) => {
  type = type.trim().toLowerCase();

  switch (type) {
    case "blog":
      console.log(blue + "Creating a blog..." + reset + "\n");
      askFileName("blog");
      break;
    case "project":
      console.log(blue + "Creating a project..." + reset + "\n");
      askFileName("project");
      break;

    default:
      console.log(
        red + "You have entered an invalid choice! Please retry." + reset
      );
      enterChoice();
  }
};

enterChoice();
