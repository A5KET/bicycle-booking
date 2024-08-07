# bicycle-booking
Admin panel for a company that provides bicycle booking services. The system provides an admin interface for managing the bike inventory, including adding new bikes, updating bike statuses, and viewing statistics.

## Tech Stack
- Frontend: React
- Backend: Express.js
- Database: MongoDB

## Simple to use
Simple interface and minimalistic design make easy user experience

- Add new bikes by filling out the form on the right side of the dashboard.
- Update the status of a bike by selecting from the dropdown next to each bike.
- View statistics such as total bikes, available bikes, booked bikes, and average bike cost.

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/2db7f84b-7da4-4c52-bd26-e7954a727e44">

## Installation
1. Clone the repository
```bash
$ git clone git@github.com:A5KET/bicycle-booking.git
$ cd bicycle-booking
```
2. Install backend dependencies
```bash
$ cd server
$ npm install
```
3. Install frontend dependencies
```bash
$ cd ../client
$ npm install
```
4. Configure environment variables
```bash
$ export MONGO_URI="mongodb://localhost:27017/bikes"
```
5. Start the backend server
```bash
$ cd ../server
$ npm start
```
6. Start the frontend server
```bash
$ cd ../client
$ npm start
```
