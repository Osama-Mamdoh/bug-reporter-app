import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService, private zone: NgZone) {}

  public showSuccess(message: string, title?: string, config?: any): void {
    this.toastr.success(message, title, config);
  }

  public showError(message: string, title?: string, config?: any): void {
    this.toastr.error(message, title, config);
  }
}
