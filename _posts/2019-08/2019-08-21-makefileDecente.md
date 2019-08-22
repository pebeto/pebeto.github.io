---
title: ¿Cómo hacer un makefile decente?
---

En mis cortos casi cuatro años como programador he visto muchísimos proyectos hechos en C/C++, tanto universitarios como de producción,
siendo "armados con las manos". Aquel término hace referencia a que cada parte del código es compilada manualmente,
y eso pues crea complicaciones, tardanzas y/o errores póstumos.

Uno de los problemas más grandes de enseñanza en mi universidad fue que no nos explicaron cómo es que funcionaba
correctamente cada herramienta (por así decirlo) que utilizábamos. Uno de esos casos fueron los archivos de cabecera 
(.h/.hpp) y los archivos fuente (.c/.cpp). Mi profesor en ese entonces, quien no es un 
mal programador y es alguien a quien estimo muchísimo, utilizaba los archivos de cabecera para guardar funciones. 

Yo, habiendo aprendido a utilizar aquellos de esa manera, buscaba en GitHub algunos programas open source escritos
en susodicho lenguaje de programación para ver cómo estaban estructurados a nivel de código. Y un día día 
me encontré con una porción de código similar a esta:

```cpp
#ifndef EXAMPLE_H
#define EXAMPLE_H

class Example {
    int a;
    int b;
  
  public:
    int addA(int);
    int addB(int);
    void hello();
}

#endif
```

Mi cerebro explotó porque no había absolutamente nada útil en ese archivo. Luego vi el archivo fuente que llevaba 
el mismo título que esa cabecera y todo tuvo sentido. Conforme revisaba
aquel proyecto, vi que yacía un archivo peculiar llamado `Makefile` en la raíz del proyecto. La primera vez que 
lo vi no entendí ni un poco de lo había allí, pero conforme fui investigando pude entender su legendario poder.
Con tan solo escribir `make` en el terminal todo el programa comenzó a compilarse, y en un abrir y cerrar de ojos
ya estaba todo listo. Al igual que los archivos de cabecera, en la universidad nunca nos explicaron sobre aquel santo grial.
Y aquí me encuentro hoy, tratando de explicar cómo es que funciona aquel milagro de la vida.

Un `Makefile` es un archivo que **automatiza la compilación**. Eso es todo, simple y sencillo de explicar.
En vez de estar compilando cada parte del proyecto a mano como loco, se hace uso de aquel archivo para decirle
al compilador y al enlazador "Oigan, quiero que hagan esto mientras me tomo un tecito".

**Pros:**

- Es capaz de salvarte horas acumuladas de trabajo de compilación
- Te enseña a ser ordenado (para que tiendas tu cama todos los días)
- Limpia solo (si es que lo deseas)
- Te hace ser más pulcro

**Contras:**

- `return 0`

Para explicar cómo funciona supongamos que tenemos la siguiente estructura de proyecto:

```
~/ellanotequiere/
    |-> bin/                 # Aquí se guardan los ejecutables
    |-> include/             # Aquí se guardan las archivos de cabecera
        |-> Ella.hpp
    |-> obj/                 # Aquí se guardan los archivos objeto
    |-> src/                 # Aquí se guardan los archivos fuente
        |-> main.cpp
        |-> Ella.cpp
    |-> Makefile             # El arma definitiva
```
**Este ejemplo se utilizará para desarrollar el tema*

En resumen, lo que se hará será compilar cada archivo fuente del directorio `src` para obtener archivos objeto 
que se almacenarán en el directorio `obj`. Luego, estos se unirán y el resultado se almacenará en el directorio 
`bin` como un ejecutable.

Un archivo makefile simple puede verse de la siguiente manera.

```make
ellanotequiere: src/main.cpp src/Ella.cpp
	g++ -o bin/ellanotequiere src/main.cpp src/Ella.cpp -I include
```

Para entender mejor el bloque, separemos los componentes en una estructura general.

```make
salida: entrada
	acción
```

Se dice que para cada entrada se ejecutará una acción que conllevará a una o varias salidas. Cada línea se hace
llamar una regla.

¿Se dieron cuenta de algo? Conforme el proyecto escale, la cantidad de archivos fuente incrementará y será un
problema en el futuro. Por ello, se hace uso de variables para facilitar la mantenibilidad del proyecto.

