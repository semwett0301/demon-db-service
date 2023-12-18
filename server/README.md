# Серверная часть приложения

## Структура проекта
- ***resources*** - мета-информация для запуска проекта
- ***config*** - конфигурация фильтров
- ***controllers*** - контроллеры MVC
- ***dto*** - структуры данных, пересылаемые по HTTP
- ***entity*** - структуры данных, описывающие сущности БД
- ***exceptions*** - кастомные исключения
- ***repository*** - JPA репозитории
- ***service*** - сервисный слой приложения
- ***interfaces*** - интерфейсы сервисов

## Скрипт запуска БД
- Для работы БД потребуется установить Docker (docker-compose)
- Далее: ```docker-compose up```
- Доступ в БД осуществляется по кредам, указанным в [docker-compose.yml](./docker-compose.yml)
- В папке [changelog](./src/main/resources/db/changelog) лежит конфигурация миграции данных

## Скрипт запуска приложения
- Добавить текущий проект в Gradle
- ```./gradlew bootRun```
- После запуска приложение будет доступно по адресу ```localhost:7000```

## Swagger UI
- Доступен на [```http://localhost:7000/swagger-ui/index.html```](http://localhost:7000/swagger-ui/index.html)
- Получить в виде JSON можно получить на [```http://localhost:7000/v3/api-docs/```](http://localhost:7000/v3/api-docs/)

