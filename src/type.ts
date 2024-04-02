import { HTMLProps, ReactNode } from 'react';
import { VideoJsPlayerOptions } from 'video.js';

export type VideoProps = {
  children?: ReactNode;
} & Partial<HTMLProps<HTMLVideoElement>>;

//视频组件类型
export type VideoType = (props: VideoProps) => JSX.Element;

//包装器参数类型
export type WrapperParameters = {
  children: ReactNode;
  videoJsOptions: VideoJsPlayerOptions;
  onReady: () => void;
  onDispose: () => void;
  classNames: string;
};
