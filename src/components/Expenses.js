import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return(
        <div>
            {props.expenses.map(function(expense){
                return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            })}
        </div>
    );
}

export default Expenses;