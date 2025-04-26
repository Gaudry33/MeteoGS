const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());


app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: '192.168.1.10', 
  user: 'gaudry',     
  password: '123456', 
  database: 'Base_Meteo'  
});

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données MariaDB avec succès');
  }
});


app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur de MeteoGS');
});

app.post('/insert-weather', (req, res) => {
    const { date_meteo, temperature, humidite, vent_vitesse, vent_direction, precipitations, heure_meteo } = req.body;
  
  
    const query = 'INSERT INTO table_meteo (date_meteo, temperature, humidite, vent_vitesse, vent_direction, precipitations, heure_meteo) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  
    connection.query(query, [date_meteo, temperature, humidite, vent_vitesse, vent_direction, precipitations, heure_meteo], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données:', err);
        return res.status(500).send('Erreur lors de l\'insertion des données');
      }
      res.status(200).send('Données insérées avec succès');
    });
  });
  
  
  const port = process.env.PORT || 8080;
  const host = '192.168.1.10';
  
  
  app.listen(port, host, () => {
      console.log(`Le serveur fonctionne sur http://${host}:${port}`);
  });
  
  
