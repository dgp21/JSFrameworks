const express = require('express');
const router = express.Router();

router.get('/actors', (req, res) => {
    res.render('actors', {
        title: 'Actors',
        header: {
            actors: {
                active: true,
            },
        },
        content: 'Content about your  actors',
    });
});

router.get('/singers', (req, res) => {
    res.render('singers', {
        title: 'Singers',
        header: {
            singers: {
                active: true,
            },
        },
        content: 'Content about your  singers',
    });
});

router.get('/bands', (req, res) => {
    res.render('bands', {
        title: 'Bands',
        header: {
            bands: {
                active: true,
            },
        },
        content: 'Content about your  bands',
    });
});

router.get('/public-figures', (req, res) => {
    res.render('public-figures', {
        title: 'Public Figures',
        header: {
            publicFigures: {
                active: true,
            },
        },
        content: 'Content about your public figures',
    });
});

module.exports = router;