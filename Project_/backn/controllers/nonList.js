const db = require("../models");

const getNonListById = async (req,res) => {
    const targetId = req.params.id;
    const List = await db.NonList.findOne({ where: { id: targetId } });
    res.status(200).send(List);
};


const getNonList = async (req, res) => {
    const nonList = await db.NonList
    .findAll();
    res.status(200).send(nonList);
};

const addNonList = async (req, res) => {
    const newList = await db.NonList.create({
        date: req.body.date,
        customer: req.body.customer,
        ekg: req.body.ekg,
        abi: req.body.abi,
        holter: req.body.holter,
        event: req.body.event,
        abp: req.body.abp,
        echo: req.body.echo,
        echo3D: req.body.echo3D,
        tee: req.body.tee,
        est: req.body.est,
        stress: req.body.stress,
        dobu: req.body.dobu,
        bicycle: req.body.bicycle,
        tilt: req.body.tilt,
        other: req.body.other,
        amount: req.body.amount,
        total: req.body.total,
        recorder: req.user.username,
    });

    res.status(201).send(newList);
};

const editNonList = async (req, res) => {
    const targetId = req.params.id;

    const editCustomer = req.body.customer;
    const editEkg = req.body.ekg;
    const editAbi = req.body.abi;
    const editHolter = req.body.holter;
    const editEvent = req.body.event;
    const editAbp = req.body.abp;
    const editEcho = req.body.echo;
    const editEcho3D = req.body.echo3D;
    const editTee = req.body.tee;
    const editEst = req.body.est;
    const editStress = req.body.stress;
    const editDobu = req.body.dobu;
    const editBicycle = req.body.bicycle;
    const editTilt = req.body.tilt;
    const editOther = req.body.other;
    const editAmount = req.body.amount;

    const targetList = await db.NonList.findOne({ where: { id: targetId } });
    if (targetList) {
        await targetList.update({
            customer: editCustomer,
            ekg: editEkg,
            abi: editAbi,
            holter: editHolter,
            event: editEvent,
            abp: editAbp,
            echo: editEcho,
            echo3D: editEcho3D,
            tee: editTee,
            est: editEst,
            stress: editStress,
            dobu: editDobu,
            bicycle: editBicycle,
            tilt: editTilt,
            total: editEkg+editAbi+editHolter+editEvent+editAbp+editEcho+editEcho3D+editTee+editEst+editStress+editDobu+editBicycle+editTilt+editAmount ,
            other: editOther,
            amount: editAmount,
            recorder: req.user.username
        });
        res.status(200).send({ message: "updating is success" });
    } else {
        res.status(404).send({ message: "List not found" })
    }
};

module.exports = {
    getNonList,
    addNonList,
    editNonList,
    getNonListById,
};