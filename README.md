# turbo-giggle
В этом проекте будет отборная солянка из технологий для их закрепления.
<p align="center">
   <img src="https://pbs.twimg.com/media/ES0MiVVXkAE_v-f?format=jpg&name=small" width="400" alt="Kek" />
</p>
## Цель

Научиться/разобраться/закрепить технологию для дальнейшего ее использования.

## TODO
+  подключить strapi
+ подключить graphql и apollo
+ Получить сущность (любую)
+ Подлюкчить формы (formik)
+ сделать тему и настроить babel https://ant.design/docs/react/use-in-typescript
+ настроить webpack
+ засунуть все это в докер

### Полезные ссылки 
https://strapi.io/blog/build-a-blog-with-react-strapi-and-apollo
 https://www.leighhalliday.com/generating-types-apollo
 https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output
 https://medium.com/open-graphql/automatically-generate-typescript-definitions-for-graphql-queries-with-apollo-codegen-e73eae72b561
 https://atheros.ai/blog/generate-javascript-static-types-from-graphql-typescript-and-flow
### команды для типов
yarn run apollo schema:download --endpoint=http://localhost:1337/graphql schema.json
 yarn run apollo codegen:generate --localSchemaFile=schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types


yarn run apollo codegen:generate --includes=src/**/*.graphql --localSchemaFile=schema.json --target=typescript --tagName=gql --addTypename --globalTypesFile=operation-result-types.ts

yarn run apollo codegen:generate introspect-schema http://localhost:1337/graphql --output schema.json
 yarn run apollo schema:download --endpoint=http://localhost:1337/graphql graphql-schema.json
 yarn run apollo codegen:generate --localSchemaFile=schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types
## Краткое содержание

Нужно создать приложение задачник с несколькими ролями доступа.

## Обзор системы

### Обзор вариантов использований

Стартовая страница - список задач с возможностью сортировки по имени пользователя, email и статусу. Вывод задач нужно сделать страницами по 3 штуки (с пагинацией). Видеть список задач и создавать новые может любой посетитель без регистрации.

Сделать вход для администратора . Администратор имеет возможность редактировать текст задачи и поставить галочку о выполнении. Выполненные задачи в общем списке выводятся с соответствующей отметкой.

### Описание вариантов использования

admin: может редактировать удалять все задачи.
user: может редактирвать удалять только свои задачи.
public: может просматривать задачи.


### Используемые технологии (Дополнительные требования)
- typescript
- react
- graphql
- strapi
- redux or effector
- jest
- uikit
- apollo
- postCSS(css-in-js)



In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

