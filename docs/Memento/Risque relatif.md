---
date: "20-11-2021"
obsidianUIMode: "source"
publish: True
flux: True
folder: "school"
category: "Memento"
---

![[OR & RR $#Table de contingence|no-h]]

Le RR peut être calculé afin de mettre en évidence une association entre le **facteur de risque** et la maladie étudiée et correspond au rapport des [[Incidence]] de la maladie chez les personnes exposées $R_1$ et non exposée $R_0$
![[OR & RR $#Risque relatif|no-h]]
Il représente une mesure d'association et de causalité. Pour un sujet, c'est la probabilité d'être maladie si l'exposition au facteur sur la probabilité d'être maladie en absence d'exposition au facteur.
L'exposition au facteur multiplie la probabilité d'être malade par ce rapport. 

### Interprétation
Le RR mesure la force de l'association.

Si :
- $RR <1$ : Le facteur d'exposition est dit **protecteur** vis à vis de la survenue de l'évènement. 
- $RR=1$ : Il n'y a pas de risque de faire l'évènement associé à l'exposition.
- Si $RR>1$ : Le facteur d'exposition est dit **de risque** vis à vis de la survenue de l'évènement.

Pour vérifier si le RR est significatif, on réalise un test de $\chi^2$ qui calcule si la probabilité d'être malade pour une personne exposée significativement plus grande que celle d'être malade pour une personne non exposée. 
![[OR & RR $#chi 2]]

L'intervalle de confiance est calculé tel que : 
![[OR & RR $#Intervalle de confiance RR étude de cohorte|no-h]]