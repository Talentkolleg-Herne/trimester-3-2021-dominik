Die Datenbank ist wie folgt eingeteilt:


Version: mongodb:5.0.3 (läuft auf meinem Server auf Ubuntu 20.04)
URL: 23.88.103.113
Port: 30001


```mongodb
db.createUser(
  {
    user: "timon",
    pwd: "timonTKR",
    roles: [
      {
        role: "readWrite",
        db: "timon"
      },
      {
         role: "read",
          db: "dominik"
      }
    ]
  }
)
```
> Timons User erstellen
> mongodb://timon:timonTKR@23.88.103.113:30001/admin

```mongodb 
db.createUser(
  {
    user: "kledian",
    pwd: "kledianTKR",
    roles: [
      {
        role: "readWrite",
        db: "kledian"
      },
      {
         role: "read",
          db: "dominik"
      }
    ]
  }
)
```
> Kledians User erstellen
> mongodb://kledian:kledianTKR@23.88.103.113:30001/admin

```mongodb 
db.createUser(
  {
    user: "muhammed",
    pwd: "muhammedTKR",
    roles: [
      {
        role: "readWrite",
        db: "kledian"
      },
      {
         role: "read",
          db: "dominik"
      }
    ]
  }
)
```
> Muhammed User erstellen
> mongodb://muhammed:muhammedTKR@23.88.103.113:30001/admin

```mongodb 
db.createUser(
  {
    user: "amin",
    pwd: "aminTKR",
    roles: [
      {
        role: "readWrite",
        db: "amin"
      },
      {
         role: "read",
          db: "dominik"
      }
    ]
  }
)
```
> Amin User erstellen
> mongodb://amin:aminTKR@23.88.103.113:30001/admin


