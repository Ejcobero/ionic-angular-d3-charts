import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomFeaturePage } from './custom-feature.page';

describe('CustomFeaturePage', () => {
  let component: CustomFeaturePage;
  let fixture: ComponentFixture<CustomFeaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFeaturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFeaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
