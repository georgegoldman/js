
//budget controller

var budgetController  = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;

    };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });

        data.total[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        total: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // create new id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            } else {
                ID = 0;
            }

            // create new item based on 'inc' or 'exp'
            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            }else if(type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            // push it into our data structure

            data.allItems[type].push(newItem);

            // return the new element
            return newItem;

        },

        calculateBudget: function() {
            calculateTotal('exp')
            calculateTotal('inc')

            data.budget = data.total.inc - data.total.exp;

            data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.total.inc,
                totatExp: data.total.exp,
                percentage: data.percentage,
            }
        },

        testing: function() {
            console.log(data)
        }
    }

})();

// uicontroller
var UIController = (function() {

    var DOMstrings = {
        inputType : '#add_type',
        inputDescription : '#add_description',
        inputValue : '.add_value',
        inputButton: '.add_btn',
        incomeContainer: '#inc-dtl',
        expensesContainer: '#exp-dtl',
    };

    return {
        getInput: function() {

            return {

                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            }

        },

        addListItem: function(obj, type) {

            var html, newHtml, element;
            //create html with some place holder

            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<p id="inc_info_%id%">%id% %description% %value% <button>remove</button></p>';

            }else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<p id="exp_info_%id%">%id% %description% %value% <button>remove</button></p>';

            }

            //replace the placeholder with datas
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //insert the html into the dom

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";

            });

            fieldsArr[0].focus();
        },

        getDOMstrings: function() {
            return DOMstrings;
        },
    };

})();


// global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var setUpEventLsteners = function() {

        var DOM = UIController.getDOMstrings()

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        })

    };

    var updateBudget = function() {
        budgetCtrl.calculateBudget();
        var budget = budgetCtrl.getBudget();
        console.log(budget);

    };

    var ctrlAddItem = function() {

        var input, newItem;

        input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            newItem  = budgetCtrl.addItem(input.type, input.description, input.value);

            UICtrl.addListItem(newItem, input.type);

            UICtrl.clearFields();

            updateBudget();
        }
    };

    return {
        init: function() {
            console.log('Application started.')
            setUpEventLsteners()
        }
    };

})(budgetController, UIController);

controller.init();
