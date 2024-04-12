import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Inácio Reina Maio',
  subtitle: '',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: true,
    src: 'assets/images/banners/danielle-claude-belanger.jpg',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    //LinkPreset.Projects,
    LinkPreset.About,
    //{
    //  name: 'GitHub',
    //  url: 'https://github.com/saicaca/fuwari',
    //  external: true,
    //},
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatars/oyasumi-punpun-png-8-cropped.png',
  name: 'Inácio Reina Maio',
  bio: 'A game developer with a passion for game design and programming.',
  links: [
    {
      name: 'Linkedin',
      icon: 'bi:linkedin',
      url: 'https://www.linkedin.com/in/inacioreinamaio/',
    },
    {
      name: 'Itch.io',
      icon: 'cib:itch-io',
      url: 'https://inacioreina.itch.io',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/inacioreina',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
