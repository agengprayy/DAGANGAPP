import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateDataPage } from './create-data.page';

describe('CreateDataPage', () => {
  let component: CreateDataPage;
  let fixture: ComponentFixture<CreateDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
