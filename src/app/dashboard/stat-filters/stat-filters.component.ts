import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnInit {
  statForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.statForm = formBuilder.group({
      author: ['Kyle Cordes', Validators.required],
      title: [''],
    });
  }

  ngOnInit(): void {}
}
