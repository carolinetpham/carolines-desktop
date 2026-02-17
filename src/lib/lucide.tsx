import React from "react";
import * as Icons from "lucide-react";

export type LucideLikeProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
};

type LucideComponent = React.FC<LucideLikeProps>;

export function getLucideIcon(name: string): LucideComponent {
  const Icon = (Icons as unknown as Record<string, LucideComponent | undefined>)[
    name
  ];
  return (props) => {
    const { size, ...rest } = props;
    const sizeProps = size ? { width: size, height: size } : {};
    return Icon ? <Icon {...rest} {...sizeProps} /> : <span />;
  };
}
