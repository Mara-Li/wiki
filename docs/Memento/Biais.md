---
date: "20-12-2021"
obsidianUIMode: "source"
publish: False
flux: True
folder: "school"
category: "Memento"
---
!!! note 
	Erreur d'estimation d'un paramètre

^822180

Il est évitable, car non aléatoire, et n'est **pas pris en compte** dans l'inférence. L'estimation des paramètres restent possibles mais biaisée, et non modifié par la taille de l'échantillon. ^42c5c5

# Biais de sélection

!!! note 
	Provient des **effets de sélections** c'est à dire lorsque la population observée diffère de la population cible.
	→ "Mauvaise population"

1. **Biais dans la constitution de l'échantillon** :
	- Echantillon non représentatif de la population cible ; 
	- Sujets faisant partie de la population cible non inclus dans l'échantillon ;
	- Non réponse - refus de participation ; 
	- Sujet exclus de l'analyse en raison d'information manquantes
Correspond à un biais si les caractéristiques des sujets inclus/analysés sont différents de l'ensemble des sujets. 

1. **Biais dans la constitution du groupe de référence** : Le groupe n'est pas représentatif de l'ensemble des sujets *nE*, *nM* de la population cibles d'où est issus le groupe de sujet exposé/malade.
	Il faut connaître avec précision la population cible, disposer d'une base de sondage de cette population source, et sélection de façon appropriée l'échantillon de l'étude.

Pour remédier aux [[Biais]] de sélection, on recueille à l'inclusion un minimum de données sur les non-participants, afin de procéder à des redressements pour estimer les paramètres d'intérêt. Cependant, il n'est pas toujours possible de :
- Recueillir les données de redressement pour l'ensemble des sujets non participants ;
- Facile de savoir si ces données sont suffisantes pour contrôler les [[Biais]] potentiels ;

Il y a aussi le même problème tout au long du suivi, les non-répondants et les perdus de vue différant toujours des participants pour divers facteurs.
# Biais observation
⇒ L'information concernant l'E est donnée après apparition de la M.

# Biais de mémoire
Il existe des différences concernant l'information sur l'E passée rapportée par les cas et par les témoins. 
Les individus malades vont essayer d'identifier plus d'E potentiels que les témoins.

# Biais de classification
!!! note 
	Conséquences d'erreur systématiques sur la mesure de l'exposition ou de la maladie.
	→ "Mauvaise informations"
Ce sont des erreurs dans le jugement de la M ou de l'E. L'erreur est indépendante d'un axe sur l'autre : E ou M est fausse dans les mêmes proportions entre les deux groupes : le biais de classification est non différentiel.

Cela résulte d'un mauvais classement liés au recueil de l'information sur :
- Les malades / non malades
- Les exposés / non-exposés.
Il existe deux types : différentiel, ou non-différentiel.
1. **Erreur différentielle** :
	- Erreur sur le recueil de l'exposition affectant différemment les malades et non malade ([[Etude cas-témoin — Pathologie transmissible|étude cas-témoin]].)
	- Erreur sur le recueil des données sur la maladie affectant différemment les exposés et non exposé (cohorte)
	- Erreur entrainant une sur ou sous-estimation de l'association entre maladie et exposition.

!!! note "[[Biais]] différentiel"
	90% des cas rapportent correctement une E et 60% des témoins sans tuberculose rapportent correctement cette E
⇒ On observe une sous estimation ou surestimation du RR.

2. **Erreur non différentielle** :
!!! note "[[Biais]] non différentiel"
	90% des cas rapportent correctement une E et 85% des témoins sans tuberculose rapportent correctement cette E
- Erreur identique chez les malades / non malade ([[Etude cas-témoin — Pathologie transmissible|étude cas-témoin]]) ou exposé/non exposé (cohorte)
- Sous-estime la force de l'association entre l'exposition et la maladie (perte de puissance)
⇒ On observe une sous estimation du risque relatif.

!!! note 
	- Différentiel : Diagnostic de la maladie non en aveugle du statut sur l'exposition → Diagnostic non objectif.
	- Non-différentielle : Erreur de l'appareil de mesure nécessaire au diagnostic.

# Biais subjectivité
Lorsque l'enquêteur sait s'il interroge un cas ou un témoin il peut inconsciemment suggérer au sujet des réponses qui vont dans le sens de ses convictions, notamment concernant l'exposition aux facteurs de risque.

Par exemple, dans le cas d'une hypothèse spécifique E et M :
- Dans le cas d'une maladie peu connue, plusieurs E sont testés.
- Si certaines E sont associé à la M, il faut une nouvelle étude pour tester cette hypothèse.

### [[Biais]] écologique
!!! note 
	Erreur d'estimation du degré d'association entre l'exposition et l'effet.

Celui-ci résulte :
- Du [[Biais]] d'agrégation : Les individus qui ont présenté un effet ne sont pas forcément ceux qui ont été exposé.
- Du [[Biais]] de spécification (ou [[Biais]] de confusion écologique) : Par exemple, une fréquence plus élevée d'affection respiratoire dans une zone polluée peut être liée au fait qu'il y ait davantage de sujets allergiques que dans la zone non polluée. 

### Autres [[Biais]]
De fait de la nature agrégée de la mesure de l'exposition, il est impossible de savoir si les sujets qui ont présenté un effet ont été réellement exposés au facteur de risque, ni même à quel niveau ils ont exposés.
Le plus souvent il n'est donc pas possible de faire des extrapolations individuelles à partir des résultats obtenus dans ces études.



# Facteur de confusion

!!! note 
	Lié à l'influence de tiers facteurs sur l'association entre exposition et maladie
	→ "Mauvaise interprétation"

Pour être un facteur de confusion pour une exposition E et une maladie M, un facteur X doit satisfaire trois conditions :
- Être un facteur de risque pour M (causal ou non)
- Être associé à E
- Ne pas être une conséquence de E

**Contrôle** : 
- Randomisation
- Restriction de la population de l'étude sur une strate donnée du facteur de risque ;
- Appariement : Équilibrage de la distribution du facteur de confusion entre les groupes étudiés.

Au moment de l'analyse :
- Ajustement : Analysée stratifiée
	Découpe de l'échantillon selon les strate du facteurs de confusions et estimation de la relation entre M et E dans chaque strate.
- Modélisation statistique avec analyse multivariée permettant de prendre en compte simultanément plusieurs facteurs de confusion.