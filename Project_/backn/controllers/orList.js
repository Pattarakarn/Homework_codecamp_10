const db = require("../models");

const getORListById = async (req, res) => {
    const targetId = req.params.id;
    const List = await db.OrList.findOne({ where: { id: targetId } });
    res.status(200).send(List);
};

const getORList = async (req, res) => {
    const orList = await db.OrList.findAll()
    res.status(200).send(orList);
};

const addORList = async (req, res) => {
    const newList = await db.OrList.create({
        date: req.body.date,
        customer: req.body.customer,
        total: req.body.total,

        opcab: req.body.opcab,
        cabg: req.body.cabg,
        cabgvalve: req.body.cabgvalve,
        valve: req.body.valve,
        tevar: req.body.tevar,
        tavr: req.body.tavr,
        vats: req.body.vats,
        pericardial: req.body.pericardial,
        reOperation: req.body.reOperation,
        other: req.body.other,
        amount: req.body.amount,

        recorder: req.user.username
    });

    res.status(201).send(newList);
};

const editORList = async (req, res) => {
    const targetId = Number(req.params.id);

    const editcustomer = req.body.customer;

    const editOPCAB = req.body.opcab;
    const editCABG = req.body.cabg;
    const editCABGnValve = req.body.cabgvalve;
    const editValve_s = req.body.valve;
    const editTEVAR = req.body.tevar;
    const editTAVR = req.body.tavr;
    const editVATS = req.body.vats;
    const editpericardial = req.body.pericardial;
    const editreOperation = req.body.reOperation;
    const editother = req.body.other;
    const editamount = req.body.amount;

    const targetList = await db.OrList.findOne({ where: { id: targetId } });
    if (targetList) {
        await targetList.update({
            customer: editcustomer,
            total: editOPCAB+editCABG+editCABGnValve+editValve_s+editTEVAR+editTAVR+editVATS+editpericardial+editreOperation+editamount,

            opcab: editOPCAB,
            cabg: editCABG,
            cabgvalve: editCABGnValve,
            valve: editValve_s,
            tevar: editTEVAR,
            tavr: editTAVR,
            vats: editVATS,
            pericardial: editpericardial,
            reOperation: editreOperation,
            other: editother,
            amount: editamount,
            recorder: req.user.username
        });
        res.status(200).send({ message: "updating is success" });
    } else {
        res.status(404).send({ message: "List not found" })
    }
};

module.exports = {
    getORList,
    addORList,
    editORList,
    getORListById,
};