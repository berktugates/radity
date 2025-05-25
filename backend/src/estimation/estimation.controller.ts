import { Body, Controller, Post } from '@nestjs/common';
import { EstimationService } from './estimation.service';

@Controller('estimation')
export class EstimationController {
  constructor(private readonly estimationService: EstimationService) {}

  @Post()
  getEstimate(@Body() body: { rate: number; hours: number }) {
    const { rate, hours } = body;
    const budget = this.estimationService.calculateBudget(rate, hours);
    return { budget };
  }
}
