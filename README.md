# unit-test-angular
unit-test

шаги создания приложения


https://github.com/ - создаем новый проект и клонируем его в visual studio code (создание репозитория, скопировать ссылку в git  вставить в VSC)
API:
1) Create api for angular project
2) download .net если уже установлен, команда проверки версии:
dotnet --list-sdks 
3) Если не установлены - In VSC go to "extensions" to choose: C# C# Dev Kit NuGet Gallery 
cmd + shift + p
4) создание и запуск api terminal: 
- dotnet new webapi -o Api 
- cd Api 
- dotnet watch run

FRONTEND

5) npm install -g @angular/cli                  это глобально
npm install @angular/cli --save-dev             это локально Установка 17 версии
6) ng new client
7) ng test                                      - протестировать
- в app.component.spec.ts есть 3 теста из коробки


TEST
8) Создаем single.service.ts &  single.service.spec.ts 
- где будут простые тесты для примера проверки корректности работы коды в целом, напр:
- expect(service).not.toBeTruthy(); 
- ответ: Expected SingleService({  }) not to be truthy.
9) Тестирование зависимостей
- Проверка взаимодействия между сервисами
