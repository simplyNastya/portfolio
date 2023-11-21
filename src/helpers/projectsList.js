import yourPet1 from './images/yourPet/yourPet1.jpg'
import yourPet2 from './images/yourPet/yourPet2.jpg'
import yourPet3 from './images/yourPet/yourPet3.jpg'
import yourPet4 from './images/yourPet/yourPet4.jpg'
import yourPet5 from './images/yourPet/yourPet5.jpg'
import yourPet6 from './images/yourPet/yourPet6.jpg'
import yourPet7 from './images/yourPet/yourPet7.jpg'

import wallet1 from './images/wallet/wallet1.jpg'
import wallet2 from './images/wallet/wallet2.jpg'
import wallet3 from './images/wallet/wallet3.jpg'
import wallet4 from './images/wallet/wallet4.jpg'
import wallet5 from './images/wallet/wallet5.jpg'

import siteNews1 from './images/siteNews/siteNews1.jpg'
import siteNews2 from './images/siteNews/siteNews2.jpg'
import siteNews3 from './images/siteNews/siteNews3.jpg'
import siteNews4 from './images/siteNews/siteNews4.jpg'

import contactKeeper1 from './images/contactKeeper/contactKeeper1.jpg'
import contactKeeper2 from './images/contactKeeper/contactKeeper2.jpg'
import contactKeeper3 from './images/contactKeeper/contactKeeper3.jpg'
import contactKeeper4 from './images/contactKeeper/contactKeeper4.jpg'

import filmoteka1 from './images/filmoteka/filmoteka1.jpg'
import filmoteka2 from './images/filmoteka/filmoteka2.jpg'
import filmoteka3 from './images/filmoteka/filmoteka3.jpg'
import filmoteka4 from './images/filmoteka/filmoteka4.jpg'
import filmoteka5 from './images/filmoteka/filmoteka5.jpg'
import filmoteka6 from './images/filmoteka/filmoteka6.jpg'

import imageFinderReact1 from './images/imageFinderReact/imageFinderReact1.jpg'

import niceView1 from './images/niceView/niceView1.jpg'
import niceView2 from './images/niceView/niceView2.jpg'
import niceView3 from './images/niceView/niceView3.jpg'
import niceView4 from './images/niceView/niceView4.jpg'
import niceView5 from './images/niceView/niceView5.jpg'
import niceView6 from './images/niceView/niceView6.jpg'
import niceView7 from './images/niceView/niceView7.jpg'
import niceView8 from './images/niceView/niceView8.jpg'
import niceView9 from './images/niceView/niceView9.jpg'

import imageFinderJs1 from './images/imageFinderJs/imageFinderJs1.jpg'
import imageFinderJs2 from './images/imageFinderJs/imageFinderJs2.jpg'
import imageFinderJs3 from './images/imageFinderJs/imageFinderJs3.jpg'
import imageFinderJs4 from './images/imageFinderJs/imageFinderJs4.jpg'

import webStudio1 from './images/webStudio/webStudio1.jpg'
import webStudio2 from './images/webStudio/webStudio2.jpg'
import webStudio3 from './images/webStudio/webStudio3.jpg'
import webStudio4 from './images/webStudio/webStudio4.jpg'
import webStudio5 from './images/webStudio/webStudio5.jpg'
import webStudio6 from './images/webStudio/webStudio6.jpg'
import webStudio7 from './images/webStudio/webStudio7.jpg'

import laslesVpn1 from './images/laslesVpn/laslesVpn1.jpg'
import laslesVpn2 from './images/laslesVpn/laslesVpn2.jpg'
import laslesVpn3 from './images/laslesVpn/laslesVpn3.jpg'
import laslesVpn4 from './images/laslesVpn/laslesVpn4.jpg'
import laslesVpn5 from './images/laslesVpn/laslesVpn5.jpg'

import orginizeFlow1 from './images/orginizeFlow/orginizeFlow1.jpg'
import orginizeFlow2 from './images/orginizeFlow/orginizeFlow2.jpg'
import orginizeFlow3 from './images/orginizeFlow/orginizeFlow3.jpg'

import notesManager1 from './images/notesManager/notesManager1.jpg'
import notesManager2 from './images/notesManager/notesManager2.jpg'
import notesManager3 from './images/notesManager/notesManager3.jpg'
import notesManager4 from './images/notesManager/notesManager4.jpg'
import notesManager5 from './images/notesManager/notesManager5.jpg'
import notesManager6 from './images/notesManager/notesManager6.jpg'
import notesManager7 from './images/notesManager/notesManager7.jpg'

import barberShop1 from './images/barberShop/barberShop1.jpg'
import barberShop2 from './images/barberShop/barberShop2.jpg'
import barberShop3 from './images/barberShop/barberShop3.jpg'
import barberShop4 from './images/barberShop/barberShop4.jpg'
import barberShop5 from './images/barberShop/barberShop5.jpg'
import barberShop6 from './images/barberShop/barberShop6.jpg'
import barberShop7 from './images/barberShop/barberShop7.jpg'

import chatApp1 from './images/chatApp/chatApp1.jpg'
import chatApp2 from './images/chatApp/chatApp2.jpg'
import chatApp3 from './images/chatApp/chatApp3.jpg'
import chatApp4 from './images/chatApp/chatApp4.jpg'
import chatApp5 from './images/chatApp/chatApp5.jpg'

import cloudBudget1 from './images/cloudBudget/cloudbudget1.jpg'
import cloudBudget2 from './images/cloudBudget/cloudbudget2.jpg'
import cloudBudget3 from './images/cloudBudget/cloudbudget3.jpg'
import cloudBudget4 from './images/cloudBudget/cloudbudget4.jpg'
import cloudBudget5 from './images/cloudBudget/cloudbudget5.jpg'

