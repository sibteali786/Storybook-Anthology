import type { PropsWithChildren } from 'react';
import { variants, type CallOutVariants } from './callout-variants';

type CalloutProps = PropsWithChildren<CallOutVariants & { title: string }>;

export const Callout = ({ children, title, variant }: CalloutProps) => {
  return (
    <div className={variants({ variant })}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
