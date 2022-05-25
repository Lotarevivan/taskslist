# taskslist

## Концепция
Три формы ввода реализованы через keep-alaive dynamic components.<br />
|Родитель<br />
|___Верхние табы<br />
|<br />
|___Стрелки и сохранить<br />
|<br />
|___Компонент форм<br />

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
