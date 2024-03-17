import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}

const buttonVariants = cva('py-2 px-4 rounded-3xl font-semibold', {
  variants: {
    variant: {
      primary: 'bg-company text-white hover:opacity-50',
      secondary:
        'bg-company text-white border-2 border-transparent hover:border-purple-600 hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
