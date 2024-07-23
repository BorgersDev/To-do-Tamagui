import { H4, XStack, Checkbox, Spacer, H5, H6, Button, H2 } from 'tamagui';
import { Check, Minus } from '@tamagui/lucide-icons';

type checkProps = {
    taskName: string;
    onRemove: () => void;
}

export const Task = ({taskName ,onRemove}: checkProps) => {
  return (
    <XStack ai="center" bg="$blue2" borderRadius="$5" h="$5" mb="$1.5" >
      <Checkbox size="$7" m="$2">
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>
      <Spacer />
      <H6 color="white"  >{taskName}</H6>
      <Spacer f={1}  />
      <Button  bg="$red8" mr="$1" height="$5" onPress={onRemove}>
            <Minus />
      </Button>
    </XStack>
  );
};
