---
folder: "school"
obsidianUIMode: "preview"
publish: True
flux: True
created: "10-10-2021"
category: "Épidémiologie"
---
# Risque relatif
$$RR = \frac{R_1}{R_2}$$ avec :
$$R_1=\frac{Proportion\ de \ malade\ Exposé}{Nombre\ Total \ Exposé}$$ ^RR1

$$R_2=\frac{Proportion\ de \ malade\ Non-Exposé}{Nombre\ Total\ Non-exposé}$$ ^RR2

→ Multiplie la probabilité d'être malade par ce rapport. 
!!! note ""
	Un fumeur a $RR$ fois plus de chance d'avoir un cancer du poumon.


## Table de contingence
| /          | Malade | Non malade | Total |
| ---------- | ------ | ---------- | ----- |
| Exposés    | a      | b          | e1    |
| Non exposé | c      | d          | e0    |
| Total      | m1     | m0         | N     |

## Formule

$$R_1=\frac{a}{e_1}$$
$$R_0=\frac{c}{e_0}$$

$$RR=\frac{\frac{a}{m_0}}{\frac{c}{m_1}}=\frac{a*m_1}{c*m_0}$$

### $\chi^2$
- $H_0: RR=1$
- $H_1: RR>1$

$\chi^2$ calculé à une valeur seuil (table) pour 1 ddl et une confiance de 95%, 99% ou 99,99%.

#### Calcul des effectifs attendus
| /          | Malade | Non malade | Total |
| ---------- | ------ | ---------- | ----- |
| Exposés    | $E_{11}=\frac{(a+c)*(a+b)}{a+b+c+d}$      | ⬅          | a+b    |
| Non exposé | ⤴      |           | c+d    |
| Total      | a+c     | b+d         | N (a+b+c+d)     |


Si $\chi^{2}\le3.84$ : On ne rejette pas $H_0$. Sinon, on rejette $H_0$. 

$$\chi^2=\sum\frac{obs-théo}{théo}$$


## Intervalle de confiance RR [cohorte]
$$RR*e^{\pm z*\sqrt{\frac{1}{a}-\frac{1}{e_1}+\frac{1}{c}-\frac{1}{e_0}}}$$

avec $z$ = 1.96

# Odds Ratio
![[OR & RR $#Table de contingence|no-h]]

$$OR = \frac{\frac{a}{c}}{\frac{b}{d}}=\frac{a*d}{b*c}$$

## Intervalle de confiance
$$e^{ln(OR)\pm*(1.96*\sqrt{\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{d}})}$$

# Interprétation
!!! info "OR / RR > 1"
	Le facteur étudié est associé à une augmentation du risque d'être malade
!!! info "RR/OR = 1"
	Absence de différences entre les deux groupes
!!! info "OR/RR < 1"
	Le facteur étudié est associé à une diminution du risque d'être malade.
