import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  public logError(message: string, stack?: string) {
    /**
     * Send errors to server here
     */
    console.error('Logging Error: ' + message + ' Error stack: ' + stack);
  }

  public logWarning(message: string, stack?: string) {
    console.warn('Logging Warning: ' + message + ' Error stack: ' + stack);
  }

  public logInfo(message: string, stack?: string) {
    console.info('Logging Info: ' + message + ' Error stack: ' + stack);
  }

  public logVerbose(message: string, stack?: string) {
    console.debug('Logging Verbose: ' + message + ' Error stack: ' + stack);
  }
}
