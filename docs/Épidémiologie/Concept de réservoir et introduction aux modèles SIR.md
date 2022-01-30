---
date: "03-12-2021"
fc-date: 2021-12-06
fc-calendar: "Calendar"
obsidianUIMode: "source"
publish: True
folder: "school"
category: "Épidémiologie"
fc-category: "Épidémiologie"
tag: "gestion-risque, One-Health"
---
[[10. Master/Flashcards/🩹Concept de réservoir et introduction aux modèles SIR |🩹 Concept de réservoir et introduction aux modèles SIR]]
[[_assets/10. Master/M2-25. One-Health/Concept de réservoir et introduction aux modèles SIR.pdf|Concept de réservoir et introduction aux modèles SIR]]
[[J. Cappelle|J. Cappelle]]

***UE:: One-Health***{: #left}  

!!! note "Réservoir"
	Une ou plusieurs population et/ou environnements connectés épidémiologiquement permettant:
	- Le **maintient permanent** du pathogène
	- La **transmission** du pathogène à la population cible


La population de réservoir va avoir des caractéristiques lui permettant de se transmettre :
- Susceptibilité
- Renouvellement
- Excrétion.

Cette population réservoir a tout de même besoin d'être **au dessus d'une population critique** : le pathogène a besoin d'un $R_0$ suffisamment élevé, et on va avoir une perte de la capacité à maintenir le pathogène et donc la fonction réservoir.

Un réservoir peut être une communauté d'espèce, et non pas qu'une seule espèce.  Dans ce cas, il si les espèces ne sont pas en interaction, le virus ne peut se maintenir. L'ensemble d'association de ces communautés permettent de maintenir le virus. La **diversité des hôtes** se rajoutent aux facteurs.

Les hôtes peuvent jouer un rôle de population relais, par exemple en propageant le virus.


--- 
1. Le pourcentage maximal d'infectieux est de 40%.
2. Au bout de 10 unités de temps
3. Le pic infectieux arrivent plus tard, et il y a moins d'individus infectés. (t=15, et individu = 18%). Lorsqu'on augmente $\gamma$, on diminue le $R_0$ et vice versa. 
4. À $\gamma = 2$, il n'y a plus d'infection.
5. $$ Si\ R_0 =1 $$
$$ R_0 = \frac{\beta}{\gamma} = 1 $$
$$\gamma=\frac{\beta}{R_0}=\frac{1}{1}=1$$
La valeur minimale pour le démarrage d'une épidémie est donc 1.

```R
library(deSolve)
sir <- function(time, state, parameters) {
  with(as.list(c(state, parameters)),{
    ds <- -Beta*S*I
    di <- Beta*S*I-Gamma*I
    dr <- Gamma*I
      return (list(c(ds, di, dr)))  
  })
}
init <- c(S=0.999, I=0.001, R=0)
parameters <- c(Beta =3, Gamma=)
times <- seq(0, 60, by=1)
out <- as.data.frame(ode(y=init, times=times, 
                         func=sir, parms=parameters))
out$time <- NULL
matplot(times, out, type="l", xlab="Time", ylab="Proportion d'individus", 
  main="Modèle SIR", lwd=1, lty=1, bty="l", col=c("green", "red", "blue"))
legend(50, 0.5, c("Susceptibles", "Infectieux", "Rétablis"), pch=1, col=c('Green', 'Red', 'blue'))
```


# Modèle SIR avec paramètres démographiques
```R
sir <- function(time, state, parameters){
  with(as.list(c(state, parameters)),{
    ds = -Beta*S*I+nu*(I+S+R) - mu*S
    di = Beta *S*I-gamma*I-mu*I
    dr = gamma *I-mu*R
    return (list(c(ds, di, dr)))
  })
}

init = c(S=0.999, I=0.001, R=0)
parameters = c(Beta=4, gamma=1, nu=1/20, mu=1/20)
times = seq(0,60, by=1)
out = as.data.frame(ode(y=init, times=times, func=sir, parms=parameters))
out$time = NULL
matplot(times, out, type="l",xlab="temps", ylab="Proportions d'individus", main="Modèle SIR", lwd=1
        , lty=1, bty="l", col=c("green", "red", "blue"))
legend(50, 1, c('Susceptible', 'Infectieux', 'Rétablis'), pch=1, col=c('green', 'red', 'blue'))
```



![[3E1D9690-F653-474C-ABBE-2A4C79BCE6E3.png]]

###### 1. Observation
Entre t=0 et t=5, on observe un pic épidémique, sauf qu'il ne se poursuit pas à l'identique. 

###### 2. Susceptible et Rétablis 

Parmi les S, il y en a qui naissent et meurrent. Cependant, les naissances sont supérieurs aux décès, ce qui explique l'augmentation. La mortalité fait diminuer parallement les rétablis. 

###### 3. A t=20

Il y a une deuxième petite épidémie, qui se stabilise rapidement : ceux qui sont nés sont infectés.

###### 4. t=30 et t=60
On atteint l'équilibre du modèle : toutes les valeurs sont stabilisés. À la fin, on atteint un état endémique : tous les paramètres sont stables, et la maladie est stable de manière endémique. 

###### 5. Variation du taux de transmission

Quelque soit le sens de variation, on remarque qu'on atteint des états d'équilibres différents, correspondant au $R_0$, qui peut être plus ou moins fort. Les constantes seront donc différentes. 

###### 6. Nu et mu : variations
- Dans le cas où il y a  moins de naissance que mort, il n'y a pas assez de baissance donc la pop va s'éteindre.
- Dans le cas où il y a plus de naissance que de mort, les nouveaux-nés sont infectés et rétablis. De fait, la population des rétablis augmente par rapport aux décès et susceptibles, puisqu'il n'y a plus de susceptibles. C'est une épidémie dès la naissance.

# Modèle avec reproduction saisonnière
```R
Nuvar = function(x) ifelse(x%%12 == 10, 0.3, 0)
sir = function(time, state, parameters) {
  with(as.list(c(state, parameters)),{
    dnu = Nuvar(round(time-0.5)) - Nuvar(round(time-0.5)-1)
    ds = -Beta*S*I+nu*(I+S+R) - mu*S
    di = Beta *S*I-gamma*I-mu*I
    dr = gamma*I-mu*R
      return (list(c(dnu, ds, di, dr)))
  })
}

init = c(nu=0,S=1-1e-6,I=1e-6, R=0)
parameters=c(Beta=4,gamma=1/4, mu=0.3/12)
times = seq(0, 100, by=1)
out = as.data.frame(ode(y=init, time=times, func=sir, parms=parameters))
out$time=NULL
matplot(times, out[,2:4], type='l', xlab="temps", ylab="Individus",
        main="Modèle SIR", lwd=1, lty=1, col=c('green', 'red', 'blue'))
legend(50, 1.04, c("Susceptible", "Infectés", "Rétablis"), pch=1, 
       col=c('green', 'red', "blue"))
```


![[F30D76D1-C0E7-4A22-B08A-22F6BCE54FE1.png]]

On peut considérer que les gens vont se regrouper à certaines saisons, augmentant le taux de contact et donc, le $R_0$. 
Il y aura donc des vagues saisonnières, qui couperont les vagues et permettant aux stocks de susceptibles de se reconstituer. 

Ce régime peut être appelé **endémo-épidémique** car le virus se maintien de manière régulière. En augmentant $\beta$ et diminuant le $\gamma$ on va avoir un pic fort et rapidement; A l'inverse, on aura un pic plus tard et on maîtra plus de temps à atteindre l'équilibre.