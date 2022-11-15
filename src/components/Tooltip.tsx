import Tippy from '@tippyjs/react';

type TooltipProps = {
  content: string;
  children: React.ReactElement;
};

const Tooltip = ({ content, children }: TooltipProps) => (
  <Tippy placement='bottom' delay={200} content={<span className='text-light'>{content}</span>}>
    {children}
  </Tippy>
);

export default Tooltip;
