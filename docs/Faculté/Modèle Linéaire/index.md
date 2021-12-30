---  
date: 26-12-2021  
obsidianUIMode: source  
share: True  
flux: False  
category: Faculté/Modèle Linéaire  
title: Annale Modèle Linéaire  
link: https://www.mara-li.fr/Faculté/Modèle Linéaire/Modèle Linéaire/  
---  
# PARTIE 1. Modèle Linéaire
**Vous tirez au sort :**
- Un échantillon A de taille 100 dans une distribution normale de moyenne 2 et d’écart-type 2,  `A=rnorm(100,2,2)`
- Un échantillon B de taille 100 dans une distribution normale de moyenne 2.6 et d’écart-type 2, `B=rnorm(100,2.6,2)`

**Vous obtenez :**
- Echantillon A : $n_A = 100$, $x_A = 2.89$ , $s_A^2 = 4.29$ , $s_A^2$ est l’estimation de la variance populationnelle obtenue à partir de cet échantillon
- Echantillon B : $n_B = 100$, $x_B = 2.00$ , $s_B^2 = 4.55$ , $s_B^2$ est l’estimation de la variance populationnelle obtenue à partir de cet échantillon

**QUESTION N° 1 : Effectuez un test de comparaison des moyennes des populations dont sont issus ces échantillons. Vous supposerez les variances populationnelles des 2 populations inconnues mais égales.**

**Expliquez les calculs effectués, précisez l’hypothèse nulle H0 et l’hypothèse alternative H1. Donnez le résultat de la grandeur test et son niveau de significativité.**

Comparaison de moyenne avec test de Student :
- $H_0$ : $\bar{x_A} = \bar{x_B}$
- $H_1$:$\bar{x_A} \ne \bar{x_B}$
$$S^2 = \frac{(n_1-1)*s_1^2+(n_2-1)*s^2_2}{n1+n2-2}$$
$$T=\frac{\bar{n_A}-\bar{n_B}}{\sqrt{S^2*(\frac{1}{n_1}+\frac{1}{n_2})}}$$
et $ddl=n_A+n_B-2$, donc $ddl=198$.


Ici, $S^2=4.42$ et $T=\frac{2.89-2.0}{\sqrt{4.42*\frac{1}{100}+\frac{1}{100}}} = 2.99 > t^{198}_{0.05}$ ; On rejette donc H0 : les deux populations sont différentes à un risque $\alpha = 5\%$.
**QUESTION N° 2 : Calculez l’intervalle de confiance de l’estimation de la différence des moyennes pour un risque de première espèce a = 5%. Expliquez votre calcul.**

$$\begin{align}
IC_{95\%} = (m_A-m_B) \pm t_\alpha * \frac{S}{\sqrt{n}}\\
avec\ m_A-m_B=0.89\\
(n_A+n_B)\ge100\ donc\ t_\alpha \eqsim 1.96\\
S=\sqrt{S^2}=\sqrt{4.42}\\
IC_{95\%}=0.89\pm1.96*\sqrt\frac{{4.42}}{{200}}\\
IC_{95\%}=[0.60;1.18]
\end{align}
$$
**Indications : Résultats obtenus sous R :**
```R
t.test(A,B,var.equ=T) 
Two Sample t-test 
data:  A and B 
t = 2.9789, df = 198, p-value = 0.003254 
alternative hypothesis: true difference in means is not equal to 0 
95 percent confidence interval: 
0.2993638 1.4719785 
sample estimates: 
mean of x mean of y  
2.885406  1.999735 
```

**Fonctions disponibles sous R :**
- `pt` : donne la probabilité renvoyée par la fonction de répartition d’une loi de Student dont on précise le nombre de ddl
- `pnorm` : donne la probabilité renvoyée par la fonction de répartition d’une loi normale dont on précise la moyenne et l’écart type (variable normale centrée réduite par défaut)

**QUESTION N° 3 : Interprétez les résultats suivants :**
```R
2*pt(-2.9789,198) 
[1] 0.003254625 
2*pnorm(-2.9789) 
[1] 0.002892852 
```


- `2*pt(-2.9789,198)` : Calcule de la p-value associée à un test de student bilatéral à 198 ddl. On retrouve donc la même valeur qu'avec la console de R
- `2*pnorm(-2.9789)` : Calcule de la p-value lorsque l'on approxime la loi de Student par une loi normale (car $n\ge30$). On retrouve la p-value inférieure à la console R, qui est une méthode conservatrice.

