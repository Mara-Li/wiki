---
folder: "school"
publish: True
flux: True
created: "06-09-2021"
description: "Régression linéaire simple et corrélation"
category: "Mathématiques"
Tags: ['Mathématiques/Modèle-linéaire/Régression']
---
# Modèle de régression linéaire simple
## Introduction

La régression s'intéresse à la relation entre deux données (X et Y) : on souhaite expliquer l'un, par l'autre.

- $\beta_0^*$ : Valeur moyenne de Y lorsque X = 0
- $\beta_1^*$ : variation moyenne de Y lorsque X augmente de 1 (si la relation est liénaire)

## Modèle et estimateur CMO

On cherche à estimer $\beta_0^*$ et $\beta_1^*$ à partir de notre échantillon.
Si l'on les estime par $\beta_0, \beta_1$ alors que $\beta_0 + \beta_1X_i$ correspond à une estimation ou prédiction de $Y_i$. On va chercher $\beta_0, \beta_1$ tels que $Y_i \beta_0 + \beta_1X_i$ pour tout $1≤i≤n$

Pour tout ($\beta_0, \beta_1$) qui minimise E($\beta_0, \beta_1$) : c'est la méthode des moindres carrés ordinaires. 

- [[Régression linéaire|x]] (@14-09-2021 22:33)

La droite de régression passe par le point moyen de coordonnée ($X, Y$)
Les estimateurs sont sensibles aux points éloignés du point moyen (cf [[Régression linéaire et corrélation#^levier]])

## Lien avec covariance et corrélation

Les deux égalités restent vraies avec les versions théoriques de ces différentes quantités (au lieu des versions empiriques.)

## Test de la pente et prédiction
![[Régression linéaire#^precision]]

## Interprétation

- Si $H_0$ est rejeté :  X aide à la prédiction de Y mais aussi il existe peut être un meilleur modèle que la régression linéaire
- Si $H_0$ n'est pas rejeté :
	- La regression est linéaire mais X ne permet pas ou peu de prédire Y.
	- La regression de Y en X n'est pas linéaire mais la droite qui décrit au mieux la part linéaire de la relation est horizontale : il n'y a pas de tendance dans la variation de Y en fonction de X.


![[Régression linéaire#^rejet-H0]]

Plus $x_0$ est proche de $\overline{X}$, plus la précision est bonne. Cela illustre le fait que la droite de régression passe par le point moyen $(\overline{X}, \overline{Y})$



# Coefficient de détermination

Si les intervalles de confiances sont petits alors la connaissance de X permet de connaître Y précisément.
On peut calculer le pourcentage de variance Y calculé par X.
- Si la variance conditionnelle est nulle, alors la connaissance de X permet de connaître exactement Y.
- So la variance conditionnelle est égale à la variance totale de Y alors ...

## Décomposition de la SCE

Si l'on considère que la variable Y, on peut noter : 
![[Régression linéaire#^SCE]]

Etant donnée la variable X, et les estimations de l'intercept et de la pente de régression, on note $\hat{Y}_i = \widehat{\beta}_0  + \widehat{\beta}_1X_i$ La précision de $Y_i$.
Or on peut montrer que :
![[Régression linéaire#^SCE-T]]

## Coefficient de détermination