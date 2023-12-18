// --Kapitel 1: Variables/Variablen--

let name = 'Manuel'
console.log(name);

let firstName = 'Max';
let lastName = 'Mustermann';

// Keine vorgefertigten Schlüsselwörter! (z.B if,else,..)
// Aussagekräftige Definitionen für mehr Überblick und Verständnis (Kein x,a,c,..)
// Kann nicht mit einer Zahl beginnen (1name)
// Darf kein Leerzeichen oder Bindestrich enthalten
// Abhängig von Groß- und Kleinschreibung (camel notation!! Zeile 6-7)

// --Kapitel 2: Constants/Konstante--

const interestRate = '0.3';
interestRate = 1
console.log(interestRate);

// Wert der Variable ist unveränderbar.
// Wert wurde bei Zeile 17 festgelegt und bei Zeile 18 geändert, dies ist nur mit der Variable "let" und nicht mit "const"
// Siehe Fehlermeldung in der Konsole


// --Kapitel 2: Primitive Types/Primitive Typen--

let name = 'Manuel'; // String literal (Zeichenfolge, Buchstaben oder Zahlen in Anführungszeichen("),('))
let age = 26; // Number literal (numerische Zeichenfolge)
let isApproved = false; // Boolean Literal
let firstName;  // nicht definierter Wert (Abk. für: let firstName = undefined;)
let selectedColor = null; // kein Wert, kann im Nachhinein geändert werden z.B auf 'red'

// --Kapitel 2.1: Dynamic Typing/Dynamische Typisierung

// bei der Statischen Typisierung geht es nicht da die Variable direkt vergeben wird ( z.B string = 'Manuel')
// Bei Javascript allerdings ginge dies schon mit "let" ,wie bei Zeile 28, wie das funktioniert siehe Zeile 43
// Verwende die Konsole im Webbrowser von der "index.html" Datei
// Mit dem "typeof" Operator kannst du nun testen, welchen Typ die in Zeile 28-32 vergebenen Variablen haben
// Nehmen wir als Beispiel Zeile 28 her. Die Variable: name = 'Manuel'
// Geben wir nun "typeof name" ein (ohne Anführungszeichen) kommt als Ergebnis "string", somit wissen wir es ist ein string.
// Bei Zeile 29 ist das Ergebnis "number", bei Zeile 30 "boolean",...
// Nun kommen wir zur dynamischen Typisierung/ dynamic Typing, bei Zeile 28 haben wir einen "string" erstellt,
// wir können die Variable "name" aber auch zu einer Nummer ändern in der Konsole mit dem Befehl: name = 1
// wenn wir danach "typeof name" eingeben kommt als Ergebnis 'number', somit haben nun den String Literal zu einem
// Number Literal geändert und dies nennt man "dynamic typing".
