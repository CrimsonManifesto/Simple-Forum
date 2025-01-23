import { DatePipe } from '@angular/common';

export function formatDate(
  dateString: string | Date,
  datePipe: DatePipe
): string {
  const now = new Date();
  const date = new Date(dateString);

  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 1) {
    return `Today at ${datePipe.transform(date, 'h:mm a')}`;
  } else if (diffInDays === 1) {
    return `Yesterday at ${datePipe.transform(date, 'h:mm a')}`;
  } else if (diffInDays < 7) {
    return datePipe.transform(date, 'EEEE, h:mm a')!;
  } else if (diffInDays < 365) {
    return datePipe.transform(date, 'MMM d, h:mm a')!;
  } else {
    return datePipe.transform(date, 'MMM d, y')!;
  }
}
