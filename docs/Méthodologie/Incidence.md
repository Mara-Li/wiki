---
date: "20-11-2021"
obsidianUIMode: "source"
publish: True
flux: True
folder: "school"
category: "Méthodologie"
alias: "Incidence, incidence"
---

!!! warning 
	L'incidence ne peut pas être calculé dans une [[Étude cas témoin|étude cas témoin]]

# Introduction
## Définitions
!!! note 
	Elle représente le vrai taux d'incidence (sur des enquête de cohorte). **C'est la vitesse d'apparition des nouveaux cas** au cours d'un intervalle T, ou encore le nombre de nouveaux cas survenus dans T / taille de la population à risques. 
	$~$
	La taille de la population se mesure en "personne-temps" (PT) : la densité d'incidence tient compte du fait que les périodes de suivi peuvent varier d'un individu à l'autre. Pour prendre en compte ces différences de durée, le suivi de chaque individu va être décomposé en PT. 

## Personne temps

!!! note 
	Le principe de calcul de PT est équivalent à celui des paquets année dans la consommation de tabac : 1 consommation d'un paquet pendant 2 ans équivaut à deux paquets pendant 1 an et donc un homme suivi deux ans contribuera à la taille de la cohorte autant que deux hommes suivis 1 an chacun.
	Tous les individus n'ont pas le même poids. Cette méthode est plus précise que le taux d'[[incidence]] cumulée lorsque la proportion de perdus de vue est élevée dans une population d'étude. Les taux de densité d'[[incidence]] sont particulièrement utile dans le cadre des **enquête épidémiologique** dès que l'on cherche à affiner le dénominateur d'un taux pour estimer un risque avec précision.
!!! tip "Concept de personne temps"
	- La période est divisée en sous-période pour lesquelles on dispose des données démographiques sur la population suivie.
	- Elle s'exprime généralement "en nombre de personne pour 100 000 personnes par années"
Le taux d'incidence permet des comparaisons entre les populations et dans le temps, et c'est une mesure plus précise lorsque la proportion des perdus de vue ou d'arrivée/départ est élevée dans une population d'étude. 

De plus, elle prend en compte pour chaque personne, la durée de l'exposition au risque d'être malade et de suivi jusqu'à la survenue de la maladie, décès, perdu de vue ou fin de suivi. La durée est variable pour chaque personne dans la population étudie et chaque personne aura un poids différent au dénominateur. De plus, cela permet des comparaisons dans l'espace et le temps pour des populations ayant fait l'objet de suivis de durée différente.


## Objectif
!!! note 
	- Produire des données de références
	- Apporter une meilleure connaissance épidémiologique
	- Suivre l'évolution des taux (**tendances**) et identifier des phénomènes émergents
	- Autoriser les comparaisons
 **Indicateurs** : 
 - [[Incidence & prévalence $#Incidence cumulative|Taux d'incidence cumulé]]
 - [[Incidence & prévalence $#Incidence|Taux d'incidence]]
 - BMR : Pourcentage de résistance dans l'espèce, [[Incidence & prévalence $#^incidence-cumulative|taux d'attaque]], taux d'[[Incidence]]
 - Antibiotique : DDJ/1000JH

On observe des différence dans les durées d'observation ou d'exposition au risque. 

!!! note 
	- Meilleure efficience
	- Peut prendre en compte la durée d'exposition aux risque (taux d'[[Incidence]])
	- Rend les comparaisons possible (à sois même dans le temps, aux autres établissements d'un réseau)
	- Standardisé, validé, clé en main
	- À intégrer fortement dans la routine en utilisant des ressources existantes
!!! note 
	- Charge de travail plus élevée : Recueil en continu et nombreux FR
	- Ciblé : sur patients, actes, secteurs à risque, sur une période donnée
	- Détecte mal les épidémie ou les cas groupés
	- Rétro-information différée
	- Case-mix variable (l'exposition n'explique pas tout)
	- Taux d'incidence "abstrait" pour les cliniciens
## Taux d'[[Incidence]] pour 100 jours d'expositions
Rapporté à la durée d'exposition au risque, c'est un indicateur de risque quotidien, montrant la qualité des soins, de la pose, la réduction des indications et de la durée du sondage.

La durée de pose de la SAD suppose que la relation durée de sondage et risque est linéaire. Il faut s'arrêter :
- Premier épisode infectieux
- Patients chroniques avec infections récidivantes

## Taux d'attaque^[incidence cumulée]

!!! note 
	Il est utilisé pour caractérisé la morbidité d'une épidémie et peut se traduire par la vitesse d'accumulation des nouveaux cas. Il ne concerne pas le taux de décès qui est estimé par la mortalité ou la létalité.

Il est complémentaire au précédent, et rapide à recueillir (on n'inclut que les sondés). Sa communication est simple car il est simple de conception. Il mesure :
- La qualité de la pose ⍟
- La qualité des soins (asepsie des soins) ⍟⍟
- Réduction de la durée du sondage : Non
- Réduction des indications du sondage : Non

Il permet de mesurer la limitation des indications de sondage et mais l'[[incidence]] mesurée est faible (car les variations sont difficiles à mettre en évidence).

![[Incidence & prévalence $#Incidence cumulative|no-h]]

Cela représente l'**incidence cumulé** dont l'usage est reservé aux affections pour lesquelles l'exposition au facteur causal est très limité dans le temps (quelque jours ou semaines). Il est calculé sur une période très courte et est utilisé dans le cas d'épidémie ou intoxication. 



# Différents types d'incidences
![[Incidence & prévalence $#Formule générale]]
![[Incidence & prévalence $#Taux d' Incidence]]


## Incidence instantanée
![[Incidence & prévalence $#Incidence instantanée|no-h]]

![[Introduction aux IAS#Etude transversale de prévalence]]

### Rapport incidence et prévalence 
$$p = i*d$$
Avec $d$ la durée moyenne de la maladie.
Cette formule est valable pour une maladie rare en état stable et non valable si :
- Maladie fréquente (prévalence > 5%)
- Maladie instable : Taux d'incidence et distribution de la durée inconstante.

^a18b5b