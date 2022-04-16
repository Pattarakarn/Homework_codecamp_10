const db = require("../models");
const User = require('../models/User')

const getOPDListById = async (req,res) => {
    const targetId = req.params.id;
    const List = await db.OpdList.findOne({ where: { id: targetId } });
    res.status(200).send(List);
};

const getOPDList =  async (req, res) => {
    const opdList = await db.OpdList.findAll()
    res.status(200).send(opdList);
};

const addOPDList = async (req, res) => {
    const newList = await db.OpdList.create({
        date: req.body.date,
        customer: req.body.customer,
        total: req.body.total,

        visit: req.body.visit,
        tele: req.body.tele,
        admit: req.body.admit,
        other: req.body.other,
        amount: req.body.amount,
        recorder: req.user.username
    });

    res.status(201).send(newList);
};

    const editOPDList = async (req,res) => {
        const targetId = Number(req.params.id);

        const editCustomer = req.body.customer;
        const editVisit = req.body.visit;
        const editTele = req.body.tele;
        const editAdmit = req.body.admit;
        const editOther = req.body.other;
        const editAmount = req.body.amount;
        
        const targetList= await db.OpdList.findOne({ where: {id: targetId} });
        if(targetList){
            await targetList.update({
                customer: editCustomer,
                visit: editVisit,
                tele: editTele,
                admit: editAdmit,
                other: editOther,
                amount: editAmount,
                recorder: req.user.username
            });
            res.status(200).send({ message: "updating is success" });
        } else {
            res.status(404).send({ message: "List not found"})
        }
    };

module.exports = {
    getOPDList,
    addOPDList,
    editOPDList,
    getOPDListById,
};