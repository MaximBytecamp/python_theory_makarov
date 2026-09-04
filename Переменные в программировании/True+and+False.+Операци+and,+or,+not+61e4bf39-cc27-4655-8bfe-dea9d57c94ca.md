







> «Разбираться в основах — значит экономить время в будущем.»





[Практика: итераторы и итерируемые объекты в Python](https://buildin.ai/fd6a510e-09f0-4fd9-a8c5-319bae8afe52)



**Паспорт темы**

    Категория: синтаксис и базовые концепции

    Уровень: начальный

    Связанные темы: циклы, генераторы

    Зачем это знать: понимать, как работает перебор

---

**Логический тип данных** (`bool`) — это тип данных, который может принимать только **два значения**:

```Python
True
False
```

- `True` — истина

- `False` — ложь

Важно помнить, что они пишутся **с заглавной буквы**.

Если написать:

```Python
true
false
```

Python выдаст ошибку:

```Python
NameError
```

---

# Тип `bool` в Python

В Python логический тип является **подклассом типа `int`**.

Это означает:

```Python
True  = 1
False = 0
```

Пример:

```Python
print(True + True)
```

Результат:

```Python
2
```

Однако выводятся они как логические значения:

```Python
True
False
```

---

# Логические операции

В Python существуют три основные логические операции:

```Python
and
or
not
```

---

# Оператор `and` (И)

Оператор `and` возвращает **True только тогда, когда оба условия истинны**.

### Таблица истинности

```Python
True  and True  → True
True  and False → False
False and True  → False
False and False → False
```

### Пример

```Python
print(True and True)
print(True and False)
```

Результат:

```Python
True
False
```

---

# Оператор `or` (ИЛИ)

Оператор `or` возвращает **True, если хотя бы одно условие истинно**.

### Таблица истинности

```Python
True  or True  → True
True  or False → True
False or True  → True
False or False → False
```

### Пример

```Python
print(True or False)
print(False or False)
```

Результат:

```Python
True
False
```

---

# Оператор `not` (НЕ)

Оператор `not` **инвертирует логическое значение**.

```Python
not True  → False
not False → True
```

### Пример

```Python
print(not True)
print(not False)
```

Результат:

```Python
False
True
```

---

# Пример использования логических операций

```Python
age = 20
student = True

print(age > 18 and student)
```

Здесь проверяется:

```Python
возраст больше 18
И
является ли человек студентом
```

---

# Ещё пример

```Python
temperature = 25
rain = False

print(temperature > 20 or rain)
```

Результат:

```Python
True
```

Потому что **одно из условий истинно**.

---

# Итог

Логический тип данных:

```Python
True
False
```

Основные логические операции:

```Python
and  — оба условия должны быть True
or   — хотя бы одно условие должно быть True
not  — меняет значение на противоположное
```

Эти операции используются для **проверки условий и управления логикой программы**.

---



