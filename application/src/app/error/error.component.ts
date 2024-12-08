import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {

  error: string | null = null;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.error$.subscribe((error: any) => {
      this.error = error.error.message;
    })
  }

}
