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
date: "DD-MM-YYYY"
slug: ""
---`;
const PROJECT_TEMPLATE = `---
name: "PROJECT NAME"
description: "PROJECT DESC"
isDraft: true
slug: ""
# ghLink: ""
# liveLink: ""

---
`;

const enterChoice = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Blog or a Project?\n", (input) => {
    rl.close();
    processChoice(input);
  });
};

const createFile = async (type, name) => {
  if (type === "blog") {
    const blogfilepath = join(BLOG_DIRPATH, name + ".md");
    console.log(`creating your blog at ${blogfilepath} ...\n`);
    if (!fs.existsSync(blogfilepath)) {
      fs.writeFile(blogfilepath, BLOG_TEMPLATE, (err) => {
        if (err) throw err;
        console.log("You Blog Template has been created ✌🏻\n");
      });
    } else {
      console.log(
        "🚫🚫 A Blog with this name already exists. Please Enter a different name\n"
      );
      askFileName("blog");
    }
  } else {
    const projectfilepath = join(PROJECT_DIRPATH, name + ".md");
    console.log(`creating your blog at ${projectfilepath} ...\n`);
    if (!fs.existsSync(projectfilepath)) {
      fs.writeFile(projectfilepath, PROJECT_TEMPLATE, (err) => {
        if (err) throw err;
        console.log("You Project Template has been created ✌🏻\n");
      });
    } else {
      console.log(
        "🚫🚫 A Project with this name already exists. Please Enter a different name\n"
      );
      askFileName("project");
    }
  }
};

const askFileName = (x) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  if (x === "blog") {
    rl.question(`What Is the name of your ${x} post?\n`, (name) => {
      rl.close();

      createFile("blog", name);
    });
  } else {
    rl.question(`What Is the name of your ${x} post?\n`, (name) => {
      rl.close();

      createFile("project", name);
    });
  }
};

const processChoice = (type) => {
  type = type.trim().toLowerCase();

  switch (type) {
    case "blog":
      console.log("Creating blog...\n");
      askFileName("blog");
      break;
    case "project":
      console.log("Creating project...\n");
      askFileName("project");
      break;

    default:
      console.log("You have entered an Invalid Choice! Retry!");
      enterChoice();
  }
};

enterChoice();
