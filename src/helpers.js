export const delaySubmit = () => new Promise((res) => setTimeout(res, Math.random() * 2000));

// local storage functions
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Get all items from local storage
export const getAllMatchingItems = ({category, key, value}) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// delete item from local storage
export const deleteItem = ({key, id}) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// create budget
export const createBudget = ({name, amount}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
  };
  // add newItem into localstorage
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]));
};

// create expense
export const createExpense = ({name, amount, budgetId}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  // add newItem into localstorage
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]));
};

// edit item
export const editItem = ({key, id, newData}) => {
  const existingData = fetchData(key);
  if (!existingData) return;

  const updatedData = existingData.map((item) => (item.id === id ? {...item, ...newData} : item));

  localStorage.setItem(key, JSON.stringify(updatedData));
};

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((accumulator, expense) => {
    // check if the expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return accumulator;

    // add the current amount to my total
    return (accumulator += expense.amount);
  }, 0);

  return budgetSpent;
};

// FORMATTING

// format date
export const formatDate = (epoch) => new Date(epoch).toLocaleDateString();

// format percentage
export const formatPercentage = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// format currency
export const formatCurrency = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "PHP",
  });
};
