---
date: "18-11-2021"
obsidianUIMode: "preview"
publish: True
flux: False
folder: "school"
category: "Gestion des risques"
tag: "Gestion-risques, Qualité-Sécurité-produits-santé"
---
[[10. Master/Flashcards/🦺Identitovigilance |Identitovigilance]]
[[L. Augey]]
Review:: #🎒/memorize

***UE:: Qualité & Sécurité des produits de santé***{: #left}  
# Introduction

!!! note 
	Elle est définie comme l’organisation mise en œuvre par une structure de santé pour fiabiliser l’identification de l’usager et sécuriser ses données de santé à toutes les étapes de sa prise en charge 

**_Quelques données :_**
- 1 Evènement Indésirable Grave (EIG) tous les 5 jours dans
une unité de soins de 30 lits
- 10% concernent l’identification du patient

_**Typologie des EIG et leurs conséquences** :_
- Prise d'identité au bureau des admission :
	- Erreur de saisie
	- Doublons
	- Collision (donnée de santé d'un patient dans un autre)
- Parcours de soins (cf [[Surveillance du sang]], [[Radiologie et risque]]…)
- Conséquence :
	- Retard de prise en charge, perte de chance
	- perte de temps
	- Mécontentement
	- Image

_**Certificiation HAS** :_
- C'était une pratique exigible prioritaire de la certif V2014
- Critère nouvelle certification V2020 : Les équipes respectent les bonnes pratiques d'identification du patient à toutes les étapes de sa prise en charge.

Une bonne identification d'un usager est un facteur clé des soins.

En Juin 2021 : Référentiel qui n'existaient pas → Les points essentiels que tout acteur de santé doit connaître.

## Les référentiels nationaux
- Description des principes d'identification des usagers communs à tous les acteurs de santé → Socle pour le déploiement du numérique en santé qui se substitue aux règles d'identovigilance régionale

!!! note ""
	Partage et échange des données de santé entre les structure = obligation d'utiliser un INS en Janvier 2021

- Description de la politique et de la gouvernance, organisation, mission, documentation qualité, formation des professionnels, la sensibilisation des usagers, la gestion des risques et les indicateurs qualité.

!!! note ""
	Mise en place d'une charte en identovigilance

## Périmètre de l'identovigilance
- Tous les secteurs d'activité
- Tous les professionnels
- Toutes les étapes du parcours du patient
- Toutes les modalités de prise en charge
- L'usager et ses accompagnants

## Identité nationale de santé
### Matricule INS : NIR
→ Numéro de sécurité sociale
→ Pour toutes les personnes née en France ou non née en France mais bénéficiant de l'AM
En cas d'absence de NIR : pas de blocage de la PEC (touriste étrangé)

Pour les traits INS = trait identité de référence associés au NIR
- Nom de naissance, prénom
- Sexe
- Date de naissance
- **CODE INSEE** lieu de naissance

!!! warning ""
	La saisie de l’identité est harmonisée : majuscules, pas d’accent, sans signes diacritiques (cédille) sans abréviation, les traits d’union et apostrophes doivent être conservés.
## Description du processus
Interrogation du téléservice (INSi) de la CNAM avec la carte vitale ou saisie manuelle : •
- Créer l’identité : récupération de l’INS,
- Vérifier l’INS quand l’identité est transmise par une autre structure. Chaque structure doit qualifier l’identité dans son système d’information et vérifier tous les 3 à 5 ans.

![[Pasted image 20211129143715.png]]

Le contrôle de cohérence est fait avec un titre d’identité de 13 haut niveau de confiance, à défaut l’identité reste provisoire.
Pour les usagers français :
- Carte nationale d’identité ou Passeport
- Pour les mineurs : livret de famille ou extrait d’acte de naissance ET titre de haut niveau de confiance d’un parent
 Pour les usagers étrangers :
- Passeport ou titre permanent de séjour,
- Carte d’identité nationale pour les ressortissants de l’Union Européenne

### Définitions des données d'identités
- Nom de naissance = nom de famille (nom patronymique ou nom de 14 jeune fille est désuet) c’est le nom déclaré à la naissance => document fondateur de l’identité : acte de naissance
- Nom d’usage (terme recommandé) = nom usuel (nom marital est désuet) c’est le nom hérité d’un acte civil, il est indiqué sur un document officiel d’identité
- Nom utilisé, nouveauté du référentiel : il permet l’enregistrement du nom réellement porté dans la vie courante pour faciliter le dialogue soignant-soigné (enregistrement obligatoire lorsqu’il est différent du nom de naissance)
	- le nom d’usage
	- ou le nom de naissance ou une partie du nom de naissance si trop long
	- ou un pseudonyme
	- ou un surnom « dit … »

Mêmes définitions pour les prénoms : naissance / usage / utilisé

### Impact sur les soignants
- Indication de l’INS sur les documents papier destinés à l’extérieur ⭐
- Modification de saisie de l’identité (apostrophe et tiret) : à voir exemple carte de groupe sanguin => peut-être 1 groupage de contrôle ? Décision EFS national ?
- Nom – prénom utilisés : éventuellement un surnom ou un pseudonyme

# 1ère étape : Identification primaire
!!! note "Traits invariables (ou traits stricts) = traits INS"
	- Nom de naissance (nom de famille) 
	- Premier prénom de naissance (champ conservé pour assurer la compatibilité entre logiciel) et la liste de tous les prénoms 
	- Date de naissance et sexe (pour l’INS uniquement F ou M)
	- Lieu de naissance (code INSEE de la commune ou du pays)
**_Autres traits (ou traits complémentaires) :_** (*au choix de la structure, à formaliser sur une procédure*) Nom et prénom utilisés ou d’usage, code postal et commune de naissance, adresse, téléphone, …
**Un Identifiant Permanent Patient (IPP) unique** est attribué à chaque patient utilisé dans le Système d’Information hospitalier

Pour informer les patients, une affiche précise :
- les documents indispensables pour la vérification de l ’identité
- en plusieurs langues

# 2e étape : Identification secondaire
!!! note "Moyens mis en œuvre lors de la prise en charge de l’usager pour s’assurer que le bon soin est délivré au bon patient"
	- Identification orale : demander au patient par une question ouverte de décliner son identité 
	- Dispositif d’identification physique : bracelet, photographie dans le dossier 
		- Procédure 
		- Information du patient 
		- Respecter un refus 
	- Documents de prise en charge : doivent être identifiés
==**Il faut s’assurer systématiquement de la cohérence des données d’identité entre toutes les sources d’information**==

!!! note "Bracelets d'identifications"
	-  **Pourquoi** 
		- Multiples acteurs de soins
		- Turn-over du personnel 
		- Soins de plus en plus techniques et à risque
		- Confidentialité : perte de repères
	- **Réflexion indispensable** : 
		- Pour quels patients / prise en charge 
		- Conduite à tenir en cas de refus 
		- Comment on l’utilise
	- **Suivi et évaluation**
		- Quick-audit, … 
	- **Procédure à définir** 
		- Pose à l’accueil dans le service, relecture de l’étiquette par patient / entourage
	- Pour tout entrant 
	- Tracer le contrôle et la pose.
	- Si refus, tracer dans le dossier de soins
	- Bracelet ajusté, étiquette protégée ou thermo imprimée
	- Un bracelet enlevé doit être reposé (bloc)

!!! warning 
	La moindre discordance doit faire interrompre le processus et déclencher la recherche d’informations complémentaires auprès du bureau des admissions et/ou du service de soins.

# Mise en œuvre dans les établissements de santé
## Gouvernance
- **Instance stratégique** : Politique/organisation/plan d’action et suivi des actions et des résultats
- **Instance opérationnelle** (Cellule Identitovigilance ou CIV) avec un référent : élaboration de la documentation qualité, la formation des professionnels et la sensibilisation des usagers, le suivi des indicateurs, les audits de connaissances et de pratiques
- **Instance consultative (facultative)** : autres correspondants, GHT …
	- Charte d’identitovigilance
	- Règlement intérieur de la CIV

_**Evaluation de la politique**_
- Indicateurs de structure : cohérence des systèmes d’information, système de signalement des erreurs
- Indicateurs de processus : évaluation du respect des bonnes pratiques
- Indicateurs de résultats : fréquence, typologie, gravité des EI

## Culture sécurité partagée
- Plan de communication
- Plan de formation et sensibilisation des professionnels
- Evaluation des connaissances et des pratiques (audits …)
- Information et sensibilisation des correspondants externes (ambulanciers …)
- Information et sensibilisation des usagers : expliquer clairement la politique d’identification et ses raisons • Demande de papiers d’identité
	- Pose d’un bracelet
	- Répétition des demandes d’identification
	- Vigilance du patient lui-même

Le respect des règles d’identification repose sur leur compréhension et leur appropriation par toutes les parties prenantes

## Gestion des risques
La mission prioritaire des instances stratégique et opérationnelle est la gestion des risques en lien avec la gestion des risques de l’établissement

- Cartographie des risques a priori
- Gestion des risques a posteriori
	- Signalements et typologie des EI,
	- Analyse systémique des EIG,
	- Mise en œuvre des actions d’amélioration,
	- Retours d’expérience

!!! note ""
	Amélioration des pratiques

## Points critiques du parcours patient
- Accueil
- Urgences
- Transferts, transports +++
- Les prélèvements de biologie, EFS
- Imagerie
- Administration des médicaments
- Actes à risque : transfusion, chimiothérapie, radiothérapie, …
- Bloc opératoire, endoscopie, imagerie interventionnelle :
mise en place de check-list adaptée

!!! note "Bloc opératoire"
	- Contrôle à l’arrivée : vérification de l’identité patient + bracelet et concordance avec le dossier et le programme opératoire 
	- En salle : réalisation de la checklist OMS
	- Reposer le bracelet avant la sortie de salle s’il a été retiré
	- Vérifier de l’étiquetage des prélèvements : présence de l’étiquette, tubes, bons concordants
	- Destruction des étiquettes restantes après le départ du patient

## Enseignement tirés des analyses systémiques
- **Causes immédiates** :
	- Absence de vérification du bracelet
	- Identité contrôlée par une question fermée ou incomplète
	- Absence de vérification des concordances patient /bracelet / document

- **Principaux facteurs contributifs** :
	- Liés au patients :
		- État de consciences
		- Angoisse
		- Homonymie, usurpation d'identité
	- **Liés aux tâches** : partage de tâches, interruption de tâches, intervenants multiples, confiance à l’intervenant précédent
	- **Liés à l’organisation** : rangement des étiquettes, modifications de procédures, bugs informatiques
	- **Liés au professionnel** : stress, fatigue
	- **Liés à l’environnement de travail** : nuit, activité importante
## Points de vigilances
- Rangement des étiquettes
	- En fonction de l’organisation et de la spécificité du service (pas de mélange possible y compris pour les préadmission)
	- Destruction de toutes les étiquettes avec des données erronées ou celles du séjour précédent
	- Etiquettes du patient précédent (box, salle de bloc …)
- Mélange de documents papiers et informatiques
- Patient chronique bien connu des soignants
- Homonymies
- Les erreurs en amont (transport)

!!! note "Audits à réaliser"
	- Dans les bureaux des admissions : 
		- Cohérence entre identités saisies et documents d’identité des patients
		- Audits de pratiques : connaissance et application des procédures
	- Dans les services de soins et les secteurs médico-techniques :
		- Taux de patients porteurs d’un bracelet : 
			- Un jour donné, exactitude des informations portés sur le bracelet, concordance, information donnée au patient, traçabilité dans le dossier patient • 
			- Dans un secteur donné : brancardage, imagerie … 
		- Audits de pratique sur la pose du bracelet, sur les pratiques de contrôle de cohérence avant un acte de soin : administration d’un médicament, transfusion, prélèvement biologique 
		- Application de la check list au bloc opératoire
	Dans tous les cas : retour systématique et rapide des résultats aux services

# En conclusion
L’identitovigilance est un dispositif permanent et systémique de surveillance, de détection, d’alerte, de correction et de prévention des risques et erreurs liés au processus d’identification des patients.
L’identitovigilance est un objectif avant d’être une définition. Il faut passer de l’identité administrative à but de facturation à une culture d’identification clinique dans le cadre d’une démarche globale de qualité et de sécurité des soins.