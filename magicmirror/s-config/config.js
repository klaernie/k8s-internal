var config = {
	address: "0.0.0.0",
	port: 80,
	ipWhitelist: [],

	language: "en",
	timeFormat: 24,
	units: "metric",
	timezone: "Europe/Berlin",

	modules: [
		{
			module: "alert",
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
			module: "weather",
			position: "top_left",
			config: {
				weatherProvider: "openweathermap",
				apiKey: "${OWM_APIKEY}",
				type: "current",
				lat: 51.047719400780146,
				lon: 13.734994989024981,
				updateInterval: 30 * 60 * 1000,
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
						views: ["current","upcoming"],
					},
				],
				views:[
					{
						name: "current",
						mode: "current",
						position: "top_right",
						maxDays: 1,
						locale: "en",
						hideOverflow: false,
						filterPassedEvent: true,
					},
					{
						name: "upcoming",
						mode: "upcoming",
						position: "top_right",
						maxDays: 3,
						locale: "en",
						hideOverflow: false,
						filterPassedEvent: true,
						useEventTimeRelative: false,
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
			module: 'MMM-Cursor',
			config: {
				timeout: 2500
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

