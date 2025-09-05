# Contact Management Application
## About the Project
This project is a contact management application where users can list contacts fetched from an API, view their details, add new contacts, and delete existing ones. The application uses the TanStack Query (formerly React Query) library for data management and effectively handles server-side state. Interface navigation is provided by React Router, while backend API requests are mocked using axios and Mock Service Worker (MSW).
## Key Features
* Data Management (TanStack Query): The application uses TanStack Query to manage server state. This simplifies data fetching (useQuery), updating, and deleting (useMutation) operations.
* API Interaction (Axios and MSW): Backend operations are performed with the axios library, while a mocked API is used instead of a real one via Mock Service Worker. This allows the application to be developed independently of a backend. The API functions are defined in the api.js file.
* Page Navigation (React Router): Navigation within the application is provided by React Router.
    * '/': The home page.
    * '/contacts/new': The new contact form.
    * '/contacts/:contactId': The page for viewing a contact's details.
* Contact Management:
    * SideBar.jsx: Lists all contacts fetched from the API and creates navigation links for each. Data fetching is done with the useFetchContacts hook.
    * Contact.jsx: Displays a contact's details. The delete button is also in this component. Contact data is fetched with the useFetchContactById hook. The deletion is handled using the useDeleteContact hook.
    * Form.jsx: Provides a form for adding a new contact. The form is managed with the react-hook-form library. The data addition is performed using the useCreateContact hook.
Project Structure
src/:
* App.jsx: The main component of the application; it includes QueryClientProvider for TanStack Query and the React Router routing logic.
* api.js: Contains the axios functions that manage backend requests.
* mocks/: Mock Service Worker setup files. handlers.js defines the fake API endpoints.
    * data.js: Contains the sample data set for the mock API.
* components/: Houses the React components that make up different parts of the application.
* services/tanStack.js: The TanStack Query hooks are centrally defined in this file.
## How to Run
To run this project on your local machine, you need to have Node.js and npm installed.
1. Install Required Packages:
```
Bash
npm install
```
2. Start the Application:
```
Bash
npm run dev
```
3. View in Browser: After running the command, your project will typically open automatically at http://localhost:5173/.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You'll learn how to use TanStack Query (formerly React Query) to manage server-side state in a React application. This includes fetching data from a REST API using useQuery for GET requests and performing mutations for creating, updating, and deleting data using useMutation. You'll also see how to handle loading states (isPending) and errors gracefully.
* You'll learn how to make asynchronous HTTP requests to a REST API using the axios library. The project demonstrates how to structure API calls for different CRUD (Create, Read, Update, Delete) operations, including fetching a list of items (fetchContacts), getting a single item (fetchContactById), creating a new item (createContact), and deleting an item (deleteContact).
* You'll learn how to implement client-side navigation using React Router. This includes defining routes with dynamic parameters, such as for a specific contact's details (/contacts/:contactId), and using navigation hooks like useHistory and components like Link and NavLink to manage the user's flow through the application.
* You'll learn how to build and manage forms efficiently using the react-hook-form library. The project demonstrates how to register form inputs, handle form submissions, and manage form validation and errors without excessive re-renders, providing a performance-optimized approach to form handling.
