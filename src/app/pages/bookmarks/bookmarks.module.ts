import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ],
  declarations: [
    BookmarksPage,
  ],
})
export class BookmarksModule { }
