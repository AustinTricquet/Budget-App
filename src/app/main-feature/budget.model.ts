import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Budget {
    id?: string;
    title?: string;
    priority?: number;
    lineItems: LineItem[];
}

export interface LineItem {
    category: 'income' | 'expenses' | 'savings' | 'spending';
    title: string;
    amount: number;
    date: Date;
}