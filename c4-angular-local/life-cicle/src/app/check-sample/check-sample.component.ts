import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})

//  Check -> Content -> View

export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0

  adicionar() {
    this.quantidade ++
  }

  decrementar() {
    this.quantidade --
  }

  constructor() {}
  ngOnDestroy(): void {
    console.log('Good bye my friend!')
  }
  ngDoCheck(): void {
    console.log('Method ngDoCheck()');
  }
  ngAfterContentChecked(): void {
    console.log('Method ngAfterContentChecked()');
  }
  ngAfterContentInit(): void {
    console.log('Method ngAfterContentInit()');
  }
  ngAfterViewChecked(): void {
    console.log('Method ngAfterViewChecked()');
  }
  ngAfterViewInit(): void {
    console.log('Method ngAfterViewInit()');
  }

  ngOnInit(): void {}
}
