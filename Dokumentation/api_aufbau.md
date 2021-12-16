DELETE = Löschen
POST = Erstellen (NEU!)
GET = Bekommen
PATCH/PUT = Update



Vereine
Abteilungen






12.0.0.1:3000 => Pfaden


* /api/v1/vereine

/api/v1/vereine/all



/api/v1/vereine/all
/api/v1/vereine/PSV

/api/v1/vereine/all?limit=10



/api/v1/vereine = abfrage=* limit=-1 

/api/v1/vereine?abfrage=id:5

/api/v1/vereine?id=5



/api/v1/vereine?Hello%20World




# Unsere API

Beginnt mit:  /api/v1

Folgende Endpunkte:


* /vereine
  * /:id
  * ?query= ( per Default, wird nach Name gesucht: Alternativ folgende Form: FELD:VALUE ggf. mit Semikolon gesetzt um noch ein Feld angeben zu können )
  * ?limit=
  * ?skip=
* /abteilungen
  * /:id
  * ?query= ( per Default, wird nach Name gesucht: Alternativ folgende Form: FELD:VALUE ggf. mit Semikolon gesetzt um noch ein Feld angeben zu können )
  * ?limit=
  * ?skip=
* /mannschaften
  * /:id
  * ?query= ( per Default, wird nach Name gesucht: Alternativ folgende Form: FELD:VALUE ggf. mit Semikolon gesetzt um noch ein Feld angeben zu können )
  * ?limit=
  * ?skip=
* /mitglied
  * /:id
  * ?query= 
  * ?limit=
  * ?skip=