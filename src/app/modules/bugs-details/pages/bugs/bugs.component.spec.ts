import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugsComponent } from './bugs.component';
import { TestingModule } from 'src/app/testing/testing.module';

describe('BugsComponent', () => {
  let component: BugsComponent;
  let fixture: ComponentFixture<BugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [BugsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
