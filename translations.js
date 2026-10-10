'use strict';
window.AMR_DE = {};
(() => {
 const d=window.AMR_DE, put=(en,de)=>d[en]=de;
 const lines=`
Overview|Übersicht
Background|Hintergrund
Method|Methode
Experiments|Experimente
Results|Ergebnisse
Demonstration|Demonstration
Conclusions|Schlussfolgerungen
Research showcase|Forschungsportfolio
Reliable Warehouse AMR|Zuverlässiger Lager-AMR
Warehouse AMR|Lager-AMR
Infrastructure-Assisted Localisation|Infrastrukturgestützte Lokalisierung
Assisted Localisation|Gestützte Lokalisierung
Weekly learning plan|Wöchentlicher Lernplan
Private workspace|Privater Arbeitsbereich
Explore methodology|Methodik ansehen
WHAT WE WILL DEVELOP|WAS WIR ENTWICKELN
RESEARCH PROJECT|FORSCHUNGSPROJEKT
RESEARCH PROGRAMME|FORSCHUNGSPROGRAMM
PROJECT|PROJEKT
PROPOSED TARGETS|GEPLANTE ZIELWERTE
RESULTS|ERGEBNISSE
Proposed target|Geplanter Zielwert
No measured results published yet.|Noch keine Messergebnisse veröffentlicht.
View evidence|Nachweise ansehen
Reproducible simulation|Reproduzierbare Simulation
Bounded fault responses|Zeitlich begrenzte Fehlerreaktionen
Benchmarking and one improvement|Benchmarking und eine gezielte Verbesserung
Calibrated overhead cameras|Kalibrierte Deckenkameras
Wheel and camera fusion|Fusion von Radodometrie und Kameradaten
Paired drift evaluation|Driftbewertung mit gepaarten Versuchen
Develop a reproducible ROS 2 simulation to evaluate navigation performance, bounded fault responses and one controlled improvement.|Eine reproduzierbare ROS-2-Simulation entwickeln, um Navigationsleistung, zeitlich begrenzte Fehlerreaktionen und eine gezielte Verbesserung zu bewerten.
Develop infrastructure-assisted localisation using calibrated overhead cameras and sensor fusion, then measure how well it reduces wheel-odometry drift.|Eine infrastrukturgestützte Lokalisierung mit kalibrierten Deckenkameras und Sensorfusion entwickeln und messen, wie stark sie die Drift der Radodometrie verringert.
Build a clean, well-documented ROS 2 simulation of a warehouse AMR that others can run and extend, with clear configuration and test scenarios.|Eine saubere, gut dokumentierte ROS-2-Simulation eines Lager-AMR mit klarer Konfiguration und Testszenarien erstellen, die andere ausführen und erweitern können.
Evaluate blocked routes and missing scans with declared recovery limits, one command owner and traceable diagnostics.|Blockierte Wege und fehlende Scans mit festgelegten Wiederherstellungsgrenzen, einer zentralen Befehlsinstanz und nachvollziehbarer Diagnose bewerten.
Define evaluation scenarios and metrics, run a baseline and implement one controlled improvement to compare under the same conditions.|Bewertungsszenarien und Metriken festlegen, eine Ausgangsversion testen und eine gezielte Verbesserung unter denselben Bedingungen vergleichen.
Observe a robot-mounted marker with two calibrated cameras. Validate camera geometry and pose against held-out reference points.|Einen am Roboter befestigten Marker mit zwei kalibrierten Kameras beobachten. Kamerageometrie und Pose anhand unabhängiger Referenzpunkte validieren.
Build a Kalman-filter exercise, then a planar EKF with explicit frames, timestamps and measurement uncertainty.|Zunächst eine Kalman-Filter-Übung und anschließend einen planaren EKF mit expliziten Koordinatensystemen, Zeitstempeln und Messunsicherheit erstellen.
Compare wheel-only, camera-only and fused estimates across matched clean, slip, noise and outage trials. Keep ground truth out of the estimator.|Radodometrie, Kameraschätzung und fusionierte Schätzung in vergleichbaren Versuchen ohne Störungen sowie mit Schlupf, Rauschen und Ausfällen vergleichen. Ground Truth bleibt außerhalb des Schätzers.
Reproducible simulation, bounded fault responses and one controlled improvement.|Reproduzierbare Simulation, zeitlich begrenzte Fehlerreaktionen und eine gezielte Verbesserung.
Overhead cameras, sensor fusion and drift evaluation.|Deckenkameras, Sensorfusion und Driftbewertung.
The problem|Das Problem
Project scope|Projektumfang
Skills this project develops|Kompetenzen aus diesem Projekt
Outside the first release|Außerhalb der ersten Version
What we will build|Was wir entwickeln
Evaluation method|Bewertungsmethode
Learning foundations|Lerngrundlagen
The original weekly study and implementation sequence remains the foundation for this project.|Die ursprüngliche wöchentliche Lern- und Umsetzungsfolge bildet weiterhin die Grundlage dieses Projekts.
Open the full weekly learning plan|Vollständigen wöchentlichen Lernplan öffnen
A declared protocol before a measured result.|Ein festgelegtes Prüfprotokoll vor jedem Messergebnis.
Test conditions|Testbedingungen
Proposed acceptance targets|Geplante Abnahmekriterien
These are planned acceptance criteria. They are not completed achievements.|Dies sind geplante Abnahmekriterien. Sie sind noch keine erreichten Ergebnisse.
Experiment|Experiment
Evidence to record|Zu dokumentierende Nachweise
Published evidence, with the conditions that make it meaningful.|Veröffentlichte Nachweise mit den Bedingungen, die ihre Aussagekraft bestimmen.
The experiments are planned. Measurements and evidence will appear here only after they are selected and published from the private workspace.|Die Experimente sind geplant. Messungen und Nachweise erscheinen hier erst nach Auswahl und Veröffentlichung im privaten Arbeitsbereich.
Review the proposed experiments|Geplante Experimente ansehen
Published milestones|Veröffentlichte Meilensteine
Milestone|Meilenstein
Original|Ursprünglich
Current target|Aktueller Zieltermin
Actual|Tatsächlich
Status|Status
Completed|Abgeschlossen
Planned / in progress|Geplant / in Bearbeitung
View test evidence|Testnachweise ansehen
Assessment|Bewertung
Demonstration planned|Demonstration geplant
The final demonstration will show a normal mission, a blocked-route response and a scan-dropout response, with the matching configuration and logs.|Die abschließende Demonstration zeigt eine normale Mission, die Reaktion auf einen blockierten Weg und einen Scan-Ausfall mit passender Konfiguration und Protokollen.
The final demonstration will compare wheel-only, camera-only and fused localisation, including an outage and reacquisition sequence.|Die abschließende Demonstration vergleicht Radodometrie, Kameralokalisierung und fusionierte Lokalisierung einschließlich Ausfall und erneuter Erfassung.
Reproduction package|Paket zur Reproduktion
The planned evidence pack includes runnable code with a pinned revision, clean setup instructions, a short demo, raw per-trial results, analysis scripts and failure cases. No completed demonstration has been published here yet.|Das geplante Nachweispaket enthält ausführbaren Code mit festgelegter Revision, klare Einrichtungsschritte, eine kurze Demo, Rohdaten je Versuch, Analyseskripte und Fehlerfälle. Hier wurde noch keine fertige Demonstration veröffentlicht.
Conclusions follow the evidence|Schlussfolgerungen folgen den Nachweisen
No final conclusions are claimed yet. At the end of this project, the report will compare proposed targets with measured outcomes, explain failures and document the limits of the evaluation.|Es werden noch keine abschließenden Schlussfolgerungen behauptet. Der Abschlussbericht vergleicht geplante Zielwerte mit Messergebnissen, erklärt Fehler und dokumentiert die Grenzen der Bewertung.
Known limits|Bekannte Grenzen
What comes next|Nächste Schritte
Continue with Infrastructure-Assisted Localisation from 15 December 2026. Build on the motion, frame, timing and experimental skills developed here.|Ab dem 15. Dezember 2026 folgt die infrastrukturgestützte Lokalisierung. Sie baut auf den hier erworbenen Kenntnissen zu Bewegung, Koordinatensystemen, Zeitverhalten und Experimenten auf.
Complete the final report and evidence package by 23 February 2027. Hardware assembly, wiring and commissioning remain a later stage requiring real equipment.|Abschlussbericht und Nachweispaket bis zum 23. Februar 2027 fertigstellen. Hardwareaufbau, Verdrahtung und Inbetriebnahme folgen später und benötigen reale Geräte.
Published engineering updates|Veröffentlichte Entwicklungsberichte
Previous|Zurück
Next|Weiter
Refresh published view|Veröffentlichte Ansicht aktualisieren
Copy showcase link|Portfolio-Link kopieren
Preview publication|Veröffentlichung prüfen
Download static snapshot|Statischen Stand herunterladen
Unpublish live snapshot|Veröffentlichung zurücknehmen
Simulation evidence only. Proposed targets are not achieved results.|Ausschließlich Simulationsnachweise. Geplante Zielwerte sind keine erreichten Ergebnisse.
Research chapters|Forschungskapitel
10 weeks|10 Wochen
published measurements|veröffentlichte Messungen
Navigation, fault handling & benchmarking|Navigation, Fehlerbehandlung und Benchmarking
Camera observations, sensor fusion & drift evaluation|Kamerabeobachtungen, Sensorfusion und Driftbewertung
Differential-drive kinematics|Kinematik des Differentialantriebs
Wheel odometry|Radodometrie
TF2 & timestamps|TF2 und Zeitstempel
Nav2 costmaps & control|Nav2-Kostenkarten und Regelung
Modern C++|Modernes C++
Fault diagnosis|Fehlerdiagnose
Experiment design|Versuchsplanung
Coordinate transforms|Koordinatentransformationen
Camera calibration|Kamerakalibrierung
OpenCV perception|Wahrnehmung mit OpenCV
Probability & covariance|Wahrscheinlichkeit und Kovarianz
Kalman filter & EKF|Kalman-Filter und EKF
Localisation vs SLAM|Lokalisierung und SLAM
Timing & sensor fusion|Zeitverhalten und Sensorfusion
Point-cloud processing|Punktwolkenverarbeitung
Research evaluation|Forschungsbewertung
Reproducible baseline|Reproduzierbare Ausgangsversion
Clean-workspace build and launch|Build und Start in einer sauberen Umgebung
Log dependencies, revision and a successful launch.|Abhängigkeiten, Revision und erfolgreichen Start dokumentieren.
Wheel-motion model|Radbewegungsmodell
All hand-checked cases pass|Alle manuell geprüften Fälle bestehen
Declare numerical tolerance; test straight, curved and in-place motion.|Numerische Toleranz festlegen; Geradeausfahrt, Kurvenfahrt und Drehung auf der Stelle testen.
Normal missions|Normale Missionen
≥27 / 30 successful trials|≥27 / 30 erfolgreiche Versuche
Ten trials on each of three predefined routes; no collision or intervention; within route timeout.|Je zehn Versuche auf drei festgelegten Routen; ohne Kollision oder Eingriff; innerhalb des Routenzeitlimits.
Waypoint accuracy|Wegpunktgenauigkeit
≤0.20 m; ≤10° where required|≤0.20 m; ≤10° falls erforderlich
Check every waypoint against aligned ground truth, not only Nav2 action success.|Jeden Wegpunkt mit ausgerichteter Ground Truth prüfen, zusätzlich zur Nav2-Erfolgsmeldung.
Blocked aisle with alternate route|Blockierter Gang mit Alternativroute
≥8 / 10 successful trials|≥8 / 10 erfolgreiche Versuche
Fix obstacle placement and onset; record replanning and completion.|Hindernisposition und Eintrittszeit festlegen; Neuplanung und Abschluss dokumentieren.
Completely blocked route|Vollständig blockierter Weg
10 / 10 bounded responses|10 / 10 begrenzte Reaktionen
Stop or enter bounded recovery, then report failure within the declared timeout.|Anhalten oder begrenzte Wiederherstellung starten; anschließend innerhalb des festgelegten Zeitlimits einen Fehler melden.
Scan-dropout command response|Befehlsreaktion bei Scan-Ausfall
10 / 10 at ≤0.5 s|10 / 10 bei ≤0.5 s
Measure time from last valid scan to final commanded velocity zero; record stopping distance separately.|Zeit vom letzten gültigen Scan bis zum endgültigen Geschwindigkeitsbefehl null messen; Anhalteweg separat dokumentieren.
Cross-track RMSE|RMSE der Querabweichung
≤0.15 m at ≤0.20 m/s|≤0.15 m bei ≤0.20 m/s
Use a fixed reference path, aligned ground truth and a declared sampling method.|Festgelegten Referenzpfad, ausgerichtete Ground Truth und definierte Abtastmethode verwenden.
Controlled improvement|Gezielte Verbesserung
≥15% lower tracking RMSE|≥15% geringerer Tracking-RMSE
Matched baseline/changed trials, without lower mission success or more collisions. Report absolute errors too.|Vergleichbare Versuche der Ausgangsversion und Änderung ohne geringeren Missionserfolg oder mehr Kollisionen. Auch absolute Fehler berichten.
Geometry and timestamps|Geometrie und Zeitstempel
All declared transform tests pass|Alle festgelegten Transformationstests bestehen
Known-point and inverse checks; camera optical axes, calibration and timestamps documented.|Bekannte Punkte und inverse Transformationen prüfen; optische Kameraachsen, Kalibrierung und Zeitstempel dokumentieren.
Camera-only pose accuracy|Posengenauigkeit nur mit Kameras
Position RMSE ≤0.10 m; yaw ≤5°|Positions-RMSE ≤0.10 m; Gierwinkel ≤5°
Evaluate within a fixed visible region; wrap yaw differences; independent simulation truth.|In einem festgelegten sichtbaren Bereich bewerten; Gierwinkeldifferenzen normalisieren; unabhängige Simulationsreferenz verwenden.
Observation availability|Beobachtungsverfügbarkeit
≥95% of eligible frames|≥95% der geeigneten Bilder
Define visibility and projected marker-size conditions before counting; retain invalid examples.|Sichtbarkeit und projizierte Markergröße vor der Auswertung festlegen; ungültige Beispiele aufbewahren.
Filtering implementation|Filterimplementierung
Working KF exercise + planar EKF|Funktionsfähige KF-Übung + planarer EKF
Document prediction, correction, covariance and chosen measurements; ground truth only for evaluation.|Prädiktion, Korrektur, Kovarianz und gewählte Messungen dokumentieren; Ground Truth nur zur Bewertung verwenden.
Drift reduction|Driftverringerung
≥30% lower position RMSE|≥30% geringerer Positions-RMSE
20 paired slip/noise trials versus wheel-only; report absolute errors and per-trial variation.|20 gepaarte Schlupf-/Rauschversuche im Vergleich zur Radodometrie; absolute Fehler und Streuung je Versuch berichten.
Clean-condition comparison|Vergleich ohne Störungen
No more than 10% worse RMSE|RMSE höchstens 10% schlechter
Separate clean trials; percentages unstable near zero baseline, so report metres too.|Separate Versuche ohne Störungen; Prozentwerte sind bei einer Ausgangsbasis nahe null instabil, deshalb auch Meter berichten.
Camera outage / reacquisition|Kameraausfall / erneute Erfassung
10 / 10 finite, crash-free runs|10 / 10 endliche, absturzfreie Durchläufe
Log uncertainty and error growth during declared outages and on reacquisition.|Unsicherheit und Fehlerwachstum während festgelegter Ausfälle und bei erneuter Erfassung dokumentieren.
Over-age observations|Überalterte Beobachtungen
100% follow declared handling policy|100% gemäß festgelegter Verarbeitungsregel
Fix the age threshold before tests; log measurement age and accept/reject decision.|Altersgrenze vor Tests festlegen; Messalter und Annahme-/Ablehnungsentscheidung protokollieren.
Point-cloud reduction|Punktwolkenreduktion
≥50% fewer points; surface error ≤0.05 m|≥50% weniger Punkte; Oberflächenfehler ≤0.05 m
Use an overhead depth cloud, fixed voxel size and selected static surfaces; define comparison.|Tiefenpunktwolke von oben, feste Voxelgröße und ausgewählte statische Oberflächen verwenden; Vergleich definieren.
Skip to content|Zum Inhalt springen
YOUR WORKSPACE|DEIN ARBEITSBEREICH
Timeline|Zeitplan
Weekly updates|Wöchentliche Berichte
Recruiter showcase|Portfolio für Bewerbungen
THE BUILD SEASON|DIE ENTWICKLUNGSPHASE
20 weeks. Two projects.|20 Wochen. Zwei Projekte.
Learn a little.|Etwas lernen.
Build something.|Etwas entwickeln.
Keep the evidence.|Nachweise sichern.
Setup & backups|Einrichtung und Sicherungen
Robotics learning workspace|Lernbereich Robotik
Workspace|Arbeitsbereich
Read-only plan|Plan ohne Bearbeitung
Private · cloud connected|Privat · Cloud verbunden
Local draft · this browser|Lokaler Entwurf · dieser Browser
Sign in with GitHub|Mit GitHub anmelden
Sign out|Abmelden
Practice → evidence → progress|Üben → Nachweise → Fortschritt
LEARN. BUILD. PROVE.|LERNEN. ENTWICKELN. BELEGEN.
Your next chapter in robotics.|Dein nächstes Kapitel in der Robotik.
Two focused projects. Small weekly wins. Evidence you can explain.|Zwei klar umrissene Projekte. Kleine wöchentliche Fortschritte. Nachweise, die du erklären kannst.
START WITH THE FOUNDATIONS|MIT DEN GRUNDLAGEN BEGINNEN
KEEP YOUR MOMENTUM|DRANBLEIBEN
Turn your learning into a working AMR.|Aus deinem Lernen einen funktionierenden AMR entwickeln.
One task closer to a tested robot.|Eine Aufgabe näher am getesteten Roboter.
Your first step: record your ROS environment, recover the logistics source, and establish a launchable baseline.|Dein erster Schritt: ROS-Umgebung dokumentieren, Logistik-Quellcode wiederherstellen und eine startfähige Ausgangsversion erstellen.
Continue Project 01|Projekt 01 fortsetzen
PLAN → NAVIGATE → MEASURE|PLANEN → NAVIGIEREN → MESSEN
You’re viewing the plan. Sign in to sync progress, or|Du siehst den Plan. Melde dich an, um Fortschritte zu synchronisieren, oder
Start a local draft|Lokalen Entwurf starten
while account setup is completed.|während die Kontoeinrichtung abgeschlossen wird.
Project tasks|Projektaufgaben
Learning + implementation|Lernen + Umsetzung
Measured targets|Gemessene Zielwerte
Results entered, not assumed|Eingetragene statt angenommene Ergebnisse
Weekly commitment|Wöchentlicher Aufwand
Sequential project schedule|Aufeinanderfolgender Projektplan
Open blockers|Offene Hindernisse
Review in weekly updates|In wöchentlichen Berichten prüfen
Your two projects|Deine zwei Projekte
View full timeline|Vollständigen Zeitplan ansehen
Next on your workbench|Als Nächstes auf deiner Werkbank
Log an update|Bericht eintragen
The bigger picture|Der Gesamtplan
Build a reproducible foundation|Eine reproduzierbare Grundlage schaffen
Warehouse navigation benchmark|Benchmark für Lagernavigation
Camera-assisted fusion results|Ergebnisse der kameragestützten Fusion
Tasks complete|Aufgaben abgeschlossen
Start here|Hier beginnen
Up next|Als Nächstes
In progress|In Bearbeitung
Not started|Nicht begonnen
Blocked|Blockiert
Complete|Abgeschlossen
Target|Zieltermin
Open project|Projekt öffnen
Edit project dates|Projekttermine ändern
NAVIGATION|NAVIGATION
ESTIMATION|SCHÄTZUNG
10 weeks · 8–10 hours/week|10 Wochen · 8–10 Stunden/Woche
Weekly roadmap|Wöchentlicher Fahrplan
Proposal & scope|Vorschlag und Umfang
Targets & results|Zielwerte und Ergebnisse
Skills & resources|Kompetenzen und Quellen
One concept, one implementation, one piece of evidence at a time.|Schritt für Schritt: ein Konzept, eine Umsetzung, ein Nachweis.
Show|Anzeigen
All weeks|Alle Wochen
Incomplete weeks|Unvollständige Wochen
Blocked weeks|Blockierte Wochen
No weeks match this filter.|Keine Wochen entsprechen diesem Filter.
Learn|Lernen
Build|Entwickeln
Evidence to save|Zu sichernde Nachweise
Session rhythm: 30 minutes study → 60 minutes practice → 15 minutes notes. Log what you understood, what failed, and the next experiment.|Sitzungsrhythmus: 30 Minuten lernen → 60 Minuten üben → 15 Minuten Notizen. Verständnis, Fehler und das nächste Experiment festhalten.
What you’ll build|Was du entwickeln wirst
Initial scope|Anfänglicher Umfang
How you’ll evaluate it|Wie du es bewerten wirst
Your final evidence pack|Dein abschließendes Nachweispaket
Interview checkpoint|Vorbereitung auf das Bewerbungsgespräch
Gaps that require later work|Lücken für spätere Arbeiten
Test|Test
Measured result|Messergebnis
Not measured|Noch nicht gemessen
Awaiting experiment|Experiment ausstehend
Meets target · self-assessed|Ziel erfüllt · selbst bewertet
Below target|Unter dem Zielwert
Inconclusive|Nicht eindeutig
Record|Eintragen
Evidence|Nachweis
Learn only what the next milestone needs, then use it in the project.|Lerne die Grundlagen für den nächsten Meilenstein und wende sie im Projekt an.
A deliberate twenty weeks.|Zwanzig bewusst geplante Wochen.
One main project at a time. Preserve the baseline when plans change.|Jeweils ein Hauptprojekt. Die ursprüngliche Planung bei Änderungen bewahren.
Sequential delivery plan|Aufeinanderfolgender Projektplan
8–10 hours / week|8–10 Stunden / Woche
Each block represents one baseline week. Revised task dates appear below.|Jeder Block steht für eine ursprünglich geplante Woche. Geänderte Aufgabentermine stehen unten.
Open roadmap|Fahrplan öffnen
Baseline due|Ursprünglicher Termin
Baseline|Ausgangsplanung
Current task dates|Aktuelle Aufgabentermine
Actual completion|Tatsächlicher Abschluss
THE ENGINEERING JOURNAL|DAS ENTWICKLUNGSTAGEBUCH
Make the learning visible.|Das Lernen sichtbar machen.
A short checkpoint after every session. A clear review every week.|Eine kurze Rückschau nach jeder Sitzung. Ein klarer Rückblick jede Woche.
+ Add update|+ Bericht hinzufügen
Edit|Bearbeiten
Prepared public summary|Vorbereitete öffentliche Zusammenfassung
selected for publication|zur Veröffentlichung ausgewählt
Your first update starts here.|Dein erster Bericht beginnt hier.
What did you understand today? What did you build or test? What will you try next?|Was hast du heute verstanden? Was hast du entwickelt oder getestet? Was probierst du als Nächstes?
Save changes|Änderungen speichern
Cancel|Abbrechen
Current target date|Aktueller Zieltermin
Actual completion date|Tatsächliches Abschlussdatum
Evidence URL|Nachweis-URL
Private learning / completion notes|Private Lern- / Abschlussnotizen
Private blocker or remaining gap|Privates Hindernis oder verbleibende Lücke
Reason if changing the target date|Begründung bei Änderung des Zieltermins
Actual measured result (include units and sample count)|Tatsächliches Messergebnis (mit Einheiten und Stichprobengröße)
Your assessment|Deine Bewertung
Not yet measured|Noch nicht gemessen
Meets target|Ziel erfüllt
Test conditions, baseline and limitations (included if published)|Testbedingungen, Ausgangsbasis und Grenzen (bei Veröffentlichung enthalten)
Evidence URL (included if published)|Nachweis-URL (bei Veröffentlichung enthalten)
Measurement date|Messdatum
Include this result in the next publication preview|Dieses Ergebnis in die nächste Veröffentlichungsvorschau aufnehmen
Weekly learning checkpoint|Wöchentlicher Lernrückblick
Date|Datum
Project|Projekt
Checkpoint title|Titel des Rückblicks
Private notes: understood topics, gaps, exercise results, blockers|Private Notizen: verstandene Themen, Lücken, Übungsergebnisse, Hindernisse
Private next step|Privater nächster Schritt
Public summary — only share what you want recruiters to read|Öffentliche Zusammenfassung — nur Inhalte teilen, die Bewerbungsleser sehen sollen
Include title, date and public summary in the next publication preview|Titel, Datum und öffentliche Zusammenfassung in die nächste Veröffentlichungsvorschau aufnehmen
Project target date|Projektzieltermin
Revised deadline|Geänderter Endtermin
Reason / scope change|Begründung / Umfangsänderung
Review your public snapshot|Öffentlichen Stand prüfen
Publish this snapshot|Diesen Stand veröffentlichen
WORKSPACE SETTINGS|EINSTELLUNGEN DES ARBEITSBEREICHS
Keep your work connected.|Deine Arbeit verbunden halten.
1. Private sign-in|1. Private Anmeldung
Refresh from cloud|Aus der Cloud aktualisieren
Use local draft|Lokalen Entwurf verwenden
2. Finish the one-time connection|2. Einmalige Verbindung einrichten
3. Back up your progress|3. Fortschritte sichern
Export private backup|Private Sicherung exportieren
Import backup|Sicherung importieren
Transfer local draft to cloud|Lokalen Entwurf in die Cloud übertragen
Publishing is a separate action|Veröffentlichung ist ein eigener Schritt
Review recruiter showcase|Bewerbungsportfolio prüfen
Connection settings|Verbindungseinstellungen
Overdue|Überfällig
weeks|Wochen
week|Woche
tasks|Aufgaben
of|von
hours/week|Stunden/Woche
`;
 for(const line of lines.trim().split('\n')){const n=line.indexOf('|');put(line.slice(0,n),line.slice(n+1));}
 const descriptions=[
 ['Ein Lagerroboter muss Liefermissionen abschließen, vorhersehbar auf blockierte Wege reagieren und fehlende Sensordaten erkennen.','Erweitere deinen Logistik-AMR zu einer reproduzierbaren ROS-2-Simulation. Beginne mit Standard-Nav2, ergänze Missionsaufzeichnung und begrenzte Fehlerreaktionen und bewerte anschließend eine gezielte Verbesserung.','Ein Roboter mit Differentialantrieb, drei feste Routen, Lokalisierung auf einer bestehenden Karte, eine zentrale Befehlsinstanz, wiederholbare Simulationsversuche und eine kleine C++-Diagnosekomponente.','Keine Sicherheitszertifizierung, Flottensteuerung oder fortgeschrittene Trajektorienvorhersage in der ersten Version. Reale Verdrahtung und Inbetriebnahme erfordern eine spätere Hardwarephase.','Revision, Welt, Karte, Roboterkontur, Start-/Zielposen, Routenzeitlimits, Toleranzen, Hinderniszeitplan und Zufallsstartwerte vor der Bewertung festlegen. Ausgerichtete Ground Truth der Simulation verwenden. Fehler, Kollisionen und Eingriffe ebenso wie erfolgreiche Abschlusszeiten erfassen. Ein Nullbefehl ist kein gemessener physischer Stillstand.'],
 ['Radbasierte Posenschätzungen driften. Können fest montierte Deckenkameras nützliche Beobachtungen liefern, die den Lokalisierungsfehler reduzieren?','Erweitere dein Deckenkameraprojekt um zwei kalibrierte Kameras, die einen am Roboter befestigten Marker beobachten. Vergleiche Radodometrie, Kameraschätzung und fusionierte Schätzung mit unabhängiger Ground Truth der Simulation.','Planare Posenschätzung, Markerbeobachtungen, eine kleine Kalman-Filter-Übung, eine geeignete EKF-Pipeline, Kalibrierungsempfindlichkeit, Verzögerungs-/Ausfalltests und eine gezielte Punktwolkenübung.','Die erste Version umfasst Lokalisierung und Fusion, kein lebenslanges SLAM. Radar-Kamera-Lernen, markerlose Wahrnehmung und dauerhafte Kartenaktualisierung folgen später. Die Punktwolkenaufgabe benötigt Tiefendaten.','Ground Truth außerhalb des Schätzers halten. Bekannte Simulationskalibrierung getrennt von geschätzter Kalibrierung angeben. Routen, Zufallsstartwerte, Sichtbereich, Markergröße, Kamerarate, Rausch-/Schlupf- und Ausfallzeitpläne festlegen. Trajektorien zeitlich und räumlich ausrichten. 20 gepaarte Versuche vergleichen; absoluten RMSE, Streuung und prozentuale Verbesserung berichten.']
 ];
 window.AMR.projects.forEach((p,i)=>['problem','build','scope','exclusions','protocol'].forEach((key,j)=>put(p[key],descriptions[i][j])));
 const weekData=[
 [
 ['Eine reproduzierbare Ausgangsversion wiederherstellen','Nodes, Topics, Launch-Dateien, Linux und Git. Ubuntu, ROS-Distribution und Simulator dokumentieren.','Quellcode von autonomous_logistics_sim wiederherstellen; Abhängigkeiten dokumentieren und Standard-Nav2 starten.','Umgebungsübersicht, festgelegte Revision und Startprotokoll.'],
 ['Radbewegung verstehen','Ungleiche Raddrehzahlen, Posenintegration, Schlupf und Drift erklären.','Einen Python-Rechner für Radbewegungen schreiben; Radschätzungen mit der Simulationsreferenz vergleichen.','Handrechnungen, Skript und Trajektoriendiagramm.'],
 ['Koordinatensysteme und Zeit explizit machen','Punkte zwischen map, odom, Basis- und Sensorsystemen transformieren; Zeitstempel und QoS untersuchen.','TF-Baum zeichnen und scan → Regler → endgültiges cmd_vel verfolgen; drei Schnittstellenfehler diagnostizieren.','TF-Diagramm, Topic-Übersicht und drei kurze Fehlerberichte.'],
 ['Eine messbare Mission aufzeichnen','Aufzeichnung/Wiedergabe lernen; Messung, Schätzung und unabhängige Referenz trennen.','Eine feste Route aufzeichnen; Posen zeitlich und räumlich ausrichten; Versuchs-CSV definieren.','Wiedergebbare Bag-Datei, ausgerichtete Posenkurve und Protokollentwurf.'],
 ['Navigation gezielt abstimmen','Roboterkontur, Inflation, globale Planung und Rückkopplungsregelung lernen.','Ausgangsversion mit einer Regler- oder Kostenkartenänderung vergleichen; Geschwindigkeitsschwingungen untersuchen.','Vergleichbare Diagramme zu Trackingfehler, Abstand und Geschwindigkeit.'],
 ['Blockierte Wege behandeln','Wiederherstellung, Zeitlimit und Missionsabbruch verstehen.','Alternativroute und vollständig blockierten Weg testen; begrenzte Wiederherstellung und Ergebnisprotokollierung ergänzen.','Hinderniszeitpläne und Fehler-/Wiederherstellungsverläufe.'],
 ['Veraltete Sensordaten testen','Datenaktualität, Befehlspriorisierung und Behandlung ungültiger Scans lernen.','Scan-Ausfall einfügen; endgültiges Befehlszeitverhalten prüfen; Bildverlust mit fehlender Linie vergleichen.','Zehn Ausfallprotokolle und Notizen zum gemessenen Anhalteweg.'],
 ['Eine kleine C++-Komponente ergänzen','C++-Typen, Funktionen, Grundlagen der Besitzverhältnisse, Callbacks und Build-Werkzeuge lernen.','Scan-Validierung oder Diagnose portieren; Python und C++ mit identischen Eingaben vergleichen.','Build-Anleitung und Bericht zu übereinstimmenden Ausgaben.'],
 ['Den festgelegten Benchmark ausführen','Gepaarte Vergleiche, Streuung und ehrliche Fehlererfassung lernen.','Protokoll festlegen; 30 normale Versuche und geplante Blockierungs-/Ausfalltests durchführen.','Roh-CSV, Bag-Dateien, Analyseskripte und Diagramme.'],
 ['Nachweise für Bewerbungsgespräche zusammenstellen','Architektur, Zielkonflikte, Grenzen und eigene Änderungen erklären.','Ergebnisse und Grenzen dokumentieren; kurze Demo aufnehmen; saubere Einrichtung wiederholen.','README, Reproduktionsprotokoll, Demo und Soll-Ist-Rückblick.']
 ],[
 ['Die Geometrie validieren','Rotationen, homogene Transformationen und inverse Verkettung lernen.','Lager-Ausgangsversion wiederverwenden; zwei Deckenkameras platzieren; bekannte Weltpunkte überprüfen.','TF-Diagramm, Kalibrierungsannahmen und Hin-/Rücktransformationsfehler.'],
 ['Kalibrieren und den Marker erkennen','Intrinsische Parameter, Verzerrung, Projektion und unabhängige Reprojektionstests lernen.','Marker bekannter Größe rendern und mit OpenCV erkennen; sichtbaren Arbeitsbereich festlegen.','Kalibrierungsdateien, Markerbilder und Fehlerbeispiele.'],
 ['Kamerabasierte Pose messen','Marker-Kamera-Pose in die Roboterpose im Weltkoordinatensystem umrechnen; Gierwinkel und Zeitstempel behandeln.','Beobachtungen aufzeichnen und Genauigkeit sowie Verfügbarkeit geeigneter Bilder bewerten.','Kameratrajektorie, RMSE und Anzahl geeigneter/gültiger Bilder.'],
 ['Intuition für Zustandsschätzung entwickeln','Mittelwert, Varianz, Bias, Kovarianz, Matrixoperationen sowie Prädiktion/Korrektur lernen.','Einen kleinen Python-Kalman-Filter mit synthetischen verrauschten Messungen und festen Zufallsstartwerten implementieren.','Roh-/Filter-/Referenzkurven und erläuterte Gleichungen.'],
 ['Planare Sensorfusion integrieren','EKF-Linearisierung, Messmodelle und korrelierte Eingaben verstehen.','Rad- und Deckenbeobachtungen kombinieren; korrelierte Messungen nicht doppelt zählen.','Dokumentierter Zustand und Modell, Kovarianzdiagramme und Fusionskonfiguration.'],
 ['Zeitverhalten und Sichtbarkeit herausfordern','Verzögerte Beobachtungen, Ablehnungsregeln und Unsicherheitswachstum verstehen.','Zehn Kameraausfälle und überalterte Messungen einfügen; erneute Erfassung testen.','Ausfallverläufe, Altersentscheidungen und Prüfungen auf endliche Ausgaben.'],
 ['Eine 3D-Punktwolke verarbeiten','Koordinatentransformationen, Voxelschwerpunkte und Oberflächenabstände lernen.','Tiefenpunktwolke von oben erfassen; transformieren und ausdünnen; Geometrieerhalt messen.','Punktzahlen, Vorher-/Nachher-Punktwolke und Oberflächenfehlerbericht.'],
 ['Kalibrierung und störungsfreie Bedingungen testen','Lokalisierung von SLAM unterscheiden; Konzepte der kleinsten Quadrate und Scan-Zuordnung untersuchen.','Kalibrierungsstörungen testen; Fusion mit störungsfreier Radodometrie vergleichen.','Empfindlichkeitsdiagramme, Fehler ohne Störungen und Grenzen.'],
 ['Die gepaarten Experimente durchführen','Kontrollierte Vergleiche, feste Zufallsstartwerte und Einschränkungen bei Ausgangswerten nahe null lernen.','20 gepaarte Schlupf-/Rauschversuche durchführen; Radodometrie, Kamera- und Fusionsschätzung vergleichen.','CSV je Versuch, absoluter RMSE, relative Verbesserung und Streuung.'],
 ['Ein belastbares Ergebnis veröffentlichen','Beobachtungsmodell, Unsicherheit, Fehler und nächste Forschungsschritte erklären.','Bericht schreiben, Demo aufnehmen und Pipeline reproduzieren; eine spätere Erweiterung auswählen.','Ausführbarer Code, Bericht, Demo, Nachweise und Projektrückblick.']
 ]];
 window.AMR.projects.forEach((p,i)=>p.weeks.forEach((w,j)=>[0,2,3,4].forEach((key,k)=>put(w[key],weekData[i][j][k]))));
 const resourceDescriptions=[
 '13.3.1 und 13.4 ansehen. Raddrehzahlen, Kurvenfahrt, Integration und Schlupf erklären.',
 'Translation, Rotation, Verkettung und inverse Transformationen lernen; drei bekannte Punkte transformieren.',
 'CLI-Grundlagen zu Topics, Services, Actions und Parametern durcharbeiten. Zuerst installierte Distribution prüfen.',
 'TF-Baum untersuchen; map → odom → base_link → Sensoren und Zuständigkeit für Zeitstempel erklären.',
 'Eine Mission aufzeichnen, untersuchen und wiedergeben; Konfiguration und Software-Revision sichern.',
 'Inflation, Roboterkonturen und Reglerauswahl untersuchen. Dies ist Rolling-Dokumentation: Konzepte nutzen und vor Einstellungen die eigene Version prüfen.',
 'Nach Typen, Funktionen und Callbacks einen kleinen rclcpp-Node bauen; Ausgaben mit Python vergleichen.',
 'Mit Mittelwert, Varianz und diskretem Filter beginnen; Prädiktion und Korrektur vor dem EKF implementieren.',
 'Einführung in SLAM, kleinste Quadrate und ICP in dieser Reihenfolge auswählen. Kartierung von Lokalisierung unterscheiden.',
 'Intrinsische Parameter, Verzerrung und Reprojektionsfehler lernen; mit unabhängigen Punkten validieren. Installierte OpenCV-Version berücksichtigen.',
 'Marker bekannter Größe erkennen; Pose mit kalibrierter Geometrie schätzen. API-Kompatibilität mit der OpenCV-Version prüfen.',
 'Transformierte Punktwolke ausdünnen; erhaltene Geometrie statt nur Punktzahl messen.'
 ];
 Object.values(window.AMR.resources).forEach((r,i)=>put(r[2],resourceDescriptions[i]));
 [['Free · video + text','Kostenlos · Video + Text'],['Free · video','Kostenlos · Video'],['Free · official docs','Kostenlos · offizielle Dokumentation'],['Free · Humble source','Kostenlos · Humble-Quelltext'],['Free · version check required','Kostenlos · Versionsprüfung erforderlich'],['Free · PDF','Kostenlos · PDF'],['Free · lectures','Kostenlos · Vorlesungen'],['Free · tutorial','Kostenlos · Tutorial'],['Free · C++ tutorial','Kostenlos · C++-Tutorial'],['Modern Robotics · Chapter 13','Modern Robotics · Kapitel 13'],['Modern Robotics · Transformations','Modern Robotics · Transformationen'],['ROS 2 Humble · Introducing TF2','ROS 2 Humble · Einführung in TF2'],['ROS 2 Humble · Record and replay','ROS 2 Humble · Aufzeichnen und wiedergeben'],['Nav2 · Tuning guide','Nav2 · Leitfaden zur Abstimmung'],['Welch & Bishop · Kalman filter','Welch & Bishop · Kalman-Filter'],['OpenCV · Camera calibration','OpenCV · Kamerakalibrierung'],['OpenCV · ArUco detection','OpenCV · ArUco-Erkennung'],['PCL · VoxelGrid filtering','PCL · VoxelGrid-Filterung']].forEach(([en,de])=>put(en,de));
[["complete", "abgeschlossen"], ["Used in", "Verwendet in"], ["Used in the frame-validation exercises.", "Verwendet in den Übungen zur Koordinatensystemvalidierung."], ["06 OCTOBER 2026", "06. OKTOBER 2026"], ["15 DECEMBER 2026", "15. DEZEMBER 2026"], ["23 FEBRUARY 2027", "23. FEBRUAR 2027"], ["OCT 2026 — FEB 2027", "OKT 2026 — FEB 2027"], ["Completion means evidence, not videos watched. Proposed numerical targets are learning goals—not achieved results or industry standards.", "Abschluss bedeutet belegte Ergebnisse statt nur angesehener Videos. Geplante numerische Zielwerte sind Lernziele, keine erreichten Ergebnisse oder Branchenstandards."], ["Runnable code with a pinned revision · clean setup instructions · short demo · frozen test protocol · raw per-trial results · analysis scripts and plots · failure cases · limitations · planned versus actual completion dates.", "Ausführbarer Code mit festgelegter Revision · klare Einrichtungsschritte · kurze Demo · festgelegtes Testprotokoll · Rohdaten je Versuch · Analyseskripte und Diagramme · Fehlerfälle · Grenzen · geplante und tatsächliche Abschlusstermine."], ["Explain how a missing scan reaches the final velocity command. Show one failure log, the change you made, and the matched test result.", "Erkläre, wie ein fehlender Scan den endgültigen Geschwindigkeitsbefehl beeinflusst. Zeige ein Fehlerprotokoll, deine Änderung und das zugehörige Testergebnis."], ["Explain the measurement model and uncertainty. Show how you kept ground truth out of the filter, then compare one successful and one failed fusion run.", "Erkläre das Messmodell und die Unsicherheit. Zeige, wie Ground Truth aus dem Filter ausgeschlossen blieb, und vergleiche einen erfolgreichen und einen fehlgeschlagenen Fusionsdurchlauf."], ["These two simulation projects develop software and evaluation skills. Physical assembly, wiring and commissioning need real equipment. Dynamic-object prediction, radar–camera learning, semantics and reinforcement learning remain later specialisations.", "Diese zwei Simulationsprojekte entwickeln Software- und Bewertungskompetenzen. Physischer Aufbau, Verdrahtung und Inbetriebnahme benötigen reale Geräte. Vorhersage dynamischer Objekte, Radar-Kamera-Lernen, Semantik und Reinforcement Learning bleiben spätere Spezialisierungen."], ["These are proposed acceptance targets. No result is achieved until you record measurements and evidence. Freeze the test protocol before evaluating improvements.", "Dies sind geplante Abnahmekriterien. Ein Ergebnis gilt erst mit dokumentierten Messungen und Nachweisen als erreicht. Das Testprotokoll vor der Bewertung von Verbesserungen festlegen."], ["Improvement (%) = 100 × (baseline RMSE − new RMSE) / baseline RMSE. Also report absolute error in metres; a near-zero baseline makes percentages unstable.", "Verbesserung (%) = 100 × (Ausgangs-RMSE − neuer RMSE) / Ausgangs-RMSE. Auch den absoluten Fehler in Metern berichten; eine Ausgangsbasis nahe null macht Prozentwerte instabil."], ["Free learning path throughout. The Construct is an optional supplement; no subscription is required. ROS links target Humble; Nav2 links use Rolling concepts. Confirm the installed ROS/OpenCV versions before copying commands or configuration.", "Durchgehend kostenloser Lernpfad. The Construct ist eine optionale Ergänzung; ein Abonnement ist nicht nötig. ROS-Links beziehen sich auf Humble; Nav2-Links verwenden Rolling-Konzepte. Installierte ROS-/OpenCV-Versionen vor Übernahme von Befehlen oder Konfiguration prüfen."], ["Record understood topics, remaining gaps, experiment outcomes, blockers, next steps and scope changes. Private notes stay private; only a separate public summary can enter the showcase.", "Verstandene Themen, verbleibende Lücken, Versuchsergebnisse, Hindernisse, nächste Schritte und Umfangsänderungen festhalten. Private Notizen bleiben privat; nur eine separate öffentliche Zusammenfassung erscheint im Portfolio."], ["Use your YAGNADATTA25 GitHub account. Your Supabase dashboard login is separate from this website’s login.", "Verwende dein GitHub-Konto YAGNADATTA25. Die Anmeldung am Supabase-Dashboard ist von der Anmeldung an dieser Website getrennt."], ["Local drafts stay on this browser. Cloud mode loads and saves private records in Supabase. A failed save stays in the open form.", "Lokale Entwürfe bleiben in diesem Browser. Der Cloud-Modus lädt und speichert private Datensätze in Supabase. Bei fehlgeschlagener Speicherung bleibt das Formular offen."], ["Create a public GitHub repository named", "Ein öffentliches GitHub-Repository erstellen mit dem Namen"], ["and upload this website’s files.", "und die Dateien dieser Website hochladen."], ["In repository Settings → Pages, deploy from", "In den Repository-Einstellungen → Pages veröffentlichen aus"], ["Create a", "Erstelle eine"], [". Homepage: your deployed Pages URL. Callback:", ". Homepage: deine veröffentlichte Pages-URL. Callback:"], [", enable GitHub and enter the OAuth Client ID and secret there.", "GitHub aktivieren und dort OAuth-Client-ID und Geheimnis eintragen."], ["In Supabase Auth URL Configuration, set Site URL and allowed redirect URL to the exact deployed Pages URL including the trailing slash.", "In Supabase Auth URL Configuration die Site URL und erlaubte Weiterleitungs-URL auf die exakte veröffentlichte Pages-URL einschließlich abschließendem Schrägstrich setzen."], ["Return here and sign in. Use Refresh from cloud on a second computer to verify a saved test update.", "Hierher zurückkehren und anmelden. Auf einem zweiten Computer „Aus der Cloud aktualisieren“ verwenden, um einen gespeicherten Testbericht zu prüfen."], ["Never put the OAuth secret in website files. The bundled Supabase publishable key is intended for browser use; database policies enforce private access.", "Das OAuth-Geheimnis niemals in Website-Dateien ablegen. Der mitgelieferte veröffentlichbare Supabase-Schlüssel ist für Browser gedacht; Datenbankrichtlinien sichern den privaten Zugriff."], ["Export includes private notes and evidence links. Keep the JSON file private. Import opens a local draft for review before you choose to transfer it to the cloud.", "Der Export enthält private Notizen und Nachweislinks. Die JSON-Datei privat aufbewahren. Der Import öffnet einen lokalen Entwurf zur Prüfung vor einer möglichen Cloud-Übertragung."], ["Transfer merges local records into your cloud workspace after confirmation. Existing matching records are replaced; unrelated cloud records remain.", "Nach Bestätigung werden lokale Datensätze mit dem Cloud-Arbeitsbereich zusammengeführt. Passende vorhandene Datensätze werden ersetzt; andere Cloud-Datensätze bleiben erhalten."], ["Weekly notes and task blockers are private. Public snapshots contain milestone dates/status, only results explicitly selected for publication, and only selected public update summaries. Preview the exact content before publishing. A downloaded static snapshot remains readable if the database is unavailable.", "Wöchentliche Notizen und Aufgabenhindernisse sind privat. Öffentliche Stände enthalten Meilensteintermine/-status sowie nur ausdrücklich ausgewählte Ergebnisse und öffentliche Zusammenfassungen. Den genauen Inhalt vor Veröffentlichung prüfen. Ein heruntergeladener statischer Stand bleibt auch ohne verfügbare Datenbank lesbar."], ["Baseline start", "Ursprünglicher Start"], ["Original deadline", "Ursprünglicher Endtermin"], ["Completion defaults to today when you mark the task complete.", "Beim Abschließen der Aufgabe wird standardmäßig das heutige Datum verwendet."], ["This changes the project deadline only. Update individual weekly task dates separately; Project 2 will not shift automatically.", "Dies ändert nur den Projektendtermin. Einzelne wöchentliche Aufgabentermine separat ändern; Projekt 2 verschiebt sich nicht automatisch."], ["Add a reason for changing the date.", "Bitte eine Begründung für die Terminänderung ergänzen."], ["Add a completion note or evidence link before marking complete.", "Vor dem Abschließen eine Abschlussnotiz oder einen Nachweislink ergänzen."], ["Actual completion cannot be in the future.", "Das tatsächliche Abschlussdatum darf nicht in der Zukunft liegen."], ["Use an https:// or http:// evidence link.", "Einen Nachweislink mit https:// oder http:// verwenden."], ["Measured results need a value, test conditions and a valid evidence link.", "Messergebnisse benötigen einen Wert, Testbedingungen und einen gültigen Nachweislink."], ["A measurement date cannot be in the future.", "Das Messdatum darf nicht in der Zukunft liegen."], ["Write a public summary before selecting it for publication.", "Vor der Auswahl zur Veröffentlichung eine öffentliche Zusammenfassung schreiben."], ["Deadline must be on or after the baseline start.", "Der Endtermin muss am oder nach dem ursprünglichen Start liegen."], ["Record why the deadline is changing.", "Den Grund für die Änderung des Endtermins festhalten."], ["Sign in or start a local draft to edit.", "Zum Bearbeiten anmelden oder einen lokalen Entwurf starten."], ["Sign in to edit, or use “Start a local draft” while setup is pending.", "Zum Bearbeiten anmelden oder während der Einrichtung „Lokalen Entwurf starten“ verwenden."], ["Saved on this browser only. Export a backup before switching computers.", "Nur in diesem Browser gespeichert. Vor einem Computerwechsel eine Sicherung exportieren."], ["Local draft mode. Changes stay on this browser until transferred.", "Lokaler Entwurfsmodus. Änderungen bleiben bis zur Übertragung in diesem Browser."], ["Showcase link copied.", "Portfolio-Link kopiert."], ["Public snapshot published.", "Öffentlicher Stand veröffentlicht."], ["No measured results published.", "Keine Messergebnisse veröffentlicht."], ["No measurements selected for publication.", "Keine Messungen zur Veröffentlichung ausgewählt."], ["No updates published.", "Keine Berichte veröffentlicht."], ["Published snapshot", "Veröffentlichter Stand"], ["Published measurements", "Veröffentlichte Messungen"], ["Engineering updates", "Entwicklungsberichte"], ["PROPOSED PROJECT", "GEPLANTES PROJEKT"], ["PROJECT EVIDENCE", "PROJEKTNACHWEISE"], ["Building reliable mobile robots.", "Zuverlässige mobile Roboter entwickeln."], ["No progress has been published yet. The project proposals below are planned work, not completed achievements.", "Es wurden noch keine Fortschritte veröffentlicht. Die folgenden Projektvorschläge sind geplante Arbeiten, keine abgeschlossenen Leistungen."], ["This publishes milestone dates/status, selected results and selected public summaries. Private task notes, blockers and journal notes are excluded. Evidence links will be visible to everyone.", "Dies veröffentlicht Meilensteintermine/-status, ausgewählte Ergebnisse und öffentliche Zusammenfassungen. Private Aufgabennotizen, Hindernisse und Tagebucheinträge bleiben ausgeschlossen. Nachweislinks sind für alle sichtbar."]].forEach(([en,de])=>put(en,de));
Object.entries(d).forEach(([en,de])=>{if(en.length>3)d[en.toUpperCase()]=de.toUpperCase();});
})();
