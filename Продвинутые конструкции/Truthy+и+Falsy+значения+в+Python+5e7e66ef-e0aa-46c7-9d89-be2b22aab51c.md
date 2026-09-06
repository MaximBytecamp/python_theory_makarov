







> «Разбираться в основах — значит экономить время в будущем.»





[Практика: итераторы и итерируемые объекты в Python](https://buildin.ai/fd6a510e-09f0-4fd9-a8c5-319bae8afe52)



**Паспорт темы**

    Категория: синтаксис и базовые концепции

    Уровень: начальный

    Связанные темы: циклы, генераторы

    Зачем это знать: понимать, как работает перебор

---

В Python любое значение в логическом контексте (`if`, `while`, `and`, `or`) интерпретируется как:

```Python
True  (истина)
False (ложь)
```

Однако Python не ограничивается только типом `bool`.
Многие объекты могут **вести себя как True или False**.

Это называется:

```Python
Truthiness (истинность)
Falsiness (ложность)
```

---

# Как Python проверяет условие

Когда Python встречает условие:

```Python
if value:
```

он автоматически преобразует `value` в `bool`.

Это эквивалентно:

```Python
if bool(value):
```

---

# Falsy значения (ложные)

Следующие значения считаются **False**:

```Python
False
None
0
0.0
''
""
[]
()
{}
set()
```

То есть:

```Python
пустые структуры данных → False
```

---

# Пример

```Python
if []:
    print("True")
else:
    print("False")
```

Результат:

```Python
False
```

---

# Еще примеры

```Python
print(bool(0))
print(bool(""))
print(bool([]))
print(bool(None))
```

Результат:

```Python
False
False
False
False
```

---

# Truthy значения (истинные)

Все остальные значения считаются **True**.

Примеры:

```Python
1
-5
"hello"
[1,2]
{"a":1}
True
```

---

# Пример

```Python
if [1,2,3]:
    print("True")
```

Результат:

```Python
True
```

---

# Проверка строки

```Python
name = "Max"

if name:
    print("Строка не пустая")
```

Результат:

```Python
Строка не пустая
```

---

# Проверка списка

Очень частый паттерн Python:

```Python
numbers = [1,2,3]

if numbers:
    print("Список не пустой")
```

---

# Проверка пустого списка

```Python
numbers = []

if not numbers:
    print("Список пуст")
```

Результат:

```Python
Список пуст
```

---

# Почему это удобно

В Python не нужно писать:

```Python
if len(numbers) > 0:
```

Можно написать:

```Python
if numbers:
```

Это считается **более "питоничным" стилем**.

---

# Где это используется

Truthy/Falsy используется практически везде:

```Python
if
while
and
or
list comprehension
filter
```

---

# Пример с `filter`

```Python
data = [0,1,2,"",3,None]

result = list(filter(None, data))

print(result)
```

Результат:

```Python
[1,2,3]
```

---

# Итог

Falsy значения:

```Python
False
None
0
""
[]
{}
set()
```

Все остальные значения → **Truthy**

---
