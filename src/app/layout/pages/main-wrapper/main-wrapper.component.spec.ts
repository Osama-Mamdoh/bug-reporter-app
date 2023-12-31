import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainWrapperComponent } from './main-wrapper.component';
import { TestingModule } from 'src/app/testing/testing.module';

describe('MainWrapperComponent', () => {
  let component: MainWrapperComponent;
  let fixture: ComponentFixture<MainWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainWrapperComponent, TestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
