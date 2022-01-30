---
publish: False
---
```button
name Nouvelle Course
type line(19) text
action # Course — <% tp.date.now ("DD/MM/yyyy") %>
replace [19,1000]
templater true
```


```button
name Ajouter un item
type command
action QuickAdd: Shop
```


# Course — 16/01/2022