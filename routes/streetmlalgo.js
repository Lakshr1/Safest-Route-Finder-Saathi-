
const express = require("express");
const router = express.Router();
const csv = require("csv-parser");
const fs = require("fs");


router.post('/',(req,res)=>{
	try{
		var output;
		const {routesWithStreetName} = req.body;
		var safetyScores = [];
		var street_data = [];
		function encode(x) {
			x = Number(x);
			if (x === 1) x = 4;
			else if (x == 2) x = 1;
			else if (x == 0) x = 3;
			else x = 2;
			return x;
		}
	
		fs.createReadStream("./streets.csv")
			.pipe(csv())
			.on("data", data => street_data.push(data))
			.on("end", () => {
				
	
				var keywords = [" rd", " marg", " flyover", " expressway", "road"];
	
			
				const routes = routesWithStreetName;
				var rc = 0,
					route,
					i,
					j;
				
				for (i in routes) {
					var roads = [];
					rc += 1;
					
					route = routes[i];
					
					var place;
					for (j in route) {
						place = route[j];
						
						place = place.toLowerCase();
						place = place.replace(" rd", " road");
						place = place.replace(".", " ");
						
						var places = place.split(",");
						
						var k, p, l;
						for (k in places) {
							p = places[k];
							var key;
							for (l in keywords) {
								key = keywords[l];
								if (p.search(key) != -1) {
									p = p.replace(key, "");
									
									if (
										roads.findIndex(function(ele) {
											return ele === p;
										}) == -1
									) {
										roads.push(p); 
									}
									break;
								}
							}
						}
					}
					
					console.log("roads : "+roads);
					var c = 0;
					var safety = 0;
					
					var streets = [];
					
					for (var i = 1; i < street_data.length; i++) {
						streets.push(street_data[i]["Sreet name"]);
					}
					
					var road, street;
					for (i in roads) {
						road = roads[i];
						
						for (j in streets) {
							street = streets[j];
							
							if (street.search(road) != -1) {
								var ele = streets.findIndex(function(element) {
									return element === street;
								});
								
								safety += encode(street_data[ele]["safety"]);
								c += 1;
								break;
							}
						}
					}
					
					if (c != 0) {
						safety = safety / c;
					} else safety = 2.0;
					safetyScores.push(safety);
				}
				
				output = {
					"scores" : safetyScores
				}
				
				console.log(safetyScores);
				res.json(safetyScores);
			});
		}
			catch(err){
				console.log(err.message);
				res.status(500).send('SERVER ERROR');
			}
});
	module.exports = router;

	function displayRoads() {
		fetch('/roads')
		  .then(response => response.json())
		  .then(roads => {
			const container = document.getElementById('road-container');
			roads.forEach(road => {
			  const roadElement = document.createElement('div');
			  roadElement.className = 'card-text';
			  roadElement.textContent = road;
			  container.appendChild(roadElement);
			});
		  });
	  }

	  
