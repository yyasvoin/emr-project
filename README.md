# HealthCareRecordManager

FS1030 - Electronic Medical Record Project

## EMR Database Notes:

- 11 tables
- 12 views - views will be easier to query. We can write all the joins here so we do not need to code it in the middleware
- 20 Radiology images - play with showing images
- 100 patients
- 4 care providers

Contributors: Mohammed, Thomas, Yuri and Manpreet

- clone the repository

- Scripts to initialize a database can be found in /sqlscripts

- first create a .env file in the root directory of this project with these keys:

DB_HOST="localhost"  
DB_PASSWORD="password"
DB_USER="root"  
DB_DATABASE="TicketSystem"  
MARIADB=FALSE  
HTTP_PORT=4000  
SESSION_SECRET=secret

- execute the following commands to launch the server.
  1. npm i
  2. npm run build
  3. npm run start-app
