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
