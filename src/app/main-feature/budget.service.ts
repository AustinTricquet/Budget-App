import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Budget, LineItem } from './budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}


  async createBudget(data: Budget) {
    const user = await this.afAuth.auth.currentUser;
    return this.db.collection('budgets').add({
      ...data,
      uid: user.uid,
      lineItems: []
    });
  }


  deleteBudget(budgetId: string) {
    return this.db
      .collection('budgets')
      .doc(budgetId)
      .delete();
  }


  updateLineItems(budgetId: string, lineItems: LineItem[]) {
    return this.db 
      .collection('budgets')
      .doc(budgetId)
      .update({ lineItems });
  }

  removeLineItem(budgetId: string, lineItem: LineItem) {
    return this.db  
      .collection('budgets')
      .doc(budgetId)
      .update({
        lineItems: firebase.firestore.FieldValue.arrayRemove(lineItem)
      });
  }

  getUserBudgets() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db  
            .collection<Budget>('budgets', ref =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  sortBudgets(budgets: Budget[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = budgets.map(b => db.collection('budgets').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit();
  }


}
