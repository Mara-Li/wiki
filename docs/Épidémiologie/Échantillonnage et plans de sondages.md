---
date: "12-10-2021"
folder: "school"
obsidianUIMode: "preview"
publish: True
category: "Épidémiologie"
tag: "Épidémiologie, Méthode-épidémiologie"
---
[[10. Master/Flashcards/🧰Échantillonnage et plans de sondages |🧰 Échantillonnage et plans de sondages]]
Review:: #🎒/memorize
***UE:: Méthode en épidémiologie***{: #left}  

# Introduction
!!! note "Échantillonner"
	Opération qui consiste à identifier un sous-groupe d'individus dans une population afin d'y recueillir des données statistiques.
!!! note "Sondage"
	Méthode utilisée pour échantillonner (en général dans une étude descriptive)
!!! note "Échantillon"
	Sous groupe d'individu sélectionné dans la population. 

!!! note "En épidémiologie"
	- Descriptive : Décrire l'état de santé de la population 
		$~~~~~~$ Estimer avec la meilleure précision et le moins de moyens des paramètres concernant une population bien définie. 
		⇒ **Représentativité**
	- Analytique : Analyser les causes des problèmes de santé
		- Établir une relation exposition → état de santé pour en tirer des renseignement généraux applicables à toute la population. 
		- Base contenant des exposés / non exposés à risque de maladie.
		=> **Comparabilité**
	- Évaluative : Évaluation de l'impact d'une intervention

- La représentativité est nécessaire, mais insuffisante pour un bon sondage, et permet une estimation et donc une inférence fiable (non biaisée).
- La comparabilité garde des échantillons comparables même lorsqu'ils n'ont pas été échantillonnés de la même manière, mais cela ne signifie pas qu'il faille gommer toutes les différences entre les échantillons.

## Erreurs
Les erreurs peuvent être :
- Fluctuation d'échantillonnage
- Aléatoire → dû au hasard → **inévitable**
- Prise en compte via l'erreur standard et l'intervalles de confiance. 

Les estimations des paramètres reste possible, et l'erreur diminue si la taille de l'échantillon augmente.

## [[Biais]]
![[Biais#^822180]]
![[Biais#^42c5c5]]
# Avant d'échantillonner
- Établir les objectifs de l'enquête
- Définir la population d'intérêt et les unités d'enquête
- Déterminer les données à recueillir
- Fixer la taille de l'échantillon
- Sélectionner une base de sondage
- Fixer une méthode d'échantillonnage


## Définir la population d'intérêt
!!! note "Ensemble des individus que l'on voudrait étudier et auxquels s'appliquent les résultats d'une enquête"

La population dépend de l'objectifs.
!!! note 
	- Limites géographiques
	- Période de référence
	- Caractéristiques socio-démographiques

## Définir les unités d'enquête
Il y a différentes unités en fonction du niveau de réponse :
- Unité d'échantillonnage
- Unité déclarante
- Unité de référence

## Méthode et base de sondage
Il faut sélectionner une base de sondage, notamment en sélectionnant une liste **exhaustive** et sans **doublons** des unités d'échantillonnage. Enfin, il faut fixer une méthode d'échantillonnage :
- Sondage empirique : Probabilité de sélection définie sur le terrain selon un choix raisonné
- Sondage aléatoire : Probabilité de sélection définie lors de la constitution du plan de sondage, fait par tirage au sort.

# Sondage empirique
## Méthode des quotas
![[🧰Échantillonnage et plans de sondages#Méthode des quotas|no-h]]
## Méthode des itinéraires
- Quota et trajets
- Réduit la liberté de l'enquêteur

## Méthode des unité type
- Découpage de la base de sondage en strates homogènes
- Conservation qu'une unité de la liste par strate
- Conservation de l'unité la plus moyenne
- Inconvénients : Arbitraire et non représentativité
## Transects
- A partir d'une zone géographique
- Ne conserve que les unités selon une ligne droite
- Inconvénients : Arbitraire et non représentativité

# Sondage aléatoire
## Elementaire 
- Aléatoire simple 
- Aléatoire systématique

Il y a une seule étape de sélection, sans manipulation de la base de sondage. L'échantillon est défini par :
- Une fraction de sondage en pourcentage d'individus sélectionné : $\frac{n}{N}$
- Probabilité d'inclusion pour chaque individu égale à : $0<p_k<1$

La probabilité d'inclusion $p_k$ : 
- Égale : $p_k=f=\frac{n}{N}$
- Inégale : $p_k\ne f$

En cas d'inégalité :
- $p_k\propto X_k$ avec $X_k$ une valeur connue pour chaque $k$.
- $p_k=n(\frac{X_k}{\sum X_k})$

### Sondage aléatoire simple
Sans remise, avec des probabilités égale entre unité et inégale dans le temps. C'est un sondage de référence, en général sans remise, à probabilité égale, simple à réaliser, et dont l'analyse est classique. Cependant :
- Pas nécessairement le plus efficace
- Nécessite une base de sondage

Il est possible de déséquilibrer les probabilités mais il faut faire attention à l'analyse. 

### Sondage aléatoire systématique
Seul le 1er individu est tiré au sort, et les suivants sont sélectionné par un pas de sondage. Il n'y a donc pas nécessairement besoin d'une base de sondage et donc, le N est parfois inconnu.

#### À probabilité égale 
- Simple
- Analyse classique
- Probabilité égale
- Pas besoin de base de sondage

Mais :
- Taille de l'échantillon aléatoire
- Tirage non indépendant
- Périodicité
- Variance

#### Inégale
Même principe mais nécessitant une base de sondage et une information supplémentaire dans cette base, car la probabilité est proportionnelle à cette information. Cela donne une variable quantitative.


## Non-élémentaire
- Stratifié
- En deux phases avec post-stratification
- En grappe

### Stratifié
Il nécessite une base de sondage, et une information complémentaire qualitative. Le but est de réduire les fluctuations d'échantillonnage.
![[Pasted image 20211015153539.png]]
Il y a un gain de précision si la strate est corrélée à la mesure, ce qui est à prendre en compte au moment de l'analyse.

Il peut permettre aussi de surreprésenter une minorité si les probabilités sont inégales entre les strates.

## Sondage en deux phases
Il est utile si on veut stratifier en l'absence de variable disponible :
- TAS simple dans la base
- Récupération de l'information de strate
- Stratification

Cependant, c'est délicat à analyser et moins efficace que la stratification.

## Sondage à deux degrés
Suite de TAS successif

### Sondage en grappe
Cas particulier du sondage à deux degré : le deuxième TAS n'en est plus vraiment un puisqu'on prend 100% des unités statistiques. 

#### Sondage aréolaire
Les zones géographiques sont de plus en plus restreintes 

### Effet grappe
Les unités statistiques présentes dans une grappe se ressemblent : 
- Variable intragrappe faible
- Variance inter-grappe forte 

Cela est à prendre en compte au moment de l'analyse, par des modèles mixtes.