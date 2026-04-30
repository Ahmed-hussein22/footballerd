import { Component, Input } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

export type MonthlyFinancePoint = {
  month: string;
  income: number;
  expenses: number;
};

@Component({
  selector: 'app-monthly-income-expense-chart',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './monthly-income-expense-chart.component.html',
  styleUrl: './monthly-income-expense-chart.component.scss'
})
export class MonthlyIncomeExpenseChartComponent {
  @Input({ required: true }) data!: MonthlyFinancePoint[];

  protected maxValue(): number {
    const max = Math.max(
      ...this.data.map((d) => Math.max(d.income, d.expenses)),
      1
    );
    return max;
  }

  protected pct(value: number): string {
    return `${Math.round((value / this.maxValue()) * 100)}%`;
  }
}

