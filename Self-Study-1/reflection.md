# Reflection - Self Study 1: Help ALF (TDD Coding Kata)

## Tool Setup
- Sprache: JavaScript (Node.js)
- Test-Framework: Jest
- Editor: Visual Studio Code

## Ablauf des TDD-Zyklus

### Todo 1: findSpaceship findet X in einer 1x1-Karte -> [0, 0]
- Roter Test: Test erwartet `findSpaceship('X')` -> `[0, 0]`, Funktion war noch leer (gab `undefined` zurueck) -> Test rot.
- Gruene Implementierung: Einfachste moegliche Loesung ("Fake it"): Funktion gibt direkt `[0, 0]` zurueck, ohne die Karte zu analysieren.
- Refactoring: Nicht noetig, Code ist trivial.

### Todo 2: findSpaceship findet X in einer groesseren Karte -> [7, 2]
- Roter Test: Neue Testkarte (6 Zeilen, X in Zeile 3 von oben, Spalte 7) erwartet `[7, 2]`. Alte Implementierung gibt immer `[0, 0]` zurueck -> Test 2 rot, Test 1 bleibt gruen.
- Gruene Implementierung: Karte wird an `\n` in Zeilen gesplittet. Fuer jede Zeile wird der Index von `X` gesucht (x-Koordinate = Spaltenindex). Die y-Koordinate wird von unten gezaehlt (`hoehe - 1 - zeilenindex`), da `[0,0]` unten links liegt. Beide Tests gruen.
- Refactoring: Nicht noetig, Code ist klar strukturiert.

### Todo 3: "Spaceship lost forever." wenn kein X vorhanden ist
- Roter Test: Karte ohne `X` erwartet den String `"Spaceship lost forever."`. Implementierung gab bisher `[0, 0]` zurueck (Default-Return) -> Test rot.
- Gruene Implementierung: Default-Return am Ende der Funktion von `[0, 0]` auf `'Spaceship lost forever.'` geaendert. Alle drei Tests gruen.
- Refactoring: Nicht noetig.

## Reflexion: Test-First vs. Code-First

### Vorteile
- Tests vor dem Code zu schreiben hat geholfen, Edge Cases (z.B. den Fall "kein X auf der Karte") frueher zu erkennen, anstatt sie erst beim manuellen Testen am Ende zu entdecken.
- Jeder TDD-Schritt war klein und nachvollziehbar: erst ein roter Test, dann die minimal noetige Aenderung, um ihn gruen zu machen. Dadurch war jederzeit klar, was als Naechstes zu tun ist.
- Die Commit-Historie spiegelt den gesamten Entwicklungsprozess wider (rot -> gruen -> ggf. Refactoring), was die Nachvollziehbarkeit erhoeht.

### Herausforderungen
- Anfangs hat sich das Schreiben von Tests vor dem eigentlichen Code umstaendlich angefuehlt, da man noch keine konkrete Vorstellung von der Implementierung hat und trotzdem schon das erwartete Verhalten formulieren muss.
- Die groesste Herausforderung war die Disziplin, wirklich zuerst nur einen Test zu schreiben und keinen Produktionscode hinzuzufuegen, bevor dieser Test nicht rot lief. Es gibt staendig den Impuls, gleich passenden Code als Ergebnis zu implementieren, anstatt schrittweise ueber "simplest implementation that could possibly work" vorzugehen.

## Fazit
Der TDD-Zyklus (rot -> gruen -> refactor) hat bei dieser kleinen Aufgabe gut funktioniert und zu einer klaren, schrittweisen Entwicklung mit guter Testabdeckung gefuehrt. Der groesste Lerneffekt war, sich aktiv zu zwingen, kleine Schritte einzuhalten und nicht vorzugreifen - das ist gewohnheitsmaessig die groesste Umstellung gegenueber dem "normalen" Programmieren.