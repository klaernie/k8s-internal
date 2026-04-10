var config = {
	address: "0.0.0.0",
	port: 80,
	ipWhitelist: [],

	language: "en",
	locale: "en-US",
	timeFormat: 24,
	units: "metric",
	timezone: "Europe/Berlin",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging

	modules: [
		{
			module: "alert",
		},
		{
			module: "MMM-chromecast",
			position: "top_right",
			disabled: true,
		},
		{
			module: "clock",
			position: "top_left",
			config:{
				showWeek: true,
				clockBold: true,
			}
		},
		{
			module: 'MMM-MotionEye',
			position: 'top_left',
			config: {
				url: "http://hive.ak-online.be:8081/0/stream",
				width: "700px",
				autoHide: true,
				id: 1,
				debug: true
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				apiKey: "${OWM_APIKEY}",
				type: "current",
				lat: 51.047719400780146,
				lon: 13.734994989024981,
			}
		},
		{
			module: 'MMM-GrafanaChart',
			position: 'top_right',
			config: {
				url: "http://grafana.grafana.k8s.ak-online.be/d-solo/LunydlBWz/magic-mirror-graphs?orgId=1&refresh=5s&panelId=2&hideLogo=true",
				protocol: "http",
				host: "grafana.grafana.k8s.ak-online.be",
				port: 443,
				dashboardname: "magic-mirror-graphs",
				orgId: 1,
				panelId: 2,
				width: "100%",
				height: "250px",
				refreshInterval: 900,
			}
		},
		{
			module: 'MMM-GrafanaChart',
			position: 'top_right',
			config: {
				url: "http://grafana.grafana.k8s.ak-online.be/d-solo/LunydlBWz/magic-mirror-graphs?orgId=1&refresh=5s&panelId=4&hideLogo=true",
				protocol: "http",
				host: "grafana.grafana.k8s.ak-online.be",
				port: 443,
				dashboardname: "magic-mirror-graphs",
				orgId: 1,
				panelId: 4,
				width: "100%",
				height: "250px",
				refreshInterval: 900,
			}
		},
		{
			module: 'MMM-GrafanaChart',
			position: 'top_right',
			config: {
				url: "http://grafana.grafana.k8s.ak-online.be/d-solo/LunydlBWz/magic-mirror-graphs?orgId=1&refresh=5s&panelId=5&hideLogo=true",
				protocol: "http",
				host: "grafana.grafana.k8s.ak-online.be",
				port: 443,
				dashboardname: "magic-mirror-graphs",
				orgId: 1,
				panelId: 5,
				width: "100%",
				height: "250px",
				refreshInterval: 900,
			}
		},
		{
			module: 'MMM-CalendarExt2',
			config: {
				rotateInterval: 60*1000,
				deduplicateEventsOn: [
					"startDate", "endDate", "title",
				],
				scenes:[
					{
						name: "DEFAULT",
						views: ["current","upcoming","Overview Private"],
					},
				],
				views:[
					{
						name: "current",
						mode: "current",
						position: "top_left",
						maxDays: 1,
						locale: "en",
						hideOverflow: false,
						filterPassedEvent: true,
					},
					{
						name: "upcoming",
						mode: "upcoming",
						position: "top_left",
						maxDays: 2,
						locale: "en",
						hideOverflow: false,
						filterPassedEvent: true,
						useEventTimeRelative: false,
					},
					{
						name: "Overview Private",
						title: "Private Calendars",
						mode: "daily",
						type: "row",
						position: "bottom_bar",
						slotCount: 7,
						locale: "en",
						hideOverflow: false,
						filterPassedEvent: true,
						calendars: [
							"Andre",
							"Anja",
							"Tobi Shared",
							"Tobi",
							"Tanzkalender",
							"Family",
							"Andre|Anja",
							"Andre|Tanzkalender",
							"Andre|Anja|Tobi Shared",
							"Andre|Anja|Tobi Shared|Tobi",
							"Andre|Anja|Tobi",
							"Andre|Tobi Shared",
							"Andre|Tobi Shared|Tobi",
							"Andre|Tobi",
							"Anja|Tobi Shared",
							"Anja|Tobi Shared|Tobi",
							"Anja|Tobi",
							"Anja|Tanzkalender",
							"Tobi|Tobi Shared",
						],
					},
				],
				calendars: [
					{
						name: "Anja",
						url: "http://calserv/AnjaPrivate.ics",
					},
					{
						name: "Andre",
						url: "http://calserv/AndrePrivate.ics",
					},
					{
						name: "Family",
						url: "http://calserv/Family.ics",
					},
					{
						name: "Tobi",
						url: "http://calserv/TobiPrivate.ics",
						filter: (event) => {
							if (event.title == "Schule") {
								return false
							}
							return true
						},
					},
					{
						name: "Tobi Shared",
						url: "http://calserv/TobiShared.ics",
					},
					{
						name: "Tobi Lernsax",
						url: "http://calserv/Lernsax.ics",
						filter: (event) => {
							if (event.title.startsWith("11:")) {
								return false
							}
							if (event.title.startsWith("10:")) {
								return false
							}
							if (event.title.startsWith("9S")) {
								return false
							}
							if (event.title.startsWith("9:")) {
								return false
							}
							if (event.title.startsWith("8S")) {
								return false
							}
							if (event.title.startsWith("8:")) {
								return false
							}
							if (event.title.startsWith("7S")) {
								return false
							}
							if (event.title.startsWith("7:")) {
								return false
							}
							if (event.title.startsWith("6S")) {
								return false
							}
							if (event.title.startsWith("6:")) {
								return false
							}
							if (event.title.startsWith("5S")) {
								return false
							}
							if (event.title.startsWith("5:")) {
								return false
							}
							return true
						},
					},
					{
						name: "Tanzkalender",
						url: "http://calserv/Tanzkalender.ics",
					},
				],
			},
		},
		{
			module: 'MMM-ImmichSlideShow',
			position: 'top_center',
			config: {
				immichConfigs: [
					{
						apiKey: '${IMMICH_APIKEY}',
						url: 'https://immich.ak-online.be',
						timeout: 1000*10,
						mode: 'album',
						albumId: '75aa9e30-54dc-474c-88d6-71d338681ca3',
						slideshowSpeed: 1000*30,
					}
				],
				cyclicConfigs: true,
				transitionImages: true,
				transitions: ["opacity"],
				width: "1800px",
				height: "1000px",
				backgroundSize: "contain",
			}
		},
		{
			module: 'MMM-Cursor',
			config: {
				timeout: 2500
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
