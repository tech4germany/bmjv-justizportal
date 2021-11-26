import { t } from '@lingui/macro';

// replace:
// 1: note: t`\{ICON:([a-z]*)\}\\n* with icon: '$1',\nnote: t`
// 2: note: t`(\{[a-z':]*\})\\n* with config: '$1",\nnote: t`
// 2: note: 'ICON:([a-z]*)' with icon: '$1'
// 3: \\n with \n
// 4: t`{EXIT}` with '{EXIT}'
// 4: t`{CONTINUE}` with '{CONTINUE}'

export const Data = {
  root: {
    data: {
      id: 'bopmq7968674',
      created: 1633091151499,
      text: 'Solution Explorer',
    },
    children: [
      {
        data: {
          id: 'ceppclbpk3s0',
          created: 1633257177722,
          text: t`Wohnen`,
          icon: 'FaHome',
        },
        children: [
          {
            data: {
              id: 'ceppdowbfco0',
              created: 1633257263863,
              text: t`Mängel in der Wohnung`,
              icon: 'FaHammer',
              config: '{"caseType":"mietmangel"}',
              note: t`### Was ist ein **Mietmangel**?

Ihre Vermieter:in muss Ihnen Ihre Wohnung in einem geeigneten Zustand überlassen und erhalten. Ist die **Wohnung in einem erheblich schlechteren Zustand** als erwartet werden kann, liegt vielleicht ein Mangel vor. Dann können Sie verschiedene Ansprüche haben, beispielsweise auf Beseitigung des Mangels oder Mietminderung.`,
            },
            children: [
              {
                data: {
                  id: 'ceppdwxwwig0',
                  created: 1633257281374,
                  text: t`Schimmel`,
                  icon: 'MdGrain',
                  config: '{"caseTopic":"Schimmel"}',
                  note: t`### Wohnungsmängel durch Schimmel
Schimmelpilze sehen aus wie schwarze Flecken und entstehen bei zu hoher Feuchtigkeit in der Wohnung, beispielsweise durch seltenes Lüften, sparsames Heizen oder Baumängel. Schimmel kann sich sowohl negativ auf die Gesundheit, als auch die Wände der Wohnung auswirken. [Mehr können Sie auf der Webseite der Verbraucherzentrale erfahren.](https://www.verbraucherzentrale.de/wissen/umwelt-haushalt/wohnen/schimmel-in-der-wohnung-6794#)`,
                },
                children: [
                  {
                    data: {
                      id: 'cerik08cssg0',
                      created: 1633441130864,
                      text: t`Haben Sie den Schimmel verursacht?`,
                      note: t`Schimmel in der Wohnung kann durch Baufehler entstehen, für die Sie nicht verantwortlich sind. Allerdings kann auch seltenes Lüften und Heizen oder das Trocknen von Wäsche zu Schimmel führen.

Wenn Sie durch Ihr Verhalten den Schimmel ganz oder teilweise mitverursacht haben, bestehen in der Regel keine Ansprüche gegen ihre Vermieter:in.`,
                    },
                    children: [
                      {
                        data: {
                          id: 'cepy74jpz1c0',
                          created: 1633282139370,
                          text: '{EXIT}',
                          priority: 3,
                          note: t`Wenn Sie den Mangel selbst verursacht haben, können vermutlich keine rechtlichen Ansprüche durchgesetzt werden. Eine Ausnahme ist, wenn Versicherungen für den Eintritt eines Mangels bestehen. Zahlen Sie über Ihre Betriebskosten zum Beispiel eine Gebäudeversicherung mit, dann muss diese bei Schäden zahlen. 

In jedem Fall sollten Sie Ihre Vermieter:in kontaktieren, damit der Mangel beseitigt werden kann. [Nutzen Sie dafür die Vorlage unserer Mängelanzeige](/formular?mangelanzeige&mangelart=schimmel).`,
                        },
                        children: [],
                      },
                      {
                        data: {
                          id: 'cerik08cssg1',
                          created: 1633441130864,
                          text: t`Gab es den Schimmel schon bei Unterzeichnung des Mietvertrags?`,
                          note: t`Wenn Sie einen Mangel schon bei Unterschrift des Mietvertrags kannten, aber dabei nicht um Verbesserung gebeten haben, können Ansprüche ausgeschlossen sein. 

Anders ist die Situation, wenn der Mangel erst später entstanden ist, oder bei Vetragsabschluss verschwiegen oder sogar versteckt wurde.  `,
                          priority: 1,
                        },
                        children: [
                          {
                            data: {
                              id: 'cepy74jpz1c1',
                              created: 1633282139370,
                              text: '{EXIT}',
                              priority: 3,
                              hyperlink: null,
                              hyperlinkTitle: null,
                              note: t`Wenn der Mangel schon bei Vertragsschluss bekannt war, können vermutlich keine rechtlichen Ansprüche durchgesetzt werden. Sie können aber den direkten Austausch mit Ihrer Vermieter:in suchen.`,
                            },
                            children: [],
                          },
                          {
                            data: {
                              id: 'ceybn9kuanc0',
                              created: 1634132558230,
                              text: t`Besteht der Schimmel aktuell noch?`,
                              priority: 1,
                              note: t`Diese Frage hilft uns, Ihnen die richtigen nächsten Schritte zu empfehlen. Wenn der Mangel noch besteht, erklären wir Ihnen beispielsweise, wie Sie diesen beseitigen lassen können.`,
                            },
                            children: [
                              {
                                data: {
                                  id: 'ceybwmd2ejk0',
                                  created: 1634133291336,
                                  text: t`Haben Sie den Schimmel Ihrer Vermieter:in schriftlich gemeldet?`,
                                  priority: 3,
                                  note: t`Wenn der Mangel noch besteht, sollten Sie diesen zuerst Ihrer Vermieter:in melden, um ihn beseitigen zu lassen. Sie sollten dabei eine schriftliche Mängelanzeige verschicken, um einen Nachweis zu haben.

Wenn Sie das noch nicht getan haben, helfen wir Ihnen dabei.`,
                                },
                                children: [
                                  {
                                    data: {
                                      id: 'ceybx2wl2w00',
                                      created: 1634133327345,
                                      text: t`Haben Sie Ihrer Vermieter:in eine realistische Frist gesetzt, um den Schimmel zu entfernen?`,
                                      priority: 3,
                                      note: t`Wenn Sie den Mangel schon gemeldet haben, ist entscheidend, ob Sie dabei eine realistische Frist zur Beseitigung gesetzt haben. In der Regel sollten 2-3 Wochen ausreichen, um den Mangel zu beheben oder Ihnen zumindest einen Termin für eine Reperatur zu nennen. 

Wenn Sie keine oder eine zu kurze Frist gesetzt haben, helfen wir Ihnen, ein neues Schreiben aufzusetzen.`,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'ceybxmil1c00',
                                          created: 1634133370034,
                                          text: t`Ist die Frist zur Mängelbeseitigung schon abgelaufen?`,
                                          priority: 3,
                                          note: t`Wenn Sie Ihrer Vermieter:in eine realistische Frist gesetzt haben, müssen Sie ihr zunächst bis dahin Zeit für die Beseitigung geben. Danach haben Sie zusätzliche rechtliche Ansprüche.`,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cez5kt8sw2o0',
                                              created: 1634216999243,
                                              text: '{EXIT}',
                                              priority: 1,
                                              note: t`Sie haben Ihren Mangel angezeigt und eine Frist zur Beseitigung gesetzt? Dann müssen Sie zunächst abwarten, bis diese abgelaufen ist. Falls der Mangel danach noch nicht beseitigt wurde, können Sie weitere Schritte unternehmen und zum Beispiel den Mangel selbst beseitigen.`,
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'ceybygg5cs80',
                                              created: 1634133435190,
                                              text: t`Wurde durch den Schimmel Eigentum von Ihnen beschädigt?`,
                                              priority: 3,
                                              note: t`Wenn durch den Mangel nicht nur an der Wohnung, sondern auch an Ihrem Eigentum Schäden entstanden sind, haben sie vielleicht Ansprüche auf Schadensersatz.

Zusätzliche Schäden können sein, wenn durch den Mangel zum Beispiel eigene Möbel oder Kleidung beschädigt wurden.`,
                                            },
                                            children: [
                                              {
                                                data: {
                                                  id: 'ceybyumxibs0',
                                                  created: 1634133466075,
                                                  text: '{CONTINUE}',
                                                  priority: 1,
                                                  config:
                                                    '{"nextsteps": ["Doku","Vermieterschreiben Überprüfung","Klage"],"entitlements":["Mietminderung","Mängelbeseitigung"]}',
                                                },
                                                children: [],
                                              },
                                              {
                                                data: {
                                                  id: 'ceybyyhkqn40',
                                                  created: 1634133474458,
                                                  text: '{CONTINUE}',
                                                  priority: 3,
                                                  config:
                                                    '{"nextsteps": ["Doku","Vermieterschreiben Überprüfung","Klage"],"entitlements":["Mietminderung","Mängelbeseitigung","Schadensersatz"]}',
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        data: {
                                          id: 'ceybygg5cs81',
                                          created: 1634133435190,
                                          text: t`Wurde durch den Schimmel Eigentum von Ihnen beschädigt?`,
                                          priority: 1,
                                          note: t`Wenn durch den Mangel nicht nur an der Wohnung, sondern auch an Ihrem Eigentum Schäden entstanden sind, haben sie vielleicht Ansprüche auf Schadensersatz.

Zusätzliche Schäden können sein, wenn durch den Mangel zum Beispiel eigene Möbel oder Kleidung beschädigt wurden.`,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'ceybyumxibs1',
                                              created: 1634133466075,
                                              text: '{CONTINUE}',
                                              priority: 1,
                                              config:
                                                '{"nextsteps": ["Doku","Vermieterschreiben"],"entitlements":["Mietminderung","Mängelbeseitigung"]}',
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'ceybyyhkqn41',
                                              created: 1634133474458,
                                              text: '{CONTINUE}',
                                              priority: 3,
                                              config:
                                                '{"nextsteps": ["Doku","Vermieterschreiben"],"entitlements":["Mietminderung","Mängelbeseitigung","Schadensersatz"]}',
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    data: {
                                      id: 'ceybygg5cs82',
                                      created: 1634133435190,
                                      text: t`Wurde durch den Schimmel Eigentum von Ihnen beschädigt?`,
                                      priority: 1,
                                      note: t`Wenn durch den Mangel nicht nur an der Wohnung, sondern auch an Ihrem Eigentum Schäden entstanden sind, haben sie vielleicht Ansprüche auf Schadensersatz.

Zusätzliche Schäden können sein, wenn durch den Mangel zum Beispiel eigene Möbel oder Kleidung beschädigt wurden.`,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'ceybyumxibs2',
                                          created: 1634133466075,
                                          text: '{CONTINUE}',
                                          priority: 1,
                                          config:
                                            '{"nextsteps": ["Doku","Vermieterschreiben"],"entitlements":["Mietminderung","Mängelbeseitigung"]}',
                                        },
                                        children: [],
                                      },
                                      {
                                        data: {
                                          id: 'ceybyyhkqn42',
                                          created: 1634133474458,
                                          text: '{CONTINUE}',
                                          priority: 3,
                                          config:
                                            '{"nextsteps": ["Doku","Vermieterschreiben"],"entitlements":["Mietminderung","Mängelbeseitigung","Schadensersatz"]}',
                                        },
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                data: {
                                  id: 'ceybne7ha3c0',
                                  created: 1634132568306,
                                  text: t`Haben Sie den Schimmel selbst beseitigt, und sind Ihnen dabei Kosten entstanden?`,
                                  priority: 1,
                                  note: t`Wenn Ihre Vermieter:in auch nach Aufforderung und Ablauf einer realistischen Frist den Mangel nicht beseitigt, oder es sich um eine Not- oder Eilmaßnahme handelt, können Sie den Mangel auch selbst beseitigen und sich die Kosten dafür erstatten lassen.`,
                                },
                                children: [
                                  {
                                    data: {
                                      id: 'ceybnwr6fow0',
                                      created: 1634132608680,
                                      text: t`Haben Sie den Schimmel bei Ihrer Vermieter:in angezeigt und angekündigt, Ihre Miete nur unter Vorbehalt weiter zu zahlen (Mietminderung)?`,
                                      priority: 3,
                                      note: t`Wenn Sie angekündigt haben, Ihre Miete nur unter Vorbehalt zu zahlen, kann Ihnen von der Ankündigung bis zur Beseitigung des Mangels sein Anspruch auf Mietminderung zustehen.`,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'ceybo8p0lww0',
                                          created: 1634132634670,
                                          text: t`Wurde durch den Schimmel Eigentum von Ihnen beschädigt?`,
                                          priority: 3,
                                          note: t`Wenn durch den Mangel nicht nur an der Wohnung, sondern auch an Ihrem Eigentum Schäden entstanden sind, haben sie vielleicht Ansprüche auf Schadensersatz.

Zusätzliche Schäden können sein, wenn durch den Mangel zum Beispiel eigene Möbel oder Kleidung beschädigt wurden.`,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cepy74jpz1c3',
                                              created: 1633282139370,
                                              text: '{CONTINUE}',
                                              priority: 3,
                                              hyperlink: null,
                                              hyperlinkTitle: null,
                                              config:
                                                '{"nextsteps": ["Vermieterschreiben Überprüfung","Klage"],"entitlements":["Mietminderung","Schadensersatz","Aufwendungsersatz"]}',
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'cez5c2rjzjc0',
                                              created: 1634216314690,
                                              text: '{CONTINUE}',
                                              priority: 1,
                                              config:
                                                '{"nextsteps": ["Vermieterschreiben Überprüfung","Klage"],"entitlements":["Mietminderung","Aufwendungsersatz"]}',
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        data: {
                                          id: 'cez5s6nf8140',
                                          created: 1634217576974,
                                          text: t`Wurde durch den Schimmel Eigentum von Ihnen beschädigt?`,
                                          priority: 1,
                                          note: t`Wenn durch den Mangel nicht nur an der Wohnung, sondern auch an Ihrem Eigentum Schäden entstanden sind, haben sie vielleicht Ansprüche auf Schadensersatz.

Zusätzliche Schäden können sein, wenn durch den Mangel zum Beispiel eigene Möbel oder Kleidung beschädigt wurden.`,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cez5sxzf70o0',
                                              created: 1634217636473,
                                              text: '{CONTINUE}',
                                              priority: 3,
                                              config:
                                                '{"nextsteps": ["Vermieterschreiben Überprüfung","Klage"],"entitlements":["Schadensersatz","Aufwendungsersatz"]}',
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'cez5t18xyd40',
                                              created: 1634217643579,
                                              text: '{CONTINUE}',
                                              priority: 1,
                                              config:
                                                '{"nextsteps": ["Vermieterschreiben Überprüfung","Klage"],"entitlements":["Aufwendungsersatz"]}',
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    data: {
                                      id: 'cez5ne2tlr40',
                                      created: 1634217201322,
                                      text: t`Haben Sie den Schimmel bei Ihrer Vermieter:in angezeigt und angekündigt, Ihre Miete nur unter Vorbehalt weiter zu zahlen (Mietminderung)?`,
                                      priority: 1,
                                      note: t`Wenn Sie angekündigt haben, Ihre Miete nur unter Vorbehalt zu zahlen, kann Ihnen von der Ankündigung bis zur Beseitigung des Mangels sein Anspruch auf Mietminderung zustehen.`,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'cez5o46tidc0',
                                          created: 1634217258161,
                                          text: t`Wurde durch den Schimmel Eigentum von Ihnen beschädigt?`,
                                          note: t`Wenn durch den Mangel nicht nur an der Wohnung, sondern auch an Ihrem Eigentum Schäden entstanden sind, haben sie vielleicht Ansprüche auf Schadensersatz.

Zusätzliche Schäden können sein, wenn durch den Mangel zum Beispiel eigene Möbel oder Kleidung beschädigt wurden.`,
                                          priority: 3,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cez5ryu7leg0',
                                              created: 1634217559970,
                                              text: '{CONTINUE}',
                                              priority: 3,
                                              config:
                                                '{"nextsteps": ["Vermieterschreiben Überprüfung","Klage"],"entitlements":["Mietminderung","Schadensersatz"]}',
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'cez5s07wa540',
                                              created: 1634217562975,
                                              text: '{CONTINUE}',
                                              priority: 1,
                                              config:
                                                '{"nextsteps": ["Vermieterschreiben Überprüfung","Klage"],"entitlements":["Mietminderung"]}',
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        data: {
                                          id: 'cez5rts2r8g0',
                                          created: 1634217548957,
                                          text: t`Wurde durch den Schimmel Eigentum von Ihnen beschädigt?`,
                                          priority: 1,
                                          note: t`Wenn durch den Mangel nicht nur an der Wohnung, sondern auch an Ihrem Eigentum Schäden entstanden sind, haben sie vielleicht Ansprüche auf Schadensersatz.

Zusätzliche Schäden können sein, wenn durch den Mangel zum Beispiel eigene Möbel oder Kleidung beschädigt wurden.`,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cez5rtzqviw0',
                                              created: 1634217549421,
                                              text: '{CONTINUE}',
                                              priority: 3,
                                              config:
                                                '{"nextsteps": ["Vermieterschreiben Überprüfung","Klage"],"entitlements":["Schadensersatz"]}',
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'cez5rxmlsb40',
                                              created: 1634217557334,
                                              text: '{EXIT}',
                                              priority: 1,
                                              note: t`Wenn Ihnen durch den Mangel keine Kosten oder Schäden entstanden sind, Sie keine Mietminderung angekündigt haben und der Mangel bereits behoben wurde, haben Sie vermutlich keine weiteren rechtlichen Ansprüche.`,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                data: {
                  id: 'ceppe048r140',
                  created: 1633257288287,
                  text: t`Lärm`,
                  icon: 'FaAssistiveListeningSystems',
                  note: t`### Wohnungsmängel durch Lärm
Erheblicher Lärm kann als Mietmangel gelten, beispielswese bei Störungen in den Ruhezeiten. Diese sind in der Regel zwischen 22 und 6 Uhr, sowie ganztägig an Sonn- und Feiertagen. Andere Ruhezeiten können von Bundesländern und Gemeinden, aber auch in der Hausordnung festgehalten werden.

✅ **Unter Ruhestörungen fallen** Störungen der Nachtruhe (Musik, Staubsaugen, laute Waschmaschine über 30 Dezibel), dauerhafte Geräusche von Tieren, laute Gartengeräte, sowie Streitgespräche.

❌ **Nicht als Ruhestörung zählen** nächtliches Duschen, Renovierungs- und Baulärm, spielende Kinder, oder Kirchenglocken.

💡 **Hinweis bei Nachbarschaftskonflikten:** Sollten Sie sich von einer Nachbar:in gestört fühlen, sollten Sie zunächst freunddlich darauf ansprechen, um Streit zu vermeiden. Möglicherweise ist der Nachbar:in nicht klar, dass Sie sich gestört fühlen. Bei akuten, sehr starken Störungen können Sie auch das Ordnungsamt oder die Polizei kontaktieren.`,
                },
                children: [],
              },
              {
                data: {
                  id: 'cepy6axcig80',
                  created: 1633282074890,
                  text: t`Wasserschaden`,
                  icon: 'FaBath',
                  note: t`### Wohnungsmängel durch Wasserschäden

Wasserschäden in der Wohnung können beispielsweise durch starken Regen oder Schäden an Wasserleitungen, Geräten und im Bad entstehen.

Ansprüche gegen Vermieter:innen oder Hauseigentümer:innen wegen des Wasserschadens bestehen dann, wenn diese den Mangel verschuldet haben, was beispielsweise oft bei Rohrbrüchen der Fall ist.

Werden Wasserschäden durch eigene defekte Geräte wie Waschmaschine oder Geschirrspüler verursacht, haftet man in der Regel selbst. Etwas anderes kann gelten, wenn die Geräte mit der Wohnung angemietet wurden (bspw. Geräte in einer angemieteten Einbauküche).

Wenn die Mietenden den Wasserschaden selbst verursacht haben, dann kann eine Hausratsversicherung oder bei Schäden der Nachbarn eine Haftpflichtversicherung weiterhelfen. `,
                },
                children: [],
              },
              {
                data: {
                  id: 'cf3gqcsm7iw0',
                  created: 1634654705657,
                  text: t`Heizungsausfall`,
                  icon: 'FaTemperatureLow',
                },
                children: [],
              },
              {
                data: {
                  id: 'cf3grykujw80',
                  created: 1634654831440,
                  text: t`Stromausfall`,
                  icon: 'FaPowerOff',
                },
                children: [],
              },
              {
                data: {
                  id: 'cepy6tay75k0',
                  created: 1633282114895,
                  text: t`Ein anderes Problem`,
                  icon: 'FaQuestionCircle',
                  priority: null,
                },
                children: [],
              },
            ],
          },
          {
            data: {
              id: 'cepy2izylpc0',
              created: 1633281779006,
              text: t`Mieterhöhung`,
              icon: 'FaCoins',
            },
            children: [],
          },
          {
            data: {
              id: 'cepy324wtug0',
              created: 1633281820664,
              text: t`Mietpreisbremse`,
              icon: 'FaRegStopCircle',
            },
            children: [],
          },
          {
            data: {
              id: 'cepy361915c0',
              created: 1633281829150,
              text: t`Renovierung bei Auszug`,
              icon: 'FaToolbox',
            },
            children: [],
          },
          {
            data: {
              id: 'cepy392s7z40',
              created: 1633281835773,
              text: t`Kündigung`,
              icon: 'FaDoorClosed',
            },
            children: [],
          },
          {
            data: {
              id: 'cf3g1pstnqw0',
              created: 1634652774865,
              text: t`Nebenkostenabrechnung`,
              icon: 'FaFileInvoice',
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 'cepy224nok80',
          created: 1633281742285,
          text: t`Arbeit`,
          icon: 'FaBriefcase',
        },
        children: [],
      },
      {
        data: {
          id: 'ceo2i4zs4t8g',
          created: 1633091166874,
          text: t`Reisen & Verkehr`,
          layout_mind_offset: {
            x: 2,
            y: 1,
          },
          icon: 'FaRoute',
        },
        children: [
          {
            data: {
              id: 'cf008ca222o0',
              created: 1634303476350,
              text: t`Entschädigungen für einen Flug`,
              icon: 'FaPlane',
              config: '{"caseType":"flug"}',
              note: t`### Entschädigungen nach der EU-Fluggastrechteverordnung

- Sie haben wegen einer Flugverspätung, einer Annullierung durch die Fluglinie oder einer Beförderungsverweigerung wegen Überbuchung Ihr Ziel verspätet oder gar nicht erreicht? Dann haben Sie nach der EU-Fluggastrechteverordnung vielleicht einen Anspruch auf eine Ausgleichszahlung. 
- Die Höhe der  Ausgleichszahlung ist abhängig von der Flugstrecke und kann bis zu 600 Euro betragen. 
- Bei Annullierung haben Sie zudem einen Anspruch auf Erstattung der Flugscheinkosten oder eine alternative Beförderung.
- Für lange Wartezeiten am Flughafen können Sie auch Betreuungsleistungen wie Essen und Getränke, oder eine nächtliche Hotelübernachtung erhalten.`,
            },
            children: [
              {
                data: {
                  id: 'cf4getq0jc00',
                  created: 1634755362094,
                  text: t`Verspätung`,
                  icon: 'FaHourglassEnd',
                  config: '{"caseTopic":"Verspätung"}',
                  note: t`### Ihre Rechte bei Verspätung nach der EU-Fluggastrechteverordnung

Wenn Ihre Landung am Zielflughafen mehr als drei Stunden verspätet war, haben Sie vielleicht einen Anspruch auf eine Ausgleichszahlung. Zusätzlich können schon ab zwei Stunden Verspätung beim Start Ansprüche auf Betreuungsleistungen wie Essen und Getränke entstehen.`,
                },
                children: [
                  {
                    data: {
                      id: 'cf4gipf45g00',
                      created: 1634755666181,
                      text: t`Ist ihr Flug in Europa* gestartet, oder sind Sie mit einer EU-Fluglinie in Europa gelandet?`,
                      note: t`Damit die EU-Fluggastrechteverordnung gilt, muss einer der folgenden Fälle vorliegen:
- Der Startflughafen liegt in Europa.
- Der Zielflughafen liegt in Europa UND das Luftfahrtunternehmen hat den Sitz in der Europäischen Union.
###
\\* Die Verordnung gilt neben Ländern der Europäischen Union auch für Norwegen und die Schweiz.`,
                    },
                    children: [
                      {
                        data: {
                          id: 'cf4gnxz5m1k0',
                          created: 1634756076628,
                          text: '{EXIT}',
                          note: t`Leider fällt Ihr Flug nicht in den Anwendungsbereich der EU-Fluggastrechteverordnung. Deshalb können Sie über das Portal keine Ansprüche geltend machen.`,
                          priority: 1,
                        },
                        children: [],
                      },
                      {
                        data: {
                          id: 'cf4gnxcudvk0',
                          created: 1634756075279,
                          text: t`Haben Sie eine Bestätigung für Ihre Buchung?`,
                          note: t`Damit Sie Ansprüche für Ihre Buchung geltend machen können, benötigen Sie eine Bestätigung für Ihre Buchung. Das kann eine Bestätigungs-E-Mail sein, eine Rechnung, oder auch Ihr Boarding Pass.`,
                          priority: 3,
                        },
                        children: [
                          {
                            data: {
                              id: 'cf4gqprzdhs0',
                              created: 1634756293873,
                              text: '{EXIT}',
                              priority: 1,
                              note: t`Eine Buchungsbestätigung ist notwendig, um Ansprüche aus Ihrem Flug geltend zu machen. Suchen Sie noch einmal - vielleicht können Sie eine Bestätigung in Ihren E-Mails finden, oder bei Ihrem Reisebüro anfragen.`,
                            },
                            children: [],
                          },
                          {
                            data: {
                              id: 'cf4gqowe54g0',
                              created: 1634756291963,
                              text: t`War ihre Landung um mindestens drei Stunden verspätet?`,
                              priority: 3,
                              note: t`Ein Anspruch auf Ausgleichszahlung entsteht erst ab drei Stunden Verspätung am Zielflughafen. Verspätungen beim Start sind dabei irrelevant. 

Als Landezeit gilt der Moment, in dem die Flugzeugtüren geöffnet werden. `,
                            },
                            children: [
                              {
                                data: {
                                  id: 'cf4gua09lhk0',
                                  created: 1634756573002,
                                  text: '{EXIT}',
                                  note: t`Bei Verspätungen der Landung unter 3 Stunden haben Sie leider keinen Anspruch auf Ausgleichszahlung. Es kann aber ein Anspruch auf Betreuungsleistungen bestehen, zum Beispiel Essen oder Getränke.`,
                                  priority: 1,
                                },
                                children: [],
                              },
                              {
                                data: {
                                  id: 'cf4gu9dswfc0',
                                  created: 1634756571643,
                                  text: t`Waren Sie rechtzeitig am Check-in (mindestens 45 Minuten vor dem Start)?`,
                                  note: t`Für einen Anspruch auf Ausgleichszahlung ist es entscheidend, dass Sie sich rechtzeitig zum Check-in eingefunden haben. Wenn kein anderer Termin von Ihrer Fluglinie angegeben wurde, reichen 45 Minuten vor Abflug.`,
                                  priority: 3,
                                },
                                children: [
                                  {
                                    data: {
                                      id: 'cf4gwmowah40',
                                      created: 1634756757341,
                                      text: '{EXIT}',
                                      note: t`Wenn Sie nicht rechtzeitig beim Check-in waren, haben Sie vermutlich keinen Anspruch auf eine Ausgleichszahlung.`,
                                      priority: 1,
                                    },
                                    children: [],
                                  },
                                  {
                                    data: {
                                      id: 'cf4gwm92hgw0',
                                      created: 1634756756384,
                                      text: t`Fand der Flug innerhalb der letzten drei Jahre statt?`,
                                      priority: 3,
                                      note: t`Sie können Ihre Ansprüche nur durchsetzen, wenn der Flug innerhalb der letzten drei Jahre stattfand. Der genaue Tag und Monat spielen dabei keine Rolle.

Beispiel: Im Jahr 2021 sind alle Flüge ab dem 1.1.2018 von der Verordnung abgedeckt.
`,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'cf4h26nw7ts0',
                                          created: 1634757192637,
                                          text: '{EXIT}',
                                          note: t`Wenn Ihr Flug vor über drei Jahren stattgefunden hat, ist Ihr Anspruch vermutlich verjährt. Daher können wir Ihnen nicht weiterhelfen.`,
                                          priority: 1,
                                        },
                                        children: [],
                                      },
                                      {
                                        data: {
                                          id: 'cf4z2sjaknc0',
                                          created: 1634808020226,
                                          text: t`Haben Sie ein Ticket gekauft und selbst oder mit Bonusmeilen bezahlt?`,
                                          note: t`Die Verordnung gilt nicht, wenn Sie kostenlos oder zu einem nicht öffentlichen Tarif reisen (z.B. mit Mitarbeitertickets der Fluglinie). 

Ein durch ein Werbeprogramm bezahlter Flug (z.B. Bonusmeilen) und Geschäftsreisen sind aber abgedeckt.`,
                                          priority: 3,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cf4z62tbau00',
                                              created: 1634808277692,
                                              text: '{EXIT}',
                                              priority: 1,
                                              note: t`Leider fällt Ihr Flug nicht in den Anwendungsbereich der EU-Fluggastrechteverordnung, da Sie kein reguläres Ticket gekauft haben. Deshalb können Sie über das Portal keine Ansprüche geltend machen.`,
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'cf4hbq4l8pk0',
                                              created: 1634757940282,
                                              text: t`Haben Sie Ihre Fluglinie schon aufgefordert, eine Ausgleichszahlung an Sie zu zahlen und dafür eine realistische Frist gesetzt?`,
                                              note: t`Zunächst sollten Sie Ihre Fluglinie selbst auffordern, eine Ausgleichszahlung an Sie zu leisten. Wenn Sie das noch nicht getan haben, helfen wir Ihnen dabei.`,
                                              priority: 3,
                                            },
                                            children: [
                                              {
                                                data: {
                                                  id: 'cf4h5nbt1r40',
                                                  created: 1634757464003,
                                                  text: '{CONTINUE}',
                                                  config:
                                                    '{"nextsteps": ["Fluglinie kontaktieren"],"entitlements":["Ausgleichszahlung"]}',
                                                  priority: 1,
                                                },
                                                children: [],
                                              },
                                              {
                                                data: {
                                                  id: 'cf4h25v8j540',
                                                  created: 1634757190904,
                                                  text: t`Hat Ihre Fluglinie außergewöhnliche Umstände für die Verspätung genannt, die Sie nicht vermeiden konnte?`,
                                                  priority: 3,
                                                  note: t`Sie haben nur eine realistische Aussicht auf eine Ausgleichszahlung, wenn Ihre Fluglinie die Verspätung nicht vermeiden konnte. 

Beispiele für außergewöhnliche Umstände sind:
- politische Instabilität
- starkes Unwetter
- Sicherheitsrisiken
- Unbeherrschbare Fehler am Flugzeug
- Streik am Flughafen
- Entscheidungen des Flugverkehrsmanagements`,
                                                },
                                                children: [
                                                  {
                                                    data: {
                                                      id: 'cf4hcjzx9bk0',
                                                      created: 1634758005304,
                                                      text: '{CONTINUE}',
                                                      priority: 1,
                                                      config:
                                                        '{"nextsteps": ["Schlichtung", "Klage"],"entitlements":["Ausgleichszahlung"]}',
                                                    },
                                                    children: [],
                                                  },
                                                  {
                                                    data: {
                                                      id: 'cf4h5liuqtc0',
                                                      created: 1634757460076,
                                                      text: '{EXIT}',
                                                      note: t`Wenn Ihre  Fluglinie außergewöhnliche Umstände für Ihre Verspätung nennt, ist es schwer abzuschätzen, ob ein Anspruch auf Ausgleichszahlung vorliegt. Nicht immer sind die genannten Gründe gerechtfertigt. Um das zu prüfen, können Sie sich zum Beispiel [von einer Expert:in beraten lassen](/beratungsangebote).

Wenn Sie Ihren Fall von einer Richter:in entscheiden lassen möchten, können Sie auch klagen. [Hier informieren wir Sie, wie Sie eine Klage einreichen können](/klage-einreichen).`,
                                                      priority: 3,
                                                    },
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                data: {
                  id: 'cf4gev0vue80',
                  created: 1634755364925,
                  text: t`Annullierung durch die Fluglinie`,
                  icon: 'FaTimesCircle',
                  config: '{"caseTopic":"Annullierung"}',
                  note: t`### Ihre Rechte bei Annullierung Ihres Flugs nach der EU-Fluggastrechteverordnung

Wenn Ihr Flug durch die Fluglinie annulliert wurde, haben Sie vielleicht einen Anspruch auf einen alternativen Flug oder Rückerstattung der Flugscheinkosten. Bei einer kurzfristigen Annullierung können Sie außerdem eine Ausgleichszahlung erhalten, wenn Ihnen kein vergleichbarer Flug angeboten wurde. Zusätzlich können Ansprüche auf Betreuungsleistungen wie Essen und Getränke bei einem verspäteten Start entstehen.`,
                },
                children: [
                  {
                    data: {
                      id: 'cf4gipf45g01',
                      created: 1634755666181,
                      text: t`Ist ihr Flug in Europa* gestartet, oder sind Sie mit einer EU-Fluglinie in Europa gelandet?`,
                      note: t`Damit die EU-Fluggastrechteverordnung gilt, muss einer der folgenden Fälle vorliegen:
- Der Startflughafen liegt in Europa.
- Der Zielflughafen liegt in Europa UND das Luftfahrtunternehmen hat den Sitz in der Europäischen Union.
###
\\* Die Verordnung gilt neben Ländern der Europäischen Union auch für Norwegen und die Schweiz.`,
                    },
                    children: [
                      {
                        data: {
                          id: 'cf4gnxz5m1k1',
                          created: 1634756076628,
                          text: '{EXIT}',
                          note: t`Leider fällt Ihr Flug nicht in den Anwendungsbereich der EU-Fluggastrechteverordnung. Deshalb können Sie über das Portal keine Ansprüche geltend machen.`,
                          priority: 1,
                        },
                        children: [],
                      },
                      {
                        data: {
                          id: 'cf4gwm92hgw1',
                          created: 1634756756384,
                          text: t`Fand der Flug innerhalb der letzten drei Jahre statt?`,
                          priority: 3,
                          note: t`Sie können Ihre Ansprüche nur durchsetzen, wenn der Flug innerhalb der letzten drei Jahre stattfand. Der genaue Tag und Monat spielen dabei keine Rolle.

Beispiel: Im Jahr 2021 sind alle Flüge ab dem 1.1.2018 von der Verordnung abgedeckt.
`,
                        },
                        children: [
                          {
                            data: {
                              id: 'cf4h26nw7ts1',
                              created: 1634757192637,
                              text: '{EXIT}',
                              note: t`Wenn Ihr Flug vor über drei Jahren stattgefunden hat, ist Ihr Anspruch vermutlich verjährt. Daher können wir Ihnen nicht weiterhelfen.`,
                              priority: 1,
                            },
                            children: [],
                          },
                          {
                            data: {
                              id: 'cf4z2sjaknc1',
                              created: 1634808020226,
                              text: t`Haben Sie ein Ticket gekauft und selbst oder mit Bonusmeilen bezahlt?`,
                              note: t`Die Verordnung gilt nicht, wenn Sie kostenlos oder zu einem nicht öffentlichen Tarif reisen (z.B. mit Mitarbeitertickets der Fluglinie). 

Ein durch ein Werbeprogramm bezahlter Flug (z.B. Bonusmeilen) und Geschäftsreisen sind aber abgedeckt.`,
                              priority: 3,
                            },
                            children: [
                              {
                                data: {
                                  id: 'cf4z62tbau01',
                                  created: 1634808277692,
                                  text: '{EXIT}',
                                  priority: 1,
                                  note: t`Leider fällt Ihr Flug nicht in den Anwendungsbereich der EU-Fluggastrechteverordnung, da Sie kein reguläres Ticket gekauft haben. Deshalb können Sie über das Portal keine Ansprüche geltend machen.`,
                                },
                                children: [],
                              },
                              {
                                data: {
                                  id: 'cf9iujlasi00',
                                  created: 1635270035868,
                                  text: t`Wurden Sie weniger als zwei Wochen vor dem Abflug über die Annullierung des Flugs informiert?`,
                                  priority: 3,
                                  note: t`Wenn Ihr Flug kurzfristig annulliert wurde, können Ihnen zusätzliche Ansprüche entstehen, beispielsweise auf Ausgleichszahlung.`,
                                },
                                children: [
                                  {
                                    data: {
                                      id: 'cf9iv82djdk0',
                                      created: 1635270089143,
                                      text: t`Haben Sie ein Angebot für einen Ersatzflug angenommen, oder wurden ihnen die Flugscheinkosten schon vollständig erstattet?`,
                                      note: t`Bei einer Annullierung kann Ihnen die Fluglinie einen alternativen Flug anbieten. Dabei können Sie entscheiden, ob Sie den Flug annehmen oder die Flugscheinkosten zurückerstattet haben wollen. Die Kosten können auch von einem Reiseveranstalter oder Reisebüro erstattet werden.`,
                                      priority: 1,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'cf9iycov5e00',
                                          created: 1635270334302,
                                          text: '{EXIT}',
                                          priority: 3,
                                          note: t`Wenn Sie statt Ihrem annullierten Flug ein Angebot für einen Ersatzflug angenommen haben, oder die Flugscheinkosten schon erstattet wurden, haben Sie vermutlich keine weiteren Ansprüche, da Ihr Flug nicht kurzfristig annulliert wurde.`,
                                        },
                                        children: [],
                                      },
                                      {
                                        data: {
                                          id: 'cf9iye28wnc0',
                                          created: 1635270337288,
                                          text: t`Haben Sie einen Zahlungsbeweis für Ihren Flugschein?`,
                                          note: t`Sie haben angegeben, dass die Kosten für Ihren Flug noch nicht erstattet wurden. Um einen Anspruch auf Rückerstattung durchsetzen zu können, müssen Sie einen Zahlungsbeleg vorweisen können. Dazu zählen beispielsweise:
- Zahlungsbestätigung der Fluglinie
- Kontoauszug mit der Zahlung
- Kreditkartenabrechnung mit der Zahlung`,
                                          priority: 1,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cf9j13y71c80',
                                              created: 1635270550368,
                                              text: '{EXIT}',
                                              priority: 1,
                                              note: t`Ein Zahlungsbeweis ist notwendig, um einen Anspruch auf Rückerstattung der Flugscheinkosten geltend zu machen. Suchen Sie noch einmal - vielleicht können Sie einen Zahlungsbeweis in Ihren E-Mails finden, oder bei Ihrem Reisebüro oder Ihrer Bank anfragen.

Vermutlich stehen Ihnen darüber hinaus keine weiteren Ansprüche mehr zu, da Ihr Flug nicht kurzfristig annulliert wurde.`,
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'cf4hbq4l8pk1',
                                              created: 1634757940282,
                                              text: t`Haben Sie Ihre Fluglinie schon aufgefordert, die Flugscheinkosten zu erstatten?`,
                                              note: t`Vermutlich haben Sie einen Anspruch auf Erstattung der Flugscheinkosten. Die Kosten sollten innerhalb von sieben Tagen nach Annullierung erstattet werden. Ist das noch nicht geschehen, sollten Sie Ihre Fluglinie zunächst selbst zur Zahlung auffordern. Dabei können wir Ihnen helfen.`,
                                              priority: 3,
                                            },
                                            children: [
                                              {
                                                data: {
                                                  id: 'cf4h5nbt1r41',
                                                  created: 1634757464003,
                                                  text: '{CONTINUE}',
                                                  config:
                                                    '{"nextsteps": ["Fluglinie kontaktieren"],"entitlements":["Rückerstattung"]}',
                                                  priority: 1,
                                                },
                                                children: [],
                                              },
                                              {
                                                data: {
                                                  id: 'cf4hcjzx9bk1',
                                                  created: 1634758005304,
                                                  text: '{CONTINUE}',
                                                  priority: 3,
                                                  config:
                                                    '{"nextsteps": ["Schlichtung", "Klage"],"entitlements":["Rückerstattung"]}',
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    data: {
                                      id: 'cf9iv82djdk1',
                                      created: 1635270089143,
                                      text: t`Haben Sie ein Angebot für einen Ersatzflug angenommen, oder wurden ihnen die Flugscheinkosten schon vollständig erstattet?`,
                                      note: t`Bei einer Annullierung kann Ihnen die Fluglinie einen alternativen Flug anbieten. Dabei können Sie entscheiden, ob Sie den Flug annehmen oder die Flugscheinkosten zurückerstattet haben wollen. Die Kosten können auch von einem Reiseveranstalter oder Reisebüro erstattet werden.

Wenn Sie statt Ihrem annullierten Flug ein Angebot für einen Ersatzflug angenommen haben, können Ihnen noch Ansprüche auf Ausgleichszahlung entstehen.`,
                                      priority: 3,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'cf9k2znuxao0',
                                          created: 1635273518874,
                                          text: t`Wurde Ihnen ein alternativer Flug angeboten, mit dem Sie Ihr Ziel nur wenige Stunden später erreichen konnten?`,
                                          note: t`Wenn Sie einen Zahlungsbeweis für Ihren Flug haben, können Sie vermutlich einen **Anspruch auf Rückerstattung der Flugscheinkosten** durchsetzen.

Zusätzlich kann ein **Anspruch auf Ausgleichszahlung** wegen kurzfristiger Annullierung bestehen. Dafür muss die Fluglinie Ihnen **keine vergleichbare Beförderung** angeboten haben. 

Als vergleichbar gilt:
- Bei Annullierung zwischen 7 und 14 Tagen vor Abflug: Neuer Abflug nicht mehr als zwei Stunden früher, und neue Landung höchstens vier Stunden später als gebucht.
- Bei Annullierung innerhalb von 7 Tagen vor Abflug: Neuer Abflug nicht mehr als eine Stunde früher, und neue Landung höchstens zwei Stunden später als gebucht.`,
                                          priority: 1,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cf4hbq4l8pk2',
                                              created: 1634757940282,
                                              text: t`Haben Sie Ihre Fluglinie schon aufgefordert, eine Zahlung an Sie zu leisten und dafür eine realistische Frist gesetzt?`,
                                              note: t`Wenn bei einer kurzfristigen Annullierung kein vergleichbarer Flug angeboten wurde, steht Ihnen vermutlich eine Ausgleichszahlung zu. Eine Ausnahme sind außergewöhnliche Umstände, bei denen die Fluglinie die Annullierung nicht vermeiden konnte.

Zusätzlich haben Sie vermutlich einen Anspruch auf Erstattung der Flugscheinkosten. Die Kosten sollten innerhalb von sieben Tagen nach Annullierung erstattet werden.

Zunächst sollten Sie Ihre Fluglinie selbst auffordern, die Zahlungen an Sie zu leisten. Wenn Sie das noch nicht getan haben, helfen wir Ihnen dabei.`,
                                              priority: 1,
                                            },
                                            children: [
                                              {
                                                data: {
                                                  id: 'cf4h5nbt1r42',
                                                  created: 1634757464003,
                                                  text: '{CONTINUE}',
                                                  config:
                                                    '{"nextsteps": ["Fluglinie kontaktieren"],"entitlements":["Ausgleichszahlung", "Rückerstattung"]}',
                                                  priority: 1,
                                                },
                                                children: [],
                                              },
                                              {
                                                data: {
                                                  id: 'cf4hcjzx9bk2',
                                                  created: 1634758005304,
                                                  text: '{CONTINUE}',
                                                  priority: 3,
                                                  config:
                                                    '{"nextsteps": ["Schlichtung", "Klage"],"entitlements":["Ausgleichszahlung", "Rückerstattung"]}',
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                          {
                                            data: {
                                              id: 'cf9iye28wnc1',
                                              created: 1635270337288,
                                              text: t`Haben Sie einen Zahlungsbeweis für Ihren Flugschein?`,
                                              note: t`Sie haben angegeben, dass die Kosten für Ihren Flug noch nicht erstattet wurden. Um einen Anspruch auf Rückerstattung durchsetzen zu können, müssen Sie einen Zahlungsbeleg vorweisen können. Dazu zählen beispielsweise:
- Zahlungsbestätigung der Fluglinie
- Kontoauszug mit der Zahlung
- Kreditkartenabrechnung mit der Zahlung`,
                                              priority: 3,
                                            },
                                            children: [
                                              {
                                                data: {
                                                  id: 'cf9j13y71c81',
                                                  created: 1635270550368,
                                                  text: '{EXIT}',
                                                  priority: 1,
                                                  note: t`Ein Zahlungsbeweis ist notwendig, um einen Anspruch auf Rückerstattung der Flugscheinkosten geltend zu machen. Suchen Sie noch einmal - vielleicht können Sie einen Zahlungsbeweis in Ihren E-Mails finden, oder bei Ihrem Reisebüro oder Ihrer Bank anfragen.

Vermutlich stehen Ihnen darüber hinaus keine weiteren Ansprüche mehr zu, da Ihr Flug nicht kurzfristig annulliert wurde.`,
                                                },
                                                children: [],
                                              },
                                              {
                                                data: {
                                                  id: 'cf4hbq4l8pk3',
                                                  created: 1634757940282,
                                                  text: t`Haben Sie Ihre Fluglinie schon aufgefordert, die Flugscheinkosten zu erstatten?`,
                                                  note: t`Vermutlich haben Sie einen Anspruch auf Erstattung der Flugscheinkosten. Die Kosten sollten innerhalb von sieben Tagen nach Annullierung erstattet werden. Ist das noch nicht geschehen, sollten Sie Ihre Fluglinie zunächst selbst zur Zahlung auffordern. Dabei können wir Ihnen helfen.`,
                                                  priority: 3,
                                                },
                                                children: [
                                                  {
                                                    data: {
                                                      id: 'cf4h5nbt1r43',
                                                      created: 1634757464003,
                                                      text: '{CONTINUE}',
                                                      config:
                                                        '{"nextsteps": ["Fluglinie kontaktieren"],"entitlements":["Rückerstattung"]}',
                                                      priority: 1,
                                                    },
                                                    children: [],
                                                  },
                                                  {
                                                    data: {
                                                      id: 'cf4hcjzx9bk3',
                                                      created: 1634758005304,
                                                      text: '{CONTINUE}',
                                                      priority: 3,
                                                      config:
                                                        '{"nextsteps": ["Schlichtung", "Klage"],"entitlements":["Rückerstattung"]}',
                                                    },
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        data: {
                                          id: 'cf9k2znuxao1',
                                          created: 1635273518874,
                                          text: t`Wurde Ihnen ein alternativer Flug angeboten, mit dem Sie Ihr Ziel nur wenige Stunden später erreichen konnten?`,
                                          note: t`Ein **Anspruch auf Ausgleichszahlung** kann bei einer kurzfristigen Annullierung nur bestehen, wenn die Fluglinie Ihnen **keine vergleichbare Beförderung** angeboten hat. 

Als vergleichbar gilt:
- Bei Annullierung zwischen 7 und 14 Tagen vor Abflug: Neuer Abflug nicht mehr als zwei Stunden früher, und neue Landung höchstens vier Stunden später als gebucht.
- Bei Annullierung innerhalb von 7 Tagen vor Abflug: Neuer Abflug nicht mehr als eine Stunde früher, und neue Landung höchstens zwei Stunden später als gebucht.`,
                                          priority: 3,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cf4hbq4l8pk4',
                                              created: 1634757940282,
                                              text: t`Haben Sie Ihre Fluglinie schon aufgefordert, eine Ausgleichszahlung an Sie zu zahlen und dafür eine realistische Frist gesetzt?`,
                                              note: t`Wenn bei einer kurzfristigen Annullierung kein vergleichbarer Flug angeboten wurde, steht Ihnen vermutlich eine Ausgleichszahlung zu.

Zunächst sollten Sie Ihre Fluglinie selbst auffordern, eine Ausgleichszahlung an Sie zu leisten. Wenn Sie das noch nicht getan haben, helfen wir Ihnen dabei.`,
                                              priority: 1,
                                            },
                                            children: [
                                              {
                                                data: {
                                                  id: 'cf4h5nbt1r44',
                                                  created: 1634757464003,
                                                  text: '{CONTINUE}',
                                                  config:
                                                    '{"nextsteps": ["Fluglinie kontaktieren"],"entitlements":["Ausgleichszahlung"]}',
                                                  priority: 1,
                                                },
                                                children: [],
                                              },
                                              {
                                                data: {
                                                  id: 'cf4h25v8j541',
                                                  created: 1634757190904,
                                                  text: t`Hat Ihre Fluglinie außergewöhnliche Umstände für die Annullierung genannt, die Sie nicht vermeiden konnte?`,
                                                  priority: 3,
                                                  note: t`Sie haben nur eine realistische Aussicht auf eine Ausgleichszahlung, wenn Ihre Fluglinie die Annullierung nicht vermeiden konnte. 

Beispiele für außergewöhnliche Umstände sind:
- politische Instabilität
- starkes Unwetter
- Sicherheitsrisiken
- Unbeherrschbare Fehler am Flugzeug
- Streik am Flughafen
- Entscheidungen des Flugverkehrsmanagements`,
                                                },
                                                children: [
                                                  {
                                                    data: {
                                                      id: 'cf4h5liuqtc1',
                                                      created: 1634757460076,
                                                      text: '{EXIT}',
                                                      note: t`Wenn Ihre  Fluglinie außergewöhnliche Umstände für die Annullierung nennt, ist es schwer abzuschätzen, ob ein Anspruch auf Ausgleichszahlung vorliegt. Nicht immer sind die genannten Gründe gerechtfertigt. Um das zu prüfen, können Sie sich zum Beispiel [von einer Expert:in beraten lassen](/beratungsangebote).

Wenn Sie Ihren Fall von einer Richter:in entscheiden lassen möchten, können Sie auch klagen. [Hier informieren wir Sie, wie Sie eine Klage einreichen können](/klage-einreichen).`,
                                                      priority: 3,
                                                    },
                                                    children: [],
                                                  },
                                                  {
                                                    data: {
                                                      id: 'cf4hcjzx9bk4',
                                                      created: 1634758005304,
                                                      text: '{CONTINUE}',
                                                      priority: 1,
                                                      config:
                                                        '{"nextsteps": ["Schlichtung", "Klage"],"entitlements":["Ausgleichszahlung"]}',
                                                    },
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            data: {
                                              id: 'cf9k9wzh3680',
                                              created: 1635274061595,
                                              text: '{EXIT}',
                                              priority: 3,
                                              note: t`Ihr Flug wurde kurzfristig storniert, aber Ihnen wurde ein alternativer vergleichbarer Flug  angeboten. Da Sie diesen angenommen haben, oder Ihnen bereits die Kosten des Flugscheins zurückerstattet wurden, liegen vermutlich keine weiteren Ansprüche vor. `,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                data: {
                  id: 'cf4gevbcl0o0',
                  created: 1634755365558,
                  text: t`Beförderungsverweigerung bei Überbuchung`,
                  icon: 'FaUserTimes',
                  config: '{"caseTopic":"Beförderungsverweigerung"}',
                  note: t`### Ihre Rechte bei Beförderungsverweigerung nach der EU-Fluggastrechteverordnung

- Ihnen wurde die Mitreise verweigert, weil Ihr Flug überbucht war, und Sie haben nicht freiwillig ein alternatives Angebot Ihrer Flugline angenommen?
- Dann haben Sie vielleicht einen Anspruch auf eine Ausgleichszahlung. Zusätzlich können Ansprüche auf Betreuungsleistungen wie Essen und Getränke entstehen.`,
                },
                children: [
                  {
                    data: {
                      id: 'cf4gipf45g02',
                      created: 1634755666181,
                      text: t`Ist ihr Flug in Europa* gestartet, oder sind Sie mit einer EU-Fluglinie in Europa gelandet?`,
                      note: t`Damit die EU-Fluggastrechteverordnung gilt, muss einer der folgenden Fälle vorliegen:
- Der Startflughafen liegt in Europa.
- Der Zielflughafen liegt in Europa UND das Luftfahrtunternehmen hat den Sitz in der Europäischen Union.
###
\\* Die Verordnung gilt neben Ländern der Europäischen Union auch für Norwegen und die Schweiz.`,
                    },
                    children: [
                      {
                        data: {
                          id: 'cf4gnxz5m1k2',
                          created: 1634756076628,
                          text: '{EXIT}',
                          note: t`Leider fällt Ihr Flug nicht in den Anwendungsbereich der EU-Fluggastrechteverordnung. Deshalb können Sie über das Portal keine Ansprüche geltend machen.`,
                          priority: 1,
                        },
                        children: [],
                      },
                      {
                        data: {
                          id: 'cf4gnxcudvk1',
                          created: 1634756075279,
                          text: t`Haben Sie eine Bestätigung für Ihre Buchung?`,
                          note: t`Damit Sie Ansprüche für Ihre Buchung geltend machen können, benötigen Sie eine Bestätigung für Ihre Buchung. Das kann eine Bestätigungs-E-Mail sein, eine Rechnung, oder auch Ihr Boarding Pass.`,
                          priority: 3,
                        },
                        children: [
                          {
                            data: {
                              id: 'cf4gqprzdhs1',
                              created: 1634756293873,
                              text: '{EXIT}',
                              priority: 1,
                              note: t`Eine Buchungsbestätigung ist notwendig, um Ansprüche aus Ihrem Flug geltend zu machen. Suchen Sie noch einmal - vielleicht können Sie eine Bestätigung in Ihren E-Mails finden, oder bei Ihrem Reisebüro anfragen.`,
                            },
                            children: [],
                          },
                          {
                            data: {
                              id: 'cf4gu9dswfc1',
                              created: 1634756571643,
                              text: t`Waren Sie rechtzeitig beim Boarding (mindestens 5 Minuten vor dem Start)?`,
                              note: t`Für einen Anspruch auf Ausgleichszahlung ist es entscheidend, dass Ihnen die Beförderung verweigert wurde, obwohl Sie rechtzeitig beim Boarding waren. Wenn kein anderer Termin von Ihrer Fluglinie angegeben wurde, reichen 5 Minuten vor Abflug.
`,
                              priority: 3,
                            },
                            children: [
                              {
                                data: {
                                  id: 'cf4gwmowah41',
                                  created: 1634756757341,
                                  text: '{EXIT}',
                                  note: t`Wenn Sie nicht rechtzeitig beim Boarding waren, haben Sie vermutlich keinen Anspruch auf Ausgleichszahlung.`,
                                  priority: 1,
                                },
                                children: [],
                              },
                              {
                                data: {
                                  id: 'cf4gwm92hgw2',
                                  created: 1634756756384,
                                  text: t`Fand der Flug innerhalb der letzten drei Jahre statt?`,
                                  priority: 3,
                                  note: t`Sie können Ihre Ansprüche nur durchsetzen, wenn der Flug innerhalb der letzten drei Jahre stattfand. Der genaue Tag und Monat spielen dabei keine Rolle.

Beispiel: Im Jahr 2021 sind alle Flüge ab dem 1.1.2018 von der Verordnung abgedeckt.
`,
                                },
                                children: [
                                  {
                                    data: {
                                      id: 'cf4h26nw7ts2',
                                      created: 1634757192637,
                                      text: '{EXIT}',
                                      note: t`Wenn Ihr Flug vor über drei Jahren stattgefunden hat, ist Ihr Anspruch vermutlich verjährt. Daher können wir Ihnen nicht weiterhelfen.`,
                                      priority: 1,
                                    },
                                    children: [],
                                  },
                                  {
                                    data: {
                                      id: 'cf4z2sjaknc2',
                                      created: 1634808020226,
                                      text: t`Haben Sie ein Ticket gekauft und selbst oder mit Bonusmeilen bezahlt?`,
                                      note: t`Die Verordnung gilt nicht, wenn Sie kostenlos oder zu einem nicht öffentlichen Tarif reisen (z.B. mit Mitarbeitertickets der Fluglinie). 

Ein durch ein Werbeprogramm bezahlter Flug (z.B. Bonusmeilen) und Geschäftsreisen sind aber abgedeckt.`,
                                      priority: 3,
                                    },
                                    children: [
                                      {
                                        data: {
                                          id: 'cf4z62tbau02',
                                          created: 1634808277692,
                                          text: '{EXIT}',
                                          priority: 1,
                                          note: t`Leider fällt Ihr Flug nicht in den Anwendungsbereich der EU-Fluggastrechteverordnung, da Sie kein reguläres Ticket gekauft haben. Deshalb können Sie über das Portal keine Ansprüche geltend machen.`,
                                        },
                                        children: [],
                                      },
                                      {
                                        data: {
                                          id: 'cfb3domatds0',
                                          created: 1635429517889,
                                          text: t`Haben Sie ein alternatives Angebot Ihrer Fluglinie angenommen, oder lagen vertretbare Gründe für die Beförderungsverweigerung vor (Krankheit, unvollständige Unterlagen)?`,
                                          priority: 3,
                                          note: t`Bei Überbuchung suchen Fluglinien zunächst Freiwillige, die für eine Gegenleistung auf den Flug verzichten. Freiwillige haben dann keinen Anspruch auf weitere Ausgleichszahlungen.

Zusätzlich kann sich die Fluglinie auf vertretbare Gründe  für die Beförderungsverweigerung berufen. Bei Krankheit, unvollständigen Reiseunterlagen (z.B. Visa) oder auch gefährlichem Verhalten hätten Sie dann keinen Anspruch auf eine Ausgleichszahlung.`,
                                        },
                                        children: [
                                          {
                                            data: {
                                              id: 'cfb3dqc2ty80',
                                              created: 1635429521622,
                                              text: '{EXIT}',
                                              priority: 3,
                                              note: t`Wenn Sie für eine Gegenleistung freiwillig auf Ihren Flug verzichtet haben, oder vertretbare Gründe für die Beförderungsverweigerung vorlagen, bestehen keine Ansprüche auf Ausgleichszahlungen.`,
                                            },
                                            children: [],
                                          },
                                          {
                                            data: {
                                              id: 'cf4hbq4l8pk5',
                                              created: 1634757940282,
                                              text: t`Haben Sie Ihre Fluglinie schon aufgefordert, eine Ausgleichszahlung an Sie zu zahlen und dafür eine realistische Frist gesetzt?`,
                                              note: t`Zunächst sollten Sie Ihre Fluglinie selbst auffordern, eine Ausgleichszahlung an Sie zu leisten. Wenn Sie das noch nicht getan haben, helfen wir Ihnen dabei.`,
                                              priority: 1,
                                            },
                                            children: [
                                              {
                                                data: {
                                                  id: 'cf4h5nbt1r45',
                                                  created: 1634757464003,
                                                  text: '{CONTINUE}',
                                                  config:
                                                    '{"nextsteps": ["Fluglinie kontaktieren"],"entitlements":["Ausgleichszahlung"]}',
                                                  priority: 1,
                                                },
                                                children: [],
                                              },
                                              {
                                                data: {
                                                  id: 'cf4hcjzx9bk5',
                                                  created: 1634758005304,
                                                  text: '{CONTINUE}',
                                                  priority: 3,
                                                  config:
                                                    '{"nextsteps": ["Schlichtung", "Klage"],"entitlements":["Ausgleichszahlung"]}',
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                data: {
                  id: 'cepy6tay75k0',
                  created: 1633282114895,
                  text: t`Ein anderes Problem`,
                  icon: 'FaQuestionCircle',
                  priority: null,
                },
                children: [],
              },
            ],
          },
          {
            data: {
              id: 'cf008n7nesg0',
              created: 1634303500150,
              text: t`Verkehrsunfall`,
              icon: 'FaCarCrash',
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 'ceq2ao2tc1s0',
          created: 1633293701415,
          text: t`Einkaufen`,
          icon: 'FaShoppingCart',
        },
      },
      {
        data: {
          id: 'ceo2i632lh4w',
          created: 1633091169249,
          text: t`Familie`,
          layout_mind_offset: {
            x: 448,
            y: -116,
          },
          icon: 'FaBabyCarriage',
        },
        children: [],
      },
    ],
  },
  template: 'filetree',
  theme: 'snow-compact',
  version: '1.4.43',
};
