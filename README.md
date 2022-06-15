# Edgemont Robotics Website

Hello! This website was made for my Senior Options Project. This website uses SvelteKit, an offshoot of Svelte. Although you don't need to learn Svelte to edit and deploy this website, this README will explain what you do need to know. This guide is written so that someone who has no idea how to clone a repo or do anything of that sort can still edit the website. If you do know what you are doing, just skip the first few sections. Thanks!

## Dependencies
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)

When you are installing Node.js, please make sure you also install `npm`. This will be an option in the installer. Without npm, it will be impossible to edit and deploy the website.

## Cloning the repository

To edit the website on your computer, you should get [VS Code](https://code.visualstudio.com/). Although you don't need it to edit, this guide is made to be used in VS Code. You don't technically need to install any other extentions, however, if you want to you can install the [official Svelte extention](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If at any point you *need* another extension, VS Code should prompt you to install in the bottom right. 

Once you have everything you need installed, open VS Code and clone the repository. To do this, go to the bar on the left and click and the page icon at the top. This should open a panel with two buttons. One should say "Clone Repository". When you click this, the command palette should open in the center of the window and it will allow you to input a URL to clone from. Cloning a repository allows you to download the code to your computer so you can edit it locally. Input the URL for the repository (https://github.com/edgemontrobotics/edgemontrobotics.github.io). VS Code will ask you where you want to store the files, pick somewhere that you can easily access such as your Documents folder. After cloning the repo, a context menu should open in the bottom right asking if you want to open the cloned repo, just click open. 

## Installing the node packages

Once you have the repository cloned, you need to install the necessary node packages. To do this, go to the top of the VS Code and click the menu that says "Terminal." Select the first option, "New Terminal". A terminal window should open in the bottom of the window. Enter the following command

```bash
npm install
```

This will install all the ncessary node packages, including Svelte. 

## Developing
Once you have installed the node packages, you will want to create a preview of the website that will update to any changes you make to the website. Enter the following command into your terminal. 
```bash
npm run dev -- --open
```

This will run a service called vite that will update the website everytime you change and file and save. To actually edit the website go to the `src` folder, then `routes`. Ignore the loose files in `src` and the `components` folder. Now just open any of these files and start editing. If you know HTML, then everything should look familiar. Even if you don't know HTML, most of your edits will be changing text. If you are adding/changing images, go to the `static` folder. Please do NOT put images in the `static` folder, put images in one of the subfolders. 

## Building

To create a production version of the website:

```bash
npm run build
```

To publish the production version of the website run the following command: 
```bash
npm run deploy
```
This will commit all of the files in the newly created `build` folder to a seperate branch, `gh-pages`. This branch is used by GitHub pages to host the website. 

## Commiting changes
Please make sure you commit all of the changes you make to the website. To do this, go to the bar on the left and select the "Source Control" button. It should be under the "Explorer" button you pressed to clone the repo. Enter a message of what you changed in the box (you are limited to 50 characters unless you make a new line with Shift+Enter). Once your commit message is entered, click the check mark button to commit your changes. This will push your changes to the remote repo.

## Credits

[SvelteKit](https://kit.svelte.dev/)\
[Svelte Animation on Scroll](https://github.com/shiryel/saos)\
[Phosphor Icons](https://github.com/phosphor-icons/phosphor-icons)\
[Phosphor-Svelte](https://github.com/haruaki07/phosphor-svelte)\
[Undraw](https://undraw.co/)\
[gh-pages](https://github.com/tschaub/gh-pages)\
[svelte-inview](https://github.com/maciekgrzybek/svelte-inview)\
[Unsplash](https://unsplash.com/)\
[Google Fonts](https://fonts.google.com/)\
