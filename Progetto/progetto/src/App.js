import React from 'react';
import weather from 'yahoo-weather'; 



class App extends React.Component{
    /* 
    {
  "units": {
    "distance": "km",
    "pressure": "mb",
    "speed": "km/h",
    "temperature": "C"
  },
  "title": "Yahoo! Weather - Reggio Emilia, ER, IT",
  "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-721568/",
  "description": "Yahoo! Weather for Reggio Emilia, ER, IT",
  "language": "en-us",
  "lastBuildDate": "Wed, 17 Oct 2018 11:31 AM CEST",
  "ttl": "60",
  "location": {
    "city": "Reggio Emilia",
    "country": "Italy",
    "region": " ER"
  },
  "wind": {
    "chill": "63",
    "direction": "90",
    "speed": "6.44"
  },
  "atmosphere": {
    "humidity": "90",
    "pressure": "34168.68",
    "rising": "0",
    "visibility": "25.91"
  },
  "astronomy": {
    "sunrise": "7:36 am",
    "sunset": "6:29 pm"
  },
  "image": {
    "title": "Yahoo! Weather",
    "width": "142",
    "height": "18",
    "link": "http://weather.yahoo.com",
    "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
  },
  "item": {
    "title": "Conditions for Reggio Emilia, ER, IT at 10:00 AM CEST",
    "lat": "44.692661",
    "long": "10.62846",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-721568/",
    "pubDate": "Wed, 17 Oct 2018 10:00 AM CEST",
    "condition": {
      "code": "26",
      "date": "Wed, 17 Oct 2018 10:00 AM CEST",
      "temp": "16",
      "text": "Cloudy"
    },
    "forecast": [
      {
        "code": "12",
        "date": "17 Oct 2018",
        "day": "Wed",
        "high": "18",
        "low": "16",
        "text": "Rain"
      },
      {
        "code": "28",
        "date": "18 Oct 2018",
        "day": "Thu",
        "high": "22",
        "low": "14",
        "text": "Mostly Cloudy"
      },
      {
        "code": "30",
        "date": "19 Oct 2018",
        "day": "Fri",
        "high": "23",
        "low": "12",
        "text": "Partly Cloudy"
      },
      {
        "code": "30",
        "date": "20 Oct 2018",
        "day": "Sat",
        "high": "22",
        "low": "11",
        "text": "Partly Cloudy"
      },
      {
        "code": "30",
        "date": "21 Oct 2018",
        "day": "Sun",
        "high": "20",
        "low": "11",
        "text": "Partly Cloudy"
      },
      {
        "code": "34",
        "date": "22 Oct 2018",
        "day": "Mon",
        "high": "18",
        "low": "10",
        "text": "Mostly Sunny"
      },
      {
        "code": "30",
        "date": "23 Oct 2018",
        "day": "Tue",
        "high": "18",
        "low": "8",
        "text": "Partly Cloudy"
      },
      {
        "code": "30",
        "date": "24 Oct 2018",
        "day": "Wed",
        "high": "19",
        "low": "7",
        "text": "Partly Cloudy"
      },
      {
        "code": "34",
        "date": "25 Oct 2018",
        "day": "Thu",
        "high": "20",
        "low": "12",
        "text": "Mostly Sunny"
      },
      {
        "code": "30",
        "date": "26 Oct 2018",
        "day": "Fri",
        "high": "16",
        "low": "6",
        "text": "Partly Cloudy"
      }
    ],
    "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/26.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Wed - Rain. High: 18Low: 16\n<BR /> Thu - Mostly Cloudy. High: 22Low: 14\n<BR /> Fri - Partly Cloudy. High: 23Low: 12\n<BR /> Sat - Partly Cloudy. High: 22Low: 11\n<BR /> Sun - Partly Cloudy. High: 20Low: 11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-721568/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
    "guid": {
      "isPermaLink": "false"
    }
  }
}
    */


    state = {
      lastUpdate: 0,
      sunset: 0, 
      sunrise: 0, 
      forecast: [0,0,0,0,0,0,0,0,0,0,0],
      temp: 0,
      text: 0,
      humidity: 0,
      pressure: 0,
      rising: 0,
      visibility: 0,
      url: "",
      city:"Reggio Emilia",
      condition:""
  
    }
    
    //city = prompt("Scegli citta");
    
    aggiorna = (city,unit,callback) =>{ weather(city, unit).then(info=> { 
    
      this.setState(
        { 
          sunset: info.astronomy.sunset,
          sunrise: info.astronomy.sunrise,
          lastUpdate: info.lastBuildDate,
          forecast : info.item.forecast,
          temp :info.item.condition.temp,
          text: info.item.condition.text ,
          humidity: info.atmosphere.humidity,
          pressure: info.atmosphere.pressure,
          rising: info.atmosphere.rising,
          visibility: info.atmosphere.visibility,
          url: info.image.url,
          condition : info.item.description
        }
      )
    }).catch(err => {
      
    });
  }
  componentSelect = ()=>{
    return(
      <div>
        Cerca citta': <input type="text" id="city"></input>
        <button onClick= {()=>{
                this.setState({lastCity: this.state.city})
                this.setState({city: document.getElementById("city").value})
                }
        }>Aggiorna Città</button>
      </div>

    )
  }
  renderComponent = () =>{
    this.aggiorna(this.state.city,"C");
    
    
    return(
      <div>
        <h1>
          {this.state.city} <img alt=""  src={this.state.condition.split('"')[1]}></img>
          
        </h1>
        <h2>
          {this.state.temp}° <br/> {this.state.text} 
        </h2>
        <h3>
          Ultimo aggionamento : {this.state.lastUpdate}
        </h3>
        <hr/>
        <h1>Previsoni per domani: </h1>
        <h2> Massima {this.state.forecast[0].high}°C
          - Minima {this.state.forecast[0].low}°C <br/> 
           {this.state.forecast[0].text} </h2>
           <hr/>
        <h1>Previsoni per dopodomani: </h1>
        <h2> Massima {this.state.forecast[1].high}°C 
          - Minima {this.state.forecast[1].low}°C <br/> 
           {this.state.forecast[1].text} </h2>      
      </div>
    );
  } 
 
    render(city){
     
      
        return  ( 
          
          <div>
            {this.componentSelect()}
            {this.renderComponent()}
          </div>
        );      
    }

}

export default App;