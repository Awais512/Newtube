import { cva, type VariantProps } from "class-variance-authority";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "h-9 w-9",
      xs: "h-4 w-4",
      sm: "h-6 w-6",
      lg: "h-10 w-10",
      xl: "h-[160px] w-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface Props extends VariantProps<typeof avatarVariants> {
  imageUrl: string;
  name: string;
  className?: string;
  onclick?: () => void;
}

export const UserAvatar = ({
  imageUrl,
  name,
  className,
  onclick,
  size,
}: Props) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size, className }))}
      onClick={onclick}
    >
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  );
};
