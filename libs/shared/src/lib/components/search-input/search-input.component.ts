import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'armo-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements AfterViewInit, OnDestroy {

  @Input() placeholder!: string;
  @Output() search = new EventEmitter<string>();

  searchControl = new FormControl('', {
    updateOn: 'change',
  });

  private unsubscribe = new Subject<void>();

  ngAfterViewInit() {
    this.searchControl.valueChanges.pipe(
      takeUntil(this.unsubscribe),
      debounceTime(500),
      map(value => value.trim()),
      distinctUntilChanged()
    ).subscribe((searchKey: string) => {
      this.search.emit(searchKey);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