```make
CC = g++
SRCS = src/main.cpp src/Ella.cpp
IDIR = include
OUT = bin/ellanotequiere

ellanotequiere: $(SRCS)
	$(CC) -o $(OUT) $(SRCS) -I $(IDIR)
```

¿Ven la diferencia? Esto hace que nuestro makefile sea más legible y mantenible. **OJO:** Tengan en cuenta que 
no deben haber espacios después de una declaración de variable. Estos causan errores y a veces pueden ser invisibles.

Pero hay algo que todavía no está bien. Si se han dado cuenta, no se han generado archivos objeto para cada 
archivo fuente. Esto es una necesidad debido a que podemos generar un código fresco y funcional y no corromperlo
si es que existiese algún error en un solo archivo fuente. En el siguiente bloque de código se usarán todavía más
variables, y si entendieron el paso anterior serán capaces de visualizar su genialidad.

```make
CC = g++
OUT = ellanotequiere

SDIR = src
IDIR = include
ODIR = obj
BDIR = bin

$(ODIR)/%.o: $(SDIR)/%.cpp
	$(CC) -o $@ -I $(IDIR) -c $<

ellanotequiere: $(ODIR)/Ella.o $(ODIR)/main.o
	$(CC) -o $(BDIR)/$(OUT) $(ODIR)/Ella.o $(ODIR)/main.o
```

En este nuevo bloque vemos nuevos operadores, los cuales explicaré de una manera sencilla.

- `%` hace referencia a todos los archivos con cualquier nombre
- `$@` hace referencia a la salida de la regla
- `$<` hace referencia al primer miembro de la entrada de la regla

La nueva regla lo que hace es agarrar uno por uno a cada uno de los archivos contenidos en el directorio `src`, 
para luego compilarlos y guardarlos como archivos objeto en el directorio `obj`.

Se ve bien... ¿Cierto? Pues no, aún no está en su forma más poderosa. Si se han dado cuenta, los archivos objetos
aún siguen siendo escritos de manera estática... ¡Y eso no queremos!. Para solucionar eso, haremos un simple truco:

*Como ya sabemos que cada archivo fuente se convertirá en un archivo objeto, entonces guardaremos cada uno de esos 
nombres justo antes de la compilación para luego cambiar el directorio y la extensión.*

```make
CC = g++
OUT = ellanotequiere

SDIR = src
IDIR = include
ODIR = obj
BDIR = bin

SRCS = $(wildcard $(SDIR)/*.cpp)
OBJS = $(SRCS:$(SDIR)/%.cpp=$(ODIR)/%.o)

$(ODIR)/%.o: $(SDIR)/%.cpp
	$(CC) -o $@ -I $(IDIR) -c $<

ellanotequiere: $(OBJS)
	$(CC) -o $(BDIR)/$(OUT) $^
```

Ahora sí, este es el makefile definitivo y a continuación les explicaré lo nuevo.

- `wildcard` es una función que nos permite conseguir una cadena con cada uno de los nombres de cada archivo en un directorio específico (En este caso, la cadena sería `src/Ella.cpp src/main.cpp`)
- `SRCS:$(SDIR)/%.cpp=$(ODIR)/%.o` es una referencia de sustitución. En palabras sencillas, lo que hace es agarrar todos los valores de `SRCS` y los convierte
a otro formato especificado después del `=`. (En este caso, `src/Ella.cpp` pasaría a ser `obj/Ella.o`)
- Cada uno de los nombres generados se guardan en la variable OBJS, que luego es utilizada en la regla principal `ellanotequiere`
- `$^` hace referencia a la entrada de la regla

Pero falta algo más... ¡La limpieza! Un buen makefile incluye una buena aseada.

```make
CC = g++
OUT = ellanotequiere

SDIR = src
IDIR = include
ODIR = obj
BDIR = bin

SRCS = $(wildcard $(SDIR)/*.cpp)
OBJS = $(SRCS:$(SDIR)/%.cpp=$(ODIR)/%.o)

$(ODIR)/%.o: $(SDIR)/%.cpp
	$(CC) -o $@ -I $(IDIR) -c $<

ellanotequiere: $(OBJS)
	$(CC) -o $(BDIR)/$(OUT) $^

clean: $(OBJS)
	rm -f $^ $(BDIR)/$(OUT)
```

Y listo. Si deseas ver más de cerca el proyecto, puedes descargarlo [aquí](https://github.com/pebeto/ellanotequiere).
