# taskslist

## Концепция
Три формы ввода реализованы через keep-alaive dynamic components.
|Родитель
|___Верхние табы
|
|___Стрелки и сохранить
|
|___Компонент форм

При переходе по компонентам в хуке activated прокидываем метод формы в родительский компонент, таким образом находясь на текущей вкладке кнопка сохранить вызывает метод сохранения этой же вкладки.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
