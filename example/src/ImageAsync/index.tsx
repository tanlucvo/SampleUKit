import {
  Platform,
  UIManager,
  requireNativeComponent,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'zxc' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ImageAsyncProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ImageAsync';

export const ImageAsync =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ImageAsyncProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
