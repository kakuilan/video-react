import React, { HTMLProps, ReactNode } from 'react';
import type { VideoJsPlayerOptions } from '@types/video.js';

export type VideoProps = {
  children?: React.ReactNode;
} & Partial<HTMLProps<HTMLVideoElement>>;

export type VideoType = (props: VideoProps) => JSX.Element;

//包装器参数类型
export type WrapperParameters = {
  children: ReactNode;
  videoJsOptions: VideoJsPlayerOptions;
  onReady: () => void;
  onDispose: () => void;
  classNames: string;
};
