const Product = require("../model/product");

class ProductController {

    async index(req, res) {
        const data = await Product.find({});

        return res.json(data);
    }  

    async show(req, res) {
        try {
            const data = await Product.findById({ _id: req.params.id });
            res.send(data);

        } catch {
            res.status(404);
            res.send({ error: "Produto não existe" });
        }
    }

    async store(req, res) {
        const data = await Product.create(req.body);

        return res.json(data);
    }

    async update(req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: "Erro na atualização do produto"
            });
        }
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { useFindAndModify: false })        
            .then(data => {
            if (!data) {
                res.status(404).send({
                message: "Não foi possível atualizar o produto"
                });
            } else res.send({ message: "Produto atualizado com sucesso" });
            })
            .catch(err => {
            res.status(500).send({
                message: err
            });
        });
    }

    async destroy(req, res) {
        try {
            await Product.deleteOne({ _id: req.params.id })
            res.status(204).send();

        } catch {
            res.status(404);
            res.send({ error: "Este produto não existe" });
        }
    }
}

module.exports = new ProductController();