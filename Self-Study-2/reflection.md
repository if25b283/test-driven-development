# Reflection - Self Study 2: Electrons around the cores

## Pair Programming Setup
- Kein Pairing-Partner gefunden, daher alleine bearbeitet

## Tool Setup
- Sprache: JavaScript (Node.js)
- Test-Framework: Jest

## Spielregel-Herleitung
Aus den gegebenen Beispielen wurde folgende Regel abgeleitet:
- Wuerfelwert 3 -> 2 "Elektronen"
- Wuerfelwert 5 -> 4 "Elektronen"
- alle anderen Werte (1, 2, 4, 6) -> 0 "Elektronen"
- Ergebnis = Summe der Elektronen ueber alle Wuerfel im Array

## Ablauf des TDD-Zyklus

### Todo 1: Wuerfel mit Wert 3 ergibt 2
- Roter Test: `electronsAroundTheCores([3])` soll `2` zurueckgeben, Funktion war noch leer (gab `undefined` zurueck) -> Test rot.
- Gruene Implementierung: Einfachste moegliche Loesung ("Fake it"): Funktion gibt direkt `2` zurueck, ohne das Array zu betrachten.
- Refactoring: Nicht noetig.

### Todo 2: Wuerfel mit Wert 5 ergibt 4
- Roter Test: `electronsAroundTheCores([5])` soll `4` zurueckgeben. Alte Implementierung gibt immer `2` zurueck -> Test rot, Test 1 bleibt gruen.
- Gruene Implementierung: Funktion iteriert ueber das Array und addiert pro Wuerfel 2 (bei Wert 3) oder 4 (bei Wert 5), sonst 0. Beide Tests gruen.
- Refactoring: Nicht noetig.

### Todo 3: Wuerfel ohne Elektronen ergibt 0
- Roter Test: nicht entstanden - die Implementierung aus Todo 2 deckte diesen Fall bereits ab (Werte 1, 2, 4, 6 fuehren zu keinem `if`-Treffer, also bleibt die Summe 0). Test wurde direkt gruen geschrieben.
- Gruene Implementierung: keine Aenderung noetig.
- Refactoring: Nicht noetig.

### Todo 4-7: Mehrere Wuerfel summieren
- Roter Test: nicht entstanden - die Schleifen-basierte Implementierung aus Todo 2 funktioniert bereits generisch fuer Arrays beliebiger Laenge. Alle vier Beispiele aus der Folie wurden in einem Test zusammengefasst und liefen direkt gruen.
- Gruene Implementierung: keine Aenderung noetig.
- Refactoring: Nicht noetig.

## Pair Review
- Was lief gut: Die Spielregel-Herleitung aus den Beispielen war der schwierigste Teil dieses Katas - sobald das Muster (3 -> 2, 5 -> 4, sonst 0, summiert ueber alle Wuerfel) erkannt war, war die Implementierung einfach. Da die zweite Implementierung bereits ueber das gesamte Array iterierte, deckte sie automatisch auch die Faelle "kein Elektron" und "mehrere Wuerfel" ab, ohne dass weitere rote Tests noetig waren.
- Was wurde gelernt: Im Vergleich zu SS1 ging der TDD-Zyklus routinierter und schneller, da das Setup (Jest, Projektstruktur, Vorgehen rot-gruen-refactor) mir bereits bekannt war.