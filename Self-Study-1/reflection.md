# Reflection - Self Study 1: Help ALF

## Tool Setup
- Sprache: JavaScript (Node.js)
- Test-Framework: Jest
- Editor: Visual Studio Code

## Ablauf des TDD-Zyklus

### Todo 1: findSpaceship findet X in einer 1x1-Karte -> [0, 0]
- Roter Test: Test erwartet `findSpaceship('X')` -> `[0, 0]`, Funktion war noch leer (gab `undefined` zurueck) -> Test rot.
- Gruene Implementierung: Einfachste moegliche Loesung ("Fake it"): Funktion gibt direkt `[0, 0]` zurueck, ohne die Karte zu analysieren.
- Refactoring: Nicht noetig.

### Todo 2: findSpaceship findet X in einer groesseren Karte -> [7, 2]
- Roter Test: Neue Testkarte (6 Zeilen, X in Zeile 3 von oben, Spalte 7) erwartet `[7, 2]`. Alte Implementierung gibt immer `[0, 0]` zurueck -> Test 2 rot, Test 1 bleibt gruen.
- Gruene Implementierung: Karte wird an `\n` in Zeilen gesplittet. Fuer jede Zeile wird der Index von `X` gesucht (x-Koordinate = Spaltenindex). Die y-Koordinate wird von unten gezaehlt (`hoehe - 1 - zeilenindex`), da `[0,0]` unten links liegt. Beide Tests gruen.
- Refactoring: Nicht noetig, Code ist klar strukturiert.

### Todo 3: "Spaceship lost forever." wenn kein X vorhanden ist
- Roter Test: ...
- Gruene Implementierung: ...
- Refactoring: ...

## Reflexion: Test-First vs. Code-First

### Vorteile
- ...

### Herausforderungen
- ...

## Fazit
...