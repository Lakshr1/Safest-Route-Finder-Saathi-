# Mystique-SafestRoute

# Saathi- Your safe travel companion


* This project is about finding the safest route possible betwwen two points A and B.
* We will be using Web scrapping using beautiful soup, regex, google search docs for the scrapping data from across the webs to classify the crime Prone areas using sentiment analysis of news.
* Also identifying the fastest and safest possible route without significantly compromising either using KNN and improvement possibility vai reinforced learning using genetic algorithm for iterative optimization.
* With the given data we will perform Knn classification and sentimental analysis to find the best route.
* The route will be plotted by Mapbox API
 
 * Here are the Screenshots of the App 

* Feed Back Page
  ![Screenshot 2023-04-18 153206](https://user-images.githubusercontent.com/94538318/232747572-32320d3a-47a1-42cc-8002-1969b18c1b2c.png)

* Search Page
![image](https://user-images.githubusercontent.com/94538318/232747772-089c628a-1818-4a3d-97f9-4b0eb9f6aa36.png)

* Home Page
![image](https://user-images.githubusercontent.com/94538318/232747837-e3565901-07f0-41e2-857b-cfeff978cde7.png)

Steps to setup: -

<ol>
<li> move to the directory
  <em>(cd path_to_directory)</em> </li>
<li> make .env file in directory and write </br>
   MONGO_URI = <em>your_mongo_URI_to_connect_node_app</em> </br>
   REACT_APP_TOKEN = <em>your_MAPBOX_API_ACCESS_KEY</em>
<li> npm install
  <em>This will install all the node modules for server files</em></li>
<li> cd client
  <em>Moving to client folder</em></li>
<li> npm install
  <em>this will install all the node modules for client directory</em></li>
<li> cd ..</li>
<li>npm run dev 
  <em>This command will run both back-end and front-end simultaneously</em></li>
</ol>
