# turbo-giggle
В этом проекте будет отборная солянка из технологий для их закрепления.
<p align="center">
   <img src="https://pbs.twimg.com/media/ES0MiVVXkAE_v-f?format=jpg&name=small" width="400" alt="Kek" />
</p>

## Цель

Научиться/разобраться/закрепить технологию для дальнейшего ее использования.

## TODO
- [x] настроить и подключить typescript
- [x] настроить и подключить apollo
- [x] Получить первую  сущность (любую)
- [x] научиться получать типы для запросов
- [x] добавить роутинг
- [x] добавить layout
- [ ] добавить redux
- [ ] настроить для пользователей разных ролей apollo
- [ ] сделать страницу с входом для пользователя [видос](https://www.youtube.com/watch?v=LXGYUN5_Nb4) 
- [ ] добавить header(инфа о юзере и название страницы) сверху  в layout
- [ ] Подключить формы (formik) [пример есть тут и многа чего там еще есть ](https://codesandbox.io/)
- [ ] сделать тему и настроить babel [ant.design](https://ant.design/docs/react/use-in-typescript)
- [ ] настроить webpack
- [ ] засунуть все это в докер
- [ ] настроить свой [ant design](https://medium.com/@hydrock/%D0%BA%D0%B0%D0%BA-%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-ant-design-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-react-webpack-%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D1%8F%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B8%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-b3d90958eaec) [пример](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.tsx)
- [x] сделать  layout [вот](https://v1.pro.ant.design/docs/router-and-nav) и  роутинг нормальный в папочке как в ссылке [ant.design](https://pro.ant.design/docs/router-and-nav).

### Полезные ссылки 
-  https://codesandbox.io/
 - https://strapi.io/blog/build-a-blog-with-react-strapi-and-apollo
 - https://www.leighhalliday.com/generating-types-apollo
 - https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output
 - https://medium.com/open-graphql/automatically-generate-typescript-definitions-for-graphql-queries-with-apollo-codegen-e73eae72b561
 - https://atheros.ai/blog/generate-javascript-static-types-from-graphql-typescript-and-flow
### команды для типов
yarn run apollo schema:download --endpoint=http://localhost:1337/graphql schema.json
 yarn run apollo codegen:generate --localSchemaFile=schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types


yarn run apollo codegen:generate --includes=src/**/*.graphql --localSchemaFile=schema.json --target=typescript --tagName=gql --addTypename --globalTypesFile=operation-result-types.ts

yarn run apollo codegen:generate introspect-schema http://localhost:1337/graphql --output schema.json
 yarn run apollo schema:download --endpoint=http://localhost:1337/graphql graphql-schema.json
 yarn run apollo codegen:generate --localSchemaFile=schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types
 https://www.youtube.com/watch?v=ZYhKsX9Alic
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
- ant
- apollo
- postCSS(css-in-js)

