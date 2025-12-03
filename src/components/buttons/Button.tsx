'use client';
import { removeKeys } from '@/lib/utils/helper';

import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

interface DefaultProps {
  children: React.ReactNode | string;
  className?: string;
  size?: 'lg' | 'sm';
  center?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: React.MouseEvent) => void;
}

type Props =
  | ({
      type?: 'button';
    } & ButtonProps)
  | ({
      type: 'link';
    } & LinkProps);

// For separating animation props from button props
const buttonProps: Array<keyof Props | keyof LinkProps> = [
  'center',
  'children',
  'className',
  'size',
  'type',
  'href',
];

const Button = (props: Props & MotionProps) => {
  const {
    className,
    children,
    type = 'button',
    size = 'sm',
    center = false,
  } = props;

  const classes = `${
    size === 'sm'
      ? 'p-3 px-5 text-sm'
      : 'text-base p-4 px-8'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded-xl glass-strong border-2 border-accent text-accent hover:bg-accent hover:text-white focus:outline-none focus:bg-accent focus:text-white duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all font-semibold ${className}`;

  // TODO: Needs to improve this framer motion logic
  if (props.type === 'link') {
    const { sameTab, ...motionProps } = props;
    removeKeys<Props & LinkProps>(motionProps, buttonProps);

    return (
      <motion.span {...motionProps}>
        <Link
          className={classes}
          href={props.href}
          target={sameTab ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={props.onClick}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
