import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ZodError } from 'zod';

@Injectable()
export class ZodErrorInfoInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof ZodError) {
          const formattedError = {
            message: error.format(),
          };
          throw new BadRequestException({
            message: 'Zod Validation Error',
            error: formattedError,
          });
        }
        throw error;
      }),
    );
  }
}
