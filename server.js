const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
app.get('/projects', (req, res) => {
  // Retrieve and send information about your projects
  const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' }
    // Add more projects as needed
  ];

  res.json(projects);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});