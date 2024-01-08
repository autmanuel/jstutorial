// --Kapitel 1: Variables/Variablen--

// --let--
let name = 'Manuel'
console.log(name);

let firstName = 'Max';
let lastName = 'Mustermann';

// Variablen: var,let,const (var wird nicht mehr verwendet)
// Eigenschaften zum definieren einer Variable:
// Keine vorgefertigten Schlüsselwörter! (if,else,..)
// Aussagekräftige Definitionen verwenden für mehr Überblick und Verständnis! (kein a,b,c,..)
// Kann nicht mit einer Zahl beginnen (1name)
// Darf kein Leerzeichen oder Bindestrich enthalten
// Abhängig von Groß- und Kleinschreibung (camel notation!! Zeile 6-7)

// --Constants/Konstante--

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Wert einer Konstante ist unveränderbar. Um dies zu testen ändere den Befehl "let" auf "const" bei Zeile 17
// Durch Zeile 19 wird nun in der Konsole eine Fehlermeldung angezeigt, da der Wert bei Zeile 17 auf 0.3 fixiert wurde,
// und bei Zeile 18 auf 1 geändert, dies wäre nur mit "let" möglich. Ändere den Befehl "const" wieder auf "let" um mit
// den restlichen Kapiteln ohne Fehlermeldung fortzufahren.


// --Kapitel 2: Primitive Types/Primitive Typen--

let name1 = 'Manuel'; // String literal (Zeichenfolge, Buchstaben oder Zahlen in Anführungszeichen("),('))
let age = 26; // Number literal (numerische Zeichenfolge)
let isApproved = false; // Boolean Literal
let surName; // nicht definierter Wert (Abk. für: let surName = undefined;)
let selectedColor = null; // kein Wert, kann im Nachhinein geändert werden z.B auf 'red' (null ist ein object)

// --Kapitel 2.1: Dynamic Typing/Dynamische Typisierung

// bei der Statischen Typisierung geht es nicht da die Variable direkt vergeben wird ( z.B string = 'Manuel')
// Bei Javascript allerdings ginge dies schon mit "let" ,wie bei Zeile 28, wie das funktioniert siehe Zeile 43
// Verwende die Konsole im Webbrowser von der "index.html" Datei
// Mit dem "typeof" Operator kannst du nun testen, welchen Typ die in Zeile 28-32 vergebenen Variablen haben
// Nehmen wir als Beispiel Zeile 28 her. Die Variable: name1 = 'Manuel'
// Geben wir nun "typeof name1" ein (ohne Anführungszeichen) kommt als Ergebnis "string", somit wissen wir es ist ein string.
// Bei Zeile 29 ist das Ergebnis "number", bei Zeile 30 "boolean",...
// Nun kommen wir zur dynamischen Typisierung/ dynamic Typing, bei Zeile 28 haben wir einen "string" erstellt,
// wir können die Variable "name1" aber auch zu einer Nummer ändern in der Konsole mit dem Befehl: name1 = 3
// wenn wir danach "typeof name1" eingeben kommt als Ergebnis 'number', somit haben nun den String Literal zu einem
// Number Literal geändert und dies nennt man "dynamic typing".


// --Kapitel 3: Objects/Objekte--

let person = {
    name2: 'Hans',
    age: 30
};
console.log(person);

// mit den Befehlen von Zeile 52-55 haben wir nun ein Objekt namens person erstellt, diese hat gewisse Eigenschaften.
// Nämlich den Namen (name2) und das Alter (age) mit den Befehl "console.log(person);" zeigen wir die Eigenschaften vom Objekt
// an, lösche nun den
// Konsole zeigt nun den Namen und das Alter an, da sie Propterties/Eigenschaften (name2,age) vom object/Objekt (person)
// sind.

// Es ist auch möglich nur einzelne Eigenschaften einer Person anzuzeigen wie z.B. nur das Alter, es gibt verschiede Varianten.
// Siehe unten:

// Variante 1: Dot Notation/Punktnotierung--> .

