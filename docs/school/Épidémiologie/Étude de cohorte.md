---
date: "24-09-2021"
obsidianUIMode: "preview"
publish: True
category: "school/Épidémiologie"
tag: "Épidémiologie, Méthode-épidémiologie"
---
***UE:: Méthode en Épidémiologie***{: #left}  

# Principe et intérêt des cohortes épidémiologiques
## Etude analytique
   
L’objectif des études analytiques est d’identifier les facteurs de risque d’une maladie ou d’un évènement de santé. On formule une hypothèse sur les causes possibles d’une maladie, à partir de données déjà acquises (bibliographie, étude descriptive). Les études cas-témoins et de cohorte sont toujours comparatives. Elles peuvent être prospectives ou rétrospectives.

![[10. Master/_Memento/Étude de cohorte#Introduction|Étude de cohorteno-h]]
			  
### Principe
On mesure le **taux d'[[Incidence]]** observé dans une population exposée à un facteur (de risque, ou protecteur) au **taux d'[[Incidence]]** qui aurait été observé dans la même population si elle n'avait pas été exposée.
  
**La cohorte est le type d’étude le plus apte à quantifier et déterminer l’existence et la forme d’une association entre facteur de risque et maladie, mais elle ne suffit pas à démontrer une relation de causalité.**

Pour réaliser une [[10. Master/_Memento/Étude de cohorte|étude de cohorte]], il faut formuler une hypothèse précise, l’exposition doit être bien mesurée, la maladie facile à repérer, relativement fréquente et d’incubation courte, les [[biais]] doivent être maîtrisable. On ne pourra pas mettre en place une [[10. Master/_Memento/Étude de cohorte|étude de cohorte]] si l’hypothèse n’est pas précise, la maladie est rare, la durée d’incubation est longue, le suivi est impossible ou les [[biais]] de sélection non maîtrisables.

La cohorte peut être **ouverte** (_population française_) ou **fermée** (_nombre fixe d’individu entrant et sortant selon la survenue de l’évènement_). On commence par mettre en place une étude de faisabilité : choix des outils, calculs du nombre d’individus pour avoir une puissance acceptable et évaluer les coûts. L’exposition doit pouvoir se mesurer de façon valide (_test biologique, questionnaires_) et on doit déterminer si elle est fixe ou variable dans le temps.
Pour le groupe non exposé, il faut qu’ils soient comparables au groupe exposé donc de préférence dans la même population.
   
Dans le cas où les populations inclues sont des sous groupes particuliers :
- La taille de l'échantillon est réduite, et l'exposition plus facile à identifier avec un suivi plus facile et un coût réduit.
- Les personnes sont non représentatives de la population générale, et les études ne sont pas toujours généralisables. 
		   
La mesure de l’évènement doit être identique chez les E et nE. Le critère de jugement principal doit être mesurée par une personne ne connaissant pas le statut d’exposition du patient. Il doit être défini a priori dans le protocole. 
Le décès doit être mesuré (oui/non) et les causes du décès documentés avec dossier médicaux, médecin traitant…

### Les différents types de cohortes
#### Cohortes prospectives
![[21-09 DN-etude de cohortes pathologies transmissilble et chronique_.png]]
![[10. Master/_Memento/Étude de cohorte#Cohorte prospective|no-h]]

#### Cohorte rétrospective
![[10. Master/_Memento/Étude de cohorte#Cohorte rétrospective|no-h]] 
![[Étude de cohorte — Pathologie transmissible et chroniques_2021-09-24 10.43.44.excalidraw.png]]
#### Cohorte historico-prospective
![[Pasted image 20210924105119.png]]
![[10. Master/_Memento/Étude de cohorte#Cohorte historico-prospective|no-h]]

Les cohortes ont pour avantages généraux :
- Limiter le [[Biais]] d'information, puisque les renseignements sur l'exposition sont enregistrés prospectivement. 
- Il y a une prise en compte des maladies concurrentes pour un mêmes facteurs de risque ou des facteurs de risques concurrents pour une pathologie.
- Il est possible de faire des groupes de sujets exposés de taille suffisante pour étudier les **expositions rares**. 
- Il est possible de tenir compte de phénomènes liés au temps (génération, période)

**L'[[10. Master/_Memento/Étude de cohorte]] est essentiellement réservée à l'analyse de maladie assez fréquente**.

Les domaines d'utilisation des cohortes dans le monde de la recherche sont très diversifiés et concernent tous les aspects de la santé en relation avec des facteurs de risques variés. Les cohortes existantes sont si nombreuses qu'il est impossible de toutes les répertoriés. En 2008, les équipes de l'Inserm faisait état de 90 cohortes.

Les études de cohortes ont le meilleur niveau de preuves scientifiques car :
- Elles permettent d'établir une **séquence chronologique exposition — maladie**
- Il y a moins de [[Biais]] de mesure de l'exposition.

Cependant, ce sont des études longues et coûteuses.


### Critère de décision

![[10. Master/_Memento/Étude de cohorte#Critère de décision|no-h]]

### Qualité d'une cohorte et grille d'analyse
Il faut vérifier
- La bonne définition des groupes à comparer ;
- L'évaluation identique des groupes (objective et de préférence en aveugle) pour l'exposition et la survenue de la amaldie dans le groupe exposé et non exposé.
- L'identification et le contrôle approprié des facteurs de confusion connu
- Un suivi suffisamment long et complet des patients.
	
![[Pasted image 20210924110847.png]]

# Estimation produites par les études de cohortes
On étudie l’effet d’un facteur d’exposition en calculant le taux d’[[Incidence]] dans le groupe E et nE, mais aussi le taux de mortalité. On calculera ensuite le risque relatif dans le but d’estimer la vraisemblance d’une association de causalité entre l’exposition et la maladie.

## [[Incidence]]
![[Incidence & prévalence $#^tx-incidence]]
Il ne faut pas oublier de prendre en compte **la notion de période temps** dans ce calcul. 


![[Incidence#Définitions|no-h2]]

!!! tip "Méthode exacte"
	Somme des durées pendant lesquelles chaque sujet est présent et non malade.
## ![[Risque relatif]]
---
# Indicateur de l'état de santé
Les termes « risque » et « taux » sont utilisés de manière interchangeable mais ce n’est pas la même chose : 
- Le risque est la probabilité pour **un individu** de développer la maladie. 
- Le taux fait référence à la même chose mais pour un **groupe d’individu.**

Les deux types de taux les plus couramment en épidémiologie :
- [[Incidence]]
- Prévalence

!!! note 
	- Ratio : Rapport de deux quantités
	- Proportion : Ration pour lequel le numérateur est inclus dans le dénominateur.
	- Taux : Ratio pour lequel le dénominateur est exprimé en fonction du temps.

## Facteurs de risque individuel
Il existe les facteurs intrinsèques :
- Âge
- Sexe
- Caractéristiques génétiques

Mais aussi les facteurs extrinsèques :
- Comportement ; 
- Environnement physique, chimique, biologique et sociaux

## Indicateurs de mortalités
Le taux brut mélange toutes les classes d'âges et les causes
![[Incidence & prévalence $#Taux bruts|no-h]]

Les taux standardisés prennent en compte les structure d'âge, sexe…
![[Incidence & prévalence $#Taux standardisés|no-h]]

Enfin, les taux spécifiques permettent de meilleures comparaisons (sexe, classe d'âge, cause, lieu…) :
![[Incidence & prévalence $#Létalité|no-h]]


## Morbidité
!!! note 
	Nombre de personnes souffrant d'une maladie donnée pendant un temps donné dans une population.

---
# Limite et difficulté
Un [[Biais]] est une erreur systématique (non aléatoire) qui s'ajoute à l'erreur aléatoire liée aux fluctuations d'échantillonnages, fournissant des valeurs différentes au niveau de l'échantillon des « vrais » valeurs dans la population et entrainant une interprétation erronée des résultats.

Décrire un [[Biais]], c'est donner :
- Sa famille
- Sa nature différentielle ou non différentielle
- Son sens le cas échéant (surestimation ou sous-estimation)
- Son importance (négligeable, faible, modérée, important)

Il existe trois types de [[Biais]].
## [[Biais]] de sélection
![[Biais#Biais de sélection|no-h]]

Dans la plupart des cohortes épidémiologiques, la participation des sujets repose sur le volontariat, et il existe fréquemment des effets de sélection qui peuvent intervenir lors de la constitution de la cohorte et au long du suivi de celle-ci.
Ainsi, lorsque l'objectif de l'étude est descriptif, il faut que le paramètre soit estimé sur un échantillon représentatif de la population cible : on utilise donc un tirage au sort dans une base de sondage appropriée.

Le mode d'inclusion faisant appel au volontariat entraine inévitablement des effets de sélection, même lorsque l'on procède à un tirage au sort aléatoire d'un échantillon dans une base de sondage appropriée. 
On rencontre en effet des non-participants à l'inclusion, ainsi que des perdus de vue en cours de suivi, constituant une source potentielle de [[Biais]]. 
Les perdus de vue en début d'étude sont plutôt dû à une non-participation. En fin d'étude, c'est parfois dû à la maladie : Il faut évaluer si les sujets exposés et non-exposés diffèrent en terme de perdus de vue.

## [[Biais]] de classement ou d'information
![[Biais#Biais de classification|no-h]]

## [[Biais]] de confusion
![[Biais#Facteur de confusion|no-h]]

# Conclusion
| Avantage                                   | Inconvénient               |
| ------------------------------------------ | -------------------------- |
| Estimer le rôle d'exposition rare          | Maladie rare               |
| Effets multipliés liés à une exposition    | Coût                       |
| Séquence temporelle : exposition → maladie | Organisation & logistique  |
| Prévention des [[Biais]]                       | Problème des perdus de vue → [[Biais]] de sélection | 
| Calcul des taux d'[[Incidence]]                |                            |