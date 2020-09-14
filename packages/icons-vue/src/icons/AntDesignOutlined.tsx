// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AntDesignOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AntDesignOutlinedSvg}></AntdIcon>;
};

AntDesignOutlined.displayName = 'AntDesignOutlined';
AntDesignOutlined.inheritAttrs = false;
export default AntDesignOutlined;