import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {AccountService} from '@app/services';

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
  transactions = null;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(transactions => this.transactions = transactions);
  }

  withdraw(id: string) {
    const transaction = this.transactions.find(x => x.id === id);
    transaction.isWithdrawing = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => {
        this.transactions = this.transactions.filter(x => x.id !== id);
      });
  }
}
