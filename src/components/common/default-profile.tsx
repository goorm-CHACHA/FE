import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '~/utils/cn';
import BirdIcon from '../common/quick-network/welcome-icon/bird'
import CatIcon from '../common/quick-network/welcome-icon/cat';
import DogIcon from '../common/quick-network/welcome-icon/dog';
import JellyFishIcon from '../common/quick-network/welcome-icon/jelly-fish';
import KoalaIcon from '../common/quick-network/welcome-icon/koala';
import MonkeyIcon from '../common/quick-network/welcome-icon//monkey';
import OtterIcon from '../common/quick-network/welcome-icon/otter';
import QuokkaIcon from '../common/quick-network/welcome-icon/quokka';
import RabbitIcon from '../common/quick-network/welcome-icon/rabbit';
import SnailIcon from '../common/quick-network/welcome-icon/snail';
import SnowmanIcon from '../common/quick-network/welcome-icon/snowman';
import WhaleIcon from '../common/quick-network/welcome-icon/whale';
import { useEffect, useState } from 'react';

const icons = [
  BirdIcon,
  CatIcon,
  DogIcon,
  JellyFishIcon,
  KoalaIcon,
  MonkeyIcon,
  OtterIcon,
  QuokkaIcon,
  RabbitIcon,
  SnailIcon,
  SnowmanIcon,
  WhaleIcon,
];

const colors = [
  '#30B6FD', // Blue
  '#1EDC93', // Green
  '#FF9257', // Orange
  '#FF84EF', // Pink
  '#856BFF', // Purple
  '#FE7777', // Red
  '#FFFFFF', // White
  '#FFF280', // Yellow
];


const defaultProfileVariants = cva(
  'relative rounded-full overflow-hidden bg-gray-neutral-900',
  {
    variants: {
      size: {
        xs: 'w-6 h-6',
        default: 'w-16 h-16', // 매칭 카드, 온라인 명함 저장 될 카드.....
        notification: 'h-10 w-10',
        profile: 'w-16 h-16',
        profileChat: 'h-[72px] w-[72px]',
        chatImg: 'h-8 w-8',
        groupChat: 'h-[24px] w-[24px]',
        nameCard: 'h-[48px] w-[48px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const RandomIcon = () => {
  const [SelectedIcon, setSelectedIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
  const [color, setColor] = useState<string>('#000');

  useEffect(() => {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    setSelectedIcon(() => icon);
    setColor(color);
  }, []);

  if (!SelectedIcon) return null;

  return (
    <SelectedIcon
      className="w-full h-full fill-current"
      style={{ fill: color, color }}
    />
  );
};
interface DefaultProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof defaultProfileVariants> {
  imgSrc?: string;
}

const DefaultProfile = ({ size, className }: DefaultProfileProps) => {
  return (
    <div className={cn(defaultProfileVariants({ size }), className)}>
       <RandomIcon />
    </div>
  );
};

export default DefaultProfile;