person.name2 = 'John';
console.log(person.name2);
// Mit dem Befehl "console.log(person.name2);" können wir nun in der Konsole den Namen der Person anzeigen lassen.
// Dies ist die einfachere Variante und häufiger verwendet

// Variante 2: Bracket Notation/ Klammernotation--> []

let selection = 'name2';
person[selection] = 'Marie';
console.log(person.name2);
// Wird sehr selten verwendet, ist  man kann allerdings dynamischer auf die Properties zugreigen und Sonderzeichen verwenden
// Bei der Dot Notation nicht, allerdings mehr Wörter und somit langsamer, Dot notation ist einfacher und leichter zu lesen
// Wenn möglich immer Dot Notation verwenden


// --Kapitel 4: array/Anordnung--

let selectedColors = ['red','blue'];  // array literal []
selectedColors[2] = 1;
console.log(selectedColors);

// im "array literal" befinden sich 2 "strings", nämlich ['red','blue']
// In der Konsole sehen wir, dass diese Anordnung in den Eckklammern vom object "selectedColors" 2 Werte hat (Anzahl genannt length/Länge)
// immer beginnend von 0.In dem Fall wie man in der Konsole sieht length: 3,somit von 0-2 (0,1,2).
// Da wir bei Zeile 87 in den den Brackets [] den 3.Wert/Element
// vergeben haben [2],der Wert ist wurde als 1 definiert und somit eine number/Zahl.
// Das selbe Ergebnis wäre in Zeile 87 in den Brackets ['red','blue',1] Hier haben wir im nachhinein beim object "selectedColors" den Wert später hinzugefügt.
// Bei Zeile 88 können wir mit dem Befehl "console.log(selectedColors.lenght);"ausschließlich die Anzahl der Werte/Elemente (lenght)
// vom object "selectedColors" auslesen,(Lenght: 3)
// Indem wir einfach am Ende des Befehls noch in den Klammern ".lenght" hinzufügen


// --Kapitel 5: functions/Funktionen--

function greet(name , lastName) {
console.log('Hello ' + name + ' ' + lastName);
}

greet('John' , 'Smith');

// Eine Funktion ist quasi eine Kombination aus "statements" die eine Aufgabe/tasks ausführt, oder einen Wert kalkuliert.
// In Zeile 103 haben wir mit dem "keyword" "function" eine function namens "greet" erstellt.
// Daneben in den Klammern () ist ein Paramenter der Funktion, in dem Fall 2 Variable nämlich "(name, lastName)".
// Die Variablen können nur innerhalb dieser Funktion aufgerufen werden (somit nur in den "curly braces" {}),
// nämlich im Inhalt der "curly Braces"{}, quasi der "body" der Funktion.

// Bei Zeile 104 haben wir einen String ('Hello') durch das + daneben können wir weitere Strings hinzufügen.
// ('Hello ' + name + ' ' + lastName)   Durchs + wird neben dem String das erste Argument (name) und durchs zweite
// + ein Platzhalter fürs zweite Argument (lastName) eingesetzt, das letzte + natürlich um das zweite Argument in den Platzhalter
// einzufügen, in dem Fall Smith (lastName).
// Anders als bei einer Variable (z.B let) benötigen wir hier kein Semikolon (;) nach den "curly braces{}",
// da es eine Funktion ist, die deklariert wird und kein Statement.
// Bei Zeile 107 setzem wir dann ein Statement und in den Klammern () haben wir 2 Argumente zu den Variablen
// "name" und "lastName" deklariert. "John" (name) und 'Smith' (lastName) .
// Wodurch der gesetzte Parameter (name) und (lastName) bei von Zeile zum Einsatz kommt,

// !!!ACHTUNG VIELE ERKENNEN KEINEN UNTERSCHIED ZW. EINEM PARAMETER UND EIN ARGUMENT, DENN (name, lastName) SIND EIN PARAMETER DER
// "greet function" UND ('John' 'Smith') DIE ARGUMENTE DAZU, DER AKTUELLE WERT FÜR DIESEN PARAMETER!!!
// In der Konsole müsste nun "Hello John Smith" stehen.


// --Kapitel 6: types of function/Typen der Funktionen--

