import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@NgModule({
  imports: [
    CommonModule,
    RouterTestingModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserDynamicTestingModule,
    NoopAnimationsModule
  ],
  providers: [],
  exports: [
    RouterTestingModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserDynamicTestingModule,
    NoopAnimationsModule
  ]
})
export class TestingModule {}
