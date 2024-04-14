const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/portfolios', portfolioController.getAllPortfolios);
router.post('/portfolios', portfolioController.addPortfolio);

module.exports = router;
