---
date: "03-12-2021"
fc-date: 2021-12-31
fc-calendar: "Calendar"
obsidianUIMode: "source"
publish: True
folder: "school"
category: "Épidémiologie"
fc-category: "Épidémiologie"
sr-due: 2021-12-31
sr-interval: 10
sr-ease: 250
tag: "gestion-risque, One-Health"
---
[[10. Master/Flashcards/🩹Analyses spatiales |🩹 Analyses spatiales]]
[[_assets/30. Références/33. Infos/Analyses spatiales.pdf|Analyses spatiales]]
[[J. Cappelle|J. Cappelle]]
Review:: #🎒/recite 

***UE:: One-Health***{: #left}  

# Application des SIG en santé
   
1. Cartographie et description des évènements de santé, Surveillance
2. Recherche de facteurs de risque, détection de données agrégées
3. Cartographie du risque (Risk mapping)
4. Évaluation des mesures de lutte

!!! info 
	- Meilleure compréhension des phénomènes de santé
	- Analyse du risque
	- Communication
	- Prise de décision
![[Pasted image 20211221103249.png]] 
Les données géométriques décrivent la forme et la localisation (par ex la forêt est un polygone défini par les coordonnées $x,y$. Elles sont représentées par les points, des lignes ou des surfaces et repéré dans un système de projection données
Les données attributaires peuvent être de plusieurs types (nom: forêt du pilat, type résineux, superficie en km², densité de la population de volaille...)
- Les données topologiques : relation de l'objet avec ses voisins
- Le SIG est un outil de visualisation, interprétation et de prédiction

## Données SIG
Il existe deux modes de représentation de données géographiques :
- Données vectorielles : points, ligne, polygone
- Données matricielles, maillées : image, photo aérienne, scan.
![[Pasted image 20211221103752.png]]
## Mode Raster
- Le territoire est subdivisé en cellules pour former une matrice de lignes et colonnes. À chaque cellule, on associe une valeur chiffrée. 
- Le traitement des images nécessitent des outils spécialisés
- Localisation +/- précise

Ainsi, sur un document numérisé, chaque valeur de pixel représente une couleur de la carte. Mais ces pixels peuvent aussi représenter autre chose qu'une vraie couleur : la valeur peut représenter l'altitude au lieu considéré et sa visualisation permet d'avoir une représentation du relief. 

## Mode vecteur
![[Pasted image 20211221105143.png|+side]]
- Localisation précise des objets
- Facilité de manipulation des objets
- Associés à des attributs- Localisation précise des objets
- Facilité de manipulation des objets
- Associés à des attributs

## Combinaison
   
Le traitement des données rasters et celui des données vectorielles sont très différents et ne font pas appel aux même outils, ni aux mêmes compétences.

Le traitement des rasters et des données qu'ils contiennent est complexe. Il réclame des outils spécialisés. C'est pourquoi dans une majorité de cas ils ne servent que de fond de plan en tant que support à des couches vectorielles.

A contrario, les données vectorielles sont plus simples à manipuler, notamment à des fins d'analyse.

## Projection

!!! note 
	La projection cartographique est une technique permettant de représenter la surface de la Terre dans son ensemble ou en partie, sur la surface plane d'une carte.

Aucune représentation cartographique en plan (2 dimensions), obtenue à la suite d’une projection, ne peut illustrer fidèlement la surface terrestre sans altérer ces éléments: les directions, les distances, les surfaces ou les formes des éléments géographiques.

# La cartographie
Il faut :
- Un choix pertinent de l'information présenté 
- Un choix pertinent du mode de représentation :
	- Point
	- Densité
	- Limites administratives,
	- Nombres et types de couleurs.

# Données ponctuelles
![[Pasted image 20211221112118.png|+side]]
!!! question 
	- La distribution des cas est-elle due au hasard ?
	- La répartition des populations est-elle uniforme ?
	- Le taux d’incidence d’un département est-il indépendant de celui des départements voisins ?
	$~$
	⇒ Recherche structure agrégée = Cluster (Groupes de points liés dans l’espace et/ou dans le temps)
	⇒ Outils statistiques pour confirmer/infirmer l’analyse descriptive

## Test
- Selon le type d’objet géographique
	- Points
	- Lignes
	- Polygones
- Selon le type de variable
	- Qualitative, quantitative, …
- Selon les dimensions
	- Espace
- $Espace * Temps$

## Homogénéité spatiale
- Hypothèse de départ: Echantillonnage est aléatoire
- Répartition homogène vs hétérogène ?
- Approximativement, le même nombre de points est inclus dans une zone circulaire où qu’elle soit placée

## Autocorrélation spatiale
- Hypothèses de départ: l'échantillonnage est aléatoire
- « Hypothèses » de travail:
	- « H0 »: Les valeurs associées aux points (zones) sont indépendantes
	- « H1 »: Plus les points sont proches, plus les valeurs associées sont semblables.
⇒ Index de Moran [-1; 1]
⇒ $Moran’s\ I ≈ 1$ $==$ extrapolation de la valeur des points proches

## Association
!!! note "Analyse univariée"
	Buffer pour identifier les exposés et non exposés
!!! note "Analyse multivariée : Modèle de régression"
	- Selon le type de variable à expliquer
	- Prendre en compte l'effet du voisinage si l'auto-corrélation spatiale est significative.

# Conclusion
- Développement important depuis 20 ans
- Évolution (smartphone)
- Outils d'intérêt pour :
	- Description
	- Recherche cause, risque
	- Épidémiologie interventionnelle : Évaluation de méthode de lutte contre les maladies