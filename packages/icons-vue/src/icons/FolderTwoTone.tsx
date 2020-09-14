// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderTwoToneSvg}></AntdIcon>;
};

FolderTwoTone.displayName = 'FolderTwoTone';
FolderTwoTone.inheritAttrs = false;
export default FolderTwoTone;