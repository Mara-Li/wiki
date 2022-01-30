---
alias: "Étude cas-témoin"
folder: "school"
obsidianUIMode: "preview"
publish: True
flux: True
created: "13-10-2021"
category: "Épidémiologie"
tag: "Épidémiologie, Méthode-épidémiologie"
---
Review:: #🎒/memorize 

***UE:: Méthode en épidémiologie***{: #left}  

# Introduction
On compare la proportion de malade dans une population à un moment donnée.

Il n'est pas possible de calculer l'[[Incidence]] de la maladie, car l'[[Incidence]] est une proportion et il faut, pour connaître cette proportion, la probabilité de la maladie chez exposé et non exposé. Hors, dans une étude cas-témoin, tout est calculé au départ : il n'est pas possible de calculer une probabilité, puisque tout le monde est soit malade ou non maladie.

Il n'est donc pas possible de calculer le risque relatif dans une étude cas-témoin. 

Dans une étude cas-témoin, on calcule l'odds-ratio : 

![[OR & RR $#Odds Ratio|n-h1]]

!!! note 
	- Permet d'étudier les maladies qui présentent une latence longue.
	- Moins coûteux et long
	- Importance de boen identifier la maladie afin de discriminer cas et témoin.
	- Permet d'étudier les maladies rares (car on prend les déjà malade).
	- Il est possible d'explorer de multiples facteurs de risques qui peuvent être associés à la maladie et d'explorer les relations existantes entre ces facteurs.
	- Souvent, ce type d'étude est utilisé lorsque la connaissance sur la maladie est limitée. 

!!! note 
	- L'information est dans le passé : [[Biais]] de mémoire
	- Difficulté de constitution du groupe témoins
	- Pas de mesure de l'[[Incidence]]
	- [[Biais]] de sélection (différentiel ou pas) sur la base de l'exposition pour les cas et/ou témoins.
	- [[Biais]] d'information sur la maladie

Il faut s'assurer tout le temps de la séquence temporelle : exposition puis maladie. Cela est important dans le cadre d'étude de plusieurs facteurs. Il faut donc la date de survenue de la maladie et de l'exposition : il faut donc une source sûre de datation.

# Points importants
!!! warning 
	Il faut :
	- S'assurer de la comparaison des groupes
	- Risque de base de développer la maladie chez Exposé (E) et non exposé (nE)
	- Qualité et exhaustivité de l'information 
	- Problèmes à résoudre :
		- Sélection des groupes à étudier
		- Source d'information sur l'exposition E et la maladie M


## Définition & sélection des cas
### Définition des cas et de l'évènements
Il faut que la maladie soit définit de la manière la plus précise possible, avec des critères cliniques, biologiques... Il faut aussi classer les cas dans trois cadres : certain, probable, et possible, notamment dans les maladies peut connue.

### Sélection des individus
Les patients peuvent être recruté dans un hôpital pendant une période particulière (hospitalised based)
les cas et témoins peuvent aussi être recruté dans la population générale, ce qui permet de généraliser les résultats à l'ensemble de la population. 

L'inclusion basée sur la population générale évite les [[Biais]] liés au recours d'une institution de soin particulière ou d'un médecin particulier. La description de la maladie est plus complète, mais les coûts engendrés sont plus élevé, ainsi que les moyens logistiques.

La chronologie E → M est importante, d'où l'inclusion des cas nouvellement diagnostiqués dans une période de temps spécifique. 
Il peut y avoir des problèmes dans la représentativité des cas.

!!! note "Étude de la tuberculose pulmonaire chez les hommes"
	Soit :
	- On prend un échantillon représentatif de tous les cas de tuberculose dans une communauté.
		
	**Ou**
	$~$
	- Choisir des cas de tuberculose chez des hommes de 45 à 74 ans hospitalisés dans 5 hôpitaux spécifiques.
	L'échantillon du second sera plus présentatif, avec une meilleure généralisation des résultats **mais** la priorité doit aller à la validité de l'étude avant la généralisation.

La population est réduite à certains cas pour lesquels l'information sera complète et valide à la fois sur l'Exposition et la Maladie.
 Si les cas sélectionnés dans une population particulière alors les témoins doivent provenir de la même population sélectionnée.
 
 
## Choix des témoins
 
 Avoir des témoins approprié est essentiel. Il faut pouvoir comparer certaines caractéristiques entre cas et témoins, et il n'existe pas de groupe témoin optimal.
 
!!! warning "Important"
	Les témoins ne doivent pas représenter la totalité des personnes qui ne présentent pas la maladie mais doivent représenter les individus qui aurait dû être considéré comme des cas s'ils avaient présenté la maladie.
 
 Les mêmes critères de sélection et/ou exclusion doivent s'appliquer aux témoins tout comme aux cas. 
 
 Les sources possibles de témoins peuvent être :
- Hospitalisé
- Population générale
- Famille
- Voisins
- Amis

### Témoins hospitalisés
!!! note 
	- Facilement identifiable
	- Assez nombreux
	- Plus attentifs que les individus sains à des E potentielles ou des évènements touchant leur santé : diminution du [[Biais]] de mémoire.
	- Même facteurs de sélection / hospitalisation (pas toujours vrai)
	- Coopération plus facile que les individus sains
!!! note 
	- Malade : donc diffère de la population saine
	- Mauvaise représentation de la distribution de l'E dans la population de laquelle dérivent les cas.
 
!!! note "Témoins hospitalisés VS non hospitalisé"
	Les témoins hospitalisés ont été plus exposés (tabac, contraceptif oraux, alcool)
	→ Résultats biaisés si on étudie ses facteurs de risques

!!! question "Quelles catégories doivent être analysées dans le groupe témoins ?"
	→ La maladie pour laquelle les témoins ont été hospitalisés peut être associée à (aux) E étudié(s) ⇒ Sous estimation du risque.

### Témoins issus de la population générale

!!! note 
	Voisin, abonné téléphonique, listes électorales…

!!! note 
	- Temps ; Argent ; Disponibilité 
	- Qualité de l'information inégale
	- Motivation et refus de participation

### Ami, famille, voisins
Ils sont proches de la population générale et plus coopératif. Il est possible de contrôler les facteurs de risque tel que l'éthnie, la catégorie socio professionnel, facteurs de l'environnement. Mais attention, si l'exposition est aussi présente chez les témoins, il y aura une sous-estimation du risque de la maladie (comme habitude alimentaire).

## Nombre de témoins
Idéalement, il faut un groupe de cas pour un groupe de témoin. Parfois, il est nécessaire d'utiliser plusieurs groupes de témoin (comme chez les témoins hospitalisés).

!!! note "Patients hospitalisés pour une TBC"
	**Cas** : Patients hospitalisés pour une TBC
	**Témoins** : Patients hospitalisés pour un pulmonaire non tuberculeux, patients qui arrivent aux urgences, voisins et membres de la familles.

Si l'exposition diffère de manière systématique et cohérente des témoins quel que soit le groupe de témoins, cela augmente la crédibilité des résultats.
Si des effets différents sont observés lorsque différents groupes de témoins sont analysés, cette information est utile sur la nature de l'association et peut aussi suggérer des [[Biais]].


Le ratio optimal de sujet à inclure est un cas pour un témoin, mais dans certains cas, il peut y avoir plusieurs témoins par cas (pas plus de 4). Si toute une population est éligible en tant que témoins, l'échantillon est aléatoire.

Il est possible de faire des **appariement** (neutralisation des FC) avec la création de couple.
!!! note 
	Patients hospitalisés et témoins du même âge, sexe et hospitalisés le même jour.

# Informations et confirmation de la maladie et de l'exposition
!!! info "Informations sur la maladie"
	- Révision des certificats de décès
	- Registres de [[Surveillance]]
	- Dossiers médicaux
	- Résumés de sortie
	- Données de laboratoire
!!! info "Exposition"
	- Entretiens 
	- Questionnaire postal
	- Membres de la famille
	- Dossiers médicaux

Les procédures de recueil de l'information doivent être similaires pour les cas et témoins.
!!! note "Entretiens avec les cas à l'hôpital et à la maison pour les témoins"


Dans certains cas il est utile que les enquêteurs ne soient pas au courant du statut de la personne interrogé afin de diminuer les [[Biais]] d'observation. L'information sur l'exposition qui existe dans le dossier avant la survenue de la M est intéressante : la qualité de cette information est indépendante de la survenue de la maladie.

# Analyse
L'analyse est basée sur les comparaisons entre les cas et les témoins concernant la fréquence de l'E. 
Pour l'analyse on utilise les odd-ratio. Si l'on observe une association entre une E et la M : 
- Il faut évaluer le rôle du hasard ; 
- Des facteurs de confusions ; 
- Des [[Biais]]

→ [[Biais]]
# Conclusion
Ainsi, les études cas témoin est un plan d'étude pratique qui comporte des avantages et inconvénients :

| Avantages                       | Inconvénients                                       |
|---------------------------------|-----------------------------------------------------|
| Rapide, économique              | Peu efficace si E rare                              |
| Maladie à incubation longue     | Pas de calcul de l'[[Incidence]]                        |
| Optimal pour les maladies rares | Séquence temporelle E/M parfois difficile à établir |
| Plusieurs E associés à une M    | [[Biais]] de sélection et de mémoire                    |

Ce plan est très souvent utilisé, et précède souvent la mise en place éventuelle d'une [[10. Master/_Memento/Étude de cohorte]].