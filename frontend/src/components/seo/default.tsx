import { Link, Meta, Title } from '@solidjs/meta';
import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getSeoSettings } from '~/cms/services/singletons/settings';
import { urlFor } from '~/cms/utils';
import { env } from '~/shared/utils';

function DefaultSeo() {
  const seoSettings = createAsync(() => getSeoSettings(), { deferStream: true });

  return (
    <>
      <Meta http-equiv="content-language" content="Portuguese" />
      <Meta name="language" content="Portuguese" />

      {/* Default social tags */}
      <Meta property="og:locale" content="Portuguese" />
      <Meta property="og:type" content="website" />

      {/* Favicon */}
      <Link rel="icon" href="/logo.svg" type="image/svg+xml" />

      {/* Robots */}
      <Meta name="robots" content="index, follow" />

      <Show when={seoSettings()} keyed={true}>
        {(seo) => (
          <>
            <Title>{seo.title}</Title>

            <Show when={seo.description} keyed={true}>
              {(description) => <Meta name="description" content={description} />}
            </Show>
            <Meta name="keywords" content={seo.keywords?.join(', ')} />

            {/* Social tags */}
            <Meta property="og:site_name" content={seo.title} />
            <Meta property="og:title" content={seo.title} />
            <Meta property="og:description" content={seo.description} />

            <Show when={seo.thumbnail} keyed={true}>
              {(thumbnail) => (
                <Meta
                  property="og:image"
                  content={urlFor(thumbnail).size(1200, 630).fit('crop').auto('format').url()}
                />
              )}
            </Show>
          </>
        )}
      </Show>

      <Show when={env.publicHost}>
        <Meta property="og:url" content={env.publicHost} />
      </Show>
    </>
  );
}

export { DefaultSeo };
