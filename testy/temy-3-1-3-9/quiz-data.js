/* Тест ДУП.02 по темам 3.1–3.9, кроме 3.7 справочника по Python. Файл собран скриптом — руками не править.

   Ключи и разбор лежат в SECRET: JSON, перемешанный XOR с SHA-256 от соли,
   в base64. Это барьер от беглого чтения исходника, а не защита. */

const QUIZ = {
 "id": "dup02-test-t39-no37",
 "prefix": "PY39",
 "title": "Темы 3.1–3.9, кроме 3.7 · коллекции, циклы и срезы",
 "minutes": 40,
 "salt": "dup02-py39-no37-2026-nov",
 "context": "Во всех заданиях код лежит в файле main.py и запускается командой python main.py, Python 3.12. На картинках терминала синим показано то, что набрал пользователь. Карточки перетаскиваются мышью или пальцем; можно и без перетаскивания: нажмите карточку, затем место, куда её поставить.",
 "grades": [
  {
   "min": 17,
   "mark": 5,
   "label": "отлично"
  },
  {
   "min": 13,
   "mark": 4,
   "label": "хорошо"
  },
  {
   "min": 9,
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
  "3.1": {
   "title": "Коллекции в Python",
   "url": "../../temy/24-kollekcii/index.html"
  },
  "3.2": {
   "title": "Цикл while",
   "url": "../../temy/20-while/index.html"
  },
  "3.3": {
   "title": "Цикл for in",
   "url": "../../temy/21-for-in/index.html"
  },
  "3.4": {
   "title": "Функция range()",
   "url": "../../temy/22-range/index.html"
  },
  "3.5": {
   "title": "Практика for in",
   "url": "../../temy/23-praktika-for/index.html"
  },
  "3.6": {
   "title": "Перебор списка по индексам",
   "url": "../../temy/28-indeksy-spiska/index.html"
  },
  "3.8": {
   "title": "Срезы",
   "url": "../../temy/31-srezy/index.html"
  },
  "3.9": {
   "title": "Объект slice",
   "url": "../../temy/54-imenovannye-srezy/index.html"
  }
 },
 "questions": [
  {
   "id": "q01",
   "topic": "3.1 · виды коллекций",
   "type": "sort",
   "text": "Четыре переменные созданы независимо друг от друга.",
   "task": "Распределите записи по типу созданной коллекции.",
   "items": [
    "<code>a = [2, 4]</code>",
    "<code>b = (2, 4)</code>",
    "<code>c = {2, 4}</code>",
    "<code>d = {\"a\": 2, \"b\": 4}</code>"
   ],
   "buckets": [
    "Список (list)",
    "Кортеж (tuple)",
    "Множество (set)",
    "Словарь (dict)"
   ],
   "chapters": [
    "3.1"
   ]
  },
  {
   "id": "q02",
   "topic": "3.1 · длина и отрицательный индекс",
   "type": "single",
   "text": "В списке хранятся четыре значения температуры.",
   "task": "Выберите вывод программы.",
   "code": "temps = [8, 12, 6, 15]\nprint(len(temps), temps[-2])",
   "options": [
    "<code>4 6</code>",
    "<code>4 12</code>",
    "<code>3 6</code>",
    "<code>4 15</code>"
   ],
   "chapters": [
    "3.1"
   ]
  },
  {
   "id": "q03",
   "topic": "3.2 · проверка перед входом в while",
   "type": "number",
   "text": "Счётчик изменяется только внутри цикла.",
   "task": "Введите число, которое напечатает программа.",
   "code": "n = 5\ncount = 0\nwhile n < 5:\n    count += 1\n    n += 1\nprint(count)",
   "chapters": [
    "3.2"
   ]
  },
  {
   "id": "q04",
   "topic": "3.2 · continue и счётчик",
   "type": "single",
   "text": "Программа пропускает одно из значений счётчика.",
   "task": "Выберите последовательность чисел в выводе. Варианты записаны в одну строку.",
   "code": "n = 0\nwhile n < 5:\n    n += 1\n    if n == 3:\n        continue\n    print(n, end=\" \")",
   "options": [
    "<code>1 2 4 5</code>",
    "<code>1 2 3 4 5</code>",
    "<code>0 1 2 4</code>",
    "<code>1 2 4</code>"
   ],
   "chapters": [
    "3.2"
   ]
  },
  {
   "id": "q05",
   "topic": "3.2 · break и else цикла",
   "type": "multi",
   "text": "При первом совпадении программа выходит из цикла.",
   "task": "Отметьте все верные утверждения о выполнении программы.",
   "code": "n = 1\nwhile n < 6:\n    if n == 3:\n        break\n    n += 1\nelse:\n    print(\"Готово\")\nprint(n)",
   "options": [
    "Будет напечатано число <code>3</code>.",
    "Будет напечатано слово «Готово».",
    "После цикла <code>n == 6</code>.",
    "Из-за <code>break</code> блок <code>else</code> не выполнится."
   ],
   "chapters": [
    "3.2"
   ]
  },
  {
   "id": "q06",
   "topic": "3.3 · перебор строки",
   "type": "single",
   "text": "Цикл перебирает строку, в которой есть повторяющийся символ.",
   "task": "Выберите вывод программы.",
   "code": "word = \"тест\"\nresult = \"\"\nfor letter in word:\n    if letter != \"т\":\n        result += letter\nprint(result)",
   "options": [
    "<code>ес</code>",
    "<code>ест</code>",
    "<code>тес</code>",
    "<code>тест</code>"
   ],
   "chapters": [
    "3.3"
   ]
  },
  {
   "id": "q07",
   "topic": "3.3 · break, continue и else",
   "type": "sort",
   "text": "В каждой карточке — отдельный цикл. Отступы обозначают тело цикла.",
   "task": "Распределите программы: напечатается «Готово» или не напечатается.",
   "items": [
    "<code>for x in [2, 4]:\n    if x == 4:\n        break\nelse:\n    print(\"Готово\")</code>",
    "<code>for x in [2, 4]:\n    if x == 4:\n        continue\nelse:\n    print(\"Готово\")</code>",
    "<code>for x in []:\n    break\nelse:\n    print(\"Готово\")</code>"
   ],
   "buckets": [
    "Напечатается",
    "Не напечатается"
   ],
   "chapters": [
    "3.3"
   ]
  },
  {
   "id": "q08",
   "topic": "3.4 · значения range",
   "type": "slots",
   "text": "Каждый диапазон преобразовали в список вызовом list().",
   "task": "Сопоставьте диапазон с результатом. Две карточки лишние.",
   "chips": [
    "[0, 1, 2, 3]",
    "[2, 4, 6]",
    "[7, 5, 3]",
    "[]",
    "[0, 1, 2, 3, 4]",
    "[7, 5, 3, 2]"
   ],
   "slots": [
    "range(4)",
    "range(2, 7, 2)",
    "range(7, 2, -2)",
    "range(2, 7, -2)"
   ],
   "chapters": [
    "3.4"
   ]
  },
  {
   "id": "q09",
   "topic": "3.4 · нулевой шаг",
   "type": "line",
   "text": "В программе одна строка вызывает исключение при выполнении.",
   "task": "Нажмите строку, на которой выполнение остановится с ошибкой.",
   "code": "start = 2\nstep = 0\nnumbers = range(start, 8, step)\nprint(list(numbers))",
   "chapters": [
    "3.4"
   ]
  },
  {
   "id": "q10",
   "topic": "3.4 · обратный диапазон",
   "type": "multi",
   "text": "Нужен диапазон, который при переборе даёт ровно 6, 4, 2 в таком порядке.",
   "task": "Отметьте все подходящие вызовы range().",
   "options": [
    "<code>range(6, 0, -2)</code>",
    "<code>range(6, 1, -2)</code>",
    "<code>range(6, 2, -2)</code>",
    "<code>range(2, 7, 2)</code>",
    "<code>range(6, -1, -2)</code>"
   ],
   "chapters": [
    "3.4"
   ]
  },
  {
   "id": "q11",
   "topic": "3.5 · накопление суммы",
   "type": "order",
   "text": "Нужно сложить чётные числа от 1 до 6 включительно и вывести только итог. Отступы в карточках уже заданы.",
   "task": "Соберите программу из всех строк. Отступы менять нельзя.",
   "items": [
    "<code>total = 0</code>",
    "<code>for n in range(1, 7):</code>",
    "<code>    if n % 2 == 0:</code>",
    "<code>        total += n</code>",
    "<code>print(total)</code>"
   ],
   "chapters": [
    "3.5"
   ]
  },
  {
   "id": "q12",
   "topic": "3.5 · подсчёт подходящих элементов",
   "type": "number",
   "text": "Программа проверяет числа на делимость.",
   "task": "Введите итоговое значение count, которое напечатает программа.",
   "code": "count = 0\nfor n in range(3, 16, 3):\n    if n % 2 != 0:\n        count += 1\nprint(count)",
   "chapters": [
    "3.5"
   ]
  },
  {
   "id": "q13",
   "topic": "3.6 · значение или элемент списка",
   "type": "single",
   "text": "Два цикла пытаются изменить цены. Между циклами список не создаётся заново.",
   "task": "Выберите вывод программы.",
   "code": "prices = [3, 5, 7]\nfor price in prices:\n    price += 10\nfor i in range(len(prices)):\n    prices[i] += 1\nprint(prices)",
   "options": [
    "<code>[4, 6, 8]</code>",
    "<code>[14, 16, 18]</code>",
    "<code>[3, 5, 7]</code>",
    "<code>[13, 15, 17]</code>"
   ],
   "chapters": [
    "3.6"
   ]
  },
  {
   "id": "q14",
   "topic": "3.6 · соседние элементы и граница",
   "type": "multi",
   "text": "Список a содержит не меньше двух чисел. В тело цикла подставляют строку print(a[i], a[i + 1]). Нужно один раз вывести каждую соседнюю пару от начала списка к концу.",
   "task": "Отметьте все заголовки цикла, которые решают задачу для любого такого списка без IndexError.",
   "options": [
    "<code>for i in range(len(a) - 1):</code>",
    "<code>for i in range(0, len(a) - 1):</code>",
    "<code>for i in range(len(a)):</code>",
    "<code>for i in range(1, len(a) - 1):</code>",
    "<code>for i in range(len(a) - 1, 0, -1):</code>"
   ],
   "chapters": [
    "3.6"
   ]
  },
  {
   "id": "q15",
   "topic": "3.6 · enumerate",
   "type": "single",
   "text": "В цикле используются одновременно индекс и значение элемента.",
   "task": "Выберите вывод программы. Точка с запятой в вариантах отделяет строки.",
   "code": "names = [\"Ира\", \"Лев\"]\nfor i, name in enumerate(names):\n    print(i, name)",
   "options": [
    "<code>0 Ира; 1 Лев</code>",
    "<code>1 Ира; 2 Лев</code>",
    "<code>Ира 0; Лев 1</code>",
    "<code>0 Лев; 1 Ира</code>"
   ],
   "chapters": [
    "3.6"
   ]
  },
  {
   "id": "q16",
   "topic": "3.8 · границы и шаг среза",
   "type": "slots",
   "text": "Дана строка s = \"ABCDEFG\". Каждый срез вычисляют независимо.",
   "task": "Подберите результат для каждого среза. Две карточки лишние.",
   "chips": [
    "BDF",
    "EFG",
    "FD",
    "'' (пустая строка)",
    "BDFG",
    "FDB"
   ],
   "slots": [
    "s[1:6:2]",
    "s[-3:]",
    "s[5:1:-2]",
    "s[20:]"
   ],
   "chapters": [
    "3.8"
   ]
  },
  {
   "id": "q17",
   "topic": "3.8 · обратный срез",
   "type": "single",
   "text": "Два похожих среза отличаются только правой границей.",
   "task": "Выберите вывод программы. Точка с запятой в вариантах отделяет строки.",
   "code": "a = [10, 20, 30, 40]\nprint(a[::-1])\nprint(a[:0:-1])",
   "options": [
    "<code>[40, 30, 20, 10]; [40, 30, 20]</code>",
    "<code>[40, 30, 20, 10]; [40, 30, 20, 10]</code>",
    "<code>[]; [40, 30, 20]</code>",
    "<code>[10, 20, 30, 40]; []</code>"
   ],
   "chapters": [
    "3.8"
   ]
  },
  {
   "id": "q18",
   "topic": "3.8 · копия и изменение среза",
   "type": "single",
   "text": "В списке только целые числа. После копирования часть исходного списка заменяют.",
   "task": "Выберите, какие два списка будут напечатаны. Точка с запятой отделяет строки.",
   "code": "a = [1, 2, 3, 4]\nb = a[:]\na[1:3] = [9]\nprint(a)\nprint(b)",
   "options": [
    "<code>[1, 9, 4]; [1, 2, 3, 4]</code>",
    "<code>[1, 9, 4]; [1, 9, 4]</code>",
    "<code>[1, 9, 3, 4]; [1, 2, 3, 4]</code>",
    "<code>[1, 2, 3, 4]; [1, 9, 4]</code>"
   ],
   "chapters": [
    "3.8"
   ]
  },
  {
   "id": "q19",
   "topic": "3.9 · параметры slice",
   "type": "sort",
   "text": "Дан объект part = slice(None, 6, 2). Каждую карточку вычисляют отдельно.",
   "task": "Распределите выражения по полученному значению.",
   "items": [
    "<code>part.start</code>",
    "<code>part.stop</code>",
    "<code>part.step</code>"
   ],
   "buckets": [
    "None",
    "6",
    "2"
   ],
   "chapters": [
    "3.9"
   ]
  },
  {
   "id": "q20",
   "topic": "3.9 · один slice для разных последовательностей",
   "type": "multi",
   "text": "Даны s = \"ABCDEFG\", a = [10, 20, 30, 40, 50, 60, 70] и part = slice(1, 6, 2).",
   "task": "Отметьте все выражения, результат которых равен строке \"BDF\".",
   "options": [
    "<code>s[part]</code>",
    "<code>s[1:6:2]</code>",
    "<code>a[part]</code>",
    "<code>s[1:6]</code>",
    "<code>s[slice(1, 7, 2)]</code>"
   ],
   "chapters": [
    "3.9"
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

/* Приводит ответ к форме ключа. Пустой или неполный ответ даёт null. */
function normalized(q, a) {
  if (a == null) return null;
  switch (q.type) {
    case 'single': case 'multi': case 'line':
      return a.length ? [...a].sort((x, y) => x - y) : null;
    case 'order':
      return a.length ? a : null;
    case 'slots': case 'sort':
      return a.every(x => x !== null && x !== undefined) ? a : null;
    case 'number': {
      const s = String(a).replace(/\s/g, '').replace(',', '.');
      return s !== '' && isFinite(Number(s)) ? [Number(s)] : null;
    }
  }
  return null;
}

async function isCorrect(q, a) {
  const norm = normalized(q, a);
  if (!norm) return false;
  const key = (await secretData())[q.id].key;
  return JSON.stringify(norm) === JSON.stringify(key);
}

/* Ответ в коде результата: строка на вопрос. Номера — одной цифрой, пусто — x. */
function encodeAnswer(q, a) {
  if (a == null) return '';
  if (q.type === 'number') return String(a).replace(/[^0-9.,\-]/g, '').slice(0, 12);
  if (q.type === 'slots' || q.type === 'sort') return a.map(x => (x === null || x === undefined) ? 'x' : String(x)).join('');
  return a.join('');
}

function decodeAnswer(q, s) {
  s = s || '';
  if (q.type === 'number') return s === '' ? null : s;
  if (s === '') return null;
  const parts = s.split('');
  if (q.type === 'slots' || q.type === 'sort') return parts.map(c => c === 'x' ? null : Number(c));
  return parts.map(Number);
}

function gradeFor(score) {
  return QUIZ.grades.find(g => score >= g.min) || QUIZ.grades[QUIZ.grades.length - 1];
}
