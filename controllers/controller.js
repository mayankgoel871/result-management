
function getAllResult (req,res){
  res.send("helll");
};

function getResult(req,res){
  const rollNo = req.params.rollno;
  const name = req.params.name;
  res.send(rollNo + " " + name);
};

function deleteResult(req,res){
  const rollNo = req.params.rollno;
  res.send(rollNo);
};

function updateResult(req,res){
  const rollNo = req.params.rollno;
  res.send(rollNo);
};

function createResult(req,res){
  const rollNo = req.params.rollno;
  res.send(rollNo);
};


module.exports = {getAllResult, getResult, deleteResult, updateResult, createResult}