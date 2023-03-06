# Spotify Albums 🎵
Search for your favorite artists and find the best albums!

## Getting started
### Local Repository Setup
1. Clone the Spotify Albums Repo

    SSH:
    ```bash
    git clone git@github.com:gaskons/spotify-albums.git
    ```
    HTTPS:
    ```bash
    git clone https://github.com/gaskons/spotify-albums.git
    ```
    
2. Go to your spotify-albums directory
    
    ```bash
    cd spotify-albums
    ```
    
3. Install dependencies
    
    ```bash
    npm install
    ```
    
4. Go to the .env file and set your database (MySQL) & spotify credentials to localhost
      
      ```bash
      DB_DATABASE=spotify_albums
      DB_HOST=localhost
      DB_USER=root
      DB_PASS=root

      SPOTIFY_CLIENTID=
      SPOTIFY_SECRET=
      ```
      
      > If you have another user or password to connect to <code>mysql</code>, replace <code>root</code> with your user and password.
      
      > If you don't know how to get the credentials, feel free to contact me!
      
5. Open the schema.sql file and run the script in your MySQL Workbench or your preferred workspace
    
     ![schema.sql](https://i.imgur.com/z1Vxmwi.png)
     
6. Once all the steps are done, we are ready to start the server up! 🥳
   
### Start the server 🚀

1. We need to be in the spotify-albums directory 

2. Run the command in the terminal
  
  ```bash
  npm run dev:api
  ```
  
3. Open a new terminal and run the following command:
  
  ```bash
  npm run dev:app
  ```
  
4. By default, the application will start at the path 

  ```bash
  http://localhost:5173/
  ```
5. Hope you enjoy it! 🤩

## ```api``` 📕

### Libraries used

- cors
- dotenv
- express
- mysql2
- sequelize
- request-ip

### Built with

- Node.js
- Express
- Typescript
- Sequelize

## ```app``` 📕

### Libraries used

- react
- react-dom
- react-loader-spinner

### Built with
- Vite
- React

## Author ✒️

- **Gastón Konstantinides** - _Development, test and documentation_ - [gaskons](https://github.com/gaskons)

## Expressions of Gratitude 🎁

- Thanks to [Houlak.](https://houlak.com/) for giving me the opportunity

---
