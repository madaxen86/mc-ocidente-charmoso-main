import type { ValidComponent } from 'solid-js';
import { splitProps } from 'solid-js';

import * as CheckboxPrimitive from '@kobalte/core/checkbox';
import type { PolymorphicProps } from '@kobalte/core/polymorphic';

import { cn } from '~/lib/utils';

type CheckboxRootProps<T extends ValidComponent = 'div'> =
  CheckboxPrimitive.CheckboxRootProps<T> & { class?: string | undefined };

const Checkbox = <T extends ValidComponent = 'div'>(
  props: PolymorphicProps<T, CheckboxRootProps<T>>,
) => {
  const [local, others] = splitProps(props as CheckboxRootProps, ['class']);
  return (
    <CheckboxPrimitive.Root
      class={cn('items-top group flex space-x-2', local.class)}
      {...others}
    >
      <CheckboxPrimitive.Input class="peer" />
      <CheckboxPrimitive.Control class="size-4 shrink-0 rounded-sm border border-primary ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 data-[checked]:border-none data-[checked]:bg-primary data-[checked]:text-primary-foreground">
        <CheckboxPrimitive.Indicator>
          <i class={'ph ph-check text-base leading-none'} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
