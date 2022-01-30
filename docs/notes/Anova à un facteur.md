---
folder: "school"
publish: True
flux: True
created: "06-09-2021"
description: "Association entre une variable quantitative et une valeure qualitative"
---
# Test de Student : Contexte
On est dans le cadre de la comparaisons de deux moyennes (espérance) pour deux variables aléatoire gaussienne, de même variance.
Pour cela, généralement on utilise le test de Student.

Sous l'hypothèse $H_0 : µ_1=µ_2$ on s'attend à ce que $\overline{Y_1}-\overline{Y_2} \approx 0$ 

Le principe du test : 
Si $d(\overline{Y_1},\overline{Y_2})$ est trop grand, on rejette $H_0$. 

$d(\overline{Y_1},\overline{Y_2})$ Doit prendre en compte $\overline{Y_1} - \overline{Y_2}$ mais aussi **sa variabilité**. 

**Loi de $\overline{Y_1}-\overline{Y_2}$**:
- $\mathbb{E}(\overline{Y_1} - \overline{Y_2})=µ_1-µ_2$
- $Var(\overline{Y_1} - \overline{Y_2})=Var(\overline{Y_1})+Var(\overline{Y_2}) - 2Cov(\overline{Y_1},\overline{Y_2})=\frac{\sigma^2}{n_1}+\frac{\sigma^2}{n_2}$
	Donc, $\overline{Y_1} - \overline{Y_2} \sim\mathcal{N}(µ_1-µ_2, \sigma^2(\frac{1}{n_1}+\frac{1}{n_2}))$

Si $\sigma^2$ est continue, la statistique :
$d(\overline{Y_1},\overline{Y_2}) := Z := \frac{\overline{Y_1}-\overline{Y_2}}{\sqrt{\sigma^2*(\frac{1}{n_1}+\frac{1}{n_2}))}} \sim \mathcal{N}(0,1) sous~H_0$

# Comparaison de Bonferonni

Hypothèse nulle généralisée : 
- Les variables d'intérêts sont sous $H_0$. 
- Les tests sont supposés indépendant et effectués avec un seuil $\alpha$.

La probabilité de rejeter au moins une fois au hasard :
$$\alpha' =  1-(1-\alpha)^k$$
$$(1-\alpha') = (1-\alpha)^k$$
$$(1-\alpha)^\frac{1}{k} = 1-\alpha$$
$$a = 1-(1-\alpha)^\frac{1}{k}$$
$$=> \frac{\alpha'}{k}$$

La comparaison de Bonferroni : 
- Chacun des N tests est effectué au niveau de risque de première espèce $\frac{\alpha}{N}$ pour assurer un risque de première espèce global $<= \alpha$
- Méthode **conservatrice** : le risque de première espèce est généralement $<<\alpha$
- Il existe d'autre approche
- La cmparaison de moyenne 2 à 2 n'est pas toujours pertinente, notamment dans :
	- Facteur aléatoire
	- Placebo vs traitement

# Complément : Ecriture du modèle

On bascule d'une écriture d'un test d'hypothèse où la question est décomposé en variance, en écriture d'un modèle (il y a toujours un modèle).