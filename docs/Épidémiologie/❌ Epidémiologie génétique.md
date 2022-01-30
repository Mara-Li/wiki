---
date: "01-12-2021"
obsidianUIMode: "preview"
publish: False
folder: "school"
tag: "Épidémiologie, cancers"
category: "Épidémiologie"
fc-category: "Épidémiologie"
---
[[10. Master/Flashcards/🦀Epidémiologie génétique |🦀 Epidémiologie génétique]]
[[_assets/10. Master/M2-23. Épidémiologie des cancers/Epidémiologie génétique.pdf|Epidémiologie génétique]]
[[60. Bookmark/Contacts/Y. Drouet|Y. Drouet]]

*UE:: Épidémiologie des cancers*  

# Essentiel de génétique 

À partir du Ve siècle avant jV se présentent les premiers textes traitant l'hérédité comme une difficulté à résoudre et non comme une évidence allant de soi. Pour pythagore et Aristote, l'enfant est la suite de la croissance de ses parents; Une fois audlte, le surplus d'alimnetation est concentré dans la semence. La reproduction étant pour lui "une excroissance de l'individu". Il est donc impossible impossible qu'un naisse de deux, blocage intellectuel qui va durer 2000 ans.

Après Mendel, il faudra attendre encore 100 ans pour découvrir l'ADN, où les gènes sont des séquences ADN codé en base ATCG. Les séquences de 3 bases codent pour un acide aminé qui forment ensuite les protéines, avec 64 codons pour 20 acides aminés seulement.

# Épidémiologie génétique 
C'est une science apparue dans les années 80. Elle fait appel à des méthodes classiques en épidémiologie sur une approche populationnelle. Ce sont des études d'association entre un facteur génétique et une maladie. 
De plus, elle prend en compte des méthodes spécifiques à la génétique, sur une approche familale : analyses de liaison, de ségrégation.

# Analyse de ségrégation 

!!! note 
	Étude de la transmission familale d'un caractère donné

Trois types de mode de transmissions : 
- Récessif
- Dominant
- Lié au chromosome X

Pour faire ses analyses, il faut des paramètres : 
- Distribution des génotypes dans la population : $P(g_i)$
- La distribution des génotypes des enfants sachant les génotypes des parents $P(g_e|G_f,G_m)$ (lois de mendel)
- La distribution du phénotype d'un individu sachant son génotype : $P(Y|G_i)$

## Modèle monogénique 

Soit un locus **A Bi-allélique** : 
- Allèle $A$ pathologique (allèle de susceptibilité à la maladie, de fréquence Q)
- Allèle $a$ normal de fréquence $1-q$.

Trois génotypes sont possibles : $Aa, AA, aa$.

## Modèle polygénique
La susceptibilité à la maladie est sous la dépendance de nombreux gènes dont les effets individuels sont faibles : une composante 

## Modèle mixte

La susceptibilité à la maladie est la résultante d'un gène majeur et d'une composante polygénique.

## Calcul de vraisemblance

!!! note 
	Probabilité des observations sous un modèle donné.

Soit Y le statut atteint/non-atteint :
$$Pr(Y_F, Y_M,Y_1,Y_2,Y_3|q, fAA, fAa, faa)$$
$$\sum $$

Pour une famille de 15 individus, le modèle génétique le plus simple donne 14k combaisons différentes. 

!!! note "Étude cas-témoin multicentrique en population aux USA :"
	- Cas : 4730 fermmes atteintes d'un cancer du sein entre 20 et 54 ans.
	- Témoins : 4688 femmes indemnes appariées sur l'âges.
	$~$
	À la fin, on se retrouve avec différents modèles, où l'on compare les modèles afin d'avoir une vraisemblance minimale. On se retrouve donc avec une vraisemblance pour le modèle major locus dominant : le monogénique dominant. 

# Identification du gène BRCA1 de prédisposition génétique 
## Analyse de liaison 

Avec le temps, le déséquilibre de liaison est conservé uniquement à proximité de la mutation originale. On peut donc estimer l'âge d'une mutation par la taille que conserve une liaison génétique.

### Exemple de liaison génétiques

La mutation a est très proche du marqueur étudié 7, sans recombiansion; En absence de la proximité physique, la mutation a et l'allèle 7 du marqueur sont transmis simultanément. Au long des générations les sujets atteints et eux seuls ont le marqueur -7. 

L'analyse des liaisons permet de tester si cette transmission conjointe peut être due au hasard. 

L'analyse de liaison a pour objectif de localiser un gène responsable d'une maladie héréditaire sur une région chromosomique.

## Méthode de Lod Score

!!! note "Hypothèses testées :"
	- H0 : Indépendance génétique entre deux loci "marqueur" et la maladie

# Tester l'association génotype-phénotype à l'échelle du génome entier
## Les GWAS et leurs particularités méthodologiques

!!! note 
	Identifier les variants génétiques associés à un phénotype parmi l'ensemble des variants du génome.

On utilise pour cela du séquençage par puce à ADN en comparant des fréquences des variants chez les cas et témoins (test du $\chisq^2$).

Cependant, il existe environ 10 000 000 variants génétiques courant dont certains sont physiquement très proches et donc toujours transmis ensemble : il faut échantillonner des variants indépendant.

La solution est d'étudier la structure de corrélation, et de créer des cartes de variants génétiques. Comme les variations génétiques proches sont hérités ensemble il suffit de tester 500 000 SNP pour capturer la grande majorité des variations génétiques courantes (beaucoup moins que les 10 millions de SNP courants).