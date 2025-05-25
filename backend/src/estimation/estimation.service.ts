import { Injectable } from '@nestjs/common';

@Injectable()
export class EstimationService {
  calculateBudget(rate: number, hours: number): number {
    return rate * hours;
  }
}
