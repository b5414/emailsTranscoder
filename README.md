# [Emails transcoder](https://github.com/b5414/emailsTranscoder/blob/master/source.js "source.js file")

Скрипт создан для передачи меньших данных, чем могло бы передаваться без него.

# Использвание

В первую очередь - подключаем source.js

Во вторую - берем, из инпута или из somewhere, емаил адресса, затем:
```javascript
const outputin = et.encode(emailsFromInput);
// outputin => ajax
```

Четвертый шаг, уже на другом сайде - полученые данные засовываем в декодер:
```javascript
// receive <= ajax
const outputin = et.decode(emailsCoded);
```

# Что делает [et.encode]

Преобразует данные: 
> ник@домен.ком ник2@домен.ком

В следующий объект
> { домен.ком: [ник, ник2] } 

### Параметры [et.encode]

```javascript
et.encode(string[, delimiter, arrForDelete]);
```
**delimiter** — Разделитель емаил адресов, по умолчанию: '\n'

**arrForDelete** — Удаляет \n \t и любые на ваш выбор знаки (except delimiter, of course), по умолчанию: ['\t', '\n', ',']

## Использование, тест

Для теста, можно нажать следующее, с подключенным source.js ессесено

```javascript
(async()=>{
	const emailsFromInput = 'ivanCompany@icic.ru\nsteve@gmail.com\n  \nspace\n@\n@55\n54@\n@53@\n52@false\n51@undefined\nnorth@gmail.com\ndanil@gmail.com\nrefao@noreply.com\nivanCompany@gmail.com\nanya@icic.ru';
	console.log(0, emailsFromInput.split('\n'));
	
	const emailsCoded = et.encode(emailsFromInput);
	const emailsDecoded = et.decode(emailsCoded);
	console.log(1, emailsCoded);
	console.log(2, emailsDecoded);
})();
```

Или просто запустите в ноде любой файл.js :) 
