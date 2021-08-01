import port1 from '../img/portImages/TaskTracker.jpg';
import port2 from '../img/portImages/SurplusDeficitAutomationSystem.jpg';
import port3 from '../img/portImages/ECoffeePicture.jpg';
import port4 from '../img/portImages/CodrImage.png';

const portfolios = [
    {
        id: 1,
        category: 'MERN Projects',
        link1: 'https://pacific-chamber-27113.herokuapp.com/',
        link2: 'www.github.com',
        icon1: 'Website',
        icon2: 'Y',
        image: port4,
        title: 'Codr Connector',
        paragraph: 'Web Application that uses the entire MERN stack to create a small social networking enviornment.'
    },
    {
        id: 2,
        category: 'C#/.NET Projects',
        link1: 'https://surplusdeficit.azurewebsites.net/',
        link2: 'www.github.com',
        icon1: 'Website',
        icon2: 'Y',
        image: port2,
        title: 'Automation Surplus Deficient System',
        paragraph: 'Surplus Deficent application made for the non-profit organization ElderSource. Made using C# and ASP.NET with Visual Studio 2019'
    },
    {
    id: 3,
    category: 'C#/.NET Projects',
    link1: 'www.youtube.com',
    link2: 'www.github.com',
    icon1: 'Website',
    icon2: 'Y',
    image: port3,
    title: 'E-Coffee E-Commerce Site',
    paragraph: 'E-Commerce site for a coffee company. Made using C# and ASP.NET with Visual Studio 2019'
    }, 
    {
        id: 4,
        category: 'React Projects',
        link1: 'https://portfoliotasktracker.netlify.app/',
        link2: 'www.github.com',
        icon1: 'Website',
        icon2: 'Y',
        image: port1,
        title: 'Task Tracker App',
        paragraph: 'App for tracking daily tasks. Made using React and Visual Studio Code'
    },
    

]

export default portfolios;