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
