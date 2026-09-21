/* Тест по темам 1.1–1.3 · справочник по Python. Файл собран скриптом — руками не править.

   Верные ответы здесь дважды: хешами SHA-256 от "СОЛЬ|вопрос|вариант"
   в самих вопросах и вместе с разбором в SECRET — JSON, перемешанный XOR
   с SHA-256 от соли, в base64. Разбор показывается после отправки работы.
   Это барьер от беглого чтения исходника, а не защита: вариантов мало,
   перебрать их в консоли можно. */

const QUIZ = {
 "id": "py-test-t13",
 "title": "Темы 1.1–1.3 · переменные, типы данных, print()",
 "minutes": 20,
 "salt": "py-t13-2026-sep",
 "context": "Код в вопросах — целиком файл <code>main.py</code>, запущенный командой <code>python main.py</code> на Python 3.12. Если в варианте названа ошибка, имеется в виду, что программа на ней остановилась.",
 "grades": [
  {
   "min": 20,
   "mark": 5,
   "label": "отлично"
  },
  {
   "min": 15,
   "mark": 4,
   "label": "хорошо"
  },
  {
   "min": 10,
   "mark": 3,
   "label": "удовлетворительно"
  },
  {
   "min": 0,
   "mark": 2,
   "label": "неудовлетворительно"
  }
 ],
 "chapters": {
  "1.1": {
   "title": "Переменные в программировании",
   "url": "../../temy/01-peremennye/index.html"
  },
  "1.2": {
   "title": "Типы данных в Python",
   "url": "../../temy/02-tipy-dannyh/index.html"
  },
  "1.3": {
   "title": "Функция print(): вывод данных",
   "url": "../../temy/03-print/index.html"
  }
 },
 "questions": [
  {
   "id": "q01",
   "topic": "1.1 · присваивание",
   "type": "single",
   "text": "Что делает знак <code>=</code> в строке <code>total = price * 2</code>?",
   "options": [
    "Вычисляет правую часть и записывает результат в имя слева",
    "Проверяет, равны ли друг другу левая и правая части",
    "Связывает имена: изменится price — изменится и total",
    "Объявляет постоянную, которую нельзя заменить позже"
   ],
   "key": [
    "ca908f6f648b3df9"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q02",
   "topic": "1.1 · значение копируется",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>10</code>",
    "<code>3</code>",
    "<code>13</code>",
    "<code>NameError</code>"
   ],
   "code": "a = 10\nb = a\na = 3\nprint(b)",
   "key": [
    "9644d02e53d00a33"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q03",
   "topic": "1.1 · имена",
   "type": "multi",
   "text": "Какие имена можно дать переменной в Python? Отметьте все.",
   "options": [
    "<code>day_2</code>",
    "<code>2day</code>",
    "<code>sum cost</code>",
    "<code>total_cost</code>",
    "<code>for</code>"
   ],
   "key": [
    "3b0f1cd9c5d5ba0b",
    "ba056530a8d79ea1"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q04",
   "topic": "1.1 · составное присваивание",
   "type": "single",
   "text": "Что напечатает программа? Обратите внимание на порядок строк.",
   "options": [
    "<code>Результат: 23</code>",
    "<code>Результат: 28</code>",
    "<code>Результат: 18</code>",
    "<code>Результат: 14</code>"
   ],
   "code": "summ = 2 + 3 + 4\nsumm *= 2\nsumm += 5\nprint(\"Результат:\", summ)",
   "key": [
    "72ecbc4f50e27f0c"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q05",
   "topic": "1.1 · ошибки",
   "type": "single",
   "text": "Что произойдёт при запуске?",
   "options": [
    "Печатает «Считаем...», затем <code>NameError</code>",
    "Печатает «Считаем...» и <code>9</code>",
    "Печатает «Считаем...» и <code>0</code>",
    "Ничего не печатает: <code>SyntaxError</code>"
   ],
   "code": "print(\"Считаем...\")\nprint(summ)\nsumm = 2 + 3 + 4",
   "key": [
    "27b78cfe7e0adeee"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q06",
   "topic": "1.1 · ошибки",
   "type": "single",
   "text": "Что произойдёт при запуске?",
   "options": [
    "<code>SyntaxError</code>: слева от = стоит значение, а не имя",
    "<code>NameError</code>: переменная x ещё не создана",
    "<code>TypeError</code>: числу нельзя присвоить значение",
    "Напечатает <code>5</code>: присваивание сработает"
   ],
   "code": "5 = x\nprint(x)",
   "key": [
    "06566c151e88b2dc"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q07",
   "topic": "1.1 · встроенные имена",
   "type": "single",
   "text": "Что произойдёт при запуске?",
   "options": [
    "<code>TypeError</code>: строку нельзя вызвать",
    "<code>SyntaxError</code>: print — ключевое слово",
    "Напечатает <code>Итого</code> и завершится",
    "Напечатает <code>текст</code> и завершится"
   ],
   "code": "print = \"текст\"\nprint(\"Итого\")",
   "key": [
    "08ff63ec4cb80dcc"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q08",
   "topic": "1.1 · деление при присваивании",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>5.0</code>",
    "<code>5</code>",
    "<code>2</code>",
    "<code>0</code>"
   ],
   "code": "x = 10\nx /= 2\nprint(x)",
   "key": [
    "c3da024fddc7bf6f"
   ],
   "chapters": [
    "1.1"
   ]
  },
  {
   "id": "q09",
   "topic": "1.2 · type()",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>&lt;class 'float'&gt;</code>",
    "<code>&lt;class 'int'&gt;</code>",
    "<code>&lt;class 'str'&gt;</code>",
    "<code>10.0</code>"
   ],
   "code": "x = 10.0\nprint(type(x))",
   "key": [
    "34a0dffc27c3a8b9"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q10",
   "topic": "1.2 · строка и число",
   "type": "single",
   "text": "Что произойдёт при запуске?",
   "options": [
    "<code>TypeError</code>: строку и число не сложить",
    "<code>ValueError</code>: в строке не число",
    "Напечатает <code>20</code> и завершится",
    "Напечатает <code>1010</code> и завершится"
   ],
   "code": "count = \"10\"\nprint(count + 10)",
   "key": [
    "c69d482a54104c8d"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q11",
   "topic": "1.2 · преобразование",
   "type": "single",
   "text": "Что произойдёт при запуске?",
   "options": [
    "<code>ValueError</code>: в строке не целое число",
    "<code>TypeError</code>: int() не принимает строки",
    "Напечатает <code>3</code>: дробь отброшена",
    "Напечатает <code>4</code>: число округлено"
   ],
   "code": "price = \"3.5\"\nprint(int(price))",
   "key": [
    "f4804ef31fec5929"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q12",
   "topic": "1.2 · операции со строками",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>55</code>, затем <code>555</code>",
    "<code>10</code>, затем <code>15</code>",
    "<code>55</code>, затем <code>15</code>",
    "<code>10</code>, затем <code>TypeError</code>"
   ],
   "code": "x = \"5\"\nprint(x + x)\nprint(x * 3)",
   "key": [
    "990f12b988751e38"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q13",
   "topic": "1.2 · int() и дробная часть",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>3 -3</code>",
    "<code>4 -4</code>",
    "<code>3 -4</code>",
    "<code>4 -3</code>"
   ],
   "code": "print(int(3.99), int(-3.7))",
   "key": [
    "c1d9f534630cfb37"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q14",
   "topic": "1.2 · bool",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>True &lt;class 'bool'&gt;</code>",
    "<code>True &lt;class 'str'&gt;</code>",
    "<code>10 &gt; 3 &lt;class 'str'&gt;</code>",
    "<code>1 &lt;class 'int'&gt;</code>"
   ],
   "code": "is_adult = 10 > 3\nprint(is_adult, type(is_adult))",
   "key": [
    "3ece737633f8474c"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q15",
   "topic": "1.2 · деление",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>3.5 3 1</code>",
    "<code>3 3 1</code>",
    "<code>3.5 3.5 1</code>",
    "<code>3.5 3 0.5</code>"
   ],
   "code": "print(7 / 2, 7 // 2, 7 % 2)",
   "key": [
    "5583ffd905134f99"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q16",
   "topic": "1.2 · склейка и len()",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>HelloWorld</code>, затем <code>11</code>",
    "<code>Hello World</code>, затем <code>11</code>",
    "<code>HelloWorld</code>, затем <code>10</code>",
    "<code>Hello World</code>, затем <code>2</code>"
   ],
   "code": "first = \"Hello\"\nsecond = \"World\"\nprint(first + second)\nprint(len(first + \" \" + second))",
   "key": [
    "9a00d95b602a473e"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q17",
   "topic": "1.2 · float() и int()",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>7.0</code>, затем <code>3</code>",
    "<code>7</code>, затем <code>4</code>",
    "<code>3.53.5</code>, затем <code>3</code>",
    "<code>7.0</code>, затем <code>ValueError</code>"
   ],
   "code": "price = float(\"3.5\")\nprint(price * 2)\nprint(int(float(\"3.5\")))",
   "key": [
    "b51f4b6e284e29e1"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q18",
   "topic": "1.2 · типы",
   "type": "multi",
   "text": "Отметьте <b>все</b> верные утверждения.",
   "options": [
    "Тип переменной объявляют заранее, до первого присваивания",
    "Выражение <code>10 &gt; 3</code> даёт значение типа bool",
    "<code>None</code> означает отсутствие значения и не равно нулю",
    "<code>10 / 2</code> даёт целое число 5, так как делится нацело",
    "Одной переменной можно по очереди присвоить int и str"
   ],
   "key": [
    "03af703054af26be",
    "7a219e73614d426c",
    "de2b2b671c1f98aa"
   ],
   "chapters": [
    "1.2"
   ]
  },
  {
   "id": "q19",
   "topic": "1.3 · несколько значений",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>Имя: Alice Возраст: 25</code>",
    "<code>Имя:Alice Возраст:25</code>",
    "<code>Имя:, Alice, Возраст:, 25</code>",
    "<code>Имя: name Возраст: age</code>"
   ],
   "code": "name = \"Alice\"\nage = 25\nprint(\"Имя:\", name, \"Возраст:\", age)",
   "key": [
    "752c7816ba5e17e7"
   ],
   "chapters": [
    "1.3"
   ]
  },
  {
   "id": "q20",
   "topic": "1.3 · f-строки",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>Возраст: {age}</code>",
    "<code>Возраст: 25</code>",
    "<code>NameError</code>: нет имени {age}",
    "<code>SyntaxError</code>: скобки в строке"
   ],
   "code": "age = 25\nprint(\"Возраст: {age}\")",
   "key": [
    "80b8463eb1ea5238"
   ],
   "chapters": [
    "1.3"
   ]
  },
  {
   "id": "q21",
   "topic": "1.3 · print() ничего не возвращает",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>4</code>, затем <code>None</code>",
    "<code>4</code>, затем <code>4</code>",
    "<code>4</code>, затем <code>NameError</code>",
    "<code>None</code>, затем <code>None</code>"
   ],
   "code": "x = print(2 + 2)\nprint(x)",
   "key": [
    "b0e42a0e509f8aea"
   ],
   "chapters": [
    "1.3"
   ]
  },
  {
   "id": "q22",
   "topic": "1.3 · запятая и плюс",
   "type": "multi",
   "text": "Какие строки выполнятся <b>без ошибки</b>? Отметьте все.",
   "options": [
    "<code>print(\"Цена:\", 100)</code>",
    "<code>print(\"Цена: \" + 100)</code>",
    "<code>print(\"Цена: \" + str(100))</code>",
    "<code>print(f\"Цена: {100}\")</code>",
    "<code>Print(\"Цена:\", 100)</code>"
   ],
   "key": [
    "21489f86f44c3cb2",
    "30d32c8e7aa09f7a",
    "8c1f8118c40ce5f3"
   ],
   "chapters": [
    "1.3"
   ]
  },
  {
   "id": "q23",
   "topic": "1.3 · текст и значение",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>name Alice</code>",
    "<code>Alice Alice</code>",
    "<code>name name</code>",
    "<code>\"name\" Alice</code>"
   ],
   "code": "name = \"Alice\"\nprint(\"name\", name)",
   "key": [
    "77e1bfc91781baec"
   ],
   "chapters": [
    "1.3"
   ]
  },
  {
   "id": "q24",
   "topic": "1.3 · формат .2f",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>Итого: 4395.83 руб.</code>, затем <code>4395.8333</code>",
    "<code>Итого: 4395.83 руб.</code>, затем <code>4395.83</code>",
    "<code>Итого: 4395.8333 руб.</code>, затем <code>4395.8333</code>",
    "<code>Итого: {total:.2f} руб.</code>, затем <code>4395.8333</code>"
   ],
   "code": "total = 4395.8333\nprint(f\"Итого: {total:.2f} руб.\")\nprint(total)",
   "key": [
    "f048356af6a320b4"
   ],
   "chapters": [
    "1.3"
   ]
  },
  {
   "id": "q25",
   "topic": "1.3 · print()",
   "type": "multi",
   "text": "Отметьте <b>все</b> верные утверждения о <code>print()</code>.",
   "options": [
    "Вызов <code>print()</code> без аргументов выводит пустую строку",
    "Кавычки строки выводятся на экран вместе с текстом",
    "print() сам приводит числа к строковому виду перед выводом",
    "Опечатка <code>print(\"Привет)</code> даёт SyntaxError",
    "Отладочные print() оставляют в готовой программе"
   ],
   "key": [
    "08624403b3a6ae7e",
    "5b1966b399c2b3d1",
    "74beb04cd0763b79"
   ],
   "chapters": [
    "1.3"
   ]
  }
 ]
};

const SECRET = "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";

let SECRET_CACHE = null;
async function secretData() {
  if (SECRET_CACHE) return SECRET_CACHE;
  const pad = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(QUIZ.salt)));
  const bytes = Uint8Array.from(atob(SECRET), c => c.charCodeAt(0)).map((b, i) => b ^ pad[i % pad.length]);
  SECRET_CACHE = JSON.parse(new TextDecoder().decode(bytes));
  return SECRET_CACHE;
}

async function shortHash(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}

/* Выбранные варианты (номера в исходном порядке) должны точно совпасть с ключом. */
async function isCorrect(question, picked) {
  const key = question.key || [];
  if (!picked || picked.length !== key.length) return false;
  const hashes = await Promise.all(picked.map(i => shortHash(`${QUIZ.salt}|${question.id}|${i}`)));
  return hashes.every(h => key.includes(h)) && new Set(hashes).size === hashes.length;
}

function gradeFor(score) {
  return QUIZ.grades.find(g => score >= g.min) || QUIZ.grades[QUIZ.grades.length - 1];
}
