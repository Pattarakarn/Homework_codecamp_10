const db = require("../models");

const getCathListById = async (req, res) => {
    const targetId = req.params.id;
    const List = await db.CathList.findOne({ where: { id: targetId } });
    res.status(200).send(List);
};

const getCathList = async (req, res) => {
    const cathList = await db.CathList.findAll();
    res.status(200).send(cathList);
};

const addCathList = async (req, res) => {
    const newList = await db.CathList.create({
        date: req.body.date,
        customer: req.body.customer,
        total: req.body.total,

        cag: req.body.cag,
        ep: req.body.ep,
        neuro: req.body.neuro,
        vascular: req.body.vascular,
        special: req.body.special,

        detailCardiac: req.body.detailCardiac,
        detailEp: req.body.detailEp,
        detailNeuro: req.body.detailNeuro,
        detailVascular: req.body.detailVascular,
        detailSpecial: req.body.detailSpecial,
        recorder: req.user.username
    });

    res.status(201).send(newList);
};

const editCathList = async (req, res) => {
    const targetId = req.params.id;

    const editCustomer = req.body.customer;

    const editCardiac = req.body.cag;
    const editEp = req.body.ep;
    const editNeuro = req.body.neuro;
    const editVascular = req.body.vascular;
    const editSpecial = req.body.special;

    const editDetailCardiac = req.body.detailCardiac;
    const editDetailEp = req.body.detailEp;
    const editDetailNeuro = req.body.detailNeuro;
    const editDetailVascular = req.body.detailVascular;
    const editDetailSpecial = req.body.detailSpecial;

    const targetList = await db.CathList.findOne({ where: { id: targetId} });
    if (targetList) {
        await targetList.update({
            customer: editCustomer,
            total: editCardiac+editEp+editNeuro+editVascular+editSpecial,

            cag: editCardiac,
            ep: editEp,
            neuro: editNeuro,
            vascular: editVascular,
            special: editSpecial,

            detailCardiac: editDetailCardiac,
            detailEp: editDetailEp,
            detailNeuro: editDetailNeuro,
            detailVascular: editDetailVascular,
            detailSpecial: editDetailSpecial,
            recorder: req.user.username
        });
        res.status(200).send({ message: "updating is success" });
    } else {
        res.status(404).send({ message: "List not found" })
    }
};

// const deleteTodoList = async (req, res) => {
//     const targetId = Number(req.params.id);
//     const targetTodo = await db.TodoList.findOne({ where: {id: targetId, user_id: req.user.id} });
//     if (targetTodo) {
//         await targetTodo.destroy()
//         res.status(204).send();
//     } else {
//         res.status(404).send({message: "Todo list not found"});
//     }
// };

module.exports = {
    getCathList,
    addCathList,
    editCathList,
    getCathListById,
};