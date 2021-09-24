# cargo-components

## Vorschau

[GitHub Pages](https://ah-oh.github.io/cargo-components)

## Screendesign

[XD](https://xd.adobe.com/view/bfcdd2fc-be78-476b-85d4-736ab3913a1b-ea9e/)

## Einzubindende Scripts

```html
<!-- materialize -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

<!-- fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>

<!-- icons -->
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

## Komponenten

Addressform: Addressboxen, die per Radiobuttons auszuwählen sind -> je nach gewünschten Form-Felder kann man hier die Text-Felder austauschen
Big-Boxes: Komponente mit 2 Boxen, die jeweils eine Überschrift, Text und einen Button für einen Link haben
Box-Facts: Box mit Fakten, für die einzelnen Fakten mit Überschrift und Info ist die Klasse "facts" wichtig
Boxes: Verschiedene Anordnung von Boxen (4 in einer Reihe) mit Logo und Text; mit der Klasse "box" wird eine visuelle Box hinzugefügt und mit den Klassen "light", "dark" & "lighter" wird die jeweilige Hintergrundfarbe ausgesucht;
Im Abschnitt mit der Id="more-container" befindet sich der Content, der erst geladen wird, wenn der Button gedrückt wird die
Data: die weißen Text-felder können auch in anderen Komponenten benutzt werden mit der Klasse "white-input"
Description-Picture: Bild ist auch mit TExt austauchbar (hier am besten die Klasse "margin-t" noch einfügen, um mehr Abstand zu haben)
Form-Box: Vielversenderanfrage mit anderen Text-Feldern; werden diese Text-Felder benutzt, bitte das ganze Div mit kopieren
Header: 3 verschiedene entweder mit Login oder Navi
Logo-Boxes: Hintergrundfarben können mit der jeweiligen Klasse ausgetauscht werden
Menu: mit der Klasse "active" wird der jeweilige Menüpunkt hervorgehoben
Navigation: in den a Tag die jeweilige href angeben; mit class="active" kann der aktive Tab hervorgehoben werden
Questions: im Abschnitt mit der Id="more-question" befindet sich der Content, der erst nach Klick auf den Button geladen wird
Shipping: Versandrechner mit Tabs; der angezeigte Content befindet sich im Abschnitt mit der jeweiligen Id (hier noch mit test1, test2, test3, test4)
Slider-Img; SLider-Text: Carousel mit Logos oder Text; im Script können unter options die Optionen auch nochmal angepasst werden
Stepper: hier href einfügen; mit der Klasse "done" wird das jeweilige div als abgeschlossen angezeigt; mit der Klasse "active" wird es als aktiv angezeigt; ohne eine dieser Klassen wird es normal (zukünftige SChritte) angezeigt
