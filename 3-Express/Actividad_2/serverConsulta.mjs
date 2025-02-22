import express from 'express';

const serverConsulta = express();
const PORT = 3000;


// Ruta GET con parámetro de consulta.-
// Solicitud: http://localhost:3000/profile?edad=30
serverConsulta.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

serverConsulta.listen(PORT, () => {
    console.log(`Servidor CaMaDan corriendo en http://localhost:${PORT}`);
});