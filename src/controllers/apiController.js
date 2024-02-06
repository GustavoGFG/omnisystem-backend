import { DailyReport } from '../models/dailyreport.js';
import { Employee } from '../models/employee.js';

export const ping = (req, res) => {
  res.json({ pong: true });
};

export const dailyreport = async (req, res) => {
  let dailyreport = await DailyReport.find({ date: req.body.date });
  if (dailyreport.length > 0) {
    res.json({
      success: false,
      res: 'Erro! Relatório para a data definida já existe!',
    });
  } else {
    dailyreport = new DailyReport({
      date: req.body.date,
      sale: req.body.sale,
      salesGoal: req.body.salesGoal,
      transactions: req.body.transactions,
      transactionsGoal: req.body.transactionsGoal,
      averageTicket: req.body.averageTicket,
      averageTicketGoal: req.body.averageTicketGoal,
      modifierPercentage: req.body.modifierPercentage,
      modifierPercentageGoal: req.body.modifierPercentageGoal,
      foodAttachPercentage: req.body.foodAttachPercentage,
      foodAttachPercentageGoal: req.body.foodAttachPercentageGoal,
      cashierShortage: req.body.cashierShortage,
    });
    await dailyreport.save();
    res.json({ success: true, res: dailyreport });
  }
};

export const addemployee = async (req, res) => {
  let employee = await Employee.find({ idDocument: req.body.idDocument });
  if (employee.length > 0) {
    res.json({ success: false, res: 'Erro: Colaborador já está cadastrado!' });
  } else {
    let numberOfHiredPeople = await Employee.find({
      hireDate: req.body.hireDate,
    });
    let hireDate = req.body.hireDate.split('/');
    numberOfHiredPeople = String(numberOfHiredPeople.length + 1).padStart(
      4,
      '0'
    );
    console.log(numberOfHiredPeople);
    numberOfHiredPeople = `${hireDate[2]}.${hireDate[1]}.${hireDate[0]}-${numberOfHiredPeople}`;
    employee = new Employee({
      hireDate: req.body.hireDate,
      idDocument: req.body.idDocument,
      name: req.body.name,
      fullName: req.body.fullName,
      credential: numberOfHiredPeople,
      role: req.body.role,
    });
    await employee.save();
    res.json({ success: true, res: employee });
  }
};

export const allemployees = async (req, res) => {
  let allemployees = await Employee.find({});
  res.json({ success: true, res: allemployees });
};