**Vous générez 2 vecteurs varY et varX, de 200 valeurs chacun.**
- `varY=c(A,B)` (vecteur comprenant les 100 valeurs de l’échantillon A puis les 100 valeurs de l’échantillon B)
- `varX=c(rep(1,100),rep(0,100))` (vecteur comprenant 100 fois la valeur 1 puis 100 fois la valeur 0)

**Vous effectuez une régression linéaire de varY sur varX à l’aide du logiciel R.**
```R
summary(lm(varY~varX)) 
Coefficients: 
Estimate Std. Error t value Pr(>|t|) 
(Intercept) 1.9997 0.2102 9.512 < 2e-16 *** 
varX 0.8857 0.2973 2.979 0.00325 ** 
```

**QUESTION N° 4 : Interprétez les estimations des paramètres du modèle, et les tests statistiques effectués sur ceux-ci. Comparez ces résultats avec ceux obtenus en effectuant le précédent test de comparaison de moyennes de Student.**

$$Y_i=\beta_0^*+\beta_1^*X_i+\epsilon_i$$ Où :
- $\epsilon_i$ représente les résidus
- $\beta_0^*$ représente la valeur moyenne de Y quand X = 0.
- $\beta_1^*$ représente la variation moyenne de Y lorsque X augmente d'une unité.

Les tests effectués sont :
- Pour $\beta^*_0$ : test si $\bar{n}=0$
- Pour $\beta_1^*$ : Test pour $n_A-n_b$.

On retrouve ici les mêmes résultats que ceux des tests de Student.

**Vous effectuez alors une analyse de variance.**
```R
anova(lm(varY~varX)) 
Analysis of Variance Table 
Response: varY 
 Df Sum Sq Mean Sq F value Pr(>F) 
varX 1 39.22 39.221 8.8739 0.003254 ** 
Residuals 198 875.11 4.420 
```


**QUESTION N° 5 : Interprétez les résultats obtenus**

- La p-value est significative et possède la même grandeur que celle du test t.
- La variabilité du modèle est plus grande que la variabilité résiduelle.
Le modèle est donc pertinent ici.

**QUESTION N° 6 : Comparez la valeur de la grandeur test obtenue à l’issue de cette analyse de variance avec celle du test de Student précédent. Ce résultat était-il attendu ?**

`F-value = 8.87` Et `t-value=2.97`. Ces deux valeurs sont significatives et on remarque que `F-value` est le carré que `t-value`. Cela est attendu car ici, on effectue une analyse de deux moyennes : l'ANOVA étant la comparaison de plusieurs moyennes.

# Partie 2 : Modèle Log-Linéaire
<b align="center">Etude de cohorte analysant les facteurs de risque de décès l’année suivant la survenue d’un infarctus du myocarde</b>

Cette étude de cohorte portant sur 2519 patients hospitalisés pour un infarctus du myocarde dans trois départements de la région Rhône-Alpes, a pour objectif de rechercher les facteurs pronostiques de la mortalité à un an. Quatre facteurs pronostiques sont étudiés ici :
- L'âge,
- Le sexe,
- Le score de Killip à l’entrée qui mesure le degré d’insuffisance cardiaque (stade 1 : pas d’insuffisance cardiaque, stade 2 : crépitants à l’auscultation, stade 3 : œdème pulmonaire, stade 4 : choc cardiogénique)
- La localisation de l’infarctus (infarctus antérieur, infarctus non antérieur, infarctus sans onde Q).

Seules les observations pour lesquelles ces différentes variables ont été renseignées sont analysées ici (n = 2393). 

### Dictionnaire des variables / Distributions 
![[Pasted image 20211230171855.png]]
L’analyse effectuée fait appel à l’ajustement d’un modèle de régression logistique non conditionnelle. Les variables groupe d’âge, et score de Killip ont été considérées comme des variables qualitatives nominales (`AGE_nom` et `KILLIP_nom`) ou ordinales (`AGE_ord` et` KILLIP_ord`). Les 2 approches ont été comparées. 
!!! info "Au sujet des variables ordinale et nominale"
	Globalement, ici :
	- Si la variable est ordinale, chaque classe est **ordonnée** : Le stade 2 au score de Killip sera "plus grave" que le stade 1. De même, dans l'âge, la classe 2 sera toujours après la classe 1 car plus vieux.
	- Si la variable est nominale, chaque classe **est indépendante** et peuvent être rangée dans n'importe quelle ordre.

***QUESTION N° 1* : Complétez le nombre de paramètres estimé dans les différents modèles ajustés**