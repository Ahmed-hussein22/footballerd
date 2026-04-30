import { Component, computed, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import {
  MonthlyFinancePoint,
  MonthlyIncomeExpenseChartComponent
} from './monthly-income-expense-chart.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    StatCardComponent,
    
    MonthlyIncomeExpenseChartComponent,
    NgFor
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPageComponent {
  protected readonly income = signal(152_300);
  protected readonly expenses = signal(97_450);

  protected readonly netProfit = computed(() => this.income() - this.expenses());

  protected readonly playersCount = signal(214);
  protected readonly coachesCount = signal(12);

  protected readonly monthly: MonthlyFinancePoint[] = [
    { month: 'Jan', income: 9000, expenses: 6000 },
    { month: 'Feb', income: 11000, expenses: 7200 },
    { month: 'Mar', income: 12500, expenses: 8300 },
    { month: 'Apr', income: 14000, expenses: 9800 },
    { month: 'May', income: 15500, expenses: 9900 },
    { month: 'Jun', income: 16000, expenses: 10100 },
    { month: 'Jul', income: 17000, expenses: 11000 },
    { month: 'Aug', income: 18000, expenses: 12000 },
    { month: 'Sep', income: 16500, expenses: 10800 },
    { month: 'Oct', income: 17500, expenses: 11700 },
    { month: 'Nov', income: 19000, expenses: 12800 },
    { month: 'Dec', income: 20500, expenses: 13900 }
  ];

  protected readonly recentTransactions = [
    {
      type: 'Income',
      category: 'Subscriptions',
      amount: 5200,
      date: '2026-04-27'
    },
    {
      type: 'Expense',
      category: 'Salaries',
      amount: 3400,
      date: '2026-04-25'
    },
    {
      type: 'Income',
      category: 'Sponsor',
      amount: 12000,
      date: '2026-04-22'
    },
    {
      type: 'Expense',
      category: 'Equipment',
      amount: 1850,
      date: '2026-04-18'
    }
  ] as const;

  protected asEgp(value: number): string {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP',
      maximumFractionDigits: 0
    }).format(value);
  }
}

