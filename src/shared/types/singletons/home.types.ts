import type { AboutUs, ServiceCard, Settings, TestimonialCard } from '~/shared/types';
import type { Home as HomeSchema } from '~/shared/types/sanity.types';

type Home = Pick<Settings, 'title' | 'description'> & {
  aboutUs: AboutUs['aboutUs'];
  services?: NonNullable<HomeSchema['services']> & {
    data: ServiceCard[];
  };
  testimonials?: NonNullable<HomeSchema['testimonials']> & {
    data: TestimonialCard[];
  };
};

export type { Home };
