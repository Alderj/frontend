import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTarefaComponent } from './nova-tarefa.component';

describe('NovaTarefaComponent', () => {
  let component: NovaTarefaComponent;
  let fixture: ComponentFixture<NovaTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaTarefaComponent]
    });
    fixture = TestBed.createComponent(NovaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
