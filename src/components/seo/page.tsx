import { Meta, Title } from "@solidjs/meta";
import { createAsync, useLocation } from "@solidjs/router";
import { Match, Show, Suspense, Switch } from "solid-js";
import { getSeoSettings } from "~/cms/services/singletons/settings";
import { urlFor } from "~/cms/utils";
import { env } from "~/shared/utils";

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

function PageSeo(props: Props) {
  const location = useLocation();
  const seo = createAsync(() => getSeoSettings(), {
    deferStream: true,
    // initialValue: {
    //   title: 'MC Ocidente Charmoso',
    //   description: '',
    //   keywords: ['design de interiores', 'cozinhas por medida', 'móveis'],
    // },
  });

  return (
    <Suspense>
      {/* Default meta tags */}
      <Meta
        http-equiv="content-language"
        content="Portuguese"
      />
      <Meta
        name="language"
        content="Portuguese"
      />

      {/* Default social tags */}
      <Meta
        property="og:locale"
        content="Portuguese"
      />
      <Meta
        property="og:type"
        content="website"
      />
      <Meta
        property="og:update_time"
        content={new Date().toISOString()}
      />

      {/* Robots */}
      <Meta
        name="robots"
        content="index, follow"
      />

      <Show
        when={seo()}
        keyed
      >
        {(defaultSeo) => (
          <>
            {/* Title */}
            <Switch>
              <Match when={!!props.title?.length}>
                <Title>
                  {props.title} | {defaultSeo.title}
                </Title>
                <Meta
                  property="og:image:alt"
                  content={`${props.title} | ${defaultSeo.title}`}
                />
                <Meta
                  property="og:title"
                  content={`${props.title} | ${defaultSeo.title}`}
                />
              </Match>
              <Match when={!props.title}>
                <Title>{defaultSeo.title}</Title>
                <Meta
                  property="og:title"
                  content={defaultSeo.title}
                />
                <Meta
                  property="og:image:alt"
                  content={defaultSeo.title}
                />
              </Match>
            </Switch>

            {/* Description */}
            <Switch>
              <Match when={props.description}>
                <Meta
                  name="description"
                  content={props.description}
                />
                <Meta
                  property="og:description"
                  content={props.description}
                />
              </Match>
              <Match when={!props.description && defaultSeo.description}>
                <Meta
                  name="description"
                  content={defaultSeo.description}
                />
                <Meta
                  property="og:description"
                  content={defaultSeo.description}
                />
              </Match>
            </Switch>

            <Meta
              name="keywords"
              content={[defaultSeo.keywords, props.keywords].flat().join(", ")}
            />

            <Meta
              property="og:site_name"
              content={defaultSeo.title}
            />

            {/* Share thumbnail */}
            <Switch>
              <Match when={props.image}>
                <Meta
                  property="og:image"
                  content={props.image}
                />
                <Meta
                  property="twitter:image"
                  content={props.image}
                />
              </Match>
              <Match
                when={defaultSeo.thumbnail}
                keyed
              >
                {(defaultThumbnail) => (
                  <>
                    <Meta
                      property="og:image"
                      content={urlFor(defaultThumbnail).size(1200, 630).fit("crop").auto("format").url()}
                    />
                    <Meta
                      property="twitter:image"
                      content={urlFor(defaultThumbnail).size(1200, 630).fit("crop").auto("format").url()}
                    />
                  </>
                )}
              </Match>
            </Switch>
          </>
        )}
      </Show>

      {/* Image meta tags */}
      <Meta
        property="og:image:width"
        content="1200"
      />
      <Meta
        property="og:image:height"
        content="630"
      />
      <Meta
        name="twitter:card"
        content="summary_large_image"
      />

      <Show when={env.publicHost}>
        <Meta
          property="twitter:domain"
          content={import.meta.env.VITE_PUBLIC_HOST}
        />
        <Meta
          property="twitter:url"
          content={import.meta.env.VITE_PUBLIC_HOST + location?.pathname}
        />
        <Meta
          property="og:url"
          content={env.publicHost + location?.pathname}
        />
      </Show>
    </Suspense>
  );
}

export { PageSeo };
