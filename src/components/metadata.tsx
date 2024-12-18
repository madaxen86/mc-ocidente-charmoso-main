import { Meta, Title } from '@solidjs/meta';
import { createAsync, useLocation } from '@solidjs/router';
import { Match, Switch } from 'solid-js';
import { getSeoSettings } from '~/cms/services/singletons/settings';
import { urlFor } from '~/cms/utils';
import type { ImageWithAlt } from '~/shared/types';

type Props = {
  /**
   * Page title.
   */
  title?: string;

  /**
   * Page description.
   */
  description?: string;

  /**
   * List of keywords related with the page,
   */
  keywords?: string[];

  /**
   * Share image.
   */
  image?: string;
};

function Metadata(props: Props) {
  const location = useLocation();
  const seo = createAsync(() => getSeoSettings(), { deferStream: true });

  return (
    <>
      <Switch>
        <Match when={props.title} keyed>
          {(title) => (
            <>
              <Title>
                {title} | {seo()?.title}
              </Title>
              <Meta name="twitter:title" content={`${title} | ${seo()?.title}`} />
              <Meta property="og:title" content={`${title} | ${seo()?.title}`} />
              <Meta property="og:image:alt" content={`${title} | ${seo()?.title}`} />
            </>
          )}
        </Match>
        <Match when={!props.title}>
          <Title>{seo()?.title}</Title>
          <Meta name="twitter:title" content={seo()?.title} />
          <Meta property="og:title" content={seo()?.title} />
          <Meta property="og:image:alt" content={seo()?.title} />
        </Match>
      </Switch>

      {/* FACEBOOK */}
      <Meta property="og:site_name" content={seo()?.title} />
      <Meta property="og:url" content={import.meta.env.VITE_PUBLIC_HOST + location?.pathname} />

      <Meta property="og:type" content="website" />

      <Switch>
        <Match when={!!props.image}>
          <Meta property="og:image" content={props.image} />
          <Meta name="twitter:image" content={props.image} />
        </Match>
        <Match when={!props.image && seo()?.thumbnail}>
          <Meta
            property="og:image"
            content={urlFor(seo()?.thumbnail as ImageWithAlt)
              .fit('crop')
              .size(1200, 630)
              .url()}
          />
          <Meta
            name="twitter:image"
            content={urlFor(seo()?.thumbnail as ImageWithAlt)
              .fit('crop')
              .size(1200, 630)
              .url()}
          />
        </Match>
      </Switch>

      {/* <!-- No need to change anything here --> */}
      <Meta property="og:type" content="website" />
      {/*<Meta property="og:image:type" content="image/jpeg" />*/}
      {/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="twitter:domain" content={import.meta.env.VITE_PUBLIC_HOST} />
      <Meta property="twitter:url" content={import.meta.env.VITE_PUBLIC_HOST + location?.pathname} />
      {/* TWITTER */}

      <Switch>
        <Match when={props.description} keyed>
          {(description) => (
            <>
              <Meta name="description" content={description} />
              <Meta name="twitter:description" content={description} />
              <Meta property="og:description" content={description} />
            </>
          )}
        </Match>
        <Match when={!props.description && seo()?.description}>
          <Meta name="description" content={seo()?.description} />
          <Meta name="twitter:description" content={seo()?.description} />
          <Meta property="og:description" content={seo()?.description} />
        </Match>
      </Switch>
    </>
  );
}

export { Metadata };
