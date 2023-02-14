import Header from './components/Header.js';
import About from './components/About.js';
import Qualification from './components/Qualification.js';
import Projects from './components/Projects.js';
import Connect from './components/Connect.js';


function App(){


  /*   let expense = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2023, 5, 12)
        },

        {
            id: 'e2',
            title: 'Books',
            amount: 230,
            date: new Date(2023, 2, 22)
        },

        {
            id: 'e3',
            title: 'House Rent',
            amount: 700,
            date: new Date(2023, 4, 12)
        },

        {
            id: 'e4',
            title: 'Food',
            amount: 500,
            date: new Date(2023, 3, 21)
        },

     ]

     */

    return (

        <div>
           
           <Header />
           <About />
           <Qualification />
           <Projects />
           <Connect />

            

    </div>)
}

export default App;