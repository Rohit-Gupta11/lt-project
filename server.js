const express = require('express');
const myapp = express();

const PORT = process.env.PORT | 4000;
const timeout = ms => new Promise(res => setTimeout(res, ms));

myapp.get('/', (req, res) => {
    res.status(200).send('success');
})

myapp.put('/users/agent-auth', async (req, res) => {
    await timeout(73);
    res.status(200).send('success');
})

myapp.put('/users/save-image', async (req, res) => {
    await timeout(55);
    res.status(200).send('success');
})

myapp.post('/files', async (req, res) => {
    await timeout(1280);
    res.status(200).send('success');
})

myapp.post('/v1/activity', async (req, res) => {
    await timeout(90);
    res.status(200).send('success');
})

myapp.post('/app-usage/insert', async (req, res) => {
    await timeout(731);
    res.status(200).send('success');
})

myapp.listen(PORT, () => {
    console.log(`this project is running at http://localhost:${PORT}`);
})