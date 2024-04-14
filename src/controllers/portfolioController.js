const Portfolio = require('../models/Portfolio');

exports.getAllPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.json(portfolios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addPortfolio = async (req, res) => {
    const portfolio = new Portfolio({
        userId: req.body.userId,
        tasks: req.body.tasks
    });

    try {
        const newPortfolio = await portfolio.save();
        res.status(201).json(newPortfolio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
