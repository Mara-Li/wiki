---
date: "02-12-2021"
fc-date: 2021-12-05
fc-calendar: "Calendar"
obsidianUIMode: "source"
publish: True
folder: "school"
category: "Épidémiologie"
fc-category: "Épidémiologie"
tag: "gestion-risque, One-Health"
---
[[10. Master/Flashcards/🩹Modèles dynamiques en épidémiologie |🩹 Modèles dynamiques en épidémiologie]]
:fas_file_pdf:  [[_assets/10. Master/M2-25. One-Health/Modèles dynamiques en épidémiologie.pdf|Modèles dynamiques en épidémiologie]]
[[K. Chalvet-Monfray|K. Chalvet-Monfray]]


***UE:: One-Health***{: #left}  
```

{Condition initiale}
Starttime =38
stoptime = 183
DT=0.02

{équation différentielle}
S'=-beta*S*I/N
I'=beta*S*I/N*(mu+gamma)*I
R'=gamma*I
M'=mu*I

{Condition initiale}
Inits S=660000000-1 {Toute la population est sensible, sauf 1, qui est la source aka le malade}
Inits I=1 
Inits R=0
Inits M=0

{Paramètres}
beta=R0*(gamma+mu)
mu=1/7*0.005
gamma=1/7*0.995
N=S+I+R
R0=3 

```


Ici, on mesure dans le cas où il y aurait aucune mesure de diminution. Au premier juillet, il y aurait eu 310 mille morts, et 20 millions de malades.

Au 20 mars :
|         | Observée | Théorique |
| ------- | -------- | --------- |
| 20 mars | 405      | 451       |
| 1/07    | 29,129   | 29.865    | 

```

{On change les conditions}
R0 = if time <88 then 3 else 0.75
{Pour afficher la courbe, il faut cliquer sur la courbe et garder uniquement R0 et M}
```


```

{On change de nouveau les conditions} 
STOPTIME = 300
R0=IF TIME < 88 THEN 3 ELSE (IF TIME > 200 THEN 1.38 ELSE 0.75)
```