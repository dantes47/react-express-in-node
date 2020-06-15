const express = require('express'),
      server = express(),
      port = 8080;

server.get('/api/clients', (req, res) => {

    // Improvise of DB:
    const clients = [
        {id: 1, firstName: 'Manny', lastName: 'Awesome'},
        {id: 2, firstName: 'Lenny', lastName: 'Awful'},
        {id: 2, firstName: 'Edison', lastName: 'Skinny'},
        {id: 2, firstName: 'Paul', lastName: 'Round'}
    ];

    res.json(clients);
});

server.listen(port, () => console.log(`Server is running on port: ${port}`));
