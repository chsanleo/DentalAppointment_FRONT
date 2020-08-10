# FrontEnd, DentalAppointment
![badge](https://img.shields.io/badge/working-active-brig)

FrontEnd proposed as an exercise to work with React connected to a previous develop BackEnd using an API. Also have a database where we storage the information about the correct behaviour of the application. In this application we need to complete the necessary methods to manage the users and manage the appointments.

The data is storage in a SQL database.

In this part of the project we investigate different webpages relatives to that theme and we arrived to our solution. 

## How to Start 🚀

+ To use all our solution the best is clone our back first: 
```
 $ git clone https://github.com/chsanleo/DentalAppointment_BACK
```

+ and install the packages,

```
$ composer install
```

+ run the migrations to create the database

```
$ php artisan migrate
```
 
+ take a look to the /config/ files, where u need to take the samples and create ur own config files

+ clone the front repository
```
$ git clone https://github.com/chsanleo/DentalAppointment_FRONT
```
+ run both, back and front in the source folder
```
$ npm start
```

+ and... WORK!.

## Project status

>Is not finish and we are working adding more features and improvements on it, also fixing some small details ;). 

### Current Features 📄

+ Register users by asking for a credentials, this you gonna receive in ur mail.
+ Login and Log Out.
+ Accces to the profile of a current user.
+ Choose a free appoinment and in the case you did not complete ur user information the the app will redirect you to complete your personal information.
+ Change the appointment.
+ Recovery in your mail directly a new password.
+ Use of Redux to the management of the data.

### Roadmap 📋

**About the front**

+ Finish the management of appointment, with a history.
+ Create a Administration panel to use with the administration role.


**About features**
+ Add some features to use by the doctors.
+ Ask for a specific date to the system.

## Test the application ⚙️

Turn on the server.
```
$ npm start
```

Use the browser of your choice and surf to http://localhost:3000/ to enter and with the developer tools u can start.

![devtools](https://www.formacionprofesional.info/wp-content/uploads/2015/09/herramientas_desarrollo_iexplorer11.png)

Because we are using redux is a good idea also install the [redux develop tools](https://github.com/reduxjs/redux-devtools)


## Contributors ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)

## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Ask us before use. Feedback is welcome!. 
If u need more documentation or have any doubts about the code don't hesitiate to contact us.

## How to say 'thanks' to us  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to us (or two, or... some ;) some snacks also recomendable ). 
* Comments about always welcome!.