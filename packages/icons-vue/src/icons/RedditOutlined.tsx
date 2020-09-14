// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RedditOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedditOutlinedSvg}></AntdIcon>;
};

RedditOutlined.displayName = 'RedditOutlined';
RedditOutlined.inheritAttrs = false;
export default RedditOutlined;