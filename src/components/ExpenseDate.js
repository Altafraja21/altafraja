import './ExpenseDate.css';

function ExpenseDate(props){

    const month = "Aprail"; // props.date.toLocalString('en-US', {month:'long'});
    const year = 2000; //props.date.getFullYear();
   const day = 21; //props.date.toLocalString('en-US', {day:'2-digit'});


    return(

        <div className='expense-date'>

        <div className='expense-date__month'>{month}</div>
        <div  className='expense-date__year'>{year}</div>
        <div  className='expense-date__day'> {day}</div>

        </div>



    );
}

export default ExpenseDate;