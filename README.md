# **The Greenfield Project Repository**

## **ToiletFinder.com**

<br>

Developers - Felipe Machado, Marie Matsumoto, Joe Sacco - CC27

ToiletFinder.com is a super convenient search tool powered by Google Maps for finding the closest bathroom to your location, immediately.

<br>

## *Why?*

We wanted a tool that allows us to:

Hit the go button to find the closest bathroom as soon as possible.
For people with more time, allow them to sort bathroom options based on a variety of use cases, such as public, private, kid friendly and accessibility.
Provide open/closed info for each location and probability that a bathroom is available for public use.

ToiletFinder.com is the only app that provides fast relief!

<br>

## **Installation**

        $ git clone git@github.com:felipemfm/cc27-greenfield.git
        $ cd cc27-greenfield
        $ npm install

1.  Create **.env** file in root and inside it add the following:

        DB_NAME=greenfield
        DB_USER=YourUserName
        DB_PASSWORD=YourPassword


2. Create a second **.env** file in the client folder and inside it add the following:

        REACT_APP_LOCAL_SERVER=http://localhost:8000
        REACT_APP_API_KEY=YourKeyHere

3. Setup [Google Maps Platform](https://developers.google.com/maps/get-started) Account (Gives you access to use Google Maps API)
    

<br>

## **Usage**

<br>

## For Local / Development Use
<br>

### Database Setup

1. Create a local Postgres database called 'greenfield'.
2. Run the following scripts:

        $npm run migrate-latest
        $npm run seed-data

<br>

### Server Setup

To start the Express local server: 

        $ npm run start

The Express server should run on Local Port 8000.
<br>
<br>
To start the React local server:

        $ npm run start-client

The React server should run on Local Port 3000.

<br>

### For Deployment/Production Use

<br>

To start the Express local server: 

        $npm run prod

The Express server should run on Local Port 8000 serving the static React build files.

Heroku will use this script on deployment.

<br>


## **Future Features**

1. Enable live location update as user walks toward location (paid)
2. Expand database to cover all of Tokyo
3. Unclutter the map - get rid of uneccesary native map info, icons, etc.
4. Work on CSS styling
5. Enable more API endpoints and location filtering modes (kid friendly, accessability, open hours)
6. Create review function for users to rate bathroom experience
7. Create native app for iOS/Android


<br>

## **Further Documentation**


[Google Maps API](https://developers.google.com/maps/documentation) 

[Google Maps React Library](https://react-google-maps-api-docs.netlify.app/) 
    
