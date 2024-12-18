import { type JSX, Show, mergeProps, splitProps } from 'solid-js';
import { Button } from '~/components/ui';
import { cn } from '~/lib/utils';
import type { TestimonialCard as TestimonialCardType } from '~/shared/types/portfolio/testimonial.types';

type Props = NonNullable<TestimonialCardType> & Pick<JSX.BlockquoteHTMLAttributes<HTMLElement>, 'class'>;

function TestimonialCard(rawProps: Props) {
  const props = mergeProps(rawProps, {
    class: '',
  });
  const [testimonialProps, styleProps] = splitProps(props, ['client', 'content', 'url'], ['class']);

  return (
    <blockquote class={cn(['mt-8 rounded-lg bg-zinc-900 px-6 py-4 text-white', styleProps.class])}>
      <svg class={'fill-white'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
      </svg>

      <p class={'text-xl italic leading-normal'}>{testimonialProps.content}</p>

      <footer class="mt-6 flex flex-col items-end text-right">
        <strong class="mb-2 font-semibold font-serif text-lg">{testimonialProps.client}</strong>

        <section class="flex flex-col items-end gap-2 text-right">
          <Show when={testimonialProps.url} keyed={true}>
            {(googleUrl) => (
              <Button
                variant="link"
                as="a"
                href={googleUrl}
                target="_blank"
                rel="noreferrer nofollow"
                class="h-fit w-fit p-0 text-zinc-100"
              >
                Ver feedback no Google
              </Button>
            )}
          </Show>
        </section>
      </footer>
    </blockquote>
  );
}

export { TestimonialCard };
