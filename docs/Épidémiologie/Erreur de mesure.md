---
folder: "school"
obsidianUIMode: "source"
publish: True
flux: True
created: "12-10-2021"
category: "Épidémiologie"
tag: "Épidémiologie, Méthode-épidémiologie"
---
***UE:: Méthode en épidémiologie***{: #left}  

!!! note 
	Une erreur de mesure apparaît à chaque fois que l'on ne peut pas exactement observer une variable qui rentre dans un modèle d'intérêt

Cela a pour conséquence :
1. **[[Biais]]** dans l'estimation du paramètre (parfois)
2. **Perte de puissance** parfois importante qui empêche de détecter des relations entre variables (toujours)

!!! note "Test diagnostique"
	Un test diagnostique souvent imparfait (W) représente le test et X la maladie. Un test imparfait entraîne des faux positifs et des faux négatifs : on parle dans ce cas de **missclassification**. 

Il existe deux types de miss classifications :
1. Non différentielle : La miss classification est la même dans chacun des groupes, ce qui sous-estime la vraie association.
2. Différentielle : La miss-classification est différente dans chacun des groupes, ce qui provoque sur ou sous estimation de la vraie association.

Soit $w$ = observé, $X$=le vrai et $U$ : l'erreur de mesure.
Une erreur **classique** de mesure est : $W= X+U$. La variabilité de $w$ (observé) est **plus importante** que celle de $X$ (le vrai).

C'est important lorsque l'on calcule la puissance d'une étude.

L'erreur de mesure **Berkson** correspond à $X=W+U$ : La variabilité de X **est supérieure** à celle de W : $var(X)>var(W)$.

!!! note "Erreur de Berkson"
	Soit W une variable catégorielle observée représentant différentes catégories professionnelle. La profession ouvrier que l'on **voudrait** observer (X) va avoir une variabilité plus importante que ce que l'on observe réellement (W) car le sujet peut être ouvrier depuis une période différente, et ne prend pas en compte le type d'industrie.

Ainsi, dans une erreur de mesure, on prend en compte :
- Le type d'erreur de mesure : Classique ou Berkson
- La moyenne de l'erreur de mesure : $E(U_{ij}|X_i)=0 \iff Absence\ de\ [[Biais]]$
- La **structure** de l'erreur de mesure **homo** ou **hétéroscédastique**, ce qui est un paramètre capital pouvant biaiser une étude.

!!! note "Modèle de mesure homoscédastique"
	Réfère au cas où la variance de $W$ sachant $X$ est constante : $var(U|X)=var(U)$
!!! note "Modèle de mesure hétéroscédastique"
	Permet à la variance de l'erreur de mesure de changer : $var(U|X)=f(var(U),X)$

# Quelques exemples
1. Exemple d'erreur de mesure classique et Berkson :
	- Imprécision de l'outil de mesure : Classique
	- Catégoriser des variables cntinues, imputer par la moyenne, sous déclaration d'un comportement à risque : Berkson
2. Exemple où la moyenne $E(U_{ij}|X_i)=0$ et où $E(U_{ij}|X_i)\ne0$
	- Imprécision de l'outil de mesure, catégorisation des variables continues : 0
	- Imputer par la moyenne ($\ne0$ si MNAR), sous déclaration d'un comportement à risque ($\ne0$)
3. Exemple d'homocédasticité (O) et d'hétérocédasticité (R)
	- Imprécision de l'outil de mesure et catégoriser des variables continues : O
	- Imputer par la moyenne, sous déclaration d'un comportement à risque : R

# Prise en charge
Les ingrédients d'un problèmes de mesure :
1. Un modèle pour les vraies valeurs : $Y=f(X,Z)$
2. Un modèle d'erreur de mesure : $X=f(W,Z)$ pour définir les rapports entre observé et W et la vraie valeur X
3. Des **données complémentaires** pour corriger l'erreur.

!!! note 
	- Impact sur les estimations ? 
	- Correction

Il existe différents types :
1. Donnée de réplication : mesure répétées et validation externe
2. Donnée de validation : Dans un autre jeu de données W observé et X réel
3. Données instrumentale : Mesure indirecte de X, différente et indépendante de W

Mais ils peuvent aussi contenir des [[Biais]].

## Méthode pour corriger les erreurs de mesures
1. Correction de l'atténuation (erreur classique et homoscédasticité)
![[Pasted image 20211015150110.png|500]]

2. Régression - calibration : Remplacer l'inconnu X par $E(X|Z, W)$ qui dépend seulement des prédicteurs connus $(Z, W)$. Z sont les autres prédicteurs du modèle, sans erreur. L'algorithme comprend : 
	1. Utiliser des données de réplications ou de validation poru construire un modèle pour la régression de $X$ sachant $W, Z$ : $f(W,Z)$
	2. Utiliser des valeurs prédites de X et faire tourner le modèle
	3. Obtenir les erreurs standards des estimateurs par boostrap.
3. Simulation - extrapolation : Simulation de l'erreur de mesure supplémentaire, en se servant des données ainsi générées pour réestimer les paramètres du modèle. On peut extrapoler vers la gauche pour retrouver le paramètre d'intérêt, mais marche uniquement dans un modèle d'erreur classique.