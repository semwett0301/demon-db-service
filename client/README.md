# Client-side Application

## Project Structure
1. ***components*** - Smart components (composed of atomic ones)
2. ***panels*** - Application pages
3. ***atom*** - Atomic components
4. ***api*** - Interaction with server-side API
5. ***types*** - Types for API and internal application
6. ***context*** - React application context
7. ***styles*** - Global styles

In App.tsx, global styles are connected and context is initialized

## Linter Configuration for WebStorm
1. Install dependencies via ```npm i```
2. Go to Eslint settings tab and enable the following configuration:\
![](../img/eslint.png)
3. Go to Prettier tab and set the following configuration:\
![](../img/prettier.png)
4. Go to Stylelint tab and set the following configuration:\
![](../img/stylelint.png)
5. For manual running of eslint & prettier or stylelint, use the corresponding command:
```
npm run lint:fix
npm run lint:styles:fix
```


## Application Startup Scripts
- Install dependencies: ```npm i```
- Run in development mode: ```npm start```
- Build application: ```npm run build```

## Storybook Startup Scripts
- Install dependencies: ```npm i```
- Run in development mode: ```npm run storybook```
- Build Storybook: ```npm run build-storybook```

#### Project build is done through react-scripts (webpack)
