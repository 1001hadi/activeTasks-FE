# Active Tasks

[Project backEnd Repo:](https://github.com/1001hadi/activeTasks-BE)

#

## Build Process =>

1 - Start project and install the necessary packages

- install react-router and needed libraries
- instal tailwind css
- install all needed package and library
  - axios react-router-dom react-icon react-hot-tost moment recharts
- setup folder structures and files
- setup needed routes

2 - start building Components

- building Auth components

  - build login form
  - create layout component
    - hold the login and register page layout
  - create input component
  - handle email validation(regex)
  - handle password & password toggle
  - link login to register page for not registered user

- build register form

  - handle background layout
  - handle register form
    - add input for fullName, email, password and admin invite code
    - handle Profile Image
      - can be in separate component
      - create uploadImg helper
      - handle api call

- build API paths and handle fetch request

  - create API paths for all needed paths
  - handle fetch(with axios)
  - handle storing token in local storage
  - handle errors and redirecting to login page

- create userContext hook for state management

  - create userProvider and fetch user with useEffect
  - import api paths and fetches
  - store token in local storage
  - update the user and keep token
  - clear local storage if logout
  - handle error and test the login

- create Dashboard interface

  - create userAuth hook

    - check if it user display dash, else redirect to login

  - use the hook in admin and user dashboard
    - check users data with json.stringify(if there is data to display!)
  - create Dashboard layout component

    - create navbar component

      - display sidebar menu

    - create sidebar menu
      - display info depending on role (admin or user)
      - display changed or added info depending on role
      - redirect to login page if logout
    - create data file fro side menu to render info
      - create object of data for admin, user, status and priority level
    - import them to sidebar and map the data to display it depending on role(admin or user)

- display dashboard data (tasks, task status, task-priority level)

  - display admin/user name and date when login
  - create info component to display tasks status percentage
    - create separator function to display task numbers
  - display tasks status percentage of (pending, progress, complete)
    - create show status component
    - using rechart library display status chart
    - display the status count
  - display task priority percentage of (low, medium, high)
    - create priority level component
      -using rechart library display priority chart
  - display recent tasks table
    - create taskTable component
    - thead to display(name, status, priority and create date)
    - tbody to display data

- Create task page

  - create function to start create, edit, remove and get task
  - import the data and axiosInstance files
  -
  - create task
    - store current tasks in state
    - create task function
    - add task title
    - add task details
    - assign task to user / can be modal with check box
    - add priority level / can be dropdown menu
    - must have due date
    - add task checklist/ can be multiple
    - add task attachments / link
    - update task / admin only
    - remove task admin only
    - task title, desc, assigned to, due date
    - must have submit BTN
    - handle error

- Create manage task page
  - Display all task
  - display each task with Card
  - only admin can see all tasks
  - only admin can manage edit/remove task
  - edit can be the same as create page
  - task card
    - display task with name, description, due date, status and assigned o(users)
  - task filter between status or priority
