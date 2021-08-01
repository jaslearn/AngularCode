import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompComponent } from './my-comp.component';

fdescribe('MyCompComponent', () => {
  let component: MyCompComponent;
  let fixture: ComponentFixture<MyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should have a paragraph', () => {
    fixture = TestBed.createComponent(MyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
 expect(compiled.querySelector('p').textContent).toContain('my-comp works!');

  });
});
