/* Тест по темам 1.1–1.3 · справочник по Python. Файл собран скриптом — руками не править.

   Верные ответы здесь только хешами: SHA-256 от "СОЛЬ|вопрос|вариант".
   Это барьер от беглого чтения исходника, а не защита: вариантов мало,
   перебрать их в консоли можно. Разбора ответов в публичных файлах нет. */

const QUIZ = {
 "id": "py-test-t13",
 "title": "Темы 1.1–1.3 · переменные, типы данных, print()",
 "minutes": 20,
 "salt": "py-t13-2026-sep",
 "context": "Код в вопросах — целиком файл <code>main.py</code>, запущенный командой <code>python main.py</code> на Python 3.12. Если в варианте названа ошибка, имеется в виду, что программа на ней остановилась.",
 "grades": [
  {
   "min": 23,
   "mark": 5,
   "label": "отлично"
  },
  {
   "min": 19,
   "mark": 4,
   "label": "хорошо"
  },
  {
   "min": 14,
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
   "text": "Какие имена переменных <b>допустимы</b> в Python? Отметьте все.",
   "options": [
    "<code>day_2</code>",
    "<code>2day</code>",
    "<code>total-cost</code>",
    "<code>Total</code>",
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
    "Ничего не печатается: <code>SyntaxError</code>, файл не запустится",
    "Печатает «старт», затем <code>SyntaxError</code> во 2-й строке",
    "Печатает «старт», затем <code>NameError</code>: x не определена",
    "Печатает «старт» и <code>5</code>: присваивание сработает"
   ],
   "code": "print(\"старт\")\n5 = x\nprint(x)",
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
   "topic": "1.2 · запятая вместо точки",
   "type": "single",
   "text": "Студент записал число через запятую. Что напечатает программа?",
   "options": [
    "<code>&lt;class 'tuple'&gt;</code>",
    "<code>&lt;class 'float'&gt;</code>",
    "<code>SyntaxError</code>",
    "<code>&lt;class 'int'&gt;</code>"
   ],
   "code": "x = 3,14\nprint(type(x))",
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
   "topic": "1.2 · float",
   "type": "single",
   "text": "Что напечатает программа?",
   "options": [
    "<code>False</code>, затем <code>5.0</code>",
    "<code>True</code>, затем <code>5.0</code>",
    "<code>True</code>, затем <code>5</code>",
    "<code>False</code>, затем <code>5</code>"
   ],
   "code": "print(0.1 + 0.2 == 0.3)\nprint(2 + 3.0)",
   "key": [
    "9a00d95b602a473e"
   ]
  },
  {
   "id": "q17",
   "topic": "1.2 · ввод",
   "type": "single",
   "text": "Пользователь ввёл <code>17</code>. Что произойдёт?",
   "options": [
    "<code>TypeError</code>: input() вернул строку",
    "Напечатает <code>Через год: 18</code>",
    "Напечатает <code>Через год: 171</code>",
    "<code>ValueError</code>: введено не число"
   ],
   "code": "age = input(\"Ваш возраст: \")\nprint(\"Через год:\", age + 1)",
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
   "text": "Переменная <code>name</code> в программе не создавалась. Что произойдёт?",
   "options": [
    "Печатает <code>name</code>, затем <code>NameError</code>",
    "Дважды печатает <code>name</code>",
    "<code>NameError</code> уже в первой строке",
    "Печатает <code>name</code> и пустую строку"
   ],
   "code": "print(\"name\")\nprint(name)",
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
