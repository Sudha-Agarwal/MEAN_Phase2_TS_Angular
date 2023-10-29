import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent implements OnInit{

  constructor(private spinner:NgxSpinnerService){

  }
  ngOnInit(): void {
    this.spinner.show(); 
  }
  title = 'online-test';

}
