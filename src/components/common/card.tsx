import React from 'react';
import { cn } from '~/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn('rounded-md border bg-white shadow-md p-6', className)}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: CardProps) => (
  <div className={cn('text-lg font-semibold pb-4', className)} {...props} />
);

const CardBody = ({ className, ...props }: CardProps) => (
  <div className={cn('text-sm text-gray-700', className)} {...props} />
);

const CardFooter = ({ className, ...props }: CardProps) => (
  <div className={cn('text-sm text-gray-600 pt-4', className)} {...props} />
);

export { Card, CardHeader, CardBody, CardFooter };
