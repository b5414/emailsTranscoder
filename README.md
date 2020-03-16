# [Emails transcoder](https://github.com/b5414/emailsTranscoder/blob/master/source.js "source.js file")

Скрипт создан для передачи меньших данных, чем могло бы потребоваться без него.

# Использвание

В первую очередь - подключаем source.js
Во вторую - берем, из инпута или из somewhere, емаил адресса, затем:
```javascript
const data_for_export = et.encode(emailsFromInput);
```

Четвертый шаг уже на другом сайде, полученые данные засовываем в декодер:
```javascript
const outputin = et.decode(emailsCoded);
```

## Использование

Для теста, можно нажать следующее, с подключенным source.js

```javascript
(async()=>{
	const emailsFromInput = 'ivanCompany@icic.ru\nsteve@gmail.com\n  \nspace\n@\n@55\n54@\n@53@\n52@false\n51@undefined\nnorth@gmail.com\ndanil@gmail.com\nrefao@noreply.com\nivanCompany@gmail.com\nanya@icic.ru';
	const emailsCoded = et.encode(emailsFromInput);
	const emailsDecoded = et.decode(emailsCoded);
	console.log(0, emailsFromInput.split('\n'));
	console.log(1, emailsCoded);
	console.log(2, emailsDecoded);
})();
```
