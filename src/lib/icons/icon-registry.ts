export type IconName = 'refresh' | 'chevron-down';

export interface IconPath {
  d: string;
  colorType: 'primary' | 'accent';
  strokeWidth?: string;
  strokeLinecap?: 'round' | 'square' | 'butt';
  strokeLinejoin?: 'round' | 'miter' | 'bevel';
}

export interface IconData {
  viewBox: string;
  paths: IconPath[];
}

export const iconRegistry: Record<IconName, IconData> = {
  refresh: {
    viewBox: "0 0 68 68",
    paths: [
      {
        d: "M28.9016 22.1031C30.4476 15.2896 36.541 10.2031 43.8224 10.2031C52.2724 10.2031 59.1224 17.0532 59.1224 25.5031C59.1224 33.3302 53.245 39.7846 45.6628 40.6936M49.3016 51.0031L42.5016 57.8031L49.3016 64.6031M62.9016 44.2031V48.7365C62.9016 53.7438 58.8423 57.8031 53.8349 57.8031H47.0349M35.7016 45.9031C35.7016 54.3531 28.8515 61.2031 20.4016 61.2031C11.9516 61.2031 5.10156 54.3531 5.10156 45.9031C5.10156 37.4532 11.9516 30.6031 20.4016 30.6031C28.8515 30.6031 35.7016 37.4532 35.7016 45.9031Z",
        colorType: 'primary',
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      {
        d: "M7.08671 21.2555L14.1719 14.1703M14.1719 14.1703L21.257 7.08517M14.1719 14.1703L7.08671 7.08517M14.1719 14.1703L21.257 21.2555",
        colorType: 'accent',
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ]
  },
  'chevron-down': {
    viewBox: "0 0 22 22",
    paths: [
      {
        d: "M2.75 11C2.75 15.5564 6.44365 19.25 11 19.25C15.5564 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11Z",
        colorType: 'primary'
      },
      {
        d: "M7.16885 9.96875L10.8149 13.0071L14.4609 9.96875",
        colorType: 'accent',
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ]
  }
};
