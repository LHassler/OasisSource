import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnInit {
  statFilter: FormGroup;

  constructor(fb: FormBuilder) {
    this.statFilter = fb.group({
      author: ['', Validators.required],
      age: ['', Validators.max(2)],
    })
  }

  saveStatFilter(): void {
    console.log('Form submitted fool', this.statFilter.value);
  }

  ngOnInit(): void {}
}
