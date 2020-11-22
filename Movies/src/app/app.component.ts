import { Component ,  OnInit  } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movies';
  apiUrl ="https://k.adhikar.net/movies/";
  movies : any = []

  constructor(  private http : HttpClient ) {}

  ngOnInit(): void {
    this. onSearch()
  }

  onSearch(){
    this.http.get(this.apiUrl).subscribe((data : any) => {
      console.log(data);
      this.movies = data;
      console.log(this.movies)
    })
  }
}


