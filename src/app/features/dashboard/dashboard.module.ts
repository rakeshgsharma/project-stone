import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [CommonModule, SharedModule],
  exports: [ComingSoonComponent]
})
export class DashboardModule {}
