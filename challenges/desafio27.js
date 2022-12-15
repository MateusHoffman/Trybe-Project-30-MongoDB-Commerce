db.produtos.find(
  { nome: /mc/i },
  { nome: 1, _id: 0 },
).count();
