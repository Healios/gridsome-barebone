# Typescript / Tailwind CSS Starter for Gridsome

This is a starter template for Gridsome using Typescript & Tailwind CSS. It uses **eslint** and **typescript** for static code analisys. In order to integrate these tools with Visual Studio Code, you'll need to install **ESLint** and **Vetur** extensions for the editor. Furthermore Tailwind CSS has been installed and to integrate this framework with VS Code, you'll need to install the **TailwindCSS Intellisense** extension.

### 1. Install Gridsome CLI tool if you don't have

`yarn global add @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create project-name https://github.com/Healios/gridsome-barebone.git` to install this starter
2. `cd project-name` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### 3. Static Code Analysis - Command Line

1. edit the `.eslintrc.json` file and add your favorites rules from [`eslint`](https://eslint.org/docs/rules/), [`typescript`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules) and [`vue`](https://vuejs.github.io/eslint-plugin-vue/rules/).
2. run `yarn lint:check` to see static analysis result
3. run `yarn lint:fix` to fix errors found by `eslint`

### 4. Static Code Analysis - Visual Studio Code

As mentioned before, in order to lint your Typescript code in `*.vue` *Single File Components* with *vscode* you'll need to install [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [`Vetur`](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extensions for the editor.

Use the links above to install the extensions, or follow the steps below:

1. Open your vscode, type `CTRL + SHIFT + X`
2. Search for **ESLint**
3. Select and install the extension
4. Do same thing for **Vetur** extension

### 5. Tailwind CSS - Configuration

In order to extend or replace default Tailwind CSS values, edit the tailwind.config.js file. 

### 6. Useful links

* [Gridsome docs](https://gridsome.org/docs/)
* [Typescript docs](https://www.typescriptlang.org/docs/)
* [ESLint docs](https://eslint.org/)
* [ESLint rules](https://eslint.org/docs/rules/)
* [Typescript rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
* [Vue rules](https://vuejs.github.io/eslint-plugin-vue/rules/)
* [ESLint extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Vetur extension for VSCode](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* [Tailwind CSS extension for VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vue I18n](https://kazupon.github.io/vue-i18n/)