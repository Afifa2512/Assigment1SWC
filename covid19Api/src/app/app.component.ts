import { Component } from '@angular/core';
import {CoronaService} from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  countries:any
  country:any
  Confirmed:Number | undefined
  Deaths:Number | undefined
  Date:Date | undefined
  Active:Number | undefined
  Country:String | undefined
  TotalConfirmed:Number | undefined
  TotalDeaths:Number | undefined
  TotalRecovered:Number | undefined


  constructor(private corona:CoronaService){}

//method that automaticly call when the component loads
//inside we will calling the service method
  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
    console.log(data)
    this.countries = data
    })

    this.getworldtotal()
  }
  getCoronaData(){
    this.corona.getCoronaRealData(this.country).subscribe((data)=>{
      console.log(data)

      var index = data.length - 1
      this.Confirmed = data[index].Confirmed
      this.Deaths = data[index].Deaths
      this.Date = data[index].Date
      this.Active = data[index].Active
      this.Country = data[index].Country
    })
  }

  getCountry(country:any){
    this.country = country
  }

  getworldtotal(){
    this.corona.getTotal().subscribe((data)=>{
      console.log(data)

      this.TotalConfirmed = data.TotalConfirmed
      this.TotalDeaths = data.TotalDeaths
    })
  }
}
