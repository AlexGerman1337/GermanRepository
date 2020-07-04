'use strict';
let salaryAmount = document.querySelector('.salary-amount');
let start = document.getElementById('start');
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];
let depositCheckmark = document.querySelector('.deposit-checkmark');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let incomeItems = document.querySelectorAll('.income-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let budgetMonthValue = document.getElementsByClassName("budget_month-value")[0];
let budgetDayValue = document.getElementsByClassName("budget_day-value")[0];
let expensesMonthValue = document.getElementsByClassName("expenses_month-value")[0];
let additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0];
let additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0];
let incomePeriodValue = document.getElementsByClassName("income_period-value")[0];
let targetMonthValue = document.getElementsByClassName("target_month-value")[0];
let expensesAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItem = document.querySelectorAll('.income-items');
let periodAmount = document.querySelector('.period-amount');




let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let isString = function(n){
    return !String(n) && n === null && n.trim();
};



let appData = {
    income : {},
    addIncome: [],
    expenses: {},
    incomeMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {
      
      if(salaryAmount.value === ''){
        alert('Ошибка, поле Месячный доход должно быть заполнено');
        return;
      }
      appData.budget = +salaryAmount.value;
      console.log("salaryAmount.value", salaryAmount.value)
      appData.getExpenses();
      appData.getInfoDeposit();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getTargetMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      console.log(appData.getStatusIncome());
      appData.getInfoDeposit();
      appData.getBudget();
      appData.showResult();

    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(',');
        additionalIncomeValue.value = appData.addIncome.join(',');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },

    addExpensesBlock: function(){
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      console.log("expensesItems", expensesItems)
      if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
      }
    },

    addIncomeBlock:function(){
      let cloneIncomeItem = incomeItems[0].cloneNode(true); // глубокая копия
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      console.log("incomeItems", incomeItems)
      if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
      }
    },

    setPeriod:function(event){
        appData.period = event.target.value;
        periodAmount.value = event.target.value;
        periodAmount.textContent = event.target.value;
    },

    getExpenses: function(){
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;
        }
      });
    },

    getIncome: function(){
        let cashIncome = 0;
        let itemIncome;

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            do {
            itemIncome = +prompt('Какой у вас дополнительный доход?', 'Таксую');
            }
            while(isString(itemIncome) || itemIncome === ''|| itemIncome === null || itemIncome === ' ');
            do{
            cashIncome = +prompt('Сколько в месяц  вы на этом зарабатываете', 1000);
            }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;

            for (let key in appData.income){
                appData.incomeMonth += +appData.income[key];
            }
        };
    },

    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    




    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth = +appData.expenses[key];
        }
        console.log("Сумма всех расходов: " + appData.expensesMonth);
    },



    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
        console.log("Накопления за месяц:" + appData.budgetMonth);
        console.log('Дневной бюджет: ' + appData.budgetDay);
    },

    getTargetMonth: function(){
        return targetAmount.value / appData.budgetMonth;
    },

    getStatusIncome: function(){
        if (appData.budgetDay >= 1200){
            return('У вас высокий уровень дохода');
        }
        else if(appData.budgetDay < 1200 && appData.budgetDay >= 600){
            return('У вас средний уровень дохода');
        }
        else if(appData.budgetDay < 600 && appData.budgetDay > 0){
            return('К сожалению у вас уровень дохода ниже среднего');
        }
        else if(appData.budgetDay <= 0){
            return('Что то пошло не так');
        }
    },


        getInfoDeposit:function(){
            if(appData.deposit){
                appData.percentDeposit = prompt('Какой годовой процент?', "10");
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        },
        calcPeriod: function () {  
            return appData.budgetMonth * periodSelect.value;
            
        },


};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click',appData.addIncomeBlock);
document.querySelector('.period-select').addEventListener('change', appData.setPeriod);




        // if(appData.getTargetMonth(appData.mission, appData.budgetMonth) <= 0 ){
        //     console.log('Цель не будет достигнута')
        // }else{
        //     console.log("Цель будет достигнута за " + parseInt(appData.getTargetMonth(appData.mission, appData.budgetMonth)) + " месяцев ");
        // };























// console.log(salaryAmount);
// console.log(start);
// console.log('ep', expensesPlus);
// console.log('ip', incomePlus);
// console.log(depositCheckmark);
// console.log(additionalIncomeItem);
// console.log(incomeItems);
// console.log(additionalExpensesItem);
// console.log(targetAmount);
// console.log(periodSelect);
// console.log(budgetMonthValue);
// console.log(budgetDayValue);
// console.log(expensesMonthValue);
// console.log(additionalIncomeValue);
// console.log(additionalExpensesValue);
// console.log(incomePeriodValue);
// console.log(targetMonthValue);






