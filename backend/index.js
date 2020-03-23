const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Seman Omnistack 11.0',
        projeto: 'Be The Hero!',
        aluno: 'Jéssica Costa de Jesus'
    })
});

app.listen(3333);