import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypokemonsComponent } from './buypokemons.component';

describe('BuypokemonsComponent', () => {
  let component: BuypokemonsComponent;
  let fixture: ComponentFixture<BuypokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuypokemonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuypokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
