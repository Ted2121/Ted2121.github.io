import quizbytes from '../assets/projectCardImages/quizbytes.png';
import debuggingTacticsImage from '../assets/DebuggingTactics.png';
import requireAuth from '../assets/projectSectionImages/RequireAuth.png';
import routes from '../assets/projectSectionImages/Routes.png';
import apiRequestExample from '../assets/projectSectionImages/apiRequestExample.png';

const projectsData = [
    {
      id: 0,
      title: 'QuizBytes v2.0 Client',
      mainTag: 'React',
      cardImageUrl: quizbytes,
      cardImageAlt: 'image of a quiz',
      demoUrl: 'https://ted2121.github.io/QuizBytesClient/',
      githubUrl: 'https://github.com/Ted2121/QuizBytesClient',
      sections: [
        {
          id: 0,
          title: 'Description',
          text: 'QuizBytes 2 is my second take on creating a web app for quizzes after a year from the original QuizBytes project. The most important change is that I built the frontend with React.js instead of ASP.NET Core MVC, separating the server side codebase from the client side. Here I will continue to talk about the frontend and I will cover the backend as a separate project.',
          tag: 'description',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
        {
          id: 1,
          title: 'Product Vision',
          text: 'I created this project to help fellow students and software engineers to polish their theoretical knowledge of different programming concepts. The product is an MVP consisting of 2 main features: a demo quiz that is available to all visitors, and a catalog of available courses to start a quiz from, which requires the user to be authenticated. Of the 2, the demo is the only available feature for now, because even though I have already written the backend for this application, I don\'t have the funds to host the server and database at the moment. In case you would like to see the backend running as well, I would be happy to run it locally at an interview.',
          tag: 'product vision',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
        {
          id: 2,
          title: 'React',
          text: 'As I mentioned above, this is a React.js SPA frontend project with Vite as build tool. I chose Vite over CRA or other options because Vite has faster development server starts and updates and the scaffolded project is cleaner. Coming from an OOP background, react is very enjoyable and intuitive for me to write because I can think of components as objects.',
          tag: 'react',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
        {
          id: 3,
          title: 'Architecture',
          text: 'For architecture I used a component based architecture that is common with React SPAs. As for folder structure, I separated the application files in the following way: components - reusable by layouts and pages, layouts - built of multiple smaller components, pages - views of the application composed of layouts and components, assets - for images and other resources, context - to hold shared data and state between components, data - for JS files holding data objects such as demo quiz questions, hooks - for custom hooks such as useAuth, services - where I added the API requests grouped up using the facade pattern, utility - where I have the server\'s URL and styles - where I put the SCSS files and the resulting CSS file.',
          tag: 'architecture',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
        {
          id: 4,
          title: 'Styling',
          text: 'To style the components I used 2 approaches. First of all, I used the MUI library to import some components such as Buttons, Cards, Papers, Drawers and many others. These components I styled by adding a theme.js file where I customized them and by adding inline styles using the sx prop, as suggested by the MUI docs. Second of all, I styled components that did not come from the MUI library using custom CSS with a pre-processor, SASS that helped me follow the DRY principle.',
          tag: 'styling',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
        {
          id: 5,
          title: 'Routing',
          text: 'The routing of the application is done using the library react-router-dom. With the Route component of this library, I set both the public and the private routes in App.jsx. The private Routes are the children of a RequireAuth component I created, that checks if there is a token in the auth context. I used a ternary operator to create an Outlet to the private routes if there is a token and if not, to send the user to the /login route using the Navigate component of the react-router-dom library',
          tag: 'routing',
          images:[
            {
              url:routes,
              alt:'Routes defined in App.jsx'
            },
            {
              url:requireAuth,
              alt:'RequireAuth component'
            },
          ],
        }, 
        {
          id: 6,
          title: 'API Requests',
          text: 'As I mentioned before, the API requests are grouped up as facade pattern. I like to have a facade for each object in the application and currently I have a userRequestsFacade and a quizRequestsFacade. In a later version I intend to have a questionRequestsFacade that will hold the requests for a feature I did not implement yet on the client side, that allows the user to spend points earned while quizzing to obtain a hint for a question. To make the requests, I used fetch with the async/await syntax.',
          tag: 'API requests',
          images:[
            {
              url: apiRequestExample,
              alt:'Example of an API request using fetch'
            },
          ],
        }, 
        {
          id: 7,
          title: 'Auth',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'Auth',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
        {
          id: 8,
          title: 'API Requests',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'API requests',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
      ],
    },
    {
      id: 1,
      title: 'Test 1',
      mainTag: 'React',
      cardImageUrl: debuggingTacticsImage,
      cardImageAlt: 'image of a quiz',
      demoUrl: 'https://ted2121.github.io/QuizBytesClient/',
      githubUrl: 'https://github.com/Ted2121/QuizBytesClient',
      sections: [
        {
          id: 0,
          title: 'Description',
          text: 'a bunch of text',
          tag: 'description',
          images:[
            {
              url:'',
              alt:''
            },
          ],
        }, 
        {
          id: 1,
          title: 'Title 2',
          text: 'a bunch of text',
          tag: 'ffre',
        }, 
        {
          id: 2,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 3,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 4,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 5,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 6,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 7,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
      ],
    },
    {
      id: 2,
      title: 'Test 2',
      mainTag: 'React',
      cardImageUrl: debuggingTacticsImage,
      cardImageAlt: 'image of a quiz',
      demoUrl: 'https://ted2121.github.io/QuizBytesClient/',
      githubUrl: 'https://github.com/Ted2121/QuizBytesClient',
      sections: [
        {
          id: 0,
          title: 'Description',
          text: 'a bunch of text',
          tag: 'description',
        }, 
        {
          id: 1,
          title: 'Title 2',
          text: 'a bunch of text',
          tag: 'ffre',
        }, 
        {
          id: 2,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 3,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 4,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 5,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 6,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 7,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
      ],
    },
    {
      id: 3,
      title: 'Test 3',
      mainTag: 'React',
      cardImageUrl: debuggingTacticsImage,
      cardImageAlt: 'image of a quiz',
      demoUrl: 'https://ted2121.github.io/QuizBytesClient/',
      githubUrl: 'https://github.com/Ted2121/QuizBytesClient',
      sections: [
        {
          id: 0,
          title: 'Description',
          text: 'a bunch of text',
          tag: 'description',
        }, 
        {
          id: 1,
          title: 'Title 2',
          text: 'a bunch of text',
          tag: 'ffre',
        }, 
        {
          id: 2,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 3,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 4,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 5,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 6,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
        {
          id: 7,
          title: 'Title 3',
          text: 'fsakfnaewf fioweankawe nofnweaw ',
          tag: 'grehrth',
        }, 
      ],
    },
    
    
  ];
  
  export default projectsData;