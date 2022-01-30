---
folder: "school"
obsidianUIMode: "preview"
publish: True
flux: True
created: "10-09-2021"
description: "Formule générique épidémiologie"
category: "Épidémiologie"
---
# [[Incidence]]
## Formule générale

!!! note 
	Vitesse d'apparition des nouveaux cas

$$R_1=\frac{Proportion\ malade\ exposé}{Nombre\ total\ exposé * T}$$^incidence

## Taux d'[[Incidence]] 
**Taux d'attaque**: Incidence cumulée sur une courte période
$$\frac{Nombre~de~nouveaux~cas~pendant~la~période~T}{Somme~des~période~temps~dans~l'étude}$$^tx-incidence

## [[Incidence]] cumulative
$$ Tx~ATQ = \frac{Nombre\ de\ nouveaux\ cas\ M\ apparaissant\ dans\ une\ pop\ durant\ une\ période\ T}{Nombre\ de\ personnes\ exposée\ au\ risque\ de\ développer\ M\ durant\ cette\ période} $$^incidence-cumulative


## [[Incidence]] instantanée
$$T = \frac{Nombre\ nouveaux\ cas\ pendant\ une\ période\ donnée}{Temps\ d'observation\ total}$$^incidence-instant


# IUAS
## [[Incidence]] 
$$\frac{nombre~infection}{Nombre~de~jour~exposition} * 100$$

## Prévalence
$$\frac{nombre~infection}{Nombre~de~patients~présents} * 100$$

## Taux d'attaque
$$\frac{nombre~infection}{Nombre~de~patients~exposé} * 100$$

---
# Taux de prévalence
$$ P = \frac{Nombre\ de\ cas}{population}*100 $$^prevalence

###### Lien prévalence & [[Incidence]]
Il existe un lien entre prévalence et [[Incidence]] : $p=i*d$ avec :
- $p$: Prévalence;
- $i$ : [[Incidence]];
- $d$ : Durée moyenne de la maladie

Cette formule est valable uniquement pour une maladie rare dans un état stable. En effet, dans le cas contraire :
- La prévalence est supérieure à 5% dans le cas d'une maladie fréquente ;
- Une maladie instable a un taux d'[[Incidence]] et une distribution inconstante.

---
# $R_0$
$$R_0 = p*c*D$$
Avec :
- $p$ : probabilité de transmission de l'infection au cours d'un contact.
- $c$ : Nombre moyen de contacts d'un individu par unité de temps.
- $D$ : Durée moyenne de la phase infectieuse.

---
# Fraction attribuable
!!! note "Fraction attribuable"
	Proportion de cas de cancer que l'on peut attribuer au facteur de risque dans l'ensemble de la population (exposés et non exposé). 
$$FA = \frac{Pe*(RR-1)}{Pe * (RR-1)+1}$$


!!! note 
	Il permet de quantifier la proportion de cas évitables si des actions sont entreprises pour supprimer l'exposition à ce facteur de risque.

!!! note 
	- Risque élevé et fréquence de l'exposition faible : Nombre de cas de cancers liés à cette exposition faible 
	- Risque relatif modéré et forte proportion de sujet exposés : risque attribuable potentiellement non négligeable.
