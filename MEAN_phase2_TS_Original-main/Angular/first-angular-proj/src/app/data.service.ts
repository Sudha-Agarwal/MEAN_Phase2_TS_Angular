import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:8080";

  private json_url = " https://jsonplaceholder.typicode.com/users";
  headers:HttpHeaders;

  

  constructor(private http_client:HttpClient) {
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
   }

  checkLogin(user:any){
    alert("service called");
    //here we would make connection with the server using HttpClient
    return this.http_client.post(this.url + '/users/' + user.email, user)
  }

  createNewUser(user:any){
    let userToSend = {email:user.email, firstName:user.name.firstName,lastName:user.name.lastName,password:user.password};
    return this.http_client.post(this.url + '/createUser', userToSend);
  }

  getCourse(){
    return this.http_client.get(this.url + '/courses')
  }
  addCourse(course:any){
    return this.http_client.post(this.url + '/courses', course);
  }

  getCourseDetailsById(id:any){
    const params = new HttpParams().set("id", id);
    return this.http_client.get(this.url + '/Getcourses',{'headers':this.headers,'params':params})

  }

  getDataforFilterPipe():Observable<any[]>{
    return this.http_client.get<any[]>(this.json_url);
  }

  getProductDetails(SKU:string){
    return this.http_client.get("api/getProductDetails/" + SKU);
      

  }
}
