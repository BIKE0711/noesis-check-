import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  RotateCcw,
  Layers,
  Brain,
  FileText
} from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    category: 'strategie',
    title: 'Strategische Ausrichtung',
    question: 'Welche Herausforderung prägt die Situation in Ihrer Organisation aktuell am stärksten?',
    description: 'Wählen Sie die Aussage, die Ihre aktuelle Realität am ehesten beschreibt.',
    options: [
      { 
        id: 'A', 
        label: 'Bewährte Markt- und Steuerungsstrategien greifen nicht mehr zuverlässig.', 
        scores: { transformation: 3, fuehrung: 1, team: 1 } 
      },
      { 
        id: 'B', 
        label: 'Hohe Dynamik & Ungewissheit erzeugen Überforderung bei Führungskräften.', 
        scores: { transformation: 1, fuehrung: 3, team: 2 } 
      },
      { 
        id: 'C', 
        label: 'Silos, Reibungsverluste und Konflikte hemmen die Zusammenarbeit.', 
        scores: { transformation: 1, fuehrung: 1, team: 3 } 
      },
      { 
        id: 'D', 
        label: 'Wir müssen KI sinnvoll und verhältnismäßig in Kultur & Prozesse integrieren.', 
        scores: { transformation: 2, fuehrung: 2, team: 1 } 
      }
    ]
  },
  {
    id: 2,
    category: 'fokus',
    title: 'Transformationsfokus',
    question: 'Wo sehen Sie den dringlichsten Hebel für nachhaltiges Umlernen?',
    description: 'Mehrfachauswahl möglich, um Schwerpunkte zu setzen.',
    type: 'multiple',
    options: [
      { 
        id: 'A', 
        label: 'Führungskräfte für Ambiguitätstoleranz und Ungewissheit befähigen', 
        scores: { fuehrung: 3 } 
      },
      { 
        id: 'B', 
        label: 'Arbeitspsychologische & Hypno-systemische Methoden in Teams verankern', 
        scores: { team: 3 } 
      },
      { 
        id: 'C', 
        label: 'Organisationskultur flexibler auf kontinuierlichen Wandel ausrichten', 
        scores: { transformation: 3 } 
      },
      { 
        id: 'D', 
        label: 'Data Literacy & "Human-in-the-Loop"-Prinzipien etablieren', 
        scores: { transformation: 2, fuehrung: 1 } 
      }
    ]
  },
  {
    id: 3,
    category: 'context_1',
    title: 'Kontext & Hintergrund',
    type: 'text',
    question: 'Wie würden Sie Ihr aktuelles Hauptanliegen in eigenen Worten beschreiben?',
    placeholder: 'Welche konkreten Symptome oder Ereignisse machen die Veränderung notwendig?...',
    hint: 'Diese Angabe hilft unseren Beratern, sich optimal auf das Erstgespräch vorzubereiten.'
  },
  {
    id: 4,
    category: 'kultur',
    title: 'Lern- & Fehlerkultur',
    question: 'Wie wird in Ihrer Organisation derzeit mit Ungewissheit und Fehlern umgegangen?',
    options: [
      { 
        id: 'A', 
        label: 'Fehler werden eher vermieden; Sicherheit steht über Experimentierfreude.', 
        scores: { transformation: 2, team: 2 } 
      },
      { 
        id: 'B', 
        label: 'Es gibt Einzelinitiativen, aber kein strukturiertes System für Umlernen.', 
        scores: { fuehrung: 2, transformation: 1 } 
      },
      { 
        id: 'C', 
        label: 'Wir sind offen für Neues, scheitern aber oft an der nachhaltigen Umsetzung.', 
        scores: { team: 3, fuehrung: 1 } 
      }
    ]
  },
  {
    id: 5,
    category: 'context_2',
    title: 'Zielbild & Erwartung',
    type: 'text',
    question: 'Woran würden Sie festmachen, dass die Begleitung erfolgreich war?',
    placeholder: 'Welche Verhaltensweisen oder Ergebnisse möchten Sie nach 6–12 Monaten sehen?...',
    hint: 'Beschreiben Sie gerne das angestrebte Erleben für Führungskräfte