const projects = [
	{
        id: '1',
		title: 'Chat App',
		img: [chatApp1, chatApp2, chatApp3, chatApp4, chatApp5],
		about: {
			greeting: 'Welcome to Chat App!',
			subtitle: `Use Chat App to have a conversation with your friends!`,
			features: [
				{ id: 1, name: `Real-time chatting with people in the room`, text: `Unlimited number of users can connect to a the one room and heva conversation there` },
				{ id: 2, name: `Responsive and Stylish Design`, text: `ChatApp has responsive user interface. The application is visually appealing and user-friendly across various devices.`, },
			],
		},
		skills: 'Node.js, Express.js, Socket.io, HTML5, JavaScript, CSS3',
		responsibilities: {
			title: `Role: Backend and Frontend Developer`, 
			subtitle: `It was independent project just for training Socket.io.`,
			backend: [
				{ id: 1, name: `Simple server`, text: `I created simple Node.js server using Express.js and connected Socket.io.`},
				{ id: 2, name: `Functions and Logic`, text: `Within the backend, I crafted and integrated functions and logical operations necessary for the proper functioning of the application. This included processes related to typing, sending and receiving messages.` },
			],
			frontend: [
				{ id: 1, name: `Markuped and Stylish`, text: `Simple user friendly interface focusing on creating an intuitive and visually appealing modern and responsive design. The application is visually appealing and user-friendly across various devices.` },
				{ id: 2, name: `Functions and Logic`, text: `Within the frontend, I crafted and integrated functions and logical operations necessary for the proper functioning of the application. This included processes related to typing, sending and receiving messages.` },
			],
		},
        gitHubPagesLink: 'https://chat-app-3k4m.onrender.com',
		gitHubBackendLink: 'https://github.com/simplyNastya/chat-app',
	},
	{
        id: '2',
		title: 'Your Pet',
		img: [yourPet1, yourPet2, yourPet3, yourPet4, yourPet5, yourPet6, yourPet7],
		about: {
			greeting: 'Welcome to Your Pet!',
			subtitle: `Your Pet is your one-stop destination for all things related to pets. Whether you're looking to find a loving home for your furry friend, searching for a new companion to join your family, or seeking help to reunite with a lost pet, Your Pet is here to help you.`,
			features: {
				authorizes: [
					{
						id: 1,
						name: `Post Notices`,
						text: `As an authorized user, you have the privilege to post notices about animals you want to sell, give away for free, or help reunite with their owners if they are lost. Our platform ensures that you can easily create detailed and appealing notices to attract potential adopters or owners.`
					},
					{
						id: 2,
						name: `Lost and Found`,
						text: `If you've lost your beloved pet or found a lost animal, Your Pet enables you to post notices about the lost or found pet, along with essential contact information. This way, the pet owners can quickly get in touch and be reunited with their furry friends.`
					},
					{
						id: 3,
						name: `Favorites`,
						text: `Keep track of your favorite animals by adding them to your favorites list. This feature allows you to easily access and monitor the animals you are interested in, making it convenient to stay updated on their status.`
					},
					{
						id: 4,
						name: `Account Management`,
						text: `Manage your account information effortlessly. You can update your contact details, profile picture, and other relevant information to ensure seamless communication with potential adopters or pet owners.`
					},
					{
						id: 5,
						name: `Responsive and Stylish Design`,
						text: `Your Pet boasts a modern and responsive user interface. Thanks to the team's dedication to common styles, the application is visually appealing and user-friendly across various devices.`
					},
				],
				unauthorized: [
					{
						id: 1,
						name: `Browse Notices`,
						text: `Even without logging in, users can access the Your Pet platform and browse through all the notices posted by authorized users. You can explore the animals available for sale, adoption, or lost/found, along with the provided contact information.`
					},
					{
						id: 2,
						name: `Contact Information`,
						text: `All notices come with contact information, making it easy for unauthorized users to get in touch with the animal owners or finders directly if they are interested in a particular pet or want to help reunite a lost pet with its owner.`
					},
					{
						id: 3,
						name: `Additionaly Information`,
						text: `All users can see the latest news and informations about our sponsors!`
					},
				]
			},
		},
		skills: 'NODE.JS, MongoDB, cloudinary, express, gravatar, moment, mongoose, JS, REACT, REDUX, SASS, AJAX, REST API, axios, formik, nanoid, notiflix',
		responsibilities: {
			title: `Role: Backend and Frontend Developer`, 
			subtitle: `As a member of Team One in Your Pet, I took on various roles and responsibilities, primarily focusing on the backend development and contributing to some aspects of the front-end.`,
			backend: [
				{ id: 1, name: `Models and Schemas`, text: `I was responsible for designing and implementing the database models and schemas for the project. This involved defining the structure and relationships between entities like Notices, Pets, Users, and other relevant data.`},
				{ id: 2, name: `Routes and Controllers`, text: `I played a key role in setting up the API routes and developing the corresponding controllers to handle various requests and responses. This ensured smooth interactions between the frontend and backend components of the application.`},
				{ id: 3, name: `Middlewares`, text: `I developed essential middleware components to handle tasks like input validation, and error handling.` },
				{ id: 4, name: `Functions and Logic`, text: `Within the backend, I crafted and integrated functions and logical operations necessary for the proper functioning of the application. This included processes related to posting and retrieving notices, managing user accounts, and handling pet-related operations.` },
			],
			frontend: [
				{ id: 1, name: `Our Friend Page`, text: `I developed and styled the "Our Friend Page" of the Your Pet website.`},
				{ id: 2, name: `Collaboration with Frontend Team`, text: `While my primary focus was on backend development, I actively collaborated with the frontend team. I provided support, guidance, and backend-related resources to ensure a seamless integration of frontend and backend functionalities.`},
			],
		},
        gitHubPagesLink: 'https://antonbabenko96.github.io/react-node-team-app/',
		gitHubFrontendLink: 'https://github.com/AntonBabenko96/react-node-team-app',
		gitHubBackendLink: 'https://github.com/DaddyStannis/your-pet-backend',
	},
	{
        id: '3',
		title: 'Wallet',
		img: [wallet1, wallet2, wallet3, wallet4, wallet5],
		about: {
			greeting: `Welcome to Wallet - Your Personal Finance Manager!`,
			subtitle: `Wallet is a powerful and user-friendly web application designed to help you take control of your finances effortlessly. By registering and logging in to your account, you can easily track your income and expenses, gain valuable insights into your spending patterns, and make more informed financial decisions.`,
			features: [
				{ id: 1, name: `Registration and Secure Login`, text: `Get started by creating your account on Wallet.`, },
				{ id: 2, name: `Income and Expense Tracking`, text: `Record your sources of income and expenses with ease. Wallet allows you to add and delete transactions, making it simple to keep your financial records up to date.`, },
				{ id: 3, name: `Real-time Balance`, text: `With each transaction you enter, Wallet automatically calculates and displays your real-time balance. This gives you an instant overview of your financial situation at any given time.`, },
				{ id: 4, name: `Expense Categories`, text: `Categorize your expenses to gain insights into your spending habits. Wallet offers pre-defined categories and the option to specify choosen categorie, providing a clear breakdown of where your money is going.`, },
				{ id: 5, name: `Interactive Charts`, text: `Visualize your spending patterns and income trends with intuitive charts. The chart statistics allow you to see how your expenses are distributed across different categories, empowering you to identify areas for potential savings.`, },
				{ id: 6, name: `Responsive and Stylish Design`, text: `Wallet boasts a modern and responsive user interface. Thanks to the team's dedication to common styles, the application is visually appealing and user-friendly across various devices.`, },
			]
		},
		skills: 'JS, AJAX, REST API, axios, REACT, SASS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As a member of Team One, I played a significant role in shaping the Wallet project. My responsibilities encompassed a variety of tasks spanning both frontend development and logic implementation.`,
			frontend: [
				{ id: 1, name: `Common Styles`, text: `I established a cohesive and visually appealing design language by defining common styles, including colors, fonts, container sizes, and resetting default styles of elements. This created a consistent and polished look throughout the application.`},
				{ id: 2, name: `Registration Page Component`, text: `I took charge of marking up and styling the Registration Page Component. By ensuring a seamless and attractive user experience during the registration process, I contributed to higher user engagement.` },
				{ id: 3, name: `Site Navigation`, text: `I implemented the site navigation, allowing users to move through different sections of Wallet with ease. This feature enhances accessibility and promotes a smooth browsing experience.`},
				{ id: 4, name: `Transaction List Component`, text: `I played a key role in marking up and styling the Transaction List Component. The component allows users to view their financial transactions conveniently, improving the overall usability of the application.` },
				{ id: 5, name: `Loader Component`, text: `I developed the Loader Component, which indicates when the application is processing data or fetching information. This feature enhances user experience by providing visual feedback during loading times.` },
				{ id: 6, name: `Logic for Managing Finances and Transactions`, text: `I actively participated in developing the logic for managing finances and transactions. This involved implementing the core functionalities of adding and deleting transactions, as well as calculating real-time balances.` },
				{ id: 7, name: `Data Collection for Chart Statistics`, text: `I took charge of developing the logic for collecting data about transactions to generate statistics for the interactive charts. This feature empowers users to gain valuable insights into their financial habits.` },
				{ id: 8, name: `Feature Development and Planning`, text: `I participated in team discussions to plan and prioritize feature development. My input helped shape the roadmap of the project, ensuring that the frontend components were aligned with the overall project goals.`},
			],
		},
        gitHubPagesLink: 'https://iamblashch.github.io/react_project',
        gitHubFrontendLink: 'https://github.com/iamblashch/react_project',
	},
	{
        id: '4',
		title: 'NotesManager',
		img: [notesManager1, notesManager2, notesManager3, notesManager4, notesManager5, notesManager6, notesManager7],
		about: {
			greeting: `Welcome to NotesManager!`,
			subtitle: `NotesManager was created as a application for internal using between employees in the company. Employee can see notes that assigned to them, Admins and Managers can assignet notes. The database is closed (just Admin or Manager can give you access to the account, so if you want to test: username for Admin role: Anastasiia, password for Admin role: Aa12345 AND username for employee role: Eva, password for employee role: Ee12345)`,
			features: [
				{ id: 1, name: `Login to an app`, text: `Employee can sign in to the app just if they are already in the database. Created account in the NotesManager for simple employee can just Admin or Manager.` },
				{ id: 2, name: `Role-based access control`, text: `The interfaces and access controls & permissions are different and depends which role you are (Admin, Manager or Employee).` },
				{ id: 3, name: `Real-time Notes List`, text: `Employee could see assigned notes in real-time, because fetch refreshed every few minutes. ` },
				{ id: 4, name: `Responsive and Stylish Design`, text: `NotesMAnager boasts a modern and responsive user interface. The application is visually appealing and user-friendly across various devices.`, },
			]
		},
		skills: 'MongoDB, Express.js, REACT, Node.js, JS, CSS, Postman, Mongoose, REST API',
		responsibilities: {
			title: `Role: FullStack Developer`, 
			subtitle: `It was independent project just for training MERN.`,
			backend: [
				{ id: 1, name: `Models and Schemas`, text: `I designed and implemented the database models and schemas for the project.`},
				{ id: 2, name: `Routes and Controllers`, text: `I setted up the API routes and developed the corresponding controllers to handle various requests and responses. This ensured smooth interactions between the frontend and backend components of the application.` },
				{ id: 3, name: `Middlewares`, text: `I developed middleware components to handle tasks like error handler, logger.` },
				{ id: 4, name: `Functions and Logic`, text: `Within the backend, I crafted and integrated functions and logical operations necessary for the proper functioning of the application. This included processes related to authentification, adding, editing and deleting notes, additing new users, managing existing users.` },
				{ id: 5, name: `REST API`, text: `Backend was created according to REST principles` },
				{ id: 6, name: `Refresh access token`, text: `JWT token is compact and self-contained way for securely transmitting information between parties as a JSON object. It contains a cryptographic signature and is a good practices that prevents APIs become so vulnerable to cyber-attacks` }
			],
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I created the user interface for the main page, dashboard page, users list page, add new user page, notes list page, add new note page and not found page, focusing on creating an intuitive and visually appealing design. The pages are user-friendly and accessible, modern and responsive user interface. The application is visually appealing and user-friendly across various devices.` },
				{ id: 2, name: `CRUD`, text: `The logic of relationship between backend and frontend based on CRUD operations.` },
				{ id: 3, name: `Routing and Navigation`, text: `I set up routing and navigation for NotesManager which are generally understood and easy to navigate.` },
				{ id: 4, name: `Role-based access control`, text: `This features integrated vue frontend. If Employee does not have Admin or Manager role he does not see buttons that are reliable for adding new users. Employees can see just that tasks which are assigned to them. Admin/Manager can see all tasks and add new employees.` },
				{ id: 5, name: `Responsiveness`, text: `I ensured that NotesManager is fully responsive and optimized for various devices, including desktops, tablets, and smartphones. The site adapts seamlessly to different screen sizes for a consistent user experience.` },
			],
		},
        gitHubPagesLink: 'https://notesmanager.onrender.com/',
        gitHubFrontendLink: 'https://github.com/simplyNastya/notes-manager-frontend',
        gitHubBackendLink: 'https://github.com/simplyNastya/notesManager-backend',
	},
	{
        id: '5',
		title: 'NewsHub',
		img: [siteNews1, siteNews2, siteNews3, siteNews4],
		about: {
			greeting: `Welcome to NewsHub - Your Ultimate Source for Latest News!`,
			subtitle: `NewsHub is a dynamic and user-friendly news site designed to keep you informed about all the latest and most popular news from around the world. With a comprehensive range of features, you can easily browse news articles by category, keyword, or date. Additionally, you can keep track of your reading history, access your favorite articles, and toggle between light and dark themes for a personalized experience.`,
			features: [
				{ id: 1, name: `Latest Popular News`, text: `Stay up-to-date with the hottest and most trending news stories from various sources. Our platform presents a curated selection of the latest news articles that are making headlines globally.`, },
				{ id: 2, name: `Customized News Search`, text: `Whether you are interested in specific topics or events, NewsHub allows you to search for news articles by category, keyword, or date. This feature ensures you get access to relevant and personalized news content.`, },
				{ id: 3, name: `Read History`, text: `Never lose track of the articles you've already read. NewsHub automatically adds articles you've read to a separate page, making it easy to revisit or share them later.`, },
				{ id: 4, name: `Favorite News Articles`, text: `Found an article you love? Add it to your favorites list with just a click. Your favorite articles are neatly organized in a separate section for quick access and future reference.`, },
				{ id: 5, name: `Light and Dark Themes`, text: `Customize your reading experience by toggling between light and dark themes. Whether you prefer a bright interface or a more eye-friendly dark mode, NewsHub has got you covered.`, },
			]
		},
		skills: 'JS, AJAX, REST API, axios, HTML, SASS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the creator of NewsHub, I took on a multifaceted role, ensuring a smooth and feature-rich user experience.`,
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I crafted the user interface for the main page, favorite page, and read page, focusing on creating an intuitive and visually appealing design. The layout and presentation of news articles were designed to be user-friendly and accessible. modern and responsive user interface. The application is visually appealing and user-friendly across various devices.`},
				{ id: 2, name: `API Integration`, text: `I developed the logic for fetching news articles based on popularity, keywords, categories, or date. This involved integrating external API to retrieve up-to-date news data for our users.`},
				{ id: 3, name: `Favorite News Functionality`, text: `I implemented the logic for adding news articles to the user's favorites list. To enhance user convenience, I utilized localStorage to store and retrieve favorite articles, ensuring a seamless browsing experience.`},
				{ id: 4, name: `Read History Management`, text: `I designed and developed the mechanism for tracking and displaying articles that users have already read. The read history page organizes articles by date, making it easy for users to revisit previously read content.`},
				{ id: 5, name: `Theme Toggle`, text: `I provided users with the option to switch between light and dark themes, catering to different preferences and creating a comfortable reading environment.`},
				{ id: 6, name: `Pagination`, text: `To improve the user experience, I integrated pagination functionality for browsing through multiple news articles. This allows users to navigate efficiently through the available news content.`},
			],
		},
		gitHubPagesLink: 'https://simplynastya.github.io/news-practice/index.html',
        gitHubFrontendLink: 'https://github.com/simplyNastya/news-practice',
	},
	{
        id: '6',
		title: 'ContactsKeeper',
		img: [contactKeeper1, contactKeeper2, contactKeeper3, contactKeeper4],
		about: {
			greeting: `Welcome to ContactKeeper - Your Personal PhoneBook Manager!`,
			subtitle: `ContactKeeper is a user-friendly phonebook application designed to help you efficiently manage your contacts. With its intuitive interface and seamless authorization process, you can securely add, delete, and view your contacts in one centralized location.`,
			features: [
				{ id: 1, name: `Authorization and Security`, text: `To ensure the privacy and security of your contacts, ContactKeeper employs a robust authorization system. You will need to log in to your account to access and manage your contacts securely.`, },
				{ id: 2, name: `Add and Delete Contacts`, text: `Once logged in, you can easily add new contacts to your phonebook by providing essential details such as name, phone number and email. Likewise, you can effortlessly delete any contact you no longer wish to keep.`, },
				{ id: 3, name: `User-Friendly Interface`, text: `The user interface of ContactKeeper is designed with simplicity in mind. The clean and organized layout allows for quick navigation and seamless contact management.`, },
				{ id: 4, name: `Backend Integration`, text: `ContactKeeper leverages MongoDB as its backend database, ensuring efficient storage and retrieval of your contact information. The backend system allows for smooth interactions between the frontend and database, enabling real-time updates.`, },
			]
		},
        skills: 'JS, AJAX, REST API, axios, REACT, REDUX, MONGODB, EXPRESS, CSS',
		responsibilities: {
			title: `Role: Backend and Frontend Developer`, 
			subtitle: `As the sole developer of ContactKeeper, I undertook a variety of responsibilities to bring this project to life. My contributions encompassed both frontend and backend development, ensuring a well-rounded and functional application.`,
			backend: [
				{ id: 1, name: `Database Management`, text: `I set up and configured the MongoDB database to efficiently store contact information. This included defining the schema and handling CRUD operations for contacts.`},
				{ id: 2, name: `Models and Schemas`, text: `I designed and implemented the database models and schemas for the project. This involved defining the structure and relationships between entities Contacts, Users, and other relevant data.`},
				{ id: 3, name: `Routes and Controllers`, text: `I setted up the API routes and developed the corresponding controllers to handle various requests and responses. This ensured smooth interactions between the frontend and backend components of the application.`},
				{ id: 4, name: `Middlewares`, text: `I developed essential middleware components to handle tasks like input validation, authentication, authorization and error handling.` },
				{ id: 5, name: `Functions and Logic`, text: `I implemented the backend logic responsible for handling contact data. This involved creating API endpoints to collect, retrieve, add, and delete contacts from the MongoDB database.` },
				{ id: 6, name: `Testing and Debugging`, text: `Throughout the development process, I performed thorough testing and debugging to identify and resolve any potential issues. This ensured the stability and reliability of ContactKeeper.`},
			],
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I crafted the user interface, focusing on creating an aesthetically pleasing and responsive design. The frontend design incorporates forms, contacts list, and buttons, providing a seamless user experience.`},
				{ id: 2, name: `Backend Integration`, text: `To enable data flow between the frontend and backend, I established connections using fetches. This allowed for smooth communication between the user interface and the backend server, ensuring that contact data is accurately managed.`},
				{ id: 3, name: `Public and Private Routes`, text: `I developed the authorization system, allowing users to securely log in and access their own phonebook. This system ensures that only authorized users can view and manage their contacts.`},
			],
		},
        gitHubPagesLink: 'https://simplynastya.github.io/phonebook-frontend/',
        gitHubFrontendLink: 'https://github.com/simplyNastya/phonebook-frontend',
		gitHubBackendLink: 'https://github.com/simplyNastya/phonebook-backend',
	},
	{
        id: '7',
		title: 'Filmoteka',
		img: [filmoteka1, filmoteka2, filmoteka3, filmoteka4, filmoteka5, filmoteka6],
		about: {
			greeting: `Welcome to Filmoteka - Your Ultimate Movie Database!`,
			subtitle: `Filmoteka is your go-to platform for discovering the most popular movies of today and exploring detailed information about each film. With a user-friendly interface and a wide array of features, Filmoteka allows you to search for movies by name, view movie details, including genre, description, and vote average, as well as find information about the cast, trailers, and reviews.`,
			features: [
				{ id: 1, name: `Most Popular Movies`, text: `Filmoteka provides a curated list of the most popular movies for today. Stay up-to-date with the latest and trending films that are capturing audiences' attention.`, },
				{ id: 2, name: `Movie Search`, text: `Easily find movies by entering their names into the search bar. Filmoteka quickly returns relevant results, making it simple to discover movies of your interest.`, },
				{ id: 3, name: `Detailed Movie Information`, text: `Tap on any movie to access detailed information, including its genre, description, and vote average. This allows you to get a comprehensive overview of the movie before watching it.`, },
				{ id: 4, name: `Cast Details`, text: `Filmoteka offers insights into the cast of each movie, allowing you to explore the talented actors and actresses behind the film's characters.`, },
				{ id: 5, name: `Trailers`, text: `Watch movie trailers directly on Filmoteka to get a sneak peek and decide if the movie suits your preferences.`, },
				{ id: 6, name: `Reviews`, text: `Find reviews and ratings from critics and viewers, helping you gauge the overall reception and quality of the movie.`, },
			]
		},
		skills: 'JS, AJAX, REST API, axios, REACT, swiper, CSS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the sole developer of Filmoteka, I undertook various responsibilities to create a fully functional and visually appealing movie database platform.`,
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I meticulously crafted the user interface, creating a visually appealing and intuitive design that ensures a seamless user experience. The site's layout, components, and overall aesthetics were developed with a focus on usability and user engagement.`},
				{ id: 2, name: `Fetching Movie Information`, text: `I implemented fetches to external APIs to retrieve movie data, including details about the most popular movies for today and information about specific movies based on user searches. The fetched data is efficiently displayed on the site for users to access and explore.`},
				{ id: 3, name: `Movie Details Page`, text: `I designed and developed the movie details page, which showcases comprehensive information about each movie. This page includes the movie's genre, description, vote average, cast details, trailers, and reviews.`},
				{ id: 4, name: `Routing and Navigation`, text: `I set up routing and navigation for Filmoteka to ensure smooth navigation between different sections and movie details pages. This enabled users to effortlessly browse and find the movies they are interested in.`},
				{ id: 5, name: `Responsiveness`, text: `I ensured that Filmoteka is fully responsive and optimized for various devices, including desktops, tablets, and smartphones. The site adapts seamlessly to different screen sizes for a consistent user experience.`},
				{ id: 6, name: `Testing and Debugging`, text: `Throughout the development process, I rigorously tested and debugged the application to identify and resolve any issues or inconsistencies, ensuring a stable and reliable platform.`},
			],
		},
		gitHubPagesLink: 'https://simplynastya.github.io/goit-react-hw-05-movies',
        gitHubFrontendLink: 'https://github.com/simplyNastya/goit-react-hw-05-movies',
	},
	{
        id: '8',
		title: 'OrginizeFlow',
		img: [orginizeFlow1, orginizeFlow2, orginizeFlow3],
		about: {
			greeting: `Welcome to OrginizeFlow – Your Ultimate To-Do List and Wishlist Manager!`,
			subtitle: `OrginizeFlow helps users to create and manage to-do lists and wishlists quickly `,
			features: [
				{ id: 1, name: `ToDo List`, text: `Users can create their own to-do list, the data inside will be saved in localStorage. Users can edit, delete tasks and marked them as completed.`, },
				{ id: 2, name: `WishList`, text: `Users can create their own to-do list, the data inside will be saved in localStorage. Users can edit, delete tasks and marked them as completed.`, }
			]
		},
		skills: 'REACT, ReactRouter, JS, CSS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `It was independent project just for training in the React.`,
			frontend: [
				{ id: 1, name: `HomePage`, text: `I created component which are on the root derictory. From this page users have access to two another pages. This was implemented using React Router.`},
				{ id: 2, name: `ToDo List`, text: `This components collect user tasks, saved them in localStorage, so if user will return to this page from the same device the previous tasks will be shown. Also there are abilities to edit and delete tasks or marked them as completed.`},
				{ id: 3, name: `WishList`, text: `This components collect user wishes, saved them in localStorage, so if user will return to this page from the same device the previous wishes will be shown. Also there are abilities to edit and delete tasks or marked them as completed.` }
			],
		},
        gitHubPagesLink: 'https://orginizeflow.onrender.com',
        gitHubFrontendLink: 'https://github.com/simplyNastya/orginizeFlow',
	},
	{
        id: '9',
		title: 'Images Finder (react)',
		img: [imageFinderReact1],
		about: {
			greeting: `Welcome to Images Finder - Discover Pictures with Ease!`,
			subtitle: `Images Finder is a user-friendly web application designed to help you find pictures based on your chosen keywords. With its simple and intuitive interface, you can easily search for images related to any topic that interests you. When you find an image that catches your eye, tapping on it will open a modal window, allowing you to view the picture in a larger size for a more detailed look.`,
			features: [
				{ id: 1, name: `Image Search by Keyword`, text: `Images Finder allows you to search for pictures using keywords. Simply enter your desired topic or theme, and the application will retrieve relevant images to match your query.`, },
				{ id: 2, name: `Intuitive User Interface`, text: `The user interface is designed to be straightforward and easy to navigate. Whether you're a first-time user or a frequent visitor, finding pictures with Images Finder is a breeze.`, },
				{ id: 3, name: `Modal Window for Bigger Pictures`, text: `When you come across a picture you want to explore in more detail, tapping on it will open a modal window displaying the image in a larger size. This feature provides a better view of the image without navigating away from the search results.`, },
				{ id: 4, name: `Responsive Design`, text: `Images Finder is fully responsive, ensuring that the application looks great and functions flawlessly on various devices, from desktops and laptops to tablets and smartphones.`, },
			]
		},
        skills: 'JS, AJAX, REST API, axios, REACT, prop-types, CSS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the sole developer of Images Finder, I took on several key responsibilities to create a functional and visually appealing image search application. Here are my main contributions:`,
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I meticulously crafted the user interface, focusing on creating an attractive and intuitive design. The layout and styling were designed to enhance user experience and encourage engagement with the application.`},
				{ id: 2, name: `Fetching Images by Keyword`, text: `I implemented fetches to external image APIs, allowing users to search for pictures based on their input keywords. The application efficiently retrieves and displays relevant images to match the user's search query.`},
				{ id: 3, name: `Modal Window Implementation`, text: `I developed the modal window functionality that allows users to view images in a larger size without leaving the search results page. This feature provides a convenient way to explore pictures in greater detail.`},
				{ id: 4, name: `Responsive Design`, text: `I ensured that Images Finder is fully responsive, making sure the application adapts seamlessly to different screen sizes and devices. This responsiveness ensures a consistent user experience across all platforms.`},
				{ id: 5, name: `Pagination`, text: `To improve the user experience, I integrated pagination (Load more button). This allows users to navigate efficiently through the available pictures.`},
			],
		},	
        gitHubPagesLink: 'https://simplynastya.github.io/goit-react-hw-04-images/',
        gitHubFrontendLink: 'https://github.com/simplyNastya/goit-react-hw-04-images',
	},
	{
        id: '10',
		title: 'Nice View',
		img: [niceView1, niceView2, niceView3, niceView4, niceView5, niceView6, niceView7, niceView8, niceView9],
		about: {
			greeting: `Welcome to "Nice View" Residential Complex - Your Dream Home Awaits!`,
			subtitle: `"Nice View" is a luxurious residential complex that offers modern and elegant apartments for sale. Nestled in a picturesque location, this exquisite property promises an unparalleled living experience with breathtaking views and top-notch amenities. Our website serves as a gateway for potential buyers to explore the available apartments, learn about the facilities, and easily get in touch with our team for any inquiries.`,
			features: [
				{ id: 1, name: `Explore Luxurious Apartments`, text: `Our website showcases a wide range of luxurious apartments available for sale within the "Nice View" residential complex. Visitors can explore detailed information, floor plans, and images of each apartment to find their perfect match.`, },
				{ id: 2, name: `Responsive and Stylish Design`, text: `With a responsive design, the website offers a seamless browsing experience on various devices, including desktops, tablets, and smartphones. The website boasts elegant and consistent styles that highlight the sophistication of the residential complex.`, },
				{ id: 3, name: `User-Friendly Navigation`, text: `The site navigation is intuitive and user-friendly, allowing visitors to effortlessly explore different sections of the website and access the information they seek without any hassle.`, },
				{ id: 4, name: `Contact Us Modal Window`, text: `For convenient communication, a contact us modal window opens when visitors submit the "Contact Us" form. This feature allows potential buyers to reach out to our team directly from any page of the website.`, },
				{ id: 5, name: `Smooth Anchor Scrolling`, text: `The website provides smooth anchor scrolling, making it easy for users to navigate through various sections by clicking on the menu items or internal links.`, },
				{ id: 6, name: `Scroll to Top Button`, text: `A scroll to top button appears when users scroll down the page, enabling them to quickly return to the top with a single click, enhancing user experience and usability.`,},
			]
		},
        skills: 'JS, HTML, SASS',
		responsibilities: {
			title: `Role: Scrum Master, Frontend Developer`, 
			subtitle: `As the scrum master and a vital member of Team One, I played a key role in shaping the "Nice View" residential complex website. My diverse responsibilities encompassed both project management and frontend development.`,
			frontend: [
				{ id: 1, name: `Scrum Master`, text: `As the scrum master, I facilitated effective communication and collaboration within the team. I ensured that Agile practices were followed, organized sprint planning and review meetings, and removed any obstacles that hindered the team's progress.`},
				{ id: 2, name: `Common Styles and Design`, text: `I was responsible for defining and implementing the common styles, including colors, fonts, container sizes, and resets of default styles of elements. The website's consistent and elegant design language was a result of this effort.`},
				{ id: 3, name: `Header and Burger Menu`, text: `I designed and styled the website's header and the responsive burger menu for mobile screens. The header was made to be visually appealing and to enhance user navigation.`},
				{ id: 4, name: `Site Navigation and Anchor Scrolling`, text: `I implemented the site navigation, ensuring a seamless browsing experience for users. I also integrated smooth anchor scrolling to enhance the website's user-friendliness.`},
				{ id: 5, name: `Contacts Section and Footer`, text: `I marked up and styled the contacts section, making it easy for potential buyers to find essential contact information. Additionally, I designed and styled the website's footer section for a cohesive look.`},
				{ id: 6, name: `Contact Us Modal Window`, text: `I developed the modal window that opens when users submit the "Contact Us" button, providing a convenient way for users to get in touch with our team.`},
				{ id: 7, name: `Scroll to Top Button`, text: `I incorporated the scroll to top button functionality, enhancing user experience and allowing users to easily return to the top of the page with one click.`},
			],
		},	
		gitHubPagesLink: 'https://ihor-samburenko.github.io/master-code/#',
        gitHubFrontendLink: 'https://github.com/Ihor-Samburenko/master-code',
	},
	{
        id: '11',
		title: 'Images Finder (js)',
		img: [imageFinderJs1, imageFinderJs2, imageFinderJs3, imageFinderJs4],
		about: {
			greeting: `Welcome to Images Finder - Discover Pictures with Ease!`,
			subtitle: `Images Finder is a user-friendly web application designed to help you find pictures based on your chosen keywords. With its simple and intuitive interface, you can easily search for images related to any topic that interests you. When you find an image that catches your eye, tapping on it will open a modal window, allowing you to view the picture in a larger size for a more detailed look.`,
			features: [
				{ id: 1, name: `Image Search by Keyword`, text: `Images Finder allows you to search for pictures using keywords. Simply enter your desired topic or theme, and the application will retrieve relevant images to match your query.`, },
				{ id: 2, name: `Intuitive User Interface`, text: `The user interface is designed to be straightforward and easy to navigate. Whether you're a first-time user or a frequent visitor, finding pictures with Images Finder is a breeze.`, },
				{ id: 3, name: `Modal Window for Bigger Pictures`, text: `When you come across a picture you want to explore in more detail, tapping on it will open a modal window displaying the image in a larger size. This feature provides a better view of the image without navigating away from the search results.`, },
				{ id: 4, name: `Responsive Design`, text: `Images Finder is fully responsive, ensuring that the application looks great and functions flawlessly on various devices, from desktops and laptops to tablets and smartphones.`, },
				{ id: 5, name: `Stunning Notifications with Notiflix`, text: `Thanks to the integration of Notiflix, the notifications in Images Finder look visually appealing and engaging. Users receive beautiful and well-designed notifications, enhancing their experience while using the application.`, },
				{ id: 6, name: `Responsive Design`, text: `Images Finder is fully responsive, ensuring that the application looks great and functions flawlessly on various devices, from desktops and laptops to tablets and smartphones.`,},
			]
		},
        skills: 'JS, AJAX, REST API, axios, notiflix, simplelightbox, HTML, SASS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the sole developer of Images Finder, I took on several key responsibilities to create a functional and visually appealing image search application.`,
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I meticulously crafted the user interface, focusing on creating an attractive and intuitive design. The layout and styling were designed to enhance user experience and encourage engagement with the application.`},
				{ id: 2, name: `Fetching Images by Keyword`, text: `I implemented fetches to external image APIs, allowing users to search for pictures based on their input keywords. The application efficiently retrieves and displays relevant images to match the user's search query.`},
				{ id: 3, name: `Modal Window Implementation`, text: `I developed the modal window functionality that allows users to view images in a larger size without leaving the search results page. This feature provides a convenient way to explore pictures in greater detail.`},
				{ id: 4, name: `Integration of Notiflix`, text: `I incorporated Notiflix to enhance the notification system of Images Finder. Users receive visually appealing notifications that provide them with relevant and timely updates while using the application.`},
				{ id: 5, name: `Responsive Design`, text: `I ensured that Images Finder is fully responsive, making sure the application adapts seamlessly to different screen sizes and devices. This responsiveness ensures a consistent user experience across all platforms.`},
				{ id: 6, name: `Pagination`, text: `To improve the user experience, I integrated pagination (Load more button). This allows users to navigate efficiently through the available pictures.`},
			],
		},	
		gitHubPagesLink: 'https://simplynastya.github.io/goit-js-hw-11/',
        gitHubFrontendLink: 'https://github.com/simplyNastya/goit-js-hw-11',
	},
	{
        id: '12',
		title: 'BarberShop',
		img: [barberShop1, barberShop2, barberShop3, barberShop4, barberShop5, barberShop6, barberShop7],
		about: {
			greeting: `Welcome to BarberShop - we specialize in creating looks that reflect your personality and individuality.`,
			subtitle: `BarberShop is more than just a haircut — it's an experience. Whether you're looking for a classic cut, a modern style, or a fresh shave, our talented barbers are here to bring your vision to life!`,
			features: [
				{ id: 1, name: `Landing page`, text: `BarberShop is a landing page where you can find the mailn information about company, services which it provides and prices, teams and contact information.`, },
				{ id: 2, name: `Responsive and Stylish Design`, text: `With a responsive design, the website offers a seamless browsing experience on various devices, including desktops, tablets, and smartphones. The website boasts modren and elegant styles that highlight the atmosphere of the barber studio.`, },
				{ id: 3, name: `User-Friendly Interface`, text: `The website boasts a user-friendly interface, making it easy for visitors to find relevant information and explore services of BarberShop with ease.`, },
				{ id: 4, name: `User-Friendly Navigation`, text: `The site navigation is intuitive and user-friendly, allowing visitors to effortlessly explore different sections of the website and access the information they seek without any hassle.`, },
				{ id: 5, name: `Smooth Anchor Scrolling`, text: `The website provides smooth anchor scrolling, making it easy for users to navigate through various sections by clicking on the menu items or internal links.`, },
				{ id: 6, name: `Online Register Form`, text: `To streamline the process of registration to the haircut, I have integrated a online registration form. When users tap on the "Send" button, a form will pop up, allowing them to reach out to us directly.`, },
			]
		},
        skills: 'JS, HTML, SASS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the sole creator of BarberShop, I took on various responsibilities to develop and present a captivating website for a barber studio.`,
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I meticulously marked up and styled the entire website, focusing on creating an eye-catching and professional design. The visual elements were crafted to align with the branding and identity of BarberShop, creating a consistent and visually appealing experience for visitors.`},
				{ id: 2, name: `Main Page Design`, text: `I designed the landing page, showcasing an enticing introduction to services of BarberShop, its atmosphere and spirit, and the core offerings. The layout and content were strategically placed to capture the attention of potential clients.`},
				{ id: 3, name: `Responsive Design`, text: `	I ensured that the website is fully responsive, adapting seamlessly to various screen sizes and devices. This ensures that visitors have a positive browsing experience, whether they access the website on a desktop, tablet, or smartphone.`},
				{ id: 4, name: `Online Register Form`, text: `Visitors have access to the link "Online Register" from the diffenet parts of page. This link will transfer our user to a Register Form, where user will leave contact information and the worker of BarberShop will contact him in future to meke appointment`},
			],
		},	 
		gitHubPagesLink: 'https://simplynastya.github.io/barber-shop-landing/',
        gitHubFrontendLink: 'https://github.com/simplyNastya/barber-shop-landing',
	},
	{
        id: '13',
		title: 'WebStudio',
		img: [webStudio1, webStudio2, webStudio3, webStudio4, webStudio5, webStudio6, webStudio7],
		about: {
			greeting: `Welcome to Web Studio - Crafting Digital Solutions with Creativity!`,
			subtitle: `Web Studio is a cutting-edge digital agency that offers expert mobile and desktop development services, alongside innovative designer solutions. With a team of skilled professionals and a dedication to delivering exceptional results, we take pride in transforming ideas into functional and aesthetically pleasing digital experiences.`,
			features: [
				{ id: 1, name: `Main Page`, text: `The main page of site represent the specialization of WebStudio, their basic qualities, thier team and clients.`, },
				{ id: 2, name: `Professional Portfolio`, text: `The portfolio page showcases our extensive collection of successful projects. Visitors can explore diverse range of Web Studio's work, gaining insights into the quality and creativity of their services.`, },
				{ id: 3, name: `User-Friendly Interface`, text: `The website boasts a user-friendly interface, making it easy for visitors to find relevant information and explore services of WebStudio with ease.`, },
				{ id: 4, name: `Contact Us Modal Window`, text: `To streamline the process of ordering services, we have integrated a contact us modal window. When users tap on the "Order Service" button, a form will pop up, allowing them to reach out to us directly.`, },
			]
		},
        skills: 'JS, HTML, SASS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the sole creator of Web Studio, I took on various responsibilities to develop and present a captivating website for digital agency.`,
			frontend: [
				{ id: 1, name: `Markup and Styling`, text: `I meticulously marked up and styled the entire website, focusing on creating an eye-catching and professional design. The visual elements were crafted to align with the branding and identity of Web Studio, creating a consistent and visually appealing experience for visitors.`},
				{ id: 2, name: `Main Page Design`, text: `I designed the main page, showcasing an enticing introduction to services of Web Studio and the core offerings. The layout and content were strategically placed to capture the attention of potential clients.`},
				{ id: 3, name: `Portfolio Page Design`, text: `I developed the portfolio page, curating and showcasing successful projects of Web Studio. The page was designed to provide visitors with a comprehensive overview of capabilities and expertise.`},
				{ id: 4, name: `Order Servise Modal Window`, text: `I implemented the order service modal window functionality. When users click on the "Order Service" button, the modal window appears, simplifying the process of contacting and requesting services of Web Studio`},
				{ id: 5, name: `Responsive Design`, text: `	I ensured that the website is fully responsive, adapting seamlessly to various screen sizes and devices. This ensures that visitors have a positive browsing experience, whether they access the website on a desktop, tablet, or smartphone.`},
			],
		},	 
		gitHubPagesLink: 'https://simplynastya.github.io/goit-markup-hw-08/index.html',
        gitHubFrontendLink: 'https://github.com/simplyNastya/goit-markup-hw-08',
	},
	{
        id: '14',
		title: 'CloudBudget',
		img: [cloudBudget1, cloudBudget2, cloudBudget3, cloudBudget4, cloudBudget5],
		about: {
			greeting: `Easy to Use Cloud Budget Management Software`,
			subtitle: `CloudBudget for accessing and managing your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance.`,
			features: [
				{ id: 1, name: `User-Friendly Interface`, text: `The website boasts an intuitive and user-friendly interface, making it easy for user to explore the services and understand the benefits of Cloudbudget.`, },
				{ id: 2, name: `Responsive Design`, text: `The website is designed to be fully responsive, ensuring a seamless browsing experience on various devices, including desktops, tablets, and smartphones.`, },
			]
		},
		skills: 'HTML, CSS, Responsive Design',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the sole creator of CloudBudget, my efforts were instrumental in bringing this powerful online platform to life. My responsibilities encompassed both the markup and styling of the website, ensuring a visually appealing and engaging user experience.`,
			frontend: [
				{ id: 1, name: `Markup in HTML`, text: `I'm skillfully marked up the website's content using HTML, laying the foundation for its structure and organization. This structured markup ensured that the website's elements were arranged logically for a user-friendly experience.`},
				{ id: 2, name: `Styling the Page`, text: `Created a visually captivating and professional appearance for Lasles VPN. By applying CSS styles, I transformed the content into an aesthetically pleasing and cohesive layout, the interface intuitive and easy to navigate.`},
			],
		},	
        gitHubPagesLink: 'https://simplynastya.github.io/practice-2/',
		gitHubFrontendLink: 'https://github.com/simplyNastya/practice-2',
	},
	{
        id: '15',
		title: 'Lasles VPN',
		img: [laslesVpn1, laslesVpn2, laslesVpn3, laslesVpn4, laslesVpn5],
		about: {
			greeting: `Lasles VPN - Empowering Your Online Security and Freedom!`,
			subtitle: `Lasles VPN is a cutting-edge web platform that brings you powerful online protection, breaking down geographical barriers, and delivering a supercharged VPN experience with no specific time limits. With Lasles VPN, you can confidently surf the internet knowing that your data is safe and your online activities are private.`,
			features: [
				{ id: 1, name: `User-Friendly Interface`, text: `The website boasts an intuitive and user-friendly interface, making it easy for user to explore the services and understand the benefits of Lasles VPN.`, },
				// { id: 2, name: `Responsive Design`, text: `The website is designed to be fully responsive, ensuring a seamless browsing experience on various devices, including desktops, tablets, and smartphones.`, },
			]
		},
		skills: 'HTML, CSS',
		responsibilities: {
			title: `Role: Frontend Developer`, 
			subtitle: `As the sole creator of Lasles VPN, my efforts were instrumental in bringing this powerful online platform to life. My responsibilities encompassed both the markup and styling of the website, ensuring a visually appealing and engaging user experience.`,
			frontend: [
				{ id: 1, name: `Markup in HTML`, text: `I'm skillfully marked up the website's content using HTML, laying the foundation for its structure and organization. This structured markup ensured that the website's elements were arranged logically for a user-friendly experience.`},
				{ id: 2, name: `Styling the Page`, text: `Created a visually captivating and professional appearance for Lasles VPN. By applying CSS styles, I transformed the content into an aesthetically pleasing and cohesive layout, the interface intuitive and easy to navigate.`},
			],
		},	
		gitHubPagesLink: 'https://simplynastya.github.io/practice/',
        gitHubFrontendLink: 'https://github.com/simplyNastya/practice',
	},
];

export default projects